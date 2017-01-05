Reveal.initialize({
  history: true,
  controls: false,
  slideNumber: true,
  keyboard: true,
  dependencies: [
    { src: '../revealjs/plugin/markdown/marked.js' },
    { src: '../revealjs/plugin/markdown/markdown.js' },
    { src: '../revealjs/plugin/notes/notes.js', async: true },
    { src: '../revealjs/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
