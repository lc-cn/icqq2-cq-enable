# oicq2-cq-enable
让oicq2.x支持cq码
使用方法：
1.安装依赖
```shell
npm install oicq2-cq-enable
# 或 npm i
```
2.在你的项目入口文件最开头导入依赖

js
```javascript
require('oicq2-cq-enable')
```
ts
```typescript
import 'oicq2-cq-enable'
```
然后，你的Client的message相关事件的event将会携带cqCode参数，
event的reply和一切sendMsg将支持直接发送cq码
