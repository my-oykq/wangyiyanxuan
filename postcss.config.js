module.exports = {
    plugins : {
        autoprefixer:{},
        'postcss-px2rem-ecclude':{
            remUnit:75,
            exclude: /node_modules/
        }
    }
}