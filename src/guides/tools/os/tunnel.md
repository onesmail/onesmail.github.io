# 内网穿透

## frp

> frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。

Github：[https://github.com/fatedier/frp](https://github.com/fatedier/frp)

- nginx配置

```bash
#frp http
server {
      listen 80;
      server_name ~(?<!www)\.iopendev\.top$;

      location / {
          # 这里的端口需要跟frps的vhost_http_port的设置保持一致
          proxy_pass http://127.0.0.1:8080;
          proxy_set_header Host $host;
          proxy_set_header Remote_Addr $remote_addr;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $remote_addr;
      }
}


#frp https
server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name ~(?<!www)\.iopendev\.top$;

        ssl_certificate     cert/iopendev.top.crt;
        ssl_certificate_key cert/iopendev.top.pem;

        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        location / {
            # 这里的端口需要跟frps的vhost_http_port的设置保持一致
            proxy_pass http://127.0.0.1:8080;
            proxy_ssl_session_reuse off;
            proxy_ssl_server_name on;
            proxy_set_header    Host    $host;
            proxy_set_header    Remote_Addr $remote_addr;
            proxy_set_header    X-Real-IP $remote_addr;
            proxy_set_header    X-Forwarded-For $remote_addr;
        }
    }
```

- frp客户端配置

```ini
[common]
tcp_mux = true
token = hdf8ga89asd6f7sd79asd776534aqb
server_addr = 43.142.12.221
server_port = 5000
#log_file = ./frpc.log

[web]
type = http
local_ip = 192.168.1.156
local_port = 9000
subdomain = open
use_encryption = true
use_compression = true
```
