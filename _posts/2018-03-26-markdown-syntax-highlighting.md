---
title: "Markdown and syntax highlighting"
tags: markdown
layout: post

---
<!--more-->
With Github Flavored Markdown, it is possible to set syntax
highlighting in [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#fenced-code-blocks) like so:

{% raw %}
    ```haskell
    putStrln "Hello World!"
    ```
{% endraw %}

But what about code blocks that are made up using four initial spaces on each lin?? Like so:

<code>
    print "bar"
</code>

The only option is to add {% raw %}{% highlight haskell %}{% endraw %}` and
`{% raw %}{% endhighlight %}{% endraw %}` after:

{% highlight python %}
    print "bar
{% endhighlight %}

> Blocks of code are either fenced by lines with three back-ticks ```,
> or are indented with four spaces. I recommend only using the fenced
> code blocks -- they're easier and only they support syntax
> highlighting. -- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes)

You can check out the [source code of this blog post](https://github.com/jmn/jmn.github.io/blob/master/_posts/2018-03-26-markdown-syntax-highlighting.md) also.

Sidenote: Make sure to keep your post in UTF-8 format or Jekyll might spaz out.

## References
- [the source of the markdown cheatsheet](https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md?login=login&token=token)
