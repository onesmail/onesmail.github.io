# 美化Windows命令行
## 1. 安装PowerShell
点击<a href="ms-windows-store://pdp/?ProductId=9MZ1SNWT0N5D">这里</a>，打开 `Windows应用商店` 安装 `PowerShell`

## 2. 安装Oh-My-Posh
点击<a href="ms-windows-store://pdp/?ProductId=XP8K0HKJFRXGCK">这里</a>，打开 `Windows应用商店` 安装 `Oh-My-Posh`

## 3.安装`MesloLGM NF`字体
 [下载](htts://onesmail.github.io/assset/files/Meslo.zip)安装`MesloLGM NF`字体，下载完成后解压，全选右键点击安装即可自动安装

 `github`地址：
```
https://github.com/ryanoasis/nerd-fonts/releases
```
## 4. 设置字体
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
默认会用记事本打开，第一次会提示显示找不到该文件，点击确定，输入
```ps
oh-my-posh init pwsh | Invoke-Expression
```

查看powershell配置文件路径
```sh
# 这个文件会在每次启动终端时调用
$PROFILE
```
保存到`powershell`配置文件路径
```sh
C:\Users\<用户>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```
![微信截图_20230430123902](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430123902.png)
:::

- 然后回到`Windows terminal`新建一个`powershell`，可以看到已生效的主题

![微信截图_20230430125258](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430125258.png)

## 5.修改主题
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