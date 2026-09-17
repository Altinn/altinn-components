import{ag as o,a7 as e,r}from"./iframe-BlyVQ5Wf.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Surveys and consent/SkyraSurvey"}),`
`,e.jsx(n.h1,{id:"skyra-surveys",children:"Skyra surveys"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"SkyraSurvey"})," loads the Skyra survey SDK once the user has consented, and not before. It renders nothing."]}),`
`,e.jsx(n.p,{children:`Skyra serves its script unversioned and updates it continuously, so it cannot be pinned with Subresource
Integrity. The component instead points at a dated copy we host ourselves and passes the matching hash, so the
browser refuses to execute the script if the bytes differ from the ones that were reviewed.`}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Render it once, near the root of the app, somewhere that stays mounted across navigation so a changed answer is
picked up on every page.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SkyraSurvey, useConsent } from "@altinn/altinn-components";

const { consent } = useConsent();

<SkyraSurvey consent={consent.statistics} />;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"consent"}),` is the only required prop. Wire it to the statistics category of your cookie banner and let it
follow changes, the component handles both a fresh click and a returning user who consented earlier.
`,e.jsx(n.code,{children:"useConsent"}),` is the ready-made source for it, but any boolean works if your application already tracks
consent itself.`]}),`
`,e.jsxs(n.p,{children:["Do not load Skyra any other way. A ",e.jsx(n.code,{children:"<script>"})," tag or ",e.jsx(n.code,{children:"window.SKYRA_CONFIG"}),` in the page or in a tag manager loads
the SDK regardless of consent, and leaves the component nothing to gate.`]}),`
`,e.jsx(n.p,{children:"Nothing is requested before consent, not even the script."}),`
`,e.jsx(n.h2,{id:"route-changes-for-spa-only",children:"Route changes (for SPA only)"}),`
`,e.jsx(n.p,{children:`Survey targeting is evaluated per URL, so single-page apps must tell Skyra when the route changed. The hook
takes whatever value changes on navigation, so it works with any router. Before consent, and after a
withdrawal, it does nothing.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useSkyraReload } from "@altinn/altinn-components";

useSkyraReload(useLocation().pathname); // React Router
useSkyraReload(usePathname()); // Next App Router
useSkyraReload(router.asPath); // Next Pages Router
`})}),`
`,e.jsx(n.h2,{id:"debugging",children:"Debugging"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<SkyraSurvey consent={hasConsent} debug />
`})}),`
`,e.jsx(n.p,{children:`Enables Skyra's own debug logging and prints its diagnostic dump once. Logging from the SDK's own
initialisation is not captured. Note: the flag can only be set after the script has loaded, so nothing is logged
before consent.`}),`
`,e.jsx(n.h2,{id:"why-nothing-shows-up",children:"Why nothing shows up"}),`
`,e.jsxs(n.p,{children:["By far the most common cause is targeting. Skyra matches the hostname of a show rule by ",e.jsx(n.strong,{children:"exact equality"}),`,
with a leading `,e.jsx(n.code,{children:"www."})," as the only alias. ",e.jsx(n.code,{children:"localhost"})," does not match ",e.jsx(n.code,{children:"app.localhost"}),", and ",e.jsx(n.code,{children:"altinn.no"}),` does not
match any subdomain of it. Every hostname you want surveys on needs its own show rule in Skyra, including the
one you develop against.`]}),`
`,e.jsxs(n.p,{children:["After that, check in order: that a survey is published and live, that ",e.jsx(n.code,{children:"consent"})," is actually ",e.jsx(n.code,{children:"true"}),`, since
without it there is no script at all, and that the survey's own retake and retrigger timers have not already
been satisfied for this visitor.`]}),`
`,e.jsx(n.h2,{id:"cookies-to-register-in-your-cookie-banner",children:"Cookies to register in your cookie banner"}),`
`,e.jsx(n.p,{children:"All three are first-party and functional."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"skyra.state"})}),` — visitor id and the status of each survey, so a survey that has been answered or
dismissed is not shown again. Lasts 365 days.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"skyra.<survey-slug>"})}),` — answers in progress while a survey is being filled out, so it can be started on
one page and finished on another. Session, and cleared when the survey is completed or closed.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"skyra._test"})})," — verifies that cookies work at all. Momentary, deleted immediately after the check."]}),`
`]})]})}function h(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
