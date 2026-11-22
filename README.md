[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/zeromix555/news-image-20261121-entry/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/zeromix555/news-image-20261121-entry/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# The World in One Day — 21 November 2026

An entry for the [make.fun bounty "Sum up 21 November's world news in one image"](https://make.fun/bounty/news-image-20261121) ($100 in USDC).

## The image

`entry.png` is a newspaper front page for Saturday, 21 November 2026.
Under the masthead "THE WORLD IN ONE DAY", ten stories from that one
day share a single page: the war in Ukraine, the World Court's genocide
ruling on Myanmar, the AI sell-off on Wall Street, climate talks in
Antalya, a joint peace declaration in Shenzhen, the drone downed over
the Strait of Hormuz, and four more from the "Also today" strip — a
quake in Peru, a pancreatic-cancer pill trial, and Gen Z protests
across Europe.

Every headline is drawn as crisp text on the page, so each story reads
clearly at a glance and every word is spelled exactly as reported.
Sources include AP, Reuters, BBC, The New York Times, the
International Court of Justice, and the United Nations.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(`/output/entry.png` in the grader). No network, no dependencies,
fully deterministic: repeated runs write byte-identical output.

## License

MIT — see `LICENSE`.
