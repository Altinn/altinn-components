# Skyra release archive

Dated, self-hosted copies of `skyra-survey.js`, captured from `https://survey.skyra.no/skyra-survey.js`.

Skyra serves that URL unversioned and updates it continuously, so it cannot be pinned with Subresource
Integrity. These copies exist so there is a stable set of bytes to hash. `SkyraSurvey.tsx` points at one of
them through jsDelivr and passes the matching `integrity` hash, so the browser refuses to execute the script
if the bytes ever differ from what was reviewed.

## Layout

```
releases/
  2026-08-10/
    skyra-survey.js         exactly the bytes fetched from Skyra. This is what is served.
    skyra-survey.pretty.js  beautified copy, review aid only. Never served, never hashed.
    manifest.json           version, SRI hash, size, capture time, CDN url.
```

Versions are the date of capture, `YYYY-MM-DD`, with a `-N` sequence suffix if a day ever needs a second
capture: `2026-08-10`, then `2026-08-10-1`, `2026-08-10-2`. A version counts as taken if it exists here or if
an open `release/skyra-*` branch already claims it, so a rerun never collides with a run that failed midway.

Semantic versioning does not apply: we do not control the source and cannot tell whether a change is breaking.

## Releases are write-once

Never edit or replace a file under `releases/`. Every published `integrity` hash downstream is computed over
those exact bytes, so changing one silently breaks every consumer pinned to it — the script simply stops
executing, with nothing but a console error to show for it. New bytes always mean a new dated directory.

For the same reason `vendor` is listed in `files.ignore` in `biome.jsonc`. Biome applies safe fixes on commit
via lint-staged, and it will happily rewrite minified vendor code and invalidate the hash.

## How these get here

`.github/workflows/skyra-check-upstream.yml` runs monthly, fetches upstream, hashes it, and opens a pull
request if the bytes changed. Detection is automated, adoption is not: a human reads the beautified diff and
decides. Reject anything that does not read as a plausible vendor release.

## Verifying a hash by hand

```
openssl dgst -sha384 -binary releases/<version>/skyra-survey.js | openssl base64 -A
```

Prefix the output with `sha384-` and compare against `manifest.json` and the constant in
`lib/components/SkyraSurvey/SkyraSurvey.tsx`.
