---
title: 'Deploy your Next JS app to Netlify'
description: 'Learn how to deploy your Next JS app to Netlify from a Git repo'
date: '2021-05-12'
---

As you may know, Netlify has something called continuous deployment, which lets you connect a Git repository to a Netlify site so when you make any changes in the repo your site gets updated automatically.
<br><br>
There are two ways to connect your git repo to Netlify: using the command line, or using the app UI. In this quick tutorial, I'm going to use the UI to show you how to deploy a Next JS repo.
<br><br>
First, you have to visit [https://app.netlify.com/start](https://app.netlify.com/start), after you are logged in you will see something like this:

<img src="/img/deploy-1.png" style="width:100%; margin-top: 10px;" >
<br><br>

Then after selecting your git provider, and getting the proper authorization, you will be able to select the repo you want. In my case I had one called "personalblog".

<img src="/img/deploy-2.png" style="width:100%; margin-top: 10px;" >
<br><br>

In the next page you could select the team, branch or even change the build command if necessary. But in my case, there's was no need, as the npm run build was my default build command and I left the rest as they were.

<img src="/img/deploy-3.png" style="width:100%; margin-top: 10px;" >
<br><br>

And that's it! By default, Netlify will create a random domain for you to access your site but you can always change it in the Site Settings once the deploy is finished. You could also add your own domain to the site you just deployed. For example, I already had my personal site hosted on Netlify, so I only had to add a subdomain from it and Netlify made the verification for

<img src="/img/deploy-4.png" style="width:100%; margin-top: 10px;" >
