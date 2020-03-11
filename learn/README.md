1. 声明式渲染
   Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
2. Mustache 语法： {{ msg }}

3. Mustache 语法不能作用在 HTML attribute 上
   应使用 v-bind 指令，可以用于响应式地更新 HTML attribute
   <a v-bind:href="url">...</a>
   <a v-on:click="doSomething">...</a>

4. 动态参数
   <a v-bind:[attributeName]="url"> ... </a>
   <a v-on:[eventName]="doSomething"> ... </a>
   
5. 缩写
   v-bind
   <a :href="url">...</a>
   <a :[key]="url"> ... </a>
   v-on
   <a @click="doSomething">...</a>
   <a @[event]="doSomething"> ... </a>
   