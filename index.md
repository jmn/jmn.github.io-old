---
layout: default
---
<header>
	<a href="/"><h1>jmnorlund.net</h1></a>
</header>

<div class="listing">
{% for post in site.posts %}
    <div class="post">
      <p class="date">{{ post.date | date: "%B %e, %Y" }}</p>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-content">{{ post.content }}</p>
    </div>
{% endfor %}
</div>
