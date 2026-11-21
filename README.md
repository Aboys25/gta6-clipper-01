# gta6-clipper-01 — REVISI video editan Wildan (dipakai untuk submit)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Aboys25/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Aboys25/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
($500 shared by the 20 most-watched videos). The video is the entry:
places go by its YouTube views at the deadline, most first.

## The live video

- **Shorts:** https://www.youtube.com/shorts/S8-kTsS_T9U
- **Channel:** Quotes_WD (https://www.youtube.com/@quotes_wd3791)
- **Title:** `GTA 6: Lucia Jumped Off the Bridge — Jason Got Arrested! #GTA6 #Shorts`
- **Uploaded:** 21 November 2026, **Public**, 39 detik
- `VIDEO.json` in this repository now holds that address (no longer a
  placeholder). The address is the canonical Shorts form, without the
  `?si=` tracking parameter from the link Wildan sent.

## The clip — REVISI dari video editan Wildan sendiri

`clip.mp4` — **REVISI dari video editan Wildan sendiri** (dia yang edit di
aplikasi editnya; file ini disalin apa adanya ke entry dir tanpa perubahan:
tanpa re-render, tanpa ubah styling/teks — dia yang menentukan gaya teksnya
sendiri). Video ini MENGGANTIKAN versi sebelumnya (`clip-wildan-v1.mp4`,
sha256 `24c6bfee5ef030f06ff8a3d16ec3881ba9c264fe25b64b14b2446d16c86a1172`,
di-backup di `~/workspace/makefun/clipper-wildan-work/clip-wildan-v1.mp4`).

- Durasi: 38,86 detik (< 60 detik, syarat Short ✅)
- Format: vertikal 9:16, **720x1280**, 50 fps, H.264 + AAC, 35.862.903 byte
- sha256: `c22e45ed01b7a25e43c9e0037fa084aaae96c5dda7b238bd42628209fd9489f0`
- Catatan resolusi: 720x1280 adalah resolusi export dari aplikasi edit
  Wildan (versi sebelumnya 1080x1920). Ini tetap format Short yang sah di
  YouTube (vertikal 9:16) — hanya lebih rendah resolusinya.

**Story arc (Jason & Lucia, dari trailer resmi GTA VI):**

1. **Jembatan saat senja** — Jason & Lucia: "THE MOMENT",
   "I'M WITH YOU ALL THE WAY", "YOU KNOW THAT RIGHT?", "OF COURSE".
2. **Hitung mundur** — "THREE TWO ONE JUMP" — Lucia lompat dari jembatan,
   tangan terulur.
3. **Penangkapan** — mugshot Jason (Vice-Dale Police, 00468723).
4. **Penjara oranye** — "HEY DUVALL", "YOU GOT A VISITOR".
5. **Kunjungan** — anak bawa bola, lalu anak dan Jason di balik kaca penjara.
6. **"The end"** card.

Branding "Quotes_WD" (kotak oranye) + overlay camcorder REC utuh di semua
frame. Tidak ada watermark kreator lain.

**Pitch make.fun (SUDAH dibakar Wildan sendiri ke dalam klip):** teks kuning
di atas footage yang tetap bergerak (bukan frame beku):
- ~14,5–21,7 dtk: "MAKE CLIP LIKE THIS"
- ~22–28 dtk: "WITH AI AND EARN MONEY"
- ~29–36 dtk: "Make.fun/bounty/gta6-clipper-01"

Teks pitch ini gaya Wildan sendiri (kuning, font dari aplikasi editnya) —
bukan font Anton yang dipakai di klip v3 dan di versi v1; revisi ini tidak
diubah styling-nya sama sekali.

## The program

`main.ts` (Node 22, standard library only) does one thing: it copies
`VIDEO.json` from the repository root into the output directory, byte for
byte. The house reads the video itself through the YouTube Data API; this
program only hands over the video's address.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run twice: `out/VIDEO.json` is byte-identical with the repository's
`VIDEO.json` on both runs.

## Posting (done — for the record)

1. ✅ Upload `clip.mp4` to the **Quotes_WD** YouTube channel as a **Public**
   Short — done 21 Nov 2026.
2. ✅ Title (copied exactly):

   `GTA 6: Lucia Jumped Off the Bridge — Jason Got Arrested! #GTA6 #Shorts`

3. ✅ Description (the `$500 bounty` line is word for word, the play code
   is the account's existing one):

   ```
   GTA 6: Lucia jumped off the bridge... and Jason got arrested. "I'm with you all the way." 💔

   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

   Play code: makefun-canyon-trout-hummus

   #GTA6 #GTAVI #Shorts #ViceCity #Quotes_WD
   ```

4. ✅ Shorts URL sent back to the agent and filled into `VIDEO.json`:
   https://www.youtube.com/shorts/S8-kTsS_T9U
5. Keep the video **Public** until the results are out (deadline
   23 Nov 2026 08:00 WIB). The old round-1 video stays public too until
   the new entry replaces it.

## Verification (this session)

- `clip.mp4` re-checked: sha256 `c22e45ed…` matches the revised file;
  ffprobe 720x1280 (vertikal 9:16), 38,86 s, 50 fps, H.264 + AAC.
- Live URL checked without login (yt-dlp metadata + oEmbed): title matches
  exactly, channel **Quotes_WD**, duration 39 s, uploaded 21 Nov 2026,
  720x1280 50 fps — the uploaded video is the revised file. The video is
  reachable anonymously (oEmbed returns it, which private videos do not);
  availability flag itself was not determinable from the metadata fetch,
  so the uploader should confirm it shows as Public on the channel.
- `main.ts` run twice to two separate output dirs; `out/VIDEO.json`
  byte-identical on both runs and carries the live Shorts address
  S8-kTsS_T9U (not the placeholder).
- Two frames read back from the final file (previous session): a pitch card
  and the final "The end" frame — both clean, no other creator's watermark.

## Note on the earlier versions

- Versi sebelumnya (editan Wildan v1, 38,87 dtk, 1080x1920, sha256
  `24c6bfee…`) di-backup di
  `~/workspace/makefun/clipper-wildan-work/clip-wildan-v1.mp4`.
- Klip v3 (agent rebuild dari trailer resmi, 31,9 dtk, sha256
  `f3953622…`) di-backup di `~/workspace/makefun/clipper-v3-work/clip-v3.mp4`.

## License

MIT — see [LICENSE](LICENSE).
