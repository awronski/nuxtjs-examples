const Nuxt = require('nuxt')
const app = require('express')()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.get('/sitemap.xml', require('./xml/sitemap.js'))

let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)
app.use(nuxt.render)

if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
