const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/curl-project/nicemarcela.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)