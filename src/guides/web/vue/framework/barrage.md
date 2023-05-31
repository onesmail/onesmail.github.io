---
outline: deep
---

# 弹幕

## vue-danmaku

>基于 Vue3 的弹幕交互组件

Github：https://github.com/hellodigua/vue-danmaku

安装
```sh
$ npm install vue3-danmaku --save
```

使用
```vue
<template>
  <vue-danmaku v-model:danmus="danmus" style="height:100px; width:300px;"></vue-danmaku>
</template>

<script>
import vueDanmaku from 'vue3-danmaku'

export default {
  setup(props) {
    const danmus = ref(['danmu1', 'danmu2', 'danmu3', '...'])

    return { danmus }
  },
}
</script>
```

## vue-barrage
>一款基于vue的弹幕组件

Gitee：[https://gitee.com/null_639_5368/vue-barrage#vue-barrage](https://gitee.com/null_639_5368/vue-barrage#vue-barrage)

## vue-baberrage
>基于Vue.js弹幕插件

Github：https://github.com/superhos/vue-baberrage

安装
```sh
npm install vue-baberrage
```

注册组件
```js
import Vue from 'vue'
import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage)
```

使用
```vue
<template>
<div id="app">
<vue-baberrage
      :isShow= "barrageIsShow"
      :barrageList = "barrageList"
      :loop = "barrageLoop"
      >
    </vue-baberrage>
</div>
<template>
<script>
import { MESSAGE_TYPE } from 'vue-baberrage'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId : 0,
      barrageLoop: false,
      barrageList: []
    }
  },
  methods:{
    addToList (){
      this.barrageList.push({
        id: ++this.currentId,
        avatar: "./static/avatar.jpg",
        msg: this.msg,
        time: 5,
        type: MESSAGE_TYPE.NORMAL,
      });
  ...
</script>
```

## Danmaku

> Danmaku 是一个高性能的弹幕引擎库，可以绑定 HTML5 视频与音频元素，在指定的容器上显示弹幕；还支持无时间轴的实时模式，可以用作直播。

Github：[https://github.com/weizhenye/Danmaku](https://github.com/weizhenye/Danmaku)

安装
```sh
npm install danmaku
```

导入
```js
// Full version
import Danmaku from 'danmaku';
// DOM engine only
import Danmaku from 'danmaku/dist/esm/danmaku.dom.js';
// Canvas engine only
import Danmaku from 'danmaku/dist/esm/danmaku.canvas.js';
```

- 视频模式
```vue
<div id="my-video-container" style="width:640px;height:360px;position:relative;">
  <video id="my-video" src="./example.mp4" style="position:absolute;"></video>
</div>

<div id="my-audio-container" style="width:640px;height:360px;position:relative;"></div>
<audio id="my-audio" src="./example.mp3"></audio>

<script src="path/to/danmaku.min.js"></script>
<script>
  var danmaku1 = new Danmaku({
    container: document.getElementById('my-video-container'),
    media: document.getElementById('my-video'),
    comments: []
  });
  var danmaku2 = new Danmaku({
    container: document.getElementById('my-audio-container'),
    media: document.getElementById('my-audio'),
    comments: []
  });
</script>
```