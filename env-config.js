const prod = process.env.NODE_ENV === 'production'
module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://moonfi-dev.github.io/landing/' : 'http://localhost:3000'
}
