/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    companyName: 'moonfi',
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_KEY: process.env.AIRTABLE_BASE_KEY,
    DISCORD_INVITE: 'https://discord.com/',
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}
