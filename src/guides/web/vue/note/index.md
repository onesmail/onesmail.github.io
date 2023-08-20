---
outline: deep
---

# vue 笔记

## 防抖节流

```typescript

import type { App, DirectiveBinding } from "vue";

let debounceTimer: NodeJS.Timeout | null, throttleTimer: NodeJS.Timeout | null

export default (app: App<Element>) => {
    // 防抖
    app.directive("debounce", {
        mounted(el: HTMLElement, binding: DirectiveBinding) {

            const eventType: string = Object.keys(binding.modifiers)[0] || 'click'

            el.addEventListener(eventType, () => {

                const dealy: number = binding.arg ? parseInt(binding.arg) : 300;
                const fn: unknown = binding.value;

                if (isNaN(dealy)) {
                    throw Error("v-debounce:arg必须为数字!");
                }

                if (typeof fn !== "function") {
                    throw Error("v-debounce绑定值必须为函数!");
                }

                if (debounceTimer) {
                    clearTimeout(debounceTimer);
                }

                debounceTimer = setTimeout(() => {
                    fn();
                }, dealy);

            });
        },
    });
    // 节流
    app.directive("throttle", {
        mounted(el: HTMLElement, binding: DirectiveBinding) {

            const eventType: string = Object.keys(binding.modifiers)[0] || 'click'

            el.addEventListener(eventType, () => {

                const dealy: number = binding.arg ? parseInt(binding.arg) : 300;
                const fn: unknown = binding.value;

                if (isNaN(dealy)) {
                    throw Error("v-throttle:arg必须为数字!");
                }

                if (typeof fn !== "function") {
                    throw Error("v-throttle绑定值必须为函数!");
                }

                if (throttleTimer) {
                    return;
                }

                throttleTimer = setTimeout(() => {
                    fn();
                    throttleTimer = null
                }, dealy);

            });
        },
    });
};

```

### 引入

在`main.ts`或`main.js`文件引入

```typescript
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入全局自定义指令
import directive from "./utils/directive";// [!code ++]


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(directive);// [!code ++]
app.mount('#app')
```

### 使用

```vue
//防抖
<button type="button" v-debounce:500="testFunc">防抖</button>
<button type="button" v-debounce:500="testFunc">防抖</button>

//节流
<button type="button" v-throttle:500="testFunc">节流</button>
<button type="button" v-throttle:500="testFunc">节流</button>
```
