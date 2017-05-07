#!/bin/bash
mkdir dist
mkdir dist/revealjs
mkdir dist/jquery
cp -rf public/presentations dist/presentations
cp -rf public/ressources dist/ressources
cp public/index.html dist
cp -rf node_modules/jquery/dist dist/ressources/jquery/
cp -rf node_modules/reveal.js/js dist/ressources/revealjs/
cp -rf node_modules/reveal.js/css dist/ressources/revealjs/
cp -rf node_modules/reveal.js/plugin dist/ressources/revealjs/
cd dist
find . -type f -exec curl --user macbootglass-presentations\\ttheologien:${password} --ftp-create-dirs -T {} ftp://waws-prod-am2-027.ftp.azurewebsites.windows.net/site/wwwroot/{} \;
