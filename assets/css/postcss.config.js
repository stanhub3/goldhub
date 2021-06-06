const dir = __dirname;

const purgecss = require('@fullhuman/postcss-purgecss')({
    // see https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
    content: [
        './hugo_stats.json',
    ],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
    }
})

module.exports = {    
    plugins: [        
        require('postcss-import')({
            path: [dir]
            }), 
        require('tailwindcss')('assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [dir]
        }),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
}
