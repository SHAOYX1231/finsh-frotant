declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}
//这里新增了一个文件 增加此文件是因为在原生的vite文件中 初始文件vite.config.ts会报错 在json以及相应的文件中使用此代码就不会报错