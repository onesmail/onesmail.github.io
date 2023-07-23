---
outline: deep
---

# 动画效果

## fireworks-js

> fireworks-js 是一个基于 Canvas 的动画库，用于在网页上制作烟花特效。

- Github: [https://github.com/crashmax-dev/fireworks-js](https://github.com/crashmax-dev/fireworks-js)
- Demo: [https://fireworks.js.org/](https://fireworks.js.org/)

![640 (5)](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/640%20(5).png)

## canvas-confetti

> canvas-confetti 是一个基于 Canvas 的库，用于在 Web 页面中实现炫酷的彩色纸屑动画效果。

- Github: [https://github.com/catdad/canvas-confetti](https://github.com/catdad/canvas-confetti)
- Demo: [https://www.kirilv.com/canvas-confetti/](https://www.kirilv.com/canvas-confetti/)

![640 (3)](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/640%20(3).png)

## tsparticles

> 轻松创建高度可定制的 JavaScript 粒子效果、五彩纸屑爆炸和烟花动画，并将它们用作您网站的动画背景。可用于 React.js、Vue.js（2.x 和 3.x）、Angular、Svelte、jQuery、Preact、Inferno、Solid、Riot 和 Web 组件的即用型组件。

- Github: [https://github.com/matteobruni/tsparticles](https://github.com/matteobruni/tsparticles)
- Demo: [https://particles.js.org/samples/index.html#polygons](https://particles.js.org/samples/index.html#polygons)

![0b2e31ff-aef0-45de-99ab-938bae64a744](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/0b2e31ff-aef0-45de-99ab-938bae64a744.jpg)

## particles.js

> 一个轻量级，无依赖性和响应式的JavaScript插件，用于粒子背景。

- Github: [https://github.com/marcbruederlin/particles.js](https://github.com/marcbruederlin/particles.js)
- Demo: [https://marcbruederlin.github.io/particles.js/](https://marcbruederlin.github.io/particles.js/)

![微信截图_20230609192851](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230609192851.png)

## phenomenon

> 一个快速的2kB低级WebGL API。

- Github: [https://github.com/vaneenige/phenomenon](https://github.com/vaneenige/phenomenon)
- Demo: [https://codepen.io/cvaneenige/full/odpVPW](https://codepen.io/cvaneenige/full/odpVPW)

![微信截图_20230609193118](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230609193118.png)

## Proton

> Javascript粒子动画库

- Github: [https://github.com/drawcall/Proton](https://github.com/drawcall/Proton)
- Demo: [https://drawcall.github.io/Proton/](https://drawcall.github.io/Proton/)

![20230609193246](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230609193246.png)

## party-js

> 一个 JavaScript 库，可通过视觉效果提升用户的网站体验！

- Github: [https://github.com/yiliansource/party-js](https://github.com/yiliansource/party-js)
- Docs: [https://party.js.org/](https://party.js.org/)

![20230609212733](https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230609212733.png)

## Lottie

> Lottie是Airbnb推出的一个免费开源动画库，适用于Web/Android/iOS/Windows。它可以把bodymovin（AE插件）导出的json文件解析成动画，并且在各平台上进行呈现。

### lottie-web

> 在 Web、Android 和 iOS 以及 React Native 上原生渲染 After Effects 动画。

- Github: [https://github.com/airbnb/lottie-web](https://github.com/airbnb/lottie-web)

### lottiefiles

> LottieFiles 提供了很多设计师上传的 Lottie 动画，并提供预览的效果，并且可以直接下载成 JSON ，或者生成二维码，可供 Lottie App 扫描看效果。

- lottiefiles: [https://lottiefiles.com/](https://lottiefiles.com/)

### vue3-lottie

> 一个简单的 Vue 3 组件，用于在 Vue 3 中使用 Lottie 动画

- Github: [https://github.com/megasanjay/vue3-lottie](https://github.com/megasanjay/vue3-lottie)

安装

```bash
npm install vue3-lottie@latest --save
```

全局注册组件

```javascript
// main.js
import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'

createApp(App).use(Vue3Lottie).mount('#app')
```

本地导入组件

```javascript
import { Vue3Lottie } from 'vue3-lottie'

export default {
  components: {
    Vue3Lottie,
  },
}

```

在模板中使用该组件

```javascript
<template>
  <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

import AstronautJSON from './astronaut.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    }
  },
}
</script>

```

:::tip

- 如果遇到 TS 错误，请尝试 use(Vue3Lottie, { name: "Vue3Lottie" })
- 要为 Volar 类型检查定义全局组件，您需要添加

```javascript
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LottieAnimation: typeof import('vue3-lottie')['Vue3Lottie']
  }
}
export {}
```

- 如果需要，重命名要使用的组件

``` javascript
app.use(Vue3Lottie, { name: 'LottieAnimation' }) // use in template <LottieAnimation />

```

:::

### lottie-vuejs

> lottie-vuejs 是一个简单的 VueJS 包装器，用于 lottie-web。它将关键的 lottie-web 功能包含在一个 vue 组件插件中。利用 lottie-vuejs 快速、几乎毫不费力地将 lottie 功能引入您的 VueJS 项目。

- Github: [https://github.com/SuperbuffNL/lottie-vuejs](https://github.com/SuperbuffNL/lottie-vuejs)

安装

```bash
npm install --save lottie-vuejs
```

全局注册

```javascript
import Vue from 'vue'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

Vue.use(LottieAnimation); // add lottie-animation to your global scope

new Vue({
  render: h => h(App)
}).$mount('#app')

```

组件内引用

```javascript
<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  components: {
      LottieAnimation
  },
  data: () => ({
    ...
  })
};
</script>
```

基本使用

```javascript
<lottie-animation
    path="path/to/your/lottie-animation.json"
/>
```

高级用法

```javascript
<lottie-animation
    path="path/to/your/lottie-animation.json"
    :loop="false"
    :autoPlay="true"
    :loopDelayMin="2.5"
    :loopDelayMax="5"
    :speed="1"
    :width="256"
    :height="256"
    @AnimControl="setAnimController"
/>
```
