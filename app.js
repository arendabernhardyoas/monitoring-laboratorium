const http = require('http');
const fs = require('fs');
const path = require('path');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'labs@monitoring-labs',
  host: 'monitoring-labs.postgres.database.azure.com',
  database: 'monitoring_building',
  password: 'AnyTh!ngy0uW@nT',
  port: 5432,
  ssl: require
});
/*
**localhost database connection
**const pool = new Pool({
**  user: 'aby',
**  host: 'localhost',
**  database: 'monitoring_building',
**  password: 'AnyTh!ngy0uW@nT',
**  port: 5432
**});
*/

function send404(res) {
 res.writeHead(404, { 'Content-Type': 'text/plain' });
 res.write('Error 404: Resource not found.');
 res.end();
}

const mimeLookup = {
 '.js': 'application/javascript',
 '.html': 'text/html',
 '.css' : 'text/css',
 '.gif' : 'image/gif',
 '.jpeg' : 'image/jpeg',
 '.jpg' : 'image/jpg',
 '.png' : 'image/png'
};

const querystring = require('querystring');
const url = require('url');

http.createServer(function (req, res) {

let pathname = url.parse(req.url).pathname;

if (req.method === 'GET' && pathname === '/add') {
  function toIsoString(date) {
  let tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          let norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      ' ' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds());
  }
  let dt = new Date();
  let time = toIsoString(dt);
  let parsed = url.parse(req.url);
  let query = querystring.parse(parsed.query);
  let device_name = query['device_name'];
  let device_ipaddr = query['device_ipaddr'];
  let temperature = query['temperature'];
  let humidity = query['humidity'];
  pool.query(
    "INSERT INTO monitoring_laboratorium (date,device_name,device_ipaddr,temperature,humidity) VALUES ($1,$2,$3,$4,$5)",
    [time,device_name,device_ipaddr,temperature,humidity],
    function (error, results) {
      if (!error) {
      res.writeHead(200);
      res.end();
      }
      else {throw error;}
    }
  );
}

else if (req.method === 'GET' && pathname === '/loadData1') {
  function toIsoString(date) {
  let tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          let norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate());
  }
  let dt = new Date();
  let time = toIsoString(dt);
  let parsed = url.parse(req.url);
  let query = querystring.parse(parsed.query);
  let microcontroller_labs = query['microcontroller_labs'];
  pool.query(
    "SELECT * FROM monitoring_laboratorium WHERE date::text LIKE $1",
    ["%"+time+"%"],
    function (error, results) {
      if (!error) {
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(results.rows));
      }
      else {throw error;}
    }
  );
}

else if (req.method === 'GET' && pathname === '/loadData2') {
  function toIsoString(date) {
  let tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          let norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate());
  }
  let dt = new Date();
  let time = toIsoString(dt);
  let parsed = url.parse(req.url);
  let query = querystring.parse(parsed.query);
  let microcontroller_labs = query['microcontroller_labs'];
  pool.query(
    "SELECT * FROM monitoring_laboratorium WHERE date::text LIKE $1 AND device_name=$2 ORDER BY date DESC LIMIT 1",
    ["%"+time+"%",microcontroller_labs],
    function (error, results) {
      if (!error) {
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(results.rows));
      }
      else {throw error;}
    }
  );
}

else if (req.method === 'GET' && pathname === '/loadData3') {
  let parsed = url.parse(req.url);
  let query = querystring.parse(parsed.query);
  let date1 = query['date1'];
  let date2 = query['date2'];
 if (date1 != '' && date2 != ''){
  pool.query(
    "SELECT * FROM monitoring_laboratorium WHERE date::text BETWEEN $1 AND $2",
    [date1,date2],
    function (error, results) {
      if (!error) {
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(results.rows));
      }
      else {throw error;}
    }
  );
 }
 else {
  pool.query(
    "SELECT * FROM monitoring_laboratorium",
    [],
    function (error, results) {
      if (!error) {
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(results.rows));
      }
      else {throw error;}
    }
  );
 }
}

else if (req.method === 'GET') {
 // resolve file path to filesystem path
 let fileurl;
 if (req.url == '/') fileurl = '/index.html';
 else fileurl = req.url;
 let filepath = path.resolve('./public/' + fileurl);
 // lookup mime type
 let fileExt = path.extname(filepath);
 let mimeType = mimeLookup[fileExt];
 if (!mimeType) {
   send404(res);
   return;
 }
 // see if we have that file
 fs.exists(filepath, function (exists) {
 // if not
   if (!exists) {
     send404(res);
      return;
   };
 // finally stream the file
   res.writeHead(200, { 'content-type': mimeType });
   fs.createReadStream(filepath).pipe(res);
 });
}

else {
 send404(res);
}

}).listen(process.env.PORT || 8080);


/*
**https with self sign cert and redirect https
**
**const https = require('https');
**
**const options = {
**  key: fs.readFileSync('/etc/tls/private/server.key'),
**  cert: fs.readFileSync('/etc/tls/private/server.crt')
**};
**
**https.createServer(options, function (req, res) {
**
**main web app
**
**}).listen(443);
**
**http.createServer(function (req, res) {
**
** res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
** res.end();
**
**}).listen(80);
*/

