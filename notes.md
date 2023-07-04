# 尚矽谷Vue項目實戰矽谷甄選，vue3項目+TypeScript前端項目一套通關

<span style='color:red'>PS：截圖的筆記有缺失，有些配置有缺少</span>


教學影片
PS：有時候會被消音
https://www.bilibili.com/video/BV1Xh411V7b5/?vd_source=3eb47a679071fadf7d5c4b24d211f583

[npmjs 組件](https://www.npmjs.com/)


![](https://hackmd.io/_uploads/Sy--i65Ph.png)


## 組件通信
組件通信範例庫：
```
https://gitee.com/jch1011/vue3_communication.git
```
![](https://hackmd.io/_uploads/B1_93T5D2.png)

### Props defineProps 子接值
組件通信範例（01_props）
![](https://hackmd.io/_uploads/HkdwLA5wh.png)

![](https://hackmd.io/_uploads/SyPiBRcD3.png)

### 父傳子
組件通信範例（02_custom-event）
![](https://hackmd.io/_uploads/rylq805v3.png)
![](https://hackmd.io/_uploads/HkLww1sPh.png)

### ＄bus 全局事件總線
組件通信範例（03_event-bus）
[尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通-vue2-＄bus 全局事件總線](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#%EF%BC%84bus-%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E7%B8%BD%E7%B7%9A)

![](https://hackmd.io/_uploads/BJ2G_ksD3.png)


### v-midel 雙向綁定

v-midel：雙向綁定
defineProps：接值和方法
defineEmits：傳值和方法
[_props 配置-父傳子](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#_props-%E9%85%8D%E7%BD%AE-%E7%88%B6%E5%82%B3%E5%AD%90)
[$emit發射事件-子傳父](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#emit%E7%99%BC%E5%B0%84%E4%BA%8B%E4%BB%B6-%E5%AD%90%E5%82%B3%E7%88%B6)
![](https://hackmd.io/_uploads/BJM9l7nP3.png)

### useAttrs 組件2次封裝

PS：Attrs = attribute 屬性


1. 安裝element-plus
2. import
![](https://hackmd.io/_uploads/r1S7K73vh.png)
3. 套用組件
![](https://hackmd.io/_uploads/SkzaRXhvn.png)

4. 子組件接收父組件傳過來的屬性
![](https://hackmd.io/_uploads/ByzwCQnvn.png)

PS：props如果接走了模個物件，useAttrs就會接不到這個物件
![](https://hackmd.io/_uploads/SyuTZV3D2.png)


### ref ＄parent
越聽頭越痛
1. ref：組件用ref去套用ref()，可以接收到子組件暴露的對象和方法
![](https://hackmd.io/_uploads/rkt2nV2wn.png)


2. ＄parent：只接取父組件暴露的對象和方法
![](https://hackmd.io/_uploads/SylAyS2D2.png)

### provide inject 雙向綁定
provide傳遞資料後，可以用inject在任何一層的子組件接收到值，父子修改的是同一個物件

1. provide：傳物件（雙向綁定）
2. inject：接物件（雙向綁定）

### pinia
Pinia 視為 [vuex 插件-store](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#vuex-%E6%8F%92%E4%BB%B6-store) 的繼任者，在使用上相比於 Vuex 簡易許多
![](https://hackmd.io/_uploads/S1yWwvBu3.png)
![](https://hackmd.io/_uploads/HJ77vDru3.png)
1. 安裝
```
npm install pinia
```
2. 創建Pinia
```javascript=
import { createPinia } from 'pinia'
let pinia = createPinia()

export default pinia
```
![](https://hackmd.io/_uploads/H152sPr_3.png)

3. main套用pinia
```javascript=
import pinia from '@/store'
app.use(pinia)
```
![](https://hackmd.io/_uploads/HJVKCwSO2.png)

4. defineStore：創建倉庫
![](https://hackmd.io/_uploads/S1sfhdr_2.png)


5. 存取修改倉庫資料
![](https://hackmd.io/_uploads/Hk7ah_rOn.png)



6. 開發工具（和vuex-store一樣）
[開發工具](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#vue%E9%96%8B%E7%99%BC%E5%B7%A5%E5%85%B7)

7. getters
Getter 完全等同于 store 的 state 的计算值。可以通过 defineStore() 中的 getters 属性来定义它们。推荐使用箭头函数，并且它将接收 state 作为第一个参数：
![](https://hackmd.io/_uploads/HyUd0dru3.png)


### slot
[slot 插槽](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?view#slot-%E6%8F%92%E6%A7%BD)

1. v-slot：接子回傳的值
![](https://hackmd.io/_uploads/HyIHm5hw2.png)


## vite 搭建項目
[vite](https://hackmd.io/6uxWnFCbQr-KyYIV-un4cw?both#vite)

### 安裝運行

1. 安裝
```
npm create vite@latest aaa
```
![](https://hackmd.io/_uploads/rJL_rchw3.png)

![](https://hackmd.io/_uploads/Hy5195hw3.png)

2. 運行
```
npm run dev
```

## 整理配置

### 刪除整理
![](https://hackmd.io/_uploads/S1r4WshPh.png)
![](https://hackmd.io/_uploads/Byo8-onD3.png)

### 配置運行後自動開起網頁
![](https://hackmd.io/_uploads/BkXogs3vh.png)


## ESLint 代碼檢測工具
 JavaScript 的程式碼檢查工具
![](https://hackmd.io/_uploads/ryPvKdaw2.png)
![](https://hackmd.io/_uploads/S1wlqupP2.png)
![](https://hackmd.io/_uploads/SktHjupDh.png)
![](https://hackmd.io/_uploads/r10T3Oav3.png)
![](https://hackmd.io/_uploads/rkQM0_6Dh.png)
![](https://hackmd.io/_uploads/H1WcpFpPn.png)
![](https://hackmd.io/_uploads/BJYATtTwh.png)
![](https://hackmd.io/_uploads/r17lAtTwn.png)
### ESLint安裝

1. 安裝
```
npm install eslint 
```

2. 此新增一個空的 .eslintrc 檔案
```
npx eslint --init
```

![](https://hackmd.io/_uploads/H1Z2U23w2.png)

3. 安裝插件
```
npm i -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```


### ESLint配置

1. 複製貼上取代.eslintrc.cjs檔內的配置
```javascript=
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
};
```

2. 新增 .eslintignore檔，設定不需要被檢查檔案或資料夾
```
dist
node_modules
```
![](https://hackmd.io/_uploads/HJcOkqaP3.png)

### package.json配置
package.json檔設定
1. lint：效驗設定
2. fix：效驗不過得修護設定
```json=
"scripts": {
    "lint":"eslint src",
    "fix":"eslint src --fix",
  },
```

### esline 效驗修正

1. 效驗
```
npm run lint
```
2. 修正
```
npm run fix
```
3. 在main裡加入var a=1，運行效驗後會報錯，在運行修正後var會變成const
![](https://hackmd.io/_uploads/BJHdD5pwn.png)

<span style="color:red">PS：vsCode要關掉重開，不然會報Cannot find name.... 的錯誤</span>


## prettier 更漂亮
讓程式格式更漂亮
![](https://hackmd.io/_uploads/HyyOP2Tv2.png)
![](https://hackmd.io/_uploads/Sk3ai26Ph.png)

### prettier 安裝配置

1. 安裝prettier
PS：上面安裝eslint插件時就安裝過了
```
npm i -D  eslint-plugin-prettier eslint-config-prettier 
```

2. 設定格式：新增.prettierrc.json檔案，複製貼上下方配置
```json=
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```
![](https://hackmd.io/_uploads/ryD0Fh6Pn.png)
3. 設定忽略的檔案：新增.prettierignore檔案，複製貼上下方配置
```
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

### prettier 效驗修正
和[esline 效驗修正](#esline-效驗修正)一樣

1. 效驗
```
npm run lint
```
2. 修正
```
npm run fix
```






## stylelint 更漂亮
格式化CSS

![](https://hackmd.io/_uploads/SJGRyapD2.png)
![](https://hackmd.io/_uploads/rJZZcTav3.png)
![](https://hackmd.io/_uploads/rykjjpawn.png)
![](https://hackmd.io/_uploads/Hyh2apaD3.png)
![](https://hackmd.io/_uploads/HJzY6aawn.png)

### stylelint 安裝配置

1. 安裝prettier
PS：上面安裝eslint插件時就安裝過了
```
npm add sass sass-loader stylelint@15 postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```


PS：報錯stylelint@>=11<15，stylelint-config-prettier可以不安裝

![](https://hackmd.io/_uploads/BJeFFpTDh.png)
![](https://hackmd.io/_uploads/SkiSKpTwn.png)



2. 設定格式：新增.stylelintrc.cjs檔案，複製貼上下方配置
```javascript=
// @see https://stylelint.bootcss.com/

module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}

```
![](https://hackmd.io/_uploads/Hkzmpp6wh.png)


3. 設定忽略的檔案：新增.stylelintignore檔案，複製貼上下方配置
```
/node_modules/*
/dist/*
/html/*
/public/*
```

### package.json配置
package.json檔設定
```json=
"scripts": {
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
  },
```
ps：忘記加會報錯
![](https://hackmd.io/_uploads/B1oJdC0D2.png)


### stylelint 效驗修正

1. 修正
```
npm run format
```

## husky 配置
設定上傳遠程倉庫時格式化代碼
![](https://hackmd.io/_uploads/rJX_k0avh.png)

### 安裝配置

```
npm install -D husky
```

```
git init
```
運行npx husky-init，生成.husky資料夾
```
npx husky-init
```
![](https://hackmd.io/_uploads/rJsmSApv3.png)


ps：需要有git不然會報錯
![](https://hackmd.io/_uploads/Bym57Aawh.png)

pre-commit配置，設定提交時運行格式化
![](https://hackmd.io/_uploads/ryQKHC6Dn.png)


## commitlint 配置
PS：要先安裝husky
git以後提交就要根據配置設定

![](https://hackmd.io/_uploads/HyINIRTDh.png)
![](https://hackmd.io/_uploads/B1dSvApD3.png)
![](https://hackmd.io/_uploads/BJezn9RaPh.png)
![](https://hackmd.io/_uploads/rku020Tv3.png)





### 安裝配置

1. 安裝
```
npm add @commitlint/config-conventional @commitlint/cli -D
```

2. 新增commitlint.config.cjs

```javascript=
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [0],
    'subject-case': [0, 'never'],
  },
}

```
![](https://hackmd.io/_uploads/rkQAPLWF2.png)

3. husky配置
    1. husky下新增commit-msg
    ```
    npx husky add .husky/commit-msg
    ```

    2. commit-msg裡面加入
    ```
    npm run commitlint
    ```
![](https://hackmd.io/_uploads/Sy3cIzkO2.png)



4. package.json配置
package.json檔設定
```json=
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
 },
```
### <font color="#f00">*git commit*</font>


```cmake=
git commit -m 'fix: XXX'
```
![](https://hackmd.io/_uploads/By42Iy1Oh.png)

![](https://hackmd.io/_uploads/rJ2TS1Jd3.png)

## 強制使用npm包管理工具
不同的管理工具下載會有不同版本問題，所以需要強制規範，這邊強制規範使用npm
![](https://hackmd.io/_uploads/HyuBa0pwn.png)


1. 新增scritps/preinstall.js
```javascript=
if (!/npm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using npm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```
![](https://hackmd.io/_uploads/Hy5LJk0v3.png)


 package.json配置
package.json檔設定
```json=
"scripts": {
    "preinstall": "node ./scripts/preinstall.js"
 },
```

## element-plus UI 組件庫

和[Vue UI 組件庫-element UI](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g#Vue-UI-%E7%B5%84%E4%BB%B6%E5%BA%AB)不同
element-plus：
```haskell=
https://element-plus.gitee.io/zh-CN/
```

![](https://hackmd.io/_uploads/r1Pta2CP2.png)

### element-plus配置

1. 安裝
```
npm install element-plus @element-plus/icons-vue
```
2. 引入
```javascript=
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import  'element-plus/dist/index.css'

const app=createApp(App)
app.use(ElementPlus)

app.mount('#app')
```
![](https://hackmd.io/_uploads/HkEY5MyOn.png)



### 按鈕套用

![](https://hackmd.io/_uploads/BkDpqfydh.png)

### 語言套用
![](https://hackmd.io/_uploads/SykUjG1On.png)

1. 配置
    ```

    import zhCn from 'element-plus/dist/locale/zh-tw.mjs'

    app.use(ElementPlus,{
    locale:zhCn})
    ```
    ![](https://hackmd.io/_uploads/B1etFXxun.png)

2. 忽略報錯
![](https://hackmd.io/_uploads/SkkL2f1d3.png)


3. 新增el-pagination
![](https://hackmd.io/_uploads/rkPaqmgOn.png)


### 報錯

1. 找不到模組 'element-plus/dist/locale/zh-tw.mjs'
![](https://hackmd.io/_uploads/r1vlGOyO2.png)
加入註解使 TypeScript 編譯器能夠忽略它下面的行。
```
//@ts-ignore
```
![](https://hackmd.io/_uploads/SylqG_kd2.png)


2. Cannot find module '@element-plus/icons-vue'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

tsconfig.json的compilerOptions裡面
```
"moduleResolution": "bundler"
改成
"moduleResolution": "node"
```
![](https://hackmd.io/_uploads/SkQz2Pkun.png)

![](https://hackmd.io/_uploads/rkVOhD1_2.png)


3. All imports in import declaration are unused.
改成一次引入一個或關閉檢測

關閉檢測：tsconfig.json的compilerOptions裡面
```
"noUnusedLocals": true,
改成
"noUnusedLocals": false,
```
![](https://hackmd.io/_uploads/rJkvTPJ_h.png)
![](https://hackmd.io/_uploads/ByIllukdh.png)


## src別名配置

將src資料夾配置別名

![](https://hackmd.io/_uploads/BJLIr4xdn.png)
![](https://hackmd.io/_uploads/HkMBBNlOh.png)

### vite配置src別名
```javascript=
import path from 'path'
resolve: { 
    alias: { 
      '@': path.resolve('./src') 
    } 
  }
```


![](https://hackmd.io/_uploads/Sk37BVxun.png)


### typeScript配置src別名

```json
 "compilerOptions": {
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": {
      //路径映射，相对于baseUrl
         "@/*": ["src/*"]
    },
 }
```

![](https://hackmd.io/_uploads/H176SEe_3.png)

### 套用
![](https://hackmd.io/_uploads/B1iE8El_h.png)


![](https://hackmd.io/_uploads/S1kW4EeO2.png)


## 環境變量配置

![](https://hackmd.io/_uploads/BJ47HBlO3.png)
![](https://hackmd.io/_uploads/Hy_oSSx_3.png)
![](https://hackmd.io/_uploads/S1aiPrxOh.png)


### 新增開發環境配置

```
###
 # @Description: Stay hungry，Stay foolish
 # @Author: Huccct
 # @Date: 2023-05-17 17:26:26
 # @LastEditors: Huccct
 # @LastEditTime: 2023-05-23 15:39:53
### 
# 变量必须以VITE_为前缀才能暴露给外部读取
NODE_ENV = 'development'
VITE_APP_TITLE = 'vue-admin'
VITE_APP_BASE_API = '/api'
VITE_SERVE = 'http://sph-api.atguigu.cn'
```
![](https://hackmd.io/_uploads/BJaH8Hguh.png)


### 新增生產環境配置

```
###
 # @Description: Stay hungry，Stay foolish
 # @Author: Huccct
 # @Date: 2023-05-17 19:12:59
 # @LastEditors: Huccct
 # @LastEditTime: 2023-06-02 15:25:06
### 
NODE_ENV = 'production'
VITE_APP_TITLE = 'vue-admin'
VITE_APP_BASE_API = 'http://sph-api.atguigu.cn'
VITE_SERVE = 'http://sph-api.atguigu.cn'
```
![](https://hackmd.io/_uploads/BkcDoFluh.png)



### 新增測試環境配置

```
NODE_ENV = 'test'
VITE_APP_TITLE = 'vue-admin'
VITE_APP_BASE_API = '/test-api'
VITE_SERVE = 'http://sph-api.atguigu.cn'
```
![](https://hackmd.io/_uploads/rkEtvHx_2.png)


### 配置package.json
```json=

    "build:test": "vue-tsc && vite build --mode test",
    "build:pro": "vue-tsc && vite build --mode production",
```
![](https://hackmd.io/_uploads/BkWfOHxun.png)


### 測試
測試配置的資料是否取的到
```javascript=
console.log(import.meta.env)
```
![](https://hackmd.io/_uploads/S1AIuHed3.png)
![](https://hackmd.io/_uploads/BybFdHxdn.png)


## SVG圖標配置

[iconfont](https://www.iconfont.cn/)

![](https://hackmd.io/_uploads/HJVkmKlO3.png)
![](https://hackmd.io/_uploads/B1h6fYxu3.png)


### 安裝配置引入
1. 安裝
```
npm install vite-plugin-svg-icons -D
```

2. 配置

```javascript=
// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 获取各种环境下对应的变量
  return {
    plugins: [
     createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ]
  }

```
![](https://hackmd.io/_uploads/HyR7rdxO3.png)

3. 引入
```javascript=
import 'virtual:svg-icons-register'
```
![](https://hackmd.io/_uploads/SJzS7Fl_n.png)


### icon下載套用
1. 上網找vng的免費icon
[iconfinder](https://www.iconfinder.com/search/icons?family=feather)
[30-best-websites-for-free-icons-download-and-usage-guide-2021](https://tw.eagle.cool/blog/post/30-best-websites-for-free-icons-download-and-usage-guide-2021)
[iconfont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=45371)

2. icon下載
![](https://hackmd.io/_uploads/HkAJeFg_n.png)

3. 新增phone.svg貼上svg code
![](https://hackmd.io/_uploads/rkRkCvgOn.png)

4. 套用

```javascript=
<svg >
    <use xlink:href="#icon-phone" fill="red"></use>
</svg>

```

![](https://hackmd.io/_uploads/Bk2ARwx_2.png)


### 封裝成全局組件
1. 新增 components SvgIcon/index.vue 

```vue=
<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 19:59:04
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-17 20:09:32
-->
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style lang="scss" scoped></style>


```
![](https://hackmd.io/_uploads/HkYzbdx_2.png)

2. 套用

```javascript=
import svgIcon from '@/components/SvgIcon/index.vue';

<svg-icon name="phone" color="red" ></svg-icon>
```
![](https://hackmd.io/_uploads/SJ4bttl_3.png)


## 定義全局組件

### 單一組件定義成全局組件
![](https://hackmd.io/_uploads/S1FonYlO3.png)

### 大量組件定義成全局組件
1. 新增index.ts全局組件庫
```javascript=
import SvgIcon from './SvgIcon'

const allGloablComponent = {SvgIcon}
export default{
    install(app ){
        Object.keys(allGloablComponent).forEach(key=>{
            app.componrnt(key,allGloablComponent[key])
        })
    }
}
```
![](https://hackmd.io/_uploads/Sk3Xuofu2.png)

2. 在main引入全局組件
```javascript=
import gloablComponent from '@/components'
app.use(gloablComponent)
```
![](https://hackmd.io/_uploads/H1nkwiGd3.png)

3. 套用
```javascript=
<svg-icon name="phone" color="red" ></svg-icon>
```
![](https://hackmd.io/_uploads/SJuDusMOn.png)


## 集成sass
![](https://hackmd.io/_uploads/Sy3scoMOn.png)
![](https://hackmd.io/_uploads/S1vo2ozu3.png)

### 新增集成index.scss

1. 新增空index.scss
2. 引入index.scss
![](https://hackmd.io/_uploads/H1XIjiMu3.png)

### 下載設置清除html標籤的預設style

1. 在npmjs網站搜尋reset.scss，複製code/reset.scss裡面的css
[npmjs 網站](https://www.npmjs.com)
![](https://hackmd.io/_uploads/SyYo0pGdh.png)

2. 新增reset.scss，貼上剛剛複製的css
下載清除html標籤的預設style

![](https://hackmd.io/_uploads/HyyD66zu2.png)

3. 在index.scss引入reset.scss
![](https://hackmd.io/_uploads/S10KJAMdh.png)


### 配置全局scss
1. 新增variable.scss，裡面放全局共用的css
![](https://hackmd.io/_uploads/H1lxSRzd3.png)

2. 配置scss全局變量
![](https://hackmd.io/_uploads/HJBxSTzO3.png)

3. 套用

![](https://hackmd.io/_uploads/BkD7k2fu3.png)

4. 重新運行


## mock數據（假API資料）

### mock安裝配置
![](https://hackmd.io/_uploads/HJETo0Mdn.png)
![](https://hackmd.io/_uploads/rJgAw-XOh.png)
～～～～～～～～～～～～～～～～～～～～～～～
![](https://hackmd.io/_uploads/H1Xsw-m_3.png)
![](https://hackmd.io/_uploads/SytcEz7d2.png)

1. 安裝ite-plugin-mock
    1. 在npmjs你面找vite-plugin-mock
    [npmjs 官網](https://www.npmjs.com/)
	```
	//安裝依賴
	npm i mock -S
	
	//安裝vite-plugin-mock
	npm i vite-plugin-mock@2
	
	```
    ![](https://hackmd.io/_uploads/Sk32nRMO2.png)
2. 配置
[github：vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)

![](https://hackmd.io/_uploads/SytApRz_n.png)
![](https://hackmd.io/_uploads/SJAw0Z7_2.png)


3. 新增假API
    1. 新增mock/user.js貼上假API資料
![](https://hackmd.io/_uploads/HJBC7Z7_2.png)


### axios 安裝測試

1. 安裝
```
npm i axios
```

2. 配置測試，測試成功後要記得刪除...
![](https://hackmd.io/_uploads/HJyL4Gm_n.png)


## axios二次封裝
![](https://hackmd.io/_uploads/ryjhNMmu2.png)

1. 安裝
```
npm i axios
```
2. 封裝
    ![](https://hackmd.io/_uploads/BJNZsf7O3.png)
    1. create：創建axios實例
    ![](https://hackmd.io/_uploads/H1UiTGmOn.png)

    2. request：請求配置，例如config配置
    ![](https://hackmd.io/_uploads/B1oOhMQ_2.png)

    3. response：設定回傳配置，例如HTTP錯誤訊息配置
    ![](https://hackmd.io/_uploads/B1HenfXuh.png)

3. 測試
![](https://hackmd.io/_uploads/r1inzXmu3.png)

## 統一管理API

1. 新增API（index.js）和資料型態（type.js）
```javascript=
/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:15:57
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-23 21:32:57
 */
// 统一管理用户相关接口
import request from '@/utils/request'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from './type'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: LoginFormData) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
```
![](https://hackmd.io/_uploads/rkzlqNmu3.png)

2. 測試
```javascript=
/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:16:03
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-23 21:32:17
 */
// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string
  password?: string
}

export interface ResponseData {
  code?: number
  message?: string
  ok?: boolean
}

export interface LoginResponseData extends ResponseData {
  data?: string
}

export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
```
![](https://hackmd.io/_uploads/rk_OwVXO3.png)

## vue-router

1. 安裝
```
npm i vue-router
```
2. 新增3種路由頁面
![](https://hackmd.io/_uploads/SyRI6vN_h.png)


3. 創建路由
```javascript=

export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'login',
      hidden: true,
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: 'Screen',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  }
]
```
![](https://hackmd.io/_uploads/Syt-3PV_n.png)



4. 模板路由配置
```javascript=
/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:41:54
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-19 17:48:44
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router

```
![](https://hackmd.io/_uploads/ByiwjwEdn.png)


5. 引入配置
```javascript=
import router from './router'

app.use(router)
```
![](https://hackmd.io/_uploads/HyD1swNOh.png)
6. 套用
```javascript=
    <Router-view></Router-view>
```
![](https://hackmd.io/_uploads/rk5J-O4u2.png)


-------

## login頁面

1. 加入圖片
![](https://hackmd.io/_uploads/H134UuVun.png)

element-plus

scss

## vuex-store-pinia
[vuex-store-pinia](#vuex-store-pinia)

async await

localStorage.getItem("token")

![](https://hackmd.io/_uploads/rysNT58dn.png)

![](https://hackmd.io/_uploads/S1UzTqIuh.png)


## element-plus 表單驗證 （036_自定义校验表单）
[element-plus 表單校驗](https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C)：程式碼裡有範例

![](https://hackmd.io/_uploads/B1zl3nI_h.png)

## css-滾動條
![](https://hackmd.io/_uploads/B1TkZpId3.png)

## item （040_递归组件生成动态菜单）
![](https://hackmd.io/_uploads/r1C6azP_2.png)


1. 在pinia的store裡引入共用router資料
![](https://hackmd.io/_uploads/B1QLwmwO2.png)

2. 創建Menu
    1. 引入套用menuList
    ```javascript=
        //引入
        defineProps(['menuList'])
    ```
    2. 暴露模板
    3. 為子路由遞迴呼叫自己（Menu）
![](https://hackmd.io/_uploads/rJzhgXvO3.png)
![](https://hackmd.io/_uploads/ry0xWXDu3.png)

## 全部圖標註冊成全局組件
1. 部圖標註冊成全局組件
![](https://hackmd.io/_uploads/rJIz97Pd3.png)

2. 套用
![](https://hackmd.io/_uploads/H1UMjXvd3.png)

## 042_項目全部路由配置

[vue-router 路由](https://hackmd.io/hbPOQXlsR7qm6ptLikw26g?both#vue-router-%E8%B7%AF%E7%94%B1)
嵌套式路由：一層套一層，會自動依照路由層次套版
![](https://hackmd.io/_uploads/SyF_Aeuun.png)

## 043_頂部tabbar組件靜態搭建與拆分


## 45麵包屑
![](https://hackmd.io/_uploads/rJgtbbuuh.png)


## 046_刷新業務的實現

nextTick()：會在DOM已掛載、渲染完成後，執行nextTick()內的程式碼

1. 用v-if控制DOM的掛載卸載
2. 用nextTick()在DOM已掛載、渲染完成後flag=true，掛載DOM
![](https://hackmd.io/_uploads/HJVzDGudh.png)


## 047_全屏模式的切換
![](https://hackmd.io/_uploads/SJR__z_dh.png)

## 網址攜帶route路徑(可以用來跳轉頁面)
1. 引入vue-router的useRoute()
2. 在登出時攜帶當下網址
3. 在登入時判斷如果有攜帶網址，跳轉到攜帶的網址
![](https://hackmd.io/_uploads/H1Cktuquh.png)

## vue-router 路由守衛
如果路由守衛另外寫要記得引入寫好的路由守衛檔（permission.ts）
![](https://hackmd.io/_uploads/SJZ5OK9Oh.png)

![](https://hackmd.io/_uploads/H1HAV55dn.png)


### beforeEach條件
![](https://hackmd.io/_uploads/HkHaP9qun.png)
![](https://hackmd.io/_uploads/BJoDw59dn.png)
![](https://hackmd.io/_uploads/r1X6899_n.png)



## 進度條
安裝
```
npm i nprogress
```
1. 進度條開始
2. 進度條結束
3. 進度條顏色
![](https://hackmd.io/_uploads/SkdsnY9_2.png)





## 052_真實接口替換mock接口+proxy server設定

異步 async

### API Server 路徑資料
![](https://hackmd.io/_uploads/Sk2u4jqu3.png)

![](https://hackmd.io/_uploads/rJ-vcqqu2.png)


```
http://39.98.123.211:8510/swagger-ui.html
http://139.198.104.58:8212/swagger-ui.html#/

```

### 真實接口
mode：當前狀態（development(開發) or production(生產) or test(測試)）

process.cwd()=檔案路徑（項目根目錄）

```javascript=
let env = loadEnv(mode, process.cwd())
```
![](https://hackmd.io/_uploads/HJp8ls9dn.png)

### proxy server
```javascript=
erver: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
```
![](https://hackmd.io/_uploads/Byf2Xjqdn.png)


## elment-plus
### page
1. layout排版：箭頭=靠右
![](https://hackmd.io/_uploads/ryc8xmiu3.png)


### form 
用ref去接form組件暴露的對象和方法
[ref ＄parent](#ref-＄parent)
![](https://hackmd.io/_uploads/ryDi9W3u3.png)


### 暗黑模式
![](https://hackmd.io/_uploads/r1Fkf7Tdn.png)

1. main引入css
```javascript=

import 'element-plus/theme-chalk/dark/css-vars.css'

```
2. 設定一個開關，將html.className設成dark，vue 在轉譯時會自動套用功能
```javascript=

const changeDark = () => {
  let html = document.documentElement
  dark.value ? (html.className = 'dark') : (html.className = '')
}
```
![](https://hackmd.io/_uploads/HJ2ijQaOh.png)

### 自定義主題顏色
1. main引入css
```javascript=

import 'element-plus/theme-chalk/dark/css-vars.css'

```
2. 設定一個開關，將html.style.setProperty 加入 --el-color-primary 和 顏色，vue 在轉譯時會自動套用功能
```javascript=
<el-form-item label="主题颜色" >
  <el-color-picker
    v-model="color"
    show-alpha
    :predefine="predefineColors"
    size="small"
    @change="setColor"
  />
</el-form-item>
const setColor = () => {
  let html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}

```
![](https://hackmd.io/_uploads/SJ7rMVTO3.png)

![](https://hackmd.io/_uploads/rkLYlETun.png)


## 背景圖
```css=
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
}
```
## 展示内容区域


![](https://hackmd.io/_uploads/BJT7Zh0_3.png)

```css=
.screen {
   position: fixed;
   width: 1920px;
   height: 1080px;
   left: 50%;
   top: 50%;
   transform-origin: left top;
}
```

## moment
1. 安裝
```
npm i --save moment
```

```javascript=
<script setup lang="ts">
//@ts-ignore ->停止報錯
import moment from 'moment'
import { ref, onMounted, onBeforeUnmount } from 'vue'

//存储当前时间
let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
let timer = ref(0)

//组件挂载完毕更新当前的事件
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>
```


![](https://hackmd.io/_uploads/HJAzoxyKh.png)


## echarts圖表

1. 安裝
```
安裝
npm i echarts

```
### 擴展插件
https://www.bilibili.com/video/BV1Xh411V7b5?p=132
https://www.npmjs.com/package/echarts-liquidfill

1. 安裝

```
//擴展插件
npm i --save echarts-liquidfill 
```
![](https://hackmd.io/_uploads/HyRIebyYh.png)

### 地圖（好像只有台灣（民主）和中國（詐欺民主）地圖）