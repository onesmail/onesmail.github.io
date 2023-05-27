# 内网穿透

## frp

> frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。

github地址  https://github.com/fatedier/frp

- nginx配置
```ini
http
{
	#http 全局配置
    ...
    #server 全局配置
    server
    {
    	#server全局配置
        ...
        #location配置
        location [PATTERN]
        {
            ...
        }
    }
}
```

- frp客户端配置
```ini
http
{
	#http 全局配置
    ...
    #server 全局配置
    server
    {
    	#server全局配置
        ...
        #location配置
        location [PATTERN]
        {
            ...
        }
    }
}
```
