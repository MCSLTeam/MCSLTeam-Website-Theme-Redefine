hexo.extend.filter.register("after_post_render",function(t){if(!1!==this.theme.config.articles.style.image_caption){const e="image-caption";"post"!==t.layout&&"page"!==t.layout&&"about"!==t.layout||(t.content=t.content.replace(/(<img [^>]*alt="([^"]+)"[^>]*>)/g,`<figure class="${e}">$1<figcaption>$2</figcaption></figure>`))}return t});