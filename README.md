# Monitoring Laboratorium

## Build interface and data processing laboratorium temperature and humidity from field instrument.

### Descriptions

* Using PHP runtime environtment version 7.4
* Using jQuery [here](https://jquery.com/download/)
* Using MDBootstrap 5 [here](https://mdbootstrap.com/docs/standard/getting-started/installation/)
* Using PostgreSQL

Field instrument can be microcontroller with temperature and humidity sensor.<br>
Laboratorium temperature and humidity from field instrument sending data with HTTP request GET method.<br>
String HTTP request GET:<br>
`http://[ip address or domain]/add.php?device_name=[device name]&device_ipaddr=[device ip address]&temperature=[temperature value]&humidity=[humidity value]`<br>

### Result
Main Page<br>
![main-page](./img/monitoring-laboratorium-1.png)
HTTP Request GET<br>
![http-request-get](./img/monitoring-laboratorium-2.png)
Mobile<br>
![mobile-web-browser](./img/monitoring-laboratorium-3.png)
