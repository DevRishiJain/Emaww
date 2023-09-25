const fs = require('fs');
const xml2js = require('xml2js');
const Redis = require('ioredis');

// Initialize the Redis client
const redisClient = new Redis();

// Read the config.xml file
const xmlData = fs.readFileSync('config.xml', 'utf-8');

// Parse the XML data
const parser = new xml2js.Parser();
parser.parseString(xmlData, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    redisClient.quit();
    return;
  }

  // Extract subdomain data and convert to JSON
  const subdomains = result.config.subdomains[0].subdomain.map((subdomainElem) => subdomainElem);

  // Extract and store subdomains in the "subdomains" key
  redisClient.set('subdomains', JSON.stringify(subdomains));

  // Extract and store cookies in separate keys
  const cookies = result.config.cookies[0].cookie;
  cookies.forEach((cookie) => {
    const key = `cookie:${cookie.$.name}:${cookie.$.host}`;
    const value = cookie._;
    redisClient.set(key, value);
  });

  console.log('Data successfully exported to Redis.');

  // Close the Redis client when you are done
  redisClient.quit();
});
