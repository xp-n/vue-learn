module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    }
  },
  lintOnSave:false, //语法检查
  //代理服务器(第一种方式 弊端：public文件夹下的文件也在端口号8080下,如8080/index.html可以访问 不够灵活、不能配置多个代理) 
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  //(第二种)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        ws: true,   //webSocket 不写默认是true
        changeOrigin: true,  //请求头的host值(是否向请求数据的服务器“撒谎”,对5000端口说自己是5000端口则为true,说自己是8080端口则为false)
        pathRewrite: { 'atguigu': '' }

      },
      '/demo': {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true,
        pathRewrite: { 'demo': '' }

      },
    }
  }
}