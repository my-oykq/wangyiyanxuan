module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components':'@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'views': '@/views',
                'api':'@/views'
            }
        }
    }
}