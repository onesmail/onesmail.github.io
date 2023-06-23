---
outline: deep
---
# Docker

## Docker安装

### 卸载旧版

```sh
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

### 安装依赖

::: code-group

```sh [centos]
sudo yum install -y yum-utils
```

```sh [fedora]
sudo dnf -y install dnf-plugins-core
```

:::

### 添加源

```sh
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

```

```sh
$ sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo

# 官方源
# $ sudo yum-config-manager \
#     --add-repo \
#     https://download.docker.com/linux/centos/docker-ce.repo
```

### 更新 `yum` 软件源缓存

```sh
 dnf update -y
```

### 安装 `docker-ce`

```sh
 sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

### 启动Docker

- 开机启动

```sh
 sudo systemctl enable docker
```

- 启动服务

```sh
 sudo systemctl start docker
```

### 脚本安装

> 如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker 国内镜像加速。

::: tip 脚本自动安装

- 下载shell脚本

```sh
curl -fsSL get.docker.com -o get-docker.sh
```

- 执行脚本

```sh
    sudo sh get-docker.sh --mirror Aliyun
```

:::

### 镜像加速

- 查看是否在 docker.service 文件中配置过镜像地址

```sh
systemctl cat docker | grep '\-\-registry\-mirror'
```

如果该命令有输出，执行 `$ systemctl cat docker` 查看 `ExecStart=` 出现的位置，修改对应的文件内容去掉 `--registry-mirror` 参数及其值，并按接下来的步骤进行配置。

- **如果以上命令没有任何输出**，在 `/etc/docker/daemon.json` 中写入如下内容

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}
```

:::tip
阿里云镜像加速地址 [https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
:::

:::danger
注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。
:::

- 重新启动服务

```sh
sudo systemctl daemon-reload
```

```sh
sudo systemctl restart docker
```

:::tip
由于镜像服务可能出现宕机，建议同时配置多个镜像。
:::

## Docker Compose安装

### 下载Docker Compose

- Github：[https://github.com/docker/compose](https://github.com/docker/compose)

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
```

:::tip
要安装其他版本的Compose，请替换1.29.1 为要使用的Compose版本。
:::

### 设置可执行权限

```sh
sudo chmod +x /usr/local/bin/docker-compose
```

### 测试是否安装成功

```sh
docker-compose --version
```

### 卸载✂️

```sh
sudo rm /usr/local/bin/docker-compose
```

## Docker 可视化

### Portainer 👍

- Home: [https://www.portainer.io/](https://www.portainer.io/)

安装

```sh
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

![20230623191449](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230623191449.png)

### DockerUI

> DockerUI是一个易用且轻量化的 Docker 管理工具，透过 Web 界面的操作，更方便对于 Docker 指令不熟悉的用户更容易操作 Docker 。

安装

```sh
docker run -d --name docker.ui --restart always -v /var/run/docker.sock:/var/run/docker.sock -p 8010:8999 joinsunsoft/docker.ui
```

![20230623192204](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230623192204.png)
