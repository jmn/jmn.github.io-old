---
title: "From org to markdown"
tags: "meta"
---
<!--more-->
Configure Emacs to enable orgmode markdown exports.

Code blocks

    putStrln "Hello World!"

Use the `org-export-dispatch` (`C-c e`) and export to a temporary buffer.

Add highlighting tags, eg {% raw %} {% highlight python %} &#x2026; {% endhighlight %}
{% endraw %} for non-default languages.

{% highlight python %}

    print("Hello world!")

{% endhighlight %}

Add the YAML front-matter to make Jekyll display the post.

{% highlight yaml %}

    ---
    title: "From org to markdown
    tags: "meta"
    ---

{% endhighlight %}
