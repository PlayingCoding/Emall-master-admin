declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 声明全局的 window ，不然使用 window.XX 时会报错
declare var window: Window & typeof globalThis
declare var document: Document

declare module 'element-ui/lib/transitions/collapse-transition'
declare module 'element-ui'

declare module '*.less' {
  const less: any
  export default less
}
