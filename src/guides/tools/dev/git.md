---
outline: deep
---
# 配置git

## git config查看配置

```sh
git config --list
```

## Github 设置登录账号密码

- 配置用户名和邮箱

```bash
git config --global user.name "oneSmail"
git config --global user.email "332059976@qq.com"
```

- 生成 SSH key

```bash
ssh-keygen -t rsa -C "332059976@qq.com"
```

## 配置信任的服务器HTTPS验证，错误信息

![微信截图_20230429222415](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230429222415.png)

::: danger
git SSL certificate problem: unable to get local issuer certifica
:::

::: tip
这是由于当你通过HTTPS访问Git远程仓库的时候，如果服务器上的SSL证书未经过第三方机构认证，git就会报错。原因是因为未知的没有签署过的证书意味着可能存在很大的风险。解决办法就是通过下面的命令将git中的sslverify关掉
:::

```bash
git config --global http.sslVerify false
```

- 上面这行命令的影响范围是系统当前用户，如果要设置为全局所有用户，可以改成这样

```sh
git config --system http.sslverify false
```

- 如果只是想针对当前仓库进行设置，可以在需要修改的仓库目录下执行

```sh
git config http.sslverify false
```

## git快捷键

![git速查表](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/git%E9%80%9F%E6%9F%A5%E8%A1%A8.jpg)