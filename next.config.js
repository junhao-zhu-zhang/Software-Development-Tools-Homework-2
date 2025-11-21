/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // REQUIRED: Add ALL external image hostnames here
    domains: [
      'media.istockphoto.com',
      'upload.wikimedia.org',
      'i.redd.it',
      'wwfgifts-files.worldwildlife.org',
      'shop.wwf.ca',
      'pethelpful.com',
      'images.ctfassets.net',
      'cdn.britannica.com',
      // If you use subdomains, they should be listed separately if not covered by a wildcard
    ],
  },
};

module.exports = nextConfig;