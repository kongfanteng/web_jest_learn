## npm run jest 内部逻辑

1. npm run jest
2. jest(babel-jest)
3. babel-core
4. 取 .babelrc 配置
5. 运行测试前，结合 babel，先对代码进行转化
6. 运行转化后的测试用例代码