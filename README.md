# **AI-Radio**

*The fully autonomous, always-on radio station powered by generative intelligence*

---

> **Vision** : Deliver a seamless, 24 / 7 listening experience where every track, jingle, host voice and recommendation is born from AI—curated in real-time, free of licences, and shaped by each listener’s taste.

---


## Project Overview

AI-Radio is a **futuristic, minimalist web application** that streams an infinite radio channel created entirely with generative models. It couples:

* **AI-generated tracks** (music, beds, sweepers, stingers)
* **AI DJs & jingles** for voice-overs and station IDs
* **Real-time adaptive playlists** matching listener mood and feedback
* **Advanced discovery tools** so users can search or filter by genre, tempo, emotion, or even lyrics

All content is produced on-the-fly, eliminating traditional licensing costs and enabling hyper-personalised programming.

---

## Core Features

| Category               | Capabilities                                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Streaming**          | Continuous radio feed with gap-less playback, dynamic cross-fades, now-playing metadata, adjustable quality (e.g., 64 kbps to 320 kbps). |
| **Generative Engine**  | On-demand music composition, voice synthesis (multi-speaker), and sound-design layers via configurable AI pipelines.                     |
| **Personalisation**    | Recommender system learns from skips, likes, listening window, geolocation & time of day.                                                |
| **Search & Discovery** | Semantic search (lyrics / mood), faceted filters (genre, BPM, energy), "Surprise Me" shuffle.                                            |
| **User Accounts**      | Optional sign-in, favourites, session history, custom playlists & shareable moments.                                                     |
| **UI/UX**              | Futuristic, neon-tinged dark mode by default, responsive from 320 px to 4 K, keyboard shortcuts, accessibility AA+.                      |
| **Admin Console**      | Dashboard for monitoring generation queue, metrics, content moderation flags, and A/B experiment toggles.                                |

---

## Quality & Testing

* **Unit tests** for pure functions & helpers.
* **Integration tests** spanning API, streaming, and generation pipelines.
* **End-to-End tests** automating the browser to validate the listening flow.
* **Linting & formatting** executed pre-commit and in CI.
* **Static analysis** for security & type correctness.

---

## Security & Compliance

* Content moderation pipeline to detect NSFW or unsafe generations.
* OWASP Top 10 mitigation checklist (input validation, rate limiting, CSRF, etc.).
* GDPR ready (EU user data rights, consent banner, DPA addendum).
* Regular dependency scanning (SCA) & vulnerability alerts.

---

## Performance, Observability & Analytics

* Global CDN for static assets & audio chunks.
* Real-time monitoring (latency, error rate, generation lag).
* Tracing of AI generation requests for cost & token usage optimisation.
* Anomaly alerts (e.g., drop in stream health) piped to on-call rota.

---

## Internationalisation & Accessibility

* Language packs loaded dynamically; default fallback to English.
* ARIA roles on custom components, focus outlines, colour-contrast ≥ 4.5.
* Option to reduce motion for users with vestibular disorders.

---

## SEO & Social Sharing

* Server-rendered meta tags (title, description, OG, Twitter).
* Structured data for `MusicRecording` and `PodcastEpisode` where applicable.
* Open Graph audio previews for track sharing links.

---

## Code of Conduct

This project adheres to the **Contributor Covenant v2.1**. By participating, you agree to uphold a respectful, inclusive environment.

---

## Licence

Distributed under the **MIT Licence**.

---

## Contact

*Project Lead* · **<@usernamap>**
email : `contact@aliatech.fr`

