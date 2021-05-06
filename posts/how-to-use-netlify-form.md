---
title: "How to use Netlify's built-in form"
description: "Learn how to use Netlify's built-in form functions to your advantage"
date: '2021-03-16'
---

Ok, here me out and be patient this is my first post explaining something.

I discovered Netlify a while ago, thanks to Wes and Scott of [Syntax FM](https://syntax.fm/) (great podcast, go check them out!). They have been sponsored by Netlify several times and they always talk about how easy is to use, host and deploy websites. So with my latest customer, I decided to go for it and take advantage of the free hosting because I knew it would be an automatic yes from the customer because of it. It was just a one-page website with classic about, services, and clients sections but in the contact portion, the customer wanted a form. So being new to Netlify I decided to investigate how it would work, hoping it would be easy, only to find out that they have the BEST SOLUTION EVER! Why? Because Netlify has a built-in form handling that is enabled by default, and in this post, I'm going to show you how to implement it.

## Form Creation

First, we create a simple form with some HTML and CSS.

You can see it live [here](https://netlifyformtest.netlify.app).

```
<form id="myForm" class="form" name="form">
  <label>Name:</label>
  <input type="text" id="name" name="name" placeholder="your name">
  <label>Email:</label>
  <input type="text" id="name" name="email" placeholder="your email">
  <label>Message:</label>
  <textarea type="text" name="message" placeholder="message"></textarea>
  <button id="submit" type="submit">Submit</button>
</form>
```

## Form Setup

Once you have the basic HTML and CSS, normally you would have to connect to a server, maybe use some PHP, an external plug-in, or even pay a third party for the service. But with Netlify, the only thing you need to do is add the `data-netlify: true` attribute to the `<form>` tag. And that's it.

You could even have more than one form on your page if you wanted to, as long as you have a different `name` attribute for each because that's how Netlify will identify them in the site admin panel.

## Success Message

But that's not it! By default, Netlify has a generic styled success message page with a link back to the original form page that you can personalize by adding an `action` attribute to the `<form>` tag and putting the personalized path to the page as long as it's relative to the site root, starting with a `/`.

So easy, right? Now, our form would look like the one below, with those simple attributes added, and it would work beautifully. The information from the contact can be retrieved via the admin panel or in my case, sent via email to the customer.

```
<form id="myForm" class="form" name="forma" method="POST" data-netlify="true" action="/success">
  <label>Name:</label>
  <input type="text" id="name" name="name" placeholder="your name">
  <label>Email:</label>
  <input type="text" id="name" name="email" placeholder="your email">
  <label>Message:</label>
  <textarea type="text" name="message" placeholder="message"></textarea>
  <button id="submit" type="submit">Submit</button>
</form>
```

## But there's more!

When I presented the form functionality to the client they didn't like that after clicking submission the end-user was moved to a different page where they needed to jump back by clicking another button. So at first, I suggested an automatic return but the main issue was not the button but the second page. I almost lost hope in the Netlify form because there's no information about another type of success message in their documentation. But while looking through the Netlify Support Community for answers I found that somebody was able to use the action to just refresh and return to the main page to show a success message.

After digging more I found that there's a `meta` tag that can refresh and even return a page after a certain amount of time.

```
<meta http-equiv="refresh" content="0;URL='https://netlifyformtest.netlify.app#success'" />
```

With that implemented, I just had to create the success message element on my form page, and display it after finding the #success in the URL with a little JavaScript

```
<div class="container--success">
  <p>Your message was sent succesfully!</p>
</div>
```

```
<script type="text/javascript">
   let url = window.location.href;
   if (url.search('success') > 0) {
       document.querySelector('.container--success').classList.add('sent');
   } else {
       document.querySelector('.container--success').classList.remove('sentd');
   }
</script>
```

AAAAAAAND THAT'S IT! Isn't it so simple? In the end, the customer was happy and I was able to implement another easy and secure solution thanks to Netlify.

If you want to see the final result, send a note on the form [here](https://netlifyformtest.netlify.app).
