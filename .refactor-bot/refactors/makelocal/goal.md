
```yaml
# For information about possible options have a look at the code:
# https://github.com/zaripych/refactor-bot/blob/main/src/refactor/types.ts#L5
budgetCents: 200
model: gpt-4o
```

this repository is currently using cloudflare workers. rewrite it so that it just works on a plain node.js server single instance. do not use cloudflare workers. i should be able to deploy it to a single instance of a node.js server via a dockerfile. to give you an example of the link-preview endpoint, here is the response for the url https://www.heise.de/ratgeber/Kuehlen-mit-der-Waermepumpe-Wenn-die-Fussbodenheizung-Kaelte-liefert-9769544.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus"

{
  "url": "https://www.heise.de/ratgeber/Kuehlen-mit-der-Waermepumpe-Wenn-die-Fussbodenheizung-Kaelte-liefert-9769544.html?wt_mc=rss.red.ho.ho.rdf.beitrag_plus.beitrag_plus",
  "images": [
    "https://affine-worker.eikaramba-cloudflare.workers.dev/api/worker/image-proxy?url=https%3A%2F%2Fheise.cloudimg.io%2Fbound%2F1200x1200%2Fq85.png-lossy-85.webp-lossy-85.foil1%2F_www-heise-de_%2Fimgs%2F18%2F4%2F6%2F1%2F7%2F2%2F1%2F1%2F2024_WaermepumpeV3-408af921f68b00b8.jpg",
    "https://affine-worker.eikaramba-cloudflare.workers.dev/api/worker/image-proxy?url=https%3A%2F%2Fheise.cloudimg.io%2Fwidth%2F610%2Fq85.png-lossy-85.webp-lossy-85.foil1%2F_www-heise-de_%2Fimgs%2F18%2F4%2F6%2F1%2F7%2F2%2F1%2F1%2F2024_WaermepumpeV3-e79f602f34cd20d1.jpeg"
  ],
  "videos": [],
  "favicons": [],
  "title": "Kühlen mit der Wärmepumpe: Wenn die Fußbodenheizung Kälte liefert",
  "description": "Wärmepumpen heizen nicht nur effizient, sie können Wohnräume auch kühlen. Was das fürs Verteilsystem bedeutet und welche Temperaturen möglich sind. ",
  "siteName": "heise online",
  "mediaType": "website"
}
