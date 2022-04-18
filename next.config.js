/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: './',
  env: {
    companyName: 'moonfi',
    AIRTABLE_API_KEY: 'keyFAXO0VtU5TJJps',
    AIRTABLE_BASE_KEY: 'appkVPmuqkHjI60sy',
    DISCORD_INVITE: 'https://discord.gg/AY85vWmgev',
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  reactStrictMode: true,
}
