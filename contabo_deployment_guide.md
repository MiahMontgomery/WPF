# Williams Performance Friction - Contabo Deployment Guide

## Prerequisites
- Contabo VPS with Ubuntu 20.04+ or Debian 11+
- Root or sudo access
- Domain name pointing to your server IP

## Step 1: Server Setup

### Update system
```bash
sudo apt update && sudo apt upgrade -y
```

### Install required packages
```bash
sudo apt install python3 python3-pip python3-venv nginx postgresql postgresql-contrib supervisor git -y
```

### Create application user
```bash
sudo useradd --system --shell /bin/bash --home /opt/williams-pf --create-home williams-pf
sudo usermod -a -G www-data williams-pf
```

## Step 2: Application Deployment

### Clone/upload your application
```bash
sudo su - williams-pf
mkdir -p /opt/williams-pf/app
# Upload all your files to /opt/williams-pf/app/
```

### Create virtual environment and install dependencies
```bash
cd /opt/williams-pf/app
python3 -m venv venv
source venv/bin/activate
pip install Flask==2.3.3 Flask-SQLAlchemy==3.0.5 Werkzeug==2.3.7 gunicorn==21.2.0 psycopg2-binary==2.9.7 sendgrid==6.10.0 email-validator==2.0.0 sqlalchemy==2.0.21
```

## Step 3: Database Setup

### Configure PostgreSQL
```bash
sudo -u postgres psql
CREATE DATABASE williams_db;
CREATE USER williams_user WITH PASSWORD 'secure_password_here';
GRANT ALL PRIVILEGES ON DATABASE williams_db TO williams_user;
\q
```

## Step 4: Environment Configuration

### Create environment file
```bash
sudo nano /opt/williams-pf/app/.env
```

Add these variables:
```
DATABASE_URL=postgresql://williams_user:secure_password_here@localhost/williams_db
SESSION_SECRET=generate-a-very-long-random-string-here
SENDGRID_API_KEY=your-sendgrid-api-key-here
FLASK_ENV=production
```

## Step 5: Nginx Configuration

### Copy nginx configuration
```bash
sudo cp /opt/williams-pf/app/nginx.conf /etc/nginx/sites-available/williams-performance-friction
```

### Edit the configuration file
```bash
sudo nano /etc/nginx/sites-available/williams-performance-friction
```

Update these lines:
- Replace `your-domain.com` with your actual domain
- Replace `/path/to/your/app` with `/opt/williams-pf/app`

### Enable the site
```bash
sudo ln -s /etc/nginx/sites-available/williams-performance-friction /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default site
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

## Step 6: Systemd Service

### Copy and configure service file
```bash
sudo cp /opt/williams-pf/app/systemd.service /etc/systemd/system/williams-performance-friction.service
sudo nano /etc/systemd/system/williams-performance-friction.service
```

Update these paths in the service file:
- Replace `/path/to/your/app` with `/opt/williams-pf/app`
- Update environment variables as needed

### Start the service
```bash
sudo systemctl daemon-reload
sudo systemctl enable williams-performance-friction
sudo systemctl start williams-performance-friction
sudo systemctl status williams-performance-friction
```

## Step 7: Create Log Directories

```bash
sudo mkdir -p /var/log/gunicorn
sudo mkdir -p /var/run/gunicorn
sudo chown williams-pf:williams-pf /var/log/gunicorn
sudo chown williams-pf:williams-pf /var/run/gunicorn
```

## Step 8: SSL Certificate (Recommended)

### Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Get SSL certificate
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Update nginx configuration for SSL
Uncomment the SSL server block in your nginx configuration and update paths.

## Step 9: Firewall Setup

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw --force enable
```

## Step 10: Final Steps

### Set proper permissions
```bash
sudo chown -R williams-pf:www-data /opt/williams-pf/app
sudo chmod -R 755 /opt/williams-pf/app
```

### Initialize database
```bash
cd /opt/williams-pf/app
source venv/bin/activate
python3 -c "from app import db; db.create_all()"
```

### Restart services
```bash
sudo systemctl restart williams-performance-friction
sudo systemctl reload nginx
```

## Monitoring and Maintenance

### Check logs
```bash
# Application logs
sudo journalctl -u williams-performance-friction -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Gunicorn logs
sudo tail -f /var/log/gunicorn/error.log
```

### Update application
```bash
sudo systemctl stop williams-performance-friction
cd /opt/williams-pf/app
# Upload new files
sudo systemctl start williams-performance-friction
```

## Backup Strategy

### Database backup
```bash
sudo -u postgres pg_dump williams_db > backup_$(date +%Y%m%d_%H%M%S).sql
```

### Application backup
```bash
tar -czf williams_app_backup_$(date +%Y%m%d_%H%M%S).tar.gz /opt/williams-pf/app
```

## Troubleshooting

1. **Service won't start**: Check logs with `sudo journalctl -u williams-performance-friction`
2. **Database connection issues**: Verify DATABASE_URL and PostgreSQL is running
3. **Nginx errors**: Check `/var/log/nginx/error.log`
4. **Permission errors**: Ensure proper ownership with `chown -R williams-pf:www-data`

Your Williams Performance Friction website should now be live at your domain!