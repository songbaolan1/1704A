module.exports = {
    devServer :{
        // before(app){

        // },
        proxy:{
            '/api':{
                target:'http://118.89.234.135:7001',//baseurl
                changeOrigin:true, //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}