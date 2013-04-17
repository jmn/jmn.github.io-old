---
layout: post
title: "Hello World"
description: ""
category: meta 
tags: [meta, jekyll]
excerpt: "An introduction."
---
{% include JB/setup %}

Hi. I intend to use this space to publish notes about technology. Configuration, solutions and stuff like that. To do this, I am using [Jekyll](http://jekyllbootstrap.com/lessons/jekyll-introduction.html).


----
When I want to create a new post I simply use the command
`rake post title="subject"` from my jmn.github.io repository.

That creates a markdown-file ([syntax](http://daringfireball.net/projects/markdown/syntax)) (YYYY-mm-dd-subject.md) in the `_posts` directory which I then edit. 

I use `jekyll --server` to preview the page locally before publishing it using the following git commands:

	git add .
	git commit -m "Added a new note on subject subject"
	git push origin master`


Here's the [Jekyll Quick start Guide](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) and here's a [Step by step guide to setting up a blog like this](http://www.duraisamy.co.uk/2012/04/03/build_website_using_github_and_jekyll/). 

If you are using Emacs org-mode, you might find this [guide to integrating Jekyll and org-mode](http://orgmode.org/worg/org-tutorials/org-jekyll.html) to be of use.

----
I hope that someone else might find something useful here, but if not, it does not matter much, at least I might myself come back and have a look when memory fails and save myself some time. 
