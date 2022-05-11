# oicq2-cq-enable
让oicq2.x支持cq码
使用方法：

1.安装依赖
```shell
npm install oicq2-cq-enable
# 或 npm i
```
2.在你的项目入口文件最开头导入依赖

(需在`createClient`之前，否则sendMsg时将不会自动转换cq码)

js
```javascript
require('oicq2-cq-enable')
// 其他依赖
const {createClient}=require('oicq')
// 你的代码
```
ts
```typescript
import 'oicq2-cq-enable'
// 其他依赖
import {createClient} from 'oicq'
// 你的代码
```
然后，你的Client的message相关事件的event将会携带cqCode参数，
event的reply和一切sendMsg将支持直接发送cq码
