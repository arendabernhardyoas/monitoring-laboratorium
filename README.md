# Monitoring Laboratorium

## Build interface and data processing laboratorium temperature and humidity from field instrument.

### Descriptions

* Using NodeJS runtime stack version 14 LTS
* Using jQuery [here](https://jquery.com/download/)
* Using MDBootstrap 5 [here](https://mdbootstrap.com/docs/standard/getting-started/installation/)
* Using PostgreSQL

Field instrument can be microcontroller with temperature and humidity sensor.<br>
Laboratorium temperature and humidity from field instrument sending data with HTTP request GET method.<br>
String HTTP request GET:<br>
`http://[ip address or domain]:[port]/add?device_name=[device name]&device_ipaddr=[device ip address]&temperature=[temperature value]&humidity=[humidity value]`<br>

### Result
Main Page<br>
![main-page-1](./images/monitoring-laboratorium-1.png)
![main-page-2](./images/monitoring-laboratorium-2.png)
![main-page-3](./images/monitoring-laboratorium-3.png)
HTTP Request GET<br>
![http-request-get](./images/monitoring-laboratorium-4.png)
Mobile<br>
![mobile-web-browser](./images/monitoring-laboratorium-5.png)
