var a=Object.defineProperty;var t=(s,e)=>a(s,"name",{value:e,configurable:!0});import{ag as r,a7 as n,r as i}from"./iframe-Ck42qOx1.js";import"./preload-helper-Cc2_yIPf.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Surveys and consent/SkyraSurvey"}),`
`,n.jsx(e.h1,{id:"skyra-surveys",children:"Skyra surveys"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"SkyraSurvey"})," loads the Skyra survey SDK once the user has consented, and not before. It renders nothing."]}),`
`,n.jsx(e.p,{children:`Skyra serves its script unversioned and updates it continuously, so it cannot be pinned with Subresource
Integrity. The component instead points at a dated copy we host ourselves and passes the matching hash, so the
browser refuses to execute the script if the bytes differ from the ones that were reviewed.`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:`Render it once, near the root of the app, somewhere that stays mounted across navigation so a changed answer is
picked up on every page.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SkyraSurvey, useConsent } from "@altinn/altinn-components";

const { consent } = useConsent();

<SkyraSurvey consent={consent.statistics} />;
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"consent"}),` is the only required prop. Wire it to the statistics category of your cookie banner and let it
follow changes, the component handles both a fresh click and a returning user who consented earlier.
`,n.jsx(e.code,{children:"useConsent"}),` is the ready-made source for it, but any boolean works if your application already tracks
consent itself.`]}),`
`,n.jsxs(e.p,{children:["Do not load Skyra any other way. A ",n.jsx(e.code,{children:"<script>"})," tag or ",n.jsx(e.code,{children:"window.SKYRA_CONFIG"}),` in the page or in a tag manager loads
the SDK regardless of consent, and leaves the component nothing to gate.`]}),`
`,n.jsx(e.p,{children:"Nothing is requested before consent, not even the script."}),`
`,n.jsx(e.h2,{id:"route-changes-for-spa-only",children:"Route changes (for SPA only)"}),`
`,n.jsx(e.p,{children:`Survey targeting is evaluated per URL, so single-page apps must tell Skyra when the route changed. The hook
takes whatever value changes on navigation, so it works with any router. Before consent, and after a
withdrawal, it does nothing.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useSkyraReload } from "@altinn/altinn-components";

useSkyraReload(useLocation().pathname); // React Router
useSkyraReload(usePathname()); // Next App Router
useSkyraReload(router.asPath); // Next Pages Router
`})}),`
`,n.jsx(e.h2,{id:"debugging",children:"Debugging"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<SkyraSurvey consent={hasConsent} debug />
`})}),`
`,n.jsx(e.p,{children:`Enables Skyra's own debug logging and prints its diagnostic dump once. Logging from the SDK's own
initialisation is not captured. Note: the flag can only be set after the script has loaded, so nothing is logged
before consent.`}),`
`,n.jsx(e.h2,{id:"why-nothing-shows-up",children:"Why nothing shows up"}),`
`,n.jsxs(e.p,{children:["By far the most common cause is targeting. Skyra matches the hostname of a show rule by ",n.jsx(e.strong,{children:"exact equality"}),`,
with a leading `,n.jsx(e.code,{children:"www."})," as the only alias. ",n.jsx(e.code,{children:"localhost"})," does not match ",n.jsx(e.code,{children:"app.localhost"}),", and ",n.jsx(e.code,{children:"altinn.no"}),` does not
match any subdomain of it. Every hostname you want surveys on needs its own show rule in Skyra, including the
one you develop against.`]}),`
`,n.jsxs(e.p,{children:["After that, check in order: that a survey is published and live, that ",n.jsx(e.code,{children:"consent"})," is actually ",n.jsx(e.code,{children:"true"}),`, since
without it there is no script at all, and that the survey's own retake and retrigger timers have not already
been satisfied for this visitor.`]}),`
`,n.jsx(e.h2,{id:"cookies-to-register-in-your-cookie-banner",children:"Cookies to register in your cookie banner"}),`
`,n.jsx(e.p,{children:"All three are first-party and functional."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"skyra.state"})}),` — visitor id and the status of each survey, so a survey that has been answered or
dismissed is not shown again. Lasts 365 days.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"skyra.<survey-slug>"})}),` — answers in progress while a survey is being filled out, so it can be started on
one page and finished on another. Session, and cleared when the survey is completed or closed.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"skyra._test"})})," — verifies that cookies work at all. Momentary, deleted immediately after the check."]}),`
`]})]})}t(o,"_createMdxContent");function l(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}t(l,"MDXContent");export{l as default};
