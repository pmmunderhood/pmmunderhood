const name = "pmmunderhood"
const site = "pmmunderhood.com"

const description = "Shared twitter account for Product Marketing Managers"

module.exports = {
  "underhood": {
    name,
    description
  },
  "github": {
    user: "pmmunderhood",
    repo: "pmmunderhood"
  },
  "curator": {
    email: "pmmunderhood@gmail.com  ",
    twitter: "NatashaKatson",
  },
  "site": {
    "title": "@" + name,
    "description": description,
    // TODO: RSS "feed_url": "https://" + site + "/rss.xml",
    "site_url": "https://" + site + "/",
  }
}
