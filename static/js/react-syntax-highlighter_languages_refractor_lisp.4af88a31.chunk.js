"use strict";(self.webpackChunkdwec_proy2_sayagomey_jesus=self.webpackChunkdwec_proy2_sayagomey_jesus||[]).push([[3520],{3807:function(e){function n(e){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",s="&"+t,r="(\\()",i="(?=\\))",o="(?=\\s)",l={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(r+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)"+o),lookbehind:!0},{pattern:RegExp(r+"(?:for|do|collect|return|finally|append|concat|in|by)"+o),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp(r+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(r+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(r+"lambda\\s+\\((?:&?"+t+"\\s*)*\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(r+t),lookbehind:!0},punctuation:[/(['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},p={"lisp-marker":RegExp(s),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(r+t+"\\s+\\S[\\s\\S]*"+i),lookbehind:!0,inside:{string:l.string,boolean:l.boolean,number:l.number,symbol:l.symbol,punctuation:/[()]/}}}},d="\\S+(?:\\s+\\S+)*",u={pattern:RegExp(r+"[\\s\\S]*"+i),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+d),inside:p},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+d),inside:p},keys:{pattern:RegExp("&key\\s+"+d+"(?:\\s+&allow-other-keys)?"),inside:p},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};l.lambda.inside.arguments=u,l.defun.inside.arguments=e.util.clone(u),l.defun.inside.arguments.inside.sublist=u,e.languages.lisp=l,e.languages.elisp=l,e.languages.emacs=l,e.languages["emacs-lisp"]=l}(e)}e.exports=n,n.displayName="lisp",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lisp.4af88a31.chunk.js.map