---
outline: deep
---

# Github工具

## FastGithub

> github加速神器，解决github打不开、用户头像无法加载、releases无法上传下载、git-clone、git-pull、git-push失败等问题

下载地址：[https://github.com/dotnetcore/FastGithub/releases](https://github.com/dotnetcore/FastGithub/releases)

### windows-x64服务

- 以windows服务安装并启动

```sh
fastgithub.exe start
```

- 以windows服务卸载并删除

```sh
fastgithub.exe stop
```

### linux-x64服务

- 以systemd服务安装并启动

```sh
sudo ./fastgithub star
```

- 以systemd服务卸载并删除

```sh
sudo ./fastgithub stop
```

> 设置系统自动代理为`http://127.0.0.1:38457`，或手动代理`http/https为127.0.0.1:38457`
