# narrow-cms-example

An example implementation of NarrowCMS. NarrowCMS is a light-weight content management system for MEAN stack developers.

## requirements

### server

* MongoDB: Tested against v3.02
* Node.js: Tested against v0.12.3

Additionally it requires (included with this example):

* Express: Tested against v4.12.4
* Mongoose: Tested against v4.05
* NarrowCMS Server: Tested against v0.0.2

MongoDB needs to be running before starting the example.

### client

* Internet Explorer v9 or greater for public facing elements.
* Internet Explorer v10 or greater for administrative interface.
* Updated versions of all other browsers

Additionally it requires (included with this example):

* AngularJS: Tested against v1.4.0
* angular-resource: Tested against v1.4.0
* angular-cookies: Tested against v1.4.0
* CKEditor: Tested against v4.4.7
* NarrowCMS Client: Tested against v0.0.3

## getting started

1. Download ZIP and unzip.
2. From inside folder, execute "npm install".
3. From inside folder, execute "bower install".
4. From inside folder, execute "node index.js" (starts example).
5. From browser open: http://localhost:3000/mycms
6. Login with admin password "mypassword".
7. Create four editables (make first a Heading 1 and third a Heading 2) and make note of their ids.
8. Create a user.
9. Logout of admin.
10. From inside folder, edit "public/js/app.js" and update four editable ids.
11. From browser open: http://localhost:3000
12. Login as user created above.

## next steps

Now that one used the working example, one can implment NarrowCMS in their own MEAN application.

### server install

As with this example, NarrowCMS Server requires MongoDB, Node.js, Express, and Mongoose.

From inside the root of ones MEAN application, execute:
"npm install narrow-cms-server --save".

Using the commented file "./index.js" as an example, include the NarrowCMS Server block (acts as middleware) into ones Express application.

### client install

As with this example, NarrowCMS Client requires AngularJS, angular-resource, angular-cookies, and CKEditor.

From inside the root of ones MEAN application, execute:
"bower install narrow-cms-client --save". This will additionally install the AngularJS packages into ones Bower components folder, e.g., "bower_components".

Either use a CDN version of CKEditor (as in this example) or download a copy of CKEditor from:

http://ckeditor.com/

Using the commented file "./public/index.html" as an example, include the NarrowCMS Client requirements.

Using the commented files "./public/index.html" and "./public/js/app.js" as an example, implement NarrowCMS in ones AngularJS application.

## api reference

See the following for the server and client API reference.

* https://github.com/larkintuckerllc/narrow-cms-server
* https://github.com/larkintuckerllc/narrow-cms-client
