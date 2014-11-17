---
title: "Post from Emacs org-mode to Jekyll with minimal configuration"
layout: post
tags: meta, emacs
---

1.  Load the library for exporting from org-mode to Markdown format.

    (require 'ox-md)

1.  Open the content you want to export in Emacs org-mode

2.  Open `org-export-dispatch` by pressing `C-c C-e`

Use `C-s` if you want to limit the export to the current org subtree.

1.  Press `m M` to export in Markdown to a new buffer.

2.  Insert the "YAML front matter in the top of the buffer

    ---
    title: "example title"
    layout: post
    ---

1.  Save the file to your Jekyll repository with a suitable filename (i.e. to `_posts/YYYY-MM-dd-post-title.md` and deploy (stage, commit and push) to publish the post.
