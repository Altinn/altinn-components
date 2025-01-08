## Config

https://next.theme.designsystemet.no/themebuilder?appearance=light&name=altinn-ds&main=company%3A%23111d46+person%3A%23084826&neutral=%231e2b3c&support=article%3A%230062ba+alert%3A%23e0304b&border-radius=4

npx @digdir/designsystemet@next tokens create \
   --main-colors "company:#111d46" "person:#084826"  \
   --neutral-color "#1e2b3c" \
   --support-colors "article:#0062ba" "alert:#e02e49"  \
   --theme "altinn-ds"

## Build colors

npx @digdir/designsystemet@next tokens build
