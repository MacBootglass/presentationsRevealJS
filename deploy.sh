#!/bin/bash
mkdir dist
mkdir dist/revealjs
mkdir dist/jquery
cp -rf public/presentations dist/presentations
cp -rf public/ressources dist/ressources
cp public/index.html dist
cp -rf node_modules/jquery dist/ressources/jquery
cp -rf node_modules/reveal.js dist/ressources/revealjs
cd dist
# git init
# git config user.name "MacBootglass"
# git config user.email "thibault.theologien@insa-rouen.fr"
# git add .
# git commit -m "Deployed with Travis and from presentationsRevealJS"
# git push -fq --set-upstream "https://${GH_TOKEN}@${GH_REF}" master
find . -type f -exec curl --user macbootglass-presentations\\ttheologien:${password} --ftp-create-dirs -T {} ftp://waws-prod-am2-027.ftp.azurewebsites.windows.net/site/wwwroot/{} \;
