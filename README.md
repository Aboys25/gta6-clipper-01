# GTA 6 Police Chase Ends With an Insane Bike Jump — gta6-clipper-01

Entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
($500 shared by the 20 most-watched videos). The video is the entry:
places go by its YouTube views at the deadline, most first.

## The clip

`clip.mp4` — 20.5 seconds, vertical 1080x1920 (a YouTube Short), H.264 + AAC.

**The moment (one moment, not a montage):** a police chase through Vice
City that ends with a dirt bike jumping off an elevated ramp and flying
between the buildings — taken from Rockstar's official **Grand Theft Auto
VI Launch Trailer** (youtube.com/watch?v=rz1B4B2yBZY, 90 seconds, 85M+
views), trailer time 46.5–51.0. I picked this moment because:

- the hook lands in the first second: a police car drifting through a
  Vice City intersection is instantly, unmistakably GTA — no context
  needed, and a scroller decides in that first second whether to stay;
- the peak frame is the bike mid-air over the train line at golden hour
  (trailer time ~50.0) — the single most spectacular shot in the trailer,
  and the frame the whole clip is built around;
- it is one continuous chase inside a single trailer scene (police drift
  → bike ramp → jump → landing), so the clip never feels like a montage.

**Creative / structure:**

1. **0.0–4.5 s — the hook.** The chase at full speed with the trailer's
   own music, vertical blur-fill crop (1080x1920) so nothing important
   falls off the sides.
2. **4.5–10.5 s — slow-motion replay.** The jump again at half speed
   (0.5x), with the pitch on screen: "Make clips like this / with AI".
3. **10.5–15.5 s — the peak frame, frozen.** The mid-air shot held
   still: "and earn money / on make.fun".
4. **15.5–20.5 s — call to action.** Same frame: "make.fun/bounty/ /
   gta6-clipper-01" in yellow.

The pitch text sits in the middle of the frame (the vertical safe area,
clear of YouTube's buttons), each line on screen 5–6 seconds — well over
the 2–3 seconds a line needs to be read. The pitch audio is silent on
purpose (the slow-motion and frozen sections carry no audio); the
trailer's music plays only under the hook.

**How it was made (all in the recorded agent session):** the Launch
Trailer was fetched with `yt-dlp` in the session, the moment was chosen
by inspecting the trailer frame by frame, and the clip was cut and
rendered with `ffmpeg` commands run in the session (trim, letterbox crop
1920x960, blur-fill to 1080x1920, `setpts` slow motion, `drawtext` for
the pitch, concat). The render was checked frame by frame before
hand-off. No finished clip was downloaded and no clip was made outside
the session.

## The video on YouTube

- **Title:** Klip GTA 6 — gta6 clipper 01
- **Status:** Public (kept public until the results are out), posted
  between the bounty opening (2026-11-20T01:00:00Z) and the deadline
  (2026-11-23T01:00:00Z).
- **Description** (the bounty line word for word, plus the entrant's
  play code — verified as saved in YouTube Studio):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-canyon-trout-hummus
```

The video's address is in `VIDEO.json` (written by a follow-up agent
session, also started after the opening), and the entry is submitted
after the repository is pushed. Never buy views or use bots — a video
whose views were bought or botted is disqualified.

## What main.ts does

Nothing about the video is scored from this program — the house reads the
video itself through the YouTube Data API. `main.ts` (Node 22, standard
library only) only copies `VIDEO.json` from the repository root to
`/output/VIDEO.json`, byte for byte. No network, no wall clock, no files
outside the repository; two runs write identical bytes.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
