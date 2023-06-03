---
outline: deep
---
# 常用javascript代码段

## 浏览器

### 打开全屏

```js
function fullScreen() {
    const el = document.documentElement
    const rfs = 
    el.requestFullScreen || 
    el.webkitRequestFullScreen || 
    el.mozRequestFullScreen || 
    el.msRequestFullscreen
    if(typeof rfs != "undefined" && rfs) {
        rfs.call(el)
    }
}
fullScreen()
```

### 关闭全屏

```js
function exitScreen() {
    if (document.exitFullscreen) { 
        document.exitFullscreen()
    } 
    else if (document.mozCancelFullScreen) { 
        document.mozCancelFullScreen()
    } 
    else if (document.webkitCancelFullScreen) { 
        document.webkitCancelFullScreen()
    } 
    else if (document.msExitFullscreen) { 
        document.msExitFullscreen()
    } 
    if(typeof cfs != "undefined" && cfs) {
        cfs.call(el)
    }
}
exitScreen()
```

### 屏幕录制

```js
const streamPromise = navigator.mediaDevices.getDisplayMedia()
streamPromise.then(stream => {
    var recordedChunks = [];// 录制的视频数据

    var options = { mimeType: "video/webm; codecs=vp9" };// 设置编码格式
    var mediaRecorder = new MediaRecorder(stream, options);// 初始化MediaRecorder实例

    mediaRecorder.ondataavailable = handleDataAvailable;// 设置数据可用（录屏结束）时的回调
    mediaRecorder.start();

    // 视频碎片合并
    function handleDataAvailable(event) {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);// 添加数据，event.data是一个BLOB对象
            download();// 封装成BLOB对象并下载
        }
    }

    // 文件下载
    function download() {
        var blob = new Blob(recordedChunks, {
            type: "video/webm"
        });
        // 此处可将视频上传到后端
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
    }
})
```

### 判断横竖屏

```js
function hengshuping(){
    if(window.orientation==180||window.orientation==0){
        alert("竖屏状态！")
    }
    if(window.orientation==90||window.orientation==-90){
        alert("横屏状态！")
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
```

### 横竖屏样式变更

```css
<style>
@media all and (orientation : landscape) {
    body {
        background-color: #ff0000;
    }
}

@media all and (orientation : portrait) {
    body {
        background-color: #00ff00;
    }
}
</style>
```
