---
title: "Markdown and syntax highlighting"
tags: markdown
layout: post

---
<!--more-->
With using Github Flavored Markdown, it is possible to set syntax
highlighting in [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#fenced-code-blocks) like so:

{% raw %}
    ```haskell
    putStrln "Hello World!"
    ```
{% endraw %}

But what about code blocks that are made up using four initial spaces on each line? The only option is to add {% raw %}{% highlight haskell %}{% endraw %}` and
`{% raw %}{% endhighlight %}{% endraw %}` after.

> Blocks of code are either fenced by lines with three back-ticks ```,
> or are indented with four spaces. I recommend only using the fenced
> code blocks -- they're easier and only they support syntax
> highlighting. -- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes)

## References
- [the source of the markdown cheatsheet](https://raw.githubusercontent.com/wiki/adam-p/markdown-here/Markdown-Cheatsheet.md?login=login&token=token)
