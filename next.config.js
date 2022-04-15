/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/landing',
  assetPrefix: '/landing/',
  env: {
    companyName: 'moonfi',
    AIRTABLE_API_KEY: 'keyFAXO0VtU5TJJps',
    AIRTABLE_BASE_KEY: 'appkVPmuqkHjI60sy',
    DISCORD_INVITE: 'https://discord.com/',
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}
