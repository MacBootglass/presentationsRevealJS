let links = $('link[rel="import"]');
let content;
let el;

for (var link of links) {
  content = link.import;
  el = $(content).find("body > section:first-child")[0];
  $("#import").append(el.cloneNode(true));
}

// TODO: Ajouter vérification de l'existence des fichiers
