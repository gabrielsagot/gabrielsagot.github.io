#!/bin/bash
# Lance le serveur local du portfolio (avec page 404 personnalisée)
# et ouvre le navigateur automatiquement.
# Double-cliquer ce fichier dans le Finder, ou l'exécuter : ./start.command

cd "$(dirname "$0")" || exit 1

URL="http://localhost:8080/Portfolio_pro/index.html"

# Ouvre le navigateur dès que le serveur répond
( until curl -s -o /dev/null "$URL"; do sleep 0.3; done; open "$URL" ) &

python3 server.py
