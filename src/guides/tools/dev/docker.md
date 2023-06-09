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
dnf -y install dnf-plugins-core
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

### 并安装 `docker-ce`

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

### 镜像加速

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
