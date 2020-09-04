const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: sxzm2zyy,
  dataset: production,
  useCdn: true 
})

module.exports = client;