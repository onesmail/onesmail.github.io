# 更换NVM源
> github地址 [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
- 在`nvm`安装目录下，找到配置文件`settings.txt`

```sh
# nvm安装目录
C:\Users\<用户名>\AppData\Roaming\nvm
```

- 打开`settings.txt`文件，在末尾换行写入

```sh
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```