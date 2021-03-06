# Initialise and Configure Our Project

To initialise run the command in project folder
```
npm init
```
that will ask a few questions to avoid that you can run
```
npm init -y
```

#### Install express and other dependencies
- **Express** is top framework of nodejs. Install using below command:
```
npm install express --save
```
- **Body Parser** is Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property
```
npm install body-parser --save
```
- **MySQL** is open source database use to interacting with database and manipulating the records.
```
npm install mysql --save
```
- **Nodemon** is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Use `-dev` flag to save in devDependencies and `--save` will save the dependencies in package.json file.
```
npm install --save-dev nodemon
```
- **Cors** is Node.js Cross-Origin Request middleware. It enables CORS for all the requests. You can simply use the cors middleware before configuring your routes:
```
npm install --save cors
```

Now simply run `npm start` to run the server that will auto restart the serve when detect any change in files.
```
npm start
```