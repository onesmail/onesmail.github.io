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

## alist

> 一个支持多存储的文件列表程序，使用 Gin 和 Solidjs。

- Github：[https://github.com/alist-org/alist](https://github.com/alist-org/alist)
- Docs：[https://alist.nn.ci/zh/guide/](https://alist.nn.ci/zh/guide/)

Docker Compose 安装

### 1. 创建`docker-compose.yml`文件

   ```sh
   touch docker-compose.yml
   ```

### 2. 编辑`docker-compose.yml`文件

   ```sh
   vim docker-compose.yml
   ```

### 3. 写入下面内容

   ```yml
   version: '3.3'
services:
    alist:
        restart: always
        volumes:
            - '/etc/alist:/opt/alist/data'
        ports:
            - '5244:5244'
        environment:
            - PUID=0
            - PGID=0
            - UMASK=022
        container_name: alist
        image: 'xhofe/alist:latest'
   ```

### 4. 执行

   ```sh
   docker-compose up -d
   ```

### 5. 查看管理员信息

   ```sh
   docker exec -it alist ./alist admin
   ```

## zfile

> 最方便快捷的在线目录展示程序，支持将本地文件、FTP、SFTP、S3、OneDrive 等存储在网站上展示并浏览.

- Github: [https://github.com/zfile-dev/zfile](https://github.com/zfile-dev/zfile)
- Docs: [https://docs.zfile.vip/install-os/](https://docs.zfile.vip/install-os/)

![68747470733a2f2f63646e2e6a756e362e6e65742f755069632f323032322f30392f30342f7a66696c652d6865616465722e706e67](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/68747470733a2f2f63646e2e6a756e362e6e65742f755069632f323032322f30392f30342f7a66696c652d6865616465722e706e67.png)
以下是一个上传文件并验证文件格式和大小的示例代码：

```csharp
[HttpPost]
public async Task<IActionResult> Upload(IFormFile file)
{
    if (file == null || file.Length == 0)
        return Content("file not selected");

    // 验证文件格式
    if (!IsValidFileType(file.FileName))
        return Content("invalid file type");

    // 验证文件大小（在此演示里，限制文件大小为2MB）
    if (file.Length > (2 * 1024 * 1024))
        return Content("file size is too large");

    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

    using (var stream = new FileStream(path, FileMode.Create))
    {
        await file.CopyToAsync(stream);
    }

    return RedirectToAction("Index");
}

private bool IsValidFileType(string fileName)
{
    // 以下只是一个演示，应该根据实际要求更改，建议在配置文件中定义支持的文件类型
    string[] allowedExtensions = { ".jpg", ".jpeg", ".png", ".gif" };

    var ext = Path.GetExtension(fileName).ToLowerInvariant();

    return allowedExtensions.Contains(ext);
}
```

在代码中，我添加了两个验证：文件格式和文件大小。在此示例中，文件格式验证只是检查文件扩展名是否在指定的一组扩展名内。建议根据实际业务需要更改此列表。

文件大小验证是检查文件大小是否超过2 MB的简单示例。同样建议将此值更改为适合您的业务需求的值。

总之，这些验证只是低级别的保护措施，并不能防止所有恶意文件上传攻击。因此，您还应该采取其他安全性和验证步骤。
