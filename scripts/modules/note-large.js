function postNoteLarge(e,t){0===e.length&&e.push("default","Warning");let n="";const o=e[1];return o&&o.startsWith("fa")&&(n=`<i class="notel-icon fa-solid ${o}"></i>`,e[1]="icon-padding"),`\n  <div class="note-large ${e[0]}">\n    <div class="notel-title rounded-t-lg p-3 font-bold text-lg flex flex-row gap-2 items-center">\n      ${n}${hexo.render.renderSync({text:e[e.length-1],engine:"markdown"})}\n    </div>\n    <div class="notel-content">\n      ${hexo.render.renderSync({text:t,engine:"markdown"})}\n    </div>\n  </div>`}hexo.extend.tag.register("noteL",postNoteLarge,{ends:!0}),hexo.extend.tag.register("notel",postNoteLarge,{ends:!0}),hexo.extend.tag.register("notelarge",postNoteLarge,{ends:!0}),hexo.extend.tag.register("notel-large",postNoteLarge,{ends:!0}),hexo.extend.tag.register("notes-large",postNoteLarge,{ends:!0}),hexo.extend.tag.register("subwarning",postNoteLarge,{ends:!0});