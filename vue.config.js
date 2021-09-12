module.exports = {
    /* publicPath: {
        process: {
            env: {
                NODE_ENV: 'development' // production
            }
        }
    }, */
	productionSourceMap:false,
    outputDir: 'dist',
    devServer: {
        host: 'localhost',
        port: 3001,
        https: false,
        hotOnly: false,
        proxy: { // 设置代理
            '/api': {
               target: 'http://10.10.109.162:17999/', //需要代理的地址
               changeOrigin: true,
            	ws: true,
            	secure: false,
            	pathRewrite: {
            	    '^/api': '' //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
            	},
            },
            
            //图片服务代理
            '/imgServer': {
                //target: 'http://192.168.91.218:8081/', //需要代理的地址
                target: 'http://10.10.109.203:7699/', //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/imgServer': '' //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
        },
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: `@import './src/assets/css/element-variables.scss';`
    //         },
    //     },
    // },
}