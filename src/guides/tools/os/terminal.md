---
outline: deep
---

# 终端设置

## oh my post

> Windows Terminal美化

- Github：[https://github.com/jandedobbeleer/oh-my-posh](https://github.com/jandedobbeleer/oh-my-posh)
- Docs：[https://ohmyposh.dev/docs](https://ohmyposh.dev/docs)

### 1. 安装PowerShell

打开<a href="ms-windows-store://pdp/?ProductId=9MZ1SNWT0N5D">`Windows应用商店`</a>安装 `PowerShell`

### 2. 安装Oh-My-Posh

打开<a href="ms-windows-store://pdp/?ProductId=XP8K0HKJFRXGCK">`Windows应用商店` </a>安装 `Oh-My-Posh`

### 3.安装`MesloLGM NF`字体

 [下载](htts://onesmail.github.io/assset/files/Meslo.zip)安装`MesloLGM NF`字体，下载完成后解压，全选右键点击安装即可自动安装

Github地址：[https://github.com/ryanoasis/nerd-fonts/releases](https://github.com/ryanoasis/nerd-fonts/releases)

### 4. 设置字体

- 打开`Windows Terminal`
- 打开`设置`
- 选中`PowerShell`
- 打开`外观`选项
- 选择字体`MesloLGM NF`
- 保存设置

![微信截图_20230430123753](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430123753.png)

- 在`Windows Terminal`中的`powershell`中输入

```sh
notepad $profile
```

::: tip

- 默认会用记事本打开，第一次会提示显示找不到该文件，点击确定，输入

```sh
oh-my-posh init pwsh | Invoke-Expression
```

- 查看`powershell`配置文件路径

```sh
#这个文件会在每次启动终端时调用
$PROFILE
```

- 保存`powershell`配置文件到如下路径

```sh
C:\Users\<用户>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

![微信截图_20230430123902](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430123902.png)

:::

- 然后回到`Windows terminal`新建一个`powershell`，可以看到已生效的主题

![微信截图_20230430125258](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430125258.png)

### 5.修改主题

- 使用以下命令，下载并预览所有主题

```sh
Get-PoshThemes
```

![微信截图_20230430125641](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430125641.png)

- 打开主题配置文件

```sh
notepad $profile
```

- 修改如下内容，替换`powerline.omp.json`，更换主题名称

```sh
oh-my-posh init pwsh --config $env:POSH_THEMES_PATH\powerline.omp.json | Invoke-Expression
```

- 使用以下命令使主题生效

```sh
.$PROFILE
```

### 去掉版权信息

在命令行的末尾添加一个空格和`-Nologo`参数。

![20230701180058](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230701180058.png)

## x-cmd

> Linux 集成式终端命令行工具X 命令的起点

- Github：[https://github.com/x-cmd/x-cmd](https://github.com/x-cmd/x-cmd)
- Home：[https://cn.x-cmd.com/](https://cn.x-cmd.com/)
- Docs: [https://cn.x-cmd.com/basic/theme](https://cn.x-cmd.com/basic/theme)

### 安装

::: code-group

```sh [curl]
eval "$(curl https://get.x-cmd.com)"
```

```sh [wget]
eval "$(wget -O- https://get.x-cmd.com)"
```

:::

### 使用

- 更改命令行主题

```sh
x theme
```

![微信截图_20230606205003](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230606205003.png)

## Hyper

> 基于网络技术的终端

- Github: [https://github.com/vercel/hyper](https://github.com/vercel/hyper)
- Docs: [https://hyper.is/](https://hyper.is/)

![微信截图_20230606205344](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230606205344.png)

## tabby

> 是一个高度可配置的终端模拟器、SSH 和串行客户端，适用于 Windows、macOS 和 Linux。

- Github: [https://github.com/Eugeny/tabby](https://github.com/Eugeny/tabby)
- Home: [https://tabby.sh/](https://tabby.sh/)

![20230618105431](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230618105431.png)
