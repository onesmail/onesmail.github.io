---
outline: deep
---
# 视频播放器:video_camera:

## vue-core-video-player

> 一款基于 vue.js 的轻量级的视频播放器插件插件

Github：https://github.com/core-player/vue-core-video-player

Docs：https://core-player.github.io/vue-core-video-player/zh/

安装
```sh
npm install --save vue-core-video-player
```

注册组件
```js
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer)
```

使用
```vue
<template>
  <div class="player-container">
    <vue-core-video-player @play="your_method" src="./videos/your_video.mp4">
    </vue-core-video-player>
  </div>
<template>
```
Demo:tada:
<iframe src="https://codesandbox.io/embed/laughing-alex-29wfcp?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="laughing-alex-29wfcp"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>