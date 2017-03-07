const xml = require('xml');

const pages = [
  'http://somenotexistingdomain.com/1.html',
  'http://somenotexistingdomain.com/2.html',
  'http://somenotexistingdomain.com/3.html',
  'http://somenotexistingdomain.com/4.html'
]

const sitemap =
  {
    urlset: [
      { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } }
    ]
  }

//retrive pages from database or some other internal system
const retrivePages = () => {
  return pages
}

const generate = () => {
  const s = Object.assign({}, sitemap)
  retrivePages().forEach((p, idx) => {
    s.urlset[idx + 1] = {url: [{loc: p}, {changefreq: 'weekly'}]}
  })

  return s
}

module.exports = function (req, res, next) {
  res.set('Content-Type', 'text/xml');
  res.send(xml(generate(), { declaration: true }));
}
