const express = require('express')
const app = express()
const fs = require('fs')
const demoApp = require('./dist/server/App.ssr').default
const renderer = require('@easyroute/svelte/ssr')()

app.use('/assets', express.static(__dirname + '/dist/client/assets'))
app.use('/texts', express.static(__dirname + '/dist/client/texts'))

const html = fs.readFileSync(__dirname + '/dist/client/index.html', 'utf8')

function insertRendered(rendered, template) {
  return template
    .replace('{$ HTML $}', rendered.html)
    .replace('{$ STYLES $}', rendered.css.code)
    .replace('{$ HEAD $}', rendered.head)
}

app.get('*', async (req, res) => {
  const rendered = await renderer({
    component: demoApp,
    props: {},
    url: req.url
  })
  const ssrHtml = insertRendered(rendered, html)
  res.send(ssrHtml)
})

app.listen(3456, () => {
  console.log('Svelte Easyroute demo app started!')
})
