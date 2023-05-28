---
outline:deep
---

# 弹幕

## vue-danmaku

>基于 Vue3 的弹幕交互组件

Github：https://github.com/hellodigua/vue-danmaku

- 安装
```sh
$ npm install vue3-danmaku --save
```
- 使用

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

- 安装
```sh
npm install vue-baberrage
```
- 安装到项目
```js
import Vue from 'vue'
import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage)
```
- 使用
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