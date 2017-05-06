git config user.name "MacBootglass"
git config user.email "thibault.theologien@insa-rouen.fr"
git add -f public/*
git add -f node_modules/*
git commit -m "Deployed with Travis and from presentationsRevealJS"
git push -fq --set-upstream "https://${GH_TOKEN}@${GH_REF}" master
