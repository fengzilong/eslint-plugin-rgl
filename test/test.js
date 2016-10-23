'use strict'

const expect = require('chai').expect
const CLIEngine = require('eslint').CLIEngine
const plugin = require('../lib/index')
const Path = require('path')

describe('should work with rgl', function (done) {
  const cli = new CLIEngine({
    envs: ['es6'],
    useEslintrc: false,
    rules: {semi: [2, 'never']},
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module'
    }
  })

  it('should work with rgl', function (done) {
    cli.addPlugin('eslint-plugin-rgl', plugin)
    const filename = Path.join(__dirname, 'fixture.rgl')

    const report = cli.executeOnFiles([filename])
    const errors = report.results[0].messages

    expect(errors).to.have.lengthOf(1)
    expect(errors[0]).to.have.property('line', 8)
    expect(errors[0]).to.have.property('ruleId', 'semi')
    done()
  })

  // issue: https://github.com/Twiknight/eslint-plugin-vue/issues/1
  it('should work with rgl files without script tag', function () {
    cli.addPlugin('eslint-plugin-rgl', plugin)
    const filename = Path.join(__dirname, 'no.script.rgl')

    const report = cli.executeOnFiles([filename])
    const errors = report.results[0].messages

    expect(errors).to.have.lengthOf(0)
  })
})
