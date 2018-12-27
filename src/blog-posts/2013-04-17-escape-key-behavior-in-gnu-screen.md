---
layout: post
title: "Escape key behavior in GNU Screen"
description: ""
category: shell
tags: [emacs, vim, screen]
excerpt: "Make it stop behaving badly."
---
Part of the reason I decided to start publishing things here, is that I sometimes run into what seems to be a small annoying tech problem, look for a solution, which sometimes can take time: and solve it only to years later have the very same problem pop up again. 

One such problem has been coming up when I've been using Vim and GNU Emacs under GNU screen. 

One solution, for vim was to add the following lines to .vimrc:

`if $TERM == "screen"
    set term=xterm
endif`

But the easiest way of solving the problem seems to be to add this line to .screenrc:

`maptimeout 2`


