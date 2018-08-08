const wright = require('wright')
const rollup = require('rollup')
// const typescript = require('rollup-plugin-typescript2')
const commonJs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const config = require('./config')

let cache = null

function compile() {
    return rollup.rollup({
        input: `src/main.js`,
        cache: cache,
        plugins: [
            // typescript({
            //     abortOnError: false
            // }),
            commonJs(),
            nodeResolve()
        ]
    })
    .then(bundle => (
      cache = bundle,
      bundle.generate({
        format: 'iife',
        sourcemap: true
      })
    ))
    .then(output => {
        console.log(output.code)
        return output.code
    })
  }

module.exports = function () {
    wright({
        main: './dist/index.html',
        debug: true,
        //run: 'window.reload',
        js: {
            path: 'app.js',
            compile: compile,
            watch: './src/**/*.js'
          }
    })
}



