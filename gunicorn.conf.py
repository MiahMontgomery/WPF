# Gunicorn configuration file for Replit deployment

bind = "0.0.0.0:5000"
workers = 2
worker_class = "sync"
worker_connections = 1000
max_requests = 1000
max_requests_jitter = 100
timeout = 30
keepalive = 2
preload_app = True

# Logging (use stdout/stderr for Replit)
accesslog = "-"
errorlog = "-"
loglevel = "info"
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

# Process naming
proc_name = "williams-performance-friction"

# Server mechanics
daemon = False
tmp_upload_dir = None

# SSL (uncomment when you have SSL certificates)
# keyfile = "/path/to/ssl/private.key"
# certfile = "/path/to/ssl/certificate.crt"