---
layout: page
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
	{%if post.excerpt != empty %} <em>{{ post.excerpt }}</em> {% endif %}

   {% if post.tags != empty %}
tags:
   {% endif %}
    {% for tag in post.tags %}
      <a class="tag_list_link" href="/tag/{{ tag }}">{{ tag }}</a>{% unless forloop.last %},{% endunless %}
      {% endfor %}

</li>
  {% endfor %}
</ul>


