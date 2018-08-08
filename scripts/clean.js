const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf');
const config = require('./config')

module.exports = function () {
    return new Promise((resolve, reject) => {
        console.log('start clean')
        rimraf(config.distDir, function () {
            debugger
            fs.mkdir(config.distDir, () => {
                console.log('end clean')
                resolve('next')
            })
        })
    })
}


