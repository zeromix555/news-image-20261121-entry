# The World in One Day — Saturday, 21 November 2026

A make.fun `news-image-20261121` entry. The program writes one image that sums
up the world's news of Saturday 21 November 2026 to `/output/entry.png`.

## The image

A news-poster montage: a generated illustration of Earth at night over Europe
(missile streaks, the scales of justice, a falling market chart, a summit hall)
under the masthead "THE WORLD IN ONE DAY — SATURDAY, 21 NOVEMBER 2026", with
six story cards drawn in crisp text:

1. **War / Ukraine** — Russia's biggest barrage of November: 404 drones and
   111 missiles hit Ukraine; at least 8 killed in Kyiv; two missiles and a
   drone land in Poland.
2. **Justice / The Hague** — The World Court finds Myanmar responsible for
   genocide against the Rohingya, a first for the court.
3. **Markets / Wall Street** — AI sell-off drags the S&P 500 into correction.
4. **Climate / COP31, Antalya** — Climate talks run past their deadline as
   fossil-fuel language drops from the draft deal.
5. **Diplomacy / Shenzhen** — Trump, Xi and Putin sign a joint peace
   declaration.
6. **Middle East / Hormuz** — Iran downs a US MQ-9 drone over the Strait.

Plus an "Also today" strip (Peru magnitude 6.8 quake, pancreatic-cancer pill
trial, Gen Z protests across Europe).

All headlines and labels are drawn programmatically, so every word is spelled
exactly as reported. Sources: AP, Reuters, BBC, The New York Times, the
International Court of Justice, the United Nations.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR/entry.png`
(`/output/entry.png` in the grader). No network, no dependencies, deterministic:
both runs write the same bytes.

## License

MIT — see `LICENSE`.
