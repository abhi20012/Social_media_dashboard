# Employee-Review-System
[Github Link](https://github.com/abhi20012/Social_media_dashboard) 



## Table of Contents 📕

- [Description](#description)
- [Tools and Technology](#tools-and-technology)
- [Features :](#features)
- [How to Setup the project on local system](#how-to-setup-the-project-on-local-system)
- [Folder Structure](#folder-structure)


### Description
* The Challenge
    * Developed REST ful APIs for handling social media data.
    * Essential features expected 
       1. User sign-in | sign-up flow
       2. Authentication and Authorization 
       3. On login user get to post home page of social media.
       4. User can make new posts and all the data will be stored in MongoDB.
       5. Comments and like can be made on each posts.
   


### Tools and Technology

* Front-end: EJS
* Back-end: **MongoDB for the database which provide facality to add, remove and update users. **Node.js, **Express.js.

### Features
	Frontend dashboard can have total count of all the users and posts made on website.

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````



### Folder Structure

```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |             	|--->Js
    |
    |              
    |--->config---->|--->mongoose.js
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->post_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->like_controller.js
    |                  |-->user_controller.js
    |
    |               |-->post.js
    |--->models---->|-->like.js
    |               |-->user.js
    |				|-->comment.js
    |              
    |               |-->post.js
    |--->routes---->|-->index.js
    |               |-->comment.js
    |               |-->like.js
    |
    |              |--->_header.ejs
    |              |---> _footer.ejs
    |              |---> home.ejs
    |              |---> layout.ejs
    |--->views---->|
    |              |
    |              |---> user_profile.ejs
    |              |--->sign_in.ejs
    |              |--->sign_up.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
