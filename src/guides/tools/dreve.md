---
outline: deep
---

# 私有网盘

## Cloudreve
> 支持多家云存储驱动的公有云文件系统.

**github**: [https://github.com/cloudreve/Cloudreve](https://github.com/cloudreve/Cloudreve)

### Docker 部署
- 创建目录结构
1. 动创建 `conf.ini` 空文件或者符合 `Cloudreve` 配置文件规范的 `conf.ini`, 并将 `<path_to_your_config>` 替换为该路径
2. 手动创建 `cloudreve.db` 空文件, 并将 `<path_to_your_db>` 替换为该路径
3. 手动创建 `uploads` 文件夹, 并将 `<path_to_your_uploads>` 替换为该路径
4. 手动创建 `avatar` 文件夹，并将 `<path_to_your_avatar>` 替换为该路径

**或者，直接使用以下命令创建：**
```sh
mkdir -vp cloudreve/{uploads,avatar} \
&& touch cloudreve/conf.ini \
&& touch cloudreve/cloudreve.db
```

- 运行
```sh
docker run -d \
-p 5212:5212 \
--mount type=bind,source=<path_to_your_config>,target=/cloudreve/conf.ini \
--mount type=bind,source=<path_to_your_db>,target=/cloudreve/cloudreve.db \
-v <path_to_your_uploads>:/cloudreve/uploads \
-v <path_to_your_avatar>:/cloudreve/avatar \
cloudreve/cloudreve:latest
```

### Docker Compose 部署
- 创建目录结构
```sh
mkdir -vp cloudreve/{uploads,avatar} \
&& touch cloudreve/conf.ini \
&& touch cloudreve/cloudreve.db \
&& mkdir -p aria2/config \
&& mkdir -p data/aria2 \
&& chmod -R 777 data/aria2
```
- 然后将以下文件保存为 `docker-compose.yml`，放置于当前目录，与 `cloudreve` 同一层级，同时，修改文件中的 `RPC_SECRET`
```yml
version: "3.8"
services:
  cloudreve:
    container_name: cloudreve
    image: cloudreve/cloudreve:latest
    restart: unless-stopped
    ports:
      - "5212:5212"
    volumes:
      - temp_data:/data
      - ./cloudreve/uploads:/cloudreve/uploads
      - ./cloudreve/conf.ini:/cloudreve/conf.ini
      - ./cloudreve/cloudreve.db:/cloudreve/cloudreve.db
      - ./cloudreve/avatar:/cloudreve/avatar
    depends_on:
      - aria2
  aria2:
    container_name: aria2
    image: p3terx/aria2-pro
    restart: unless-stopped
    environment:
      - RPC_SECRET=your_aria_rpc_token
      - RPC_PORT=6800
    volumes:
      - ./aria2/config:/config
      - temp_data:/data
volumes:
  temp_data:
    driver: local
    driver_opts:
      type: none
      device: $PWD/data
      o: bind
```
- 运行镜像
```sh
# 后台运行模式，可以从 docker/docker-compose 的日志中获取默认管理员账户用户名和密码
docker-compose up -d

# 或者，直接运行，log 将会直接输出在当前控制台中，请注意退出之后保持当前容器运行
docker-compose up
```

## filebrowser

> 提供指定目录下的文件管理界面，可用于搭建私人网盘，在线管理各种文件资源，内置登录系统，可在线删除、编辑、创建文件，允许分配多个用户权限，在 Web 浏览器上执行自定义命令行

**github**：[https://github.com/filebrowser/filebrowser](https://github.com/filebrowser/filebrowser)

Docker 部署
- 创建目录结构
::: tip
 目录可以自定义
:::

```sh
mkdir -vp /home/filebrowser/root \
&& touch /home/filebrowser/filebrowser.db \
&& touch /home/filebrowser/settings.json
```

```sh
docker run \
    -v /home/filebrowser/root:/srv \
    -v /home/filebrowser/filebrowser.db:/database/filebrowser.db \
    -v /home/filebrowser/settings.json:/config/settings.json \
    -e PUID=$(id -u) \
    -e PGID=$(id -g) \
    -p 8080:80 \
    filebrowser/filebrowser:s6
```

## NextCloud

### TEST