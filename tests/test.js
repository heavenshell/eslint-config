'use strict'
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const eslint = require('eslint')

function test () {
  const cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: path.resolve(__dirname, '../.eslintrc.js')
  })

  fs.readFile(path.resolve(__dirname, 'sample.js'), 'utf-8', (err, code) => {
    if (err) {
      console.error(err)
    }
    assert(cli.executeOnText(code).errorCount === 0)
    assert(cli.executeOnText(code).warningCount === 0)
  })
}

test()
