---
title: 'Parcel Template Project'
description: 'Learn how to create your own Parcel Template for future projects'
date: '2021-08-31'
---

By now, I have initialized more than 10 different projects with Parcel, some with just regular CSS, some with SCSS included but all using the same file and folder structure so I guess is about time I create a start up template that I can clone from Github to my local machine and just get everything up and running.
<br>
Parcel, as you may know by now, maybe, is a simple web application bundler that doesn't require a config file. The tool bundles all individual files as modules into one big-ass file that will be executed by the browser. Parcel works with a lot of different file types: HTML, CSS, SCSS, LESS, Stylus, JavaScript, TypeScript, etc. but I've only used it with either HTML + CSS + JS or HTML + SCSS + JS, and I love it!

## Basic Files & Folder Structure

I'm sure that the way I structure my files and folders is nothing extrordinary as I'm almost 100% sure that this is how EVERYBODY structures their own projects. Basically you have one root folder with the main index.html file and two subfolders: dist & src.

The distribution or dist folder is where the project that the browser see lives, this is the folder that will have all your production ready files, the map.css file, the bundle js file, the optimized images, etc. It is important to tell that even if you don't create this folder, Parcel will create this for you during the development process or production build.

The source or src folder is where all the diferent modules and files live, Parcel will look into the folders within the src folder and bundle the files.

<img src="/img/folder-structure.jpg" style="width:278px; margin-top: 10px">
<br><br>

## NPM Init

Now that we have the structure, lets install Parcel, for that we are going to use the always reliable and always ready node package manager (NPM) and it's basic npm init command. I know there are different terminals but I'm a simple guy that uses VS CODE, which means I always use the VSCODE terminal.
<br><br>
So go ahead an open your prefered terminal, just make sure that you're inside the root folder of your project and then type the command below:

```
npm init
```

After typing that you will see a lot of basic questions like name, description, version, etc. you can fill those now or later, there's no difference. I always hit the return key until they're all done and then modify the information in the package.json file

Now, you will see a new file in your root folder: package.json, and it should look something like this:

```json
{
  "name": "parcelproject_template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## Install Parcel

Now we install Parcel by running the command below in your terminal:

```
npm install parcel --save-dev
```

We installed it as a dev dependency because we don't really need it for production, it's a tool that we will use to bundle and deploy the site but the code that actually does all this is not needed in the browser, as all this is done behind the curtain

In the past, and by past I mean two or three months ago, there was something going on with Parcel 2.0 that it was causing me to delete the cache folder and running the program over and over again to see the changes I've made to either HTML or CSS, but the last time I used it, it worked fine.
<br><br>

So just in case this happens to you I'm goign to tell you how I fixed it. To start I had to uninstall Parcel 2.0 by putting the command below in the terminal

```
npm uninstall parcel
```

Then, I just installed a known stable version of Parcel by putting the below command

```
npm install parcel@1.12.3 --save-dev
```

<strong>EDITOR'S NOTE:</strong> I wrote this post in a three day period and on the third day something happened to Parcel 2.0 that stopped working so I had to uninstalled and installed the 1.12.3 version and it's working perfectly.
<br><br>
Not completely sure this is the best approach and maybe there's something wrong on my side, but this seems to fix my problem everytime. Ok, now that we have Parcel installed, our package.json file should look something like this:

```json
{
  "name": "parcelproject_template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.0.0-rc.0"
  }
}
```

What we will do next is to write the scripts that will launch Parcel during development and the build command that will bundle and optimize everything for production. In the block below you will be able see the changes that we made to our package.json.

We removed the main direction in order to direct Parcel with the command build where to actually create the bundle files. And then we typed in two extra scripts, start, which initialize Parcel and deploys a local host for you to check your site, and build, for production, which would create or replace the files inside the dist folder with new ones all bundle up.

```json
{
  "name": "parcelproject_template",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.0.0-rc.0"
  }
}
```

## How to check if it worked?

At this moment I have a bunch of empty folders and an empty index.html file but in order to test that Parcel is actually working and doing what it needs to do we create basic HTML, CSS, JS files.

Go ahead and add the below code to your files:

Inside index.html you can see that I already put the reference to the main css and the script js files

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/css/main.css" />
    <script defer src="src/js/script.js"></script>
    <title>Placeholder</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Create the main.css file inside the css folder that's inside the src folder. Because the intention behind this is create a template you can add whatever CSS you like, I always put the box-sizing at the top and create a main.css file that eventually will have all the imports files

```css
*,
*::after,
*::before {
  box-sizing: border-box;
}

body,
h1 {
  padding: 0;
  margin: 0;
}

body {
  background: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: #fff;
  text-transform: uppercase;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: 3px;
}
```

And last but not least, the simple and always efficient console log test

```jsx
console.log('1, 2, 3... Testing Parcel 📦');
```

Now if you go ahead an open up the terminal and put the command

```jsx
npm run start
```

You should see something like the image below, and the message you put in your script.js file in the browser's dev tools

<img src="/img/hello-world.png" style="width:100%; margin-top:10px;">
<br><br>

## GitHub Repo and Use

Now that we have the folder, we can create a repo, initiate git in our root folder and commit all the files we have, just remember to create a .gitignore file to include things like the node_modules folder or the Parcel cache folder.
<br><br>
Congratz! Now you have an easy template that you can clone and push to a new repo! If you want to see how to clone and change the URL, go and read the instructiosn in the README file of my [Parcel_Template](https://github.com/jesusrmz19/Parcel_Template) repo.
