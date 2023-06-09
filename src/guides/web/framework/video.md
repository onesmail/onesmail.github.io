---
outline: deep
---

# 视频播放器

## vue-core-video-player

> 一款基于 vue.js 的轻量级的视频播放器插件插件

- Github：[https://github.com/core-player/vue-core-video-player](https://github.com/core-player/vue-core-video-player)

- Docs：[https://core-player.github.io/vue-core-video-player/zh/](https://core-player.github.io/vue-core-video-player/zh/)

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

<iframe src="https://codesandbox.io/embed/laughing-alex-29wfcp?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="laughing-alex-29wfcp"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 弹幕视频播放器

### DPlayer <Badge type="tip" text="推荐" />:tada:

> 弹幕视频播放器，支持MSE、直播

- Github：[https://github.com/DIYgod/DPlayer](https://github.com/DIYgod/DPlayer)

- Docs： [https://dplayer.diygod.dev/zh/](https://dplayer.diygod.dev/zh/)

安装

```sh
npm install --save dplayer
```

使用

```js
import DPlayer from 'dplayer';

const dp = new DPlayer(options);
```

### vue-barrage-videoplayer

> vue-弹幕视频播放器，一个基于Vue的弹幕视频播放器组件

- Github：[https://github.com/yleencc/vue-barrage-videoplayer](https://github.com/yleencc/vue-barrage-videoplayer)

- Demo： [https://github.com/yleencc/vue-barrage-videoplayer/blob/master/src/views/preview-simple.vue](https://github.com/yleencc/vue-barrage-videoplayer/blob/master/src/views/preview-simple.vue)

引入方式

- 将src/components下的四个文件复制到你的项目里，确保这四个文件保持在同一目录
- 将src/assets文件夹复制到项目src/里面，确保/src/assets/images/loading.svg存在（该文件为缓冲时的加载图标）
- 在页面中导入barrage-videoplayer.vue
- 代码示例

```vue
<template>
    <barrageVideoplayer
        :src="videoSrc"
        width="100%"
        height="100%"
    ></barrageVideoplayer>
</template>
<script>
import barrageVideoplayer from "../components/barrage-videoplayer.vue";
export default {
  components: {barrageVideoplayer},
  data() {
    return {
      videoSrc: "这里是视频地址~",
    };
  },
}
```

### vue-wplayer<Badge type="tip" text="推荐" />:tada:

> vue-wplayer 弹幕视频播放器

- GitHub：[https://github.com/wangzmgit/vue-wplayer](https://github.com/wangzmgit/vue-wplayer)

- Docs：[https://wplayer.kuukaa.fun/guide/quick_start.html](https://wplayer.kuukaa.fun/guide/quick_start.html)

安装

```sh
npm install vue-wplayer
```

示例

```vue
<template>
  <div class="container">
    <div class="player-container">
      <w-player class="player" :options="options"></w-player>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WPlayer } from 'vue-wplayer';

const options = {
  resource: "视频链接",
}
</script>

<style>
.container {
  width: 720px;
}

.player-container {
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;

}

.player {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
}
</style>
```

::: details vue-wplayer早期版本
**vue-wplayer**

> vue3弹幕播放器

- Gitee：[https://gitee.com/wzmgit/vue-wplayer](https://gitee.com/wzmgit/vue-wplayer)

安装

```sh
npm install vue-wplayer
```

示例

```vue
<template>
  <div class="container">
    <div class="player-container">
      <w-player class="player" ></w-player>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WPlayer from 'vue-wplayer';
import 'vue-wplayer/dist/style.css';

export default defineComponent({
  components: {
    WPlayer
  }
})
</script>

<style>
.container {
  width: 720px;
}

.player-container {
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;

}

.player {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
}
</style>
```

:::

### DanPlayer

> DanPlayer 弹幕播放器

- Github：[https://github.com/gzlock/danplayer](https://github.com/gzlock/danplayer)

安装

```sh
npm install danplayer
```

使用

```js
import { Player } from 'danplayer'
...
const $container = document.querySelector('网页元素')
new Player($container, {})
```

### nplayer<Badge type="tip" text="推荐" />:tada:

> 支持移动端、支持 SSR、支持直播，可以接入任何流媒体。高性能的弹幕系统。高度可定制，所有图标、主题色等都可以替换，并且提供了内置组件方便二次开发。无第三方运行时依赖。

- Github：[https://github.com/oyuyue/nplayer](https://github.com/oyuyue/nplayer)

- Docs：[https://nplayer.js.org/](https://nplayer.js.org/)

安装

```sh
npm i -S nplayer
```

使用

```js
import Player from "nplayer";

/**
 * Danmaku DEMO:
 *    https://codesandbox.io/s/nplayer-demo-ujtms?file=/src/index.js
 * React DEMO:
 *    https://codesandbox.io/s/nplayer-react-demo-p558g?file=/src/App.js
 * Vue2 DEMO:
 *    https://codesandbox.io/s/nplayer-vue2-demo-9lps9?file=/src/main.js
 * Vue3 DEMO:
 *    https://codesandbox.io/s/nplayer-vue3-demo-mt8s4?file=/src/main.js
 */
const player = new Player({
  src: "https://v-cdn.zjol.com.cn/280443.mp4"
});

player.mount(document.body);
```

### ArtPlayer

> h5弹幕视频播放器

- Github：[https://github.com/zhw2590582/ArtPlayer](https://github.com/zhw2590582/ArtPlayer)

- Docs：[https://www.artplayer.org/document/plugin/danmuku.html](https://www.artplayer.org/document/plugin/danmuku.html)

安装

```sh
npm install artplayer
```

导入

```js
import Artplayer from 'artplayer';
```

使用

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: 'path/to/video.mp4',
});
```
