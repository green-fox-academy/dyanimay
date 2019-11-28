## 1. Folder Structure
* [ ] create /assets 
  * [ ] create style.css
  * [ ] pictures (if needed) 
* [ ] create /public
  * [ ] create index.html 
  * [ ] index.js (frontEnd JS)
* [ ] create /server 
  * [ ] create db.js
  * [ ] create routes.js
* [ ] create server.js - in the main folder where are the node modules

## 2. copy and run .sh files
* [ ] copy .sh files from week-10/orientation folder
* [ ] run in console "sh ......"

## 2. Create MySQL Database
* [ ] Go to: https://wtools.io/generate-sql-create-table
* [ ] Create table and these columns:
  * [ ] id: INT, auto increment, unsigned, NOT "allow null", KEY tick
  * [ ] name: VARCHAR, length: 255, allow null
  * [ ] url: VARCHAR, length: 510, allow null
  * [ ] secretCode: INT, length: 4, zerofill
* [ ] Terminal: mysql -u root -p (T0thba1csecse)
  * [ ] show databases;
  * [ ] create database TestExam;
  * [ ] use database TestExam;
  * [ ] copy the link from the website
  * [ ] exit;

## 3. Create index.html
* [ ] use html:5 auto completion
* [ ] head: `<link rel="stylesheet" href="../assets/style.css">`
* [ ] if a message has to be shown, create DIV or something: 
  * `<div class="message"></div>`
* [ ] create FORM for the input fields:
see orientation example index.html
```
<form>
  <label for="url">URL</label>
  <input type="text" name="url" id="url"/>
  <label for="alias">Alias</label>
  <input type="text" name="alias" id="alias"/>
  <button type="button" class="button">Submit</button>
</form>
```
  * "type" is for the validation!! It can be text/e-mail/url/tel
* [ ] add script at the end of body tag to connect frontend html and js together: 
  * `<script type="text/javascript" src="./index.js"></script>`

## 4. CSS tips if it is needed
* to set text center: "text-align: center"
* to set a div or box center: "margin: 0 auto;"

## 5. 