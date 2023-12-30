const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        proxy: {
            // proxy 요청을 보낼 api 시작 부분
            '/oauth2.0': {
                target: 'https://nid.naver.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/oauth2.0': '' // 실제 요청에서 '/oauth2.0'을 제거
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    }
}
