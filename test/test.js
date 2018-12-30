const puppeteer = require('puppeteer')
const rollup = require('rollup')
const rollupConf = require('./rollup.config.js')
const BrowserSync = require("browser-sync")
const replace = require("replace-in-file")
const path = require('path')

describe('Rollup Plugin Browsersync', () => {
  var browser, page, watcher

  beforeAll(async () => {
    watcher = rollup.watch(rollupConf)
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterAll(() => {
    browser.close()
    watcher.close()
    BrowserSync.get('rollup').exit()
  })

  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  test('reloads the script on change', async () => {
    await page.waitForFunction('document.getElementById("test").innerHTML === "before"');
    replace.sync({
      files: path.join(__dirname, 'index.js'),
      from: 'before',
      to: 'after',
    });
    await page.waitForFunction('document.getElementById("test").innerHTML === "after"');
    expect(await page.$eval('#test', e => e.innerHTML)).toBe('after')
    replace.sync({
      files: path.join(__dirname, 'index.js'),
      from: 'after',
      to: 'before',
    });
    await page.waitForFunction('document.getElementById("test").innerHTML === "before"');
  })
})