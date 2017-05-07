Reveal.initialize({
  history: true,
  controls: false,
  slideNumber: true,
  keyboard: true,
  dependencies: [
    { src: '/ressources/revealjs/plugin/markdown/marked.js' },
    { src: '/ressources/revealjs/plugin/markdown/markdown.js' },
    { src: '/ressources/revealjs/plugin/notes/notes.js', async: true },
    { src: '/ressources/revealjs/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
