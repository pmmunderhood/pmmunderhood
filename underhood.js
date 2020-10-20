const name = "!!!ANYUNDERHOOD.NAME"
const site = "!!!ANYUNDERHOOD.SITE"

const description = "!!!ANYUNDERHOOD.description"

module.exports = {
  "underhood": {
    name,
    description
  },
  "github": {
    user: "!!!ANYUNDERHOOD.github.user",
    repo: "!!!ANYUNDERHOOD.github.repo"
  },
  "curator": {
    email: "!!!ANYUNDERHOOD.curator.email",
    twitter: "!!!ANYUNDERHOOD.curator.twitter",
  },
  "site": {
    "title": "Сайт @" + name,
    "description": description,
    // TODO: RSS "feed_url": "https://" + site + "/rss.xml",
    "site_url": "https://" + site + "/",
  }
}
