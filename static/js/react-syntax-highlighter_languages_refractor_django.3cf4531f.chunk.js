"use strict";(self.webpackChunkdwec_proy2_sayagomey_jesus=self.webpackChunkdwec_proy2_sayagomey_jesus||[]).push([[7899,3047],{6412:function(e,n,t){var a=t(595);function o(e){e.register(a),function(e){e.languages.django={comment:/^{#[\s\S]*?#}$/,tag:{pattern:/(^{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^{[{%][+-]?|[+-]?[}%]}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Tt]rue|[Ff]alse|[Nn]one/,variable:/\b\w+?\b/,punctuation:/[{}[\](),.:;]/};var n=/{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,t=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"django",n)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"jinja2",n)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"jinja2")}))}(e)}e.exports=o,o.displayName="django",o.aliases=["jinja2"]},595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,i){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==t.code.indexOf(o=n(a,s));)++s;return r[s]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,i=Object.keys(t.tokenStack);!function r(s){for(var u=0;u<s.length&&!(o>=i.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=i[o],g=t.tokenStack[c],p="string"===typeof l?l:l.content,f=n(a,c),d=p.indexOf(f);if(d>-1){++o;var k=p.substring(0,d),b=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),h=p.substring(d+f.length),m=[];k&&m.push.apply(m,r([k])),m.push(b),h&&m.push.apply(m,r([h])),"string"===typeof l?s.splice.apply(s,[u,1].concat(m)):l.content=m}}else l.content&&r(l.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_django.3cf4531f.chunk.js.map