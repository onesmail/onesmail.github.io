---
outline: deep
---

# json编辑器

## vue-json-editor

- Github: [https://github.com/dirkliu/vue-json-editor](https://github.com/dirkliu/vue-json-editor)

### 使用

安装

```sh
npm install vue-json-editor --save
```

使用

```vue
<template>
  <div>
    <p>vue-json-editor</p>
    <vue-json-editor v-model="json" :show-btns="true" :expandedOnStart="true" @json-change="onJsonChange"></vue-json-editor>
  </div>
</template>

<script>
  import vueJsonEditor from 'vue-json-editor'

  export default {
    data () {
      return {
        json: {
          msg: 'demo of jsoneditor'
        }
      }
    },

    components: {
      vueJsonEditor
    },

    methods: {
      onJsonChange (value) {
        console.log('value:', value)
      }
    }
  }
</script>
```
