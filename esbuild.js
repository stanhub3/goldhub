const { buildSync } = require('esbuild')
const define = {}

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

const options = {
  entryPoints: ['./cms/src/main.ts'],
  outfile: './static/admin/main.js',
  bundle: true,
  minify: true,
  define,
}

buildSync(options)
