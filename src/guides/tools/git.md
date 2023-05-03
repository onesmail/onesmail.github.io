# git config查看配置
```sh
git config --list
```

# Github 设置登录账号密码

- 配置用户名和邮箱
```bash
git config --global user.name "oneSmail"
git config --global user.email "332059976@qq.com"
```
- 设置 SSH key

```bash
ssh-keygen -t rsa -C "332059976@qq.com"
```
# 配置信任的服务器HTTPS验证，错误信息
::: 错误提示
git SSL certificate problem: unable to get local issuer certifica
:::
![微信截图_20230429222415](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230429222415.png)
```bash
git config --global http.sslVerify false
```