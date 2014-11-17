<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Post from Emacs org-mode to Jekyll with minimal configuration</a></li>
</ul>
</div>
</div>
<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Post from Emacs org-mode to Jekyll with minimal configuration</h2>
<div class="outline-text-2" id="text-1">
<ol class="org-ol">
<li>Load the library for exporting from org-mode to Markdown format.
</li>
</ol>
<div class="org-src-container">

<pre class="src src-emacs-lisp">(<span style="color: #ffffff; font-weight: bold;">require</span> '<span style="color: #d3d3d3; font-weight: bold;">ox-md</span>)
</pre>
</div>

<ol class="org-ol">
<li>Open the content you want to export in Emacs org-mode
</li>

<li>Open <code>org-export-dispatch</code> by pressing <code>C-c C-e</code>
</li>
</ol>
<p>
Use <code>C-s</code> if you want to limit the export to the current org subtree.
</p>

<ol class="org-ol">
<li>Press <code>m M</code> to export in Markdown to a new buffer.
</li>

<li>Insert the "YAML front matter in the top of the buffer
</li>
</ol>
<div class="org-src-container">

<pre class="src src-yaml">---
title: "example title"
layout: post
---
</pre>
</div>

<ol class="org-ol">
<li>Save the file to your Jekyll repository with a suitable filename (i.e. to <code>_posts/YYYY-MM-dd-post-title.md</code> and deploy (stage, commit and push) to publish the post. 
</li>
</ol>
</div>
</div>
