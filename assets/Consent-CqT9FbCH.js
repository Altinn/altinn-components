import{ag as o,a7 as e,r as i}from"./iframe-Dvni_u8W.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Surveys and consent/Cookie consent"}),`
`,e.jsx(n.h1,{id:"cookie-consent",children:"Cookie consent"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useConsent"}),` reads and writes the shared Altinn consent cookie. It resolves the environment's cookie domain
itself, so an application never has to know about domains or the value format.`]}),`
`,e.jsx(n.p,{children:`Every instance shares one store, so a banner and the components gated by it stay in sync without a provider
above them, including where there is no common React root.`}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SkyraSurvey, useConsent } from "@altinn/altinn-components";

const { consent, isAnswered, acceptAll, rejectAll } = useConsent();

return (
  <>
    <SkyraSurvey consent={consent.statistics} />
    {!isAnswered && <CookieBanner onAccept={acceptAll} onReject={rejectAll} />}
  </>
);
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"consent.statistics"})," — boolean, true only when granted. This is the one to gate on."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"status.statistics"})," — ",e.jsx(n.code,{children:"granted"}),", ",e.jsx(n.code,{children:"denied"})," or ",e.jsx(n.code,{children:"unknown"}),". ",e.jsx(n.code,{children:"unknown"})," means the user has not answered."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isAnswered"})," — false until every category has an answer. Show the banner while it is false."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setConsent({ statistics: true })"})," — answers specific categories. ",e.jsx(n.code,{children:"acceptAll"})," and ",e.jsx(n.code,{children:"rejectAll"})," cover the rest."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"clear()"})," — deletes the cookie, so nothing is answered and the banner comes back."]}),`
`]}),`
`,e.jsxs(n.p,{children:["A boolean cannot express all three states, which is why the banner is driven by ",e.jsx(n.code,{children:"isAnswered"}),` rather than by
`,e.jsx(n.code,{children:"consent"}),". Anything unanswered, malformed or stale reads as ",e.jsx(n.code,{children:"unknown"}),`, so an ambiguous cookie asks again
instead of assuming an answer.`]}),`
`,e.jsx(n.h2,{id:"the-banner",children:"The banner"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CookieBanner"}),` is the question itself. It renders whenever it is mounted and never reads the cookie, so the
application decides when to show it — normally while `,e.jsx(n.code,{children:"isAnswered"})," is false, as above."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onAccept"})," and ",e.jsx(n.code,{children:"onReject"})," are the only required props. Everything else has a default."]}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"Layout"}),", pass it as the ",e.jsx(n.code,{children:"cookieBanner"})," prop rather than rendering it yourself. ",e.jsx(n.code,{children:"Layout"}),` puts it before
the rest of the page, so the question comes first both on screen and in reading order:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const { isAnswered, acceptAll, rejectAll } = useConsent();

<Layout {...layout} cookieBanner={isAnswered ? undefined : { onAccept: acceptAll, onReject: rejectAll }}>
  {children}
</Layout>;
`})}),`
`,e.jsxs(n.p,{children:[`The prop takes the banner's own props, so everything below applies to it unchanged. Leaving it out is what
hides the banner, which is why the answered case passes `,e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsxs(n.p,{children:["Without ",e.jsx(n.code,{children:"Layout"}),", render it standalone, before anything else of content:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<>
  {!isAnswered && <CookieBanner onAccept={acceptAll} onReject={rejectAll} />}
  <main>{children}</main>
</>
`})}),`
`,e.jsxs(n.p,{children:["The text follows the ",e.jsx(n.code,{children:"languageCode"})," set on ",e.jsx(n.code,{children:"RootProvider"}),`, in bokmål, nynorsk and English. Bokmål is the
fallback, so a banner rendered without a `,e.jsx(n.code,{children:"RootProvider"})," still reads correctly."]}),`
`,e.jsxs(n.p,{children:["Each string can still be replaced, for an application that brings its own translations: ",e.jsx(n.code,{children:"heading"}),`,
`,e.jsx(n.code,{children:"description"})," and ",e.jsx(n.code,{children:"necessaryText"})," take a node as well as a string, and ",e.jsx(n.code,{children:"acceptLabel"})," and ",e.jsx(n.code,{children:"rejectLabel"}),` are
`,e.jsx(n.code,{children:"Ja"})," and ",e.jsx(n.code,{children:"Nei"}),". Replacing ",e.jsx(n.code,{children:"necessaryText"})," drops its trailing link, so pass a node if you want to keep one."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"necessaryUrl"})," is where that trailing link points, https://info.altinn.no/om-altinn/personvern/ by default."]}),`
`,e.jsx(n.h2,{id:"withdrawing-versus-resetting",children:"Withdrawing versus resetting"}),`
`,e.jsx(n.p,{children:"These are different things, and a settings page usually wants the first."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Withdraw consent"})," is ",e.jsx(n.code,{children:"rejectAll()"}),", or ",e.jsx(n.code,{children:"setConsent({ statistics: false })"}),` for one category. It records a
denial: tracking stops, cookies set under the old answer should be cleaned up, and the user is not asked
again. This is what a "withdraw consent" control in a privacy page should do.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reset"})," is ",e.jsx(n.code,{children:"clear()"}),`. It deletes the cookie entirely, so the user counts as never having answered and the
banner appears on the next page view. Useful for a "ask me again" control and for testing.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["Reaching for ",e.jsx(n.code,{children:"clear()"}),` on a withdraw button means the banner returns on every visit, which is worse for the
user and is not what withdrawing requires.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clear()"}),` deletes the cookie at the two scopes this module writes, the environment's shared domain and
host-only. It deliberately does not walk up to parent domains, so resetting in a test environment cannot
remove the production answer. The consequence is that on a host under `,e.jsx(n.code,{children:"tt02.altinn.no"}),` a production cookie
stays visible and the reset appears not to take.`]}),`
`,e.jsx(n.h2,{id:"the-cookie",children:"The cookie"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Name"})," ",e.jsx(n.code,{children:"altinn-consent"}),`, on the environment's shared domain, so an answer given in one Altinn application
applies to the others.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value"})," a raw, unencoded query string, currently ",e.jsx(n.code,{children:"v=1&statistics=granted"}),`. Write it raw; a
percent-encoded value is still read, but only as a fallback for helpers that encode by default.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Attributes"})," ",e.jsx(n.code,{children:"Path=/"}),", ",e.jsx(n.code,{children:"SameSite=Lax"}),", ",e.jsx(n.code,{children:"Secure"})," over https, and a one year ",e.jsx(n.code,{children:"Max-Age"}),". Not ",e.jsx(n.code,{children:"HttpOnly"}),`, so
it is a user preference and never an authorisation signal.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Domain"})," ",e.jsx(n.code,{children:".altinn.no"})," in production, ",e.jsx(n.code,{children:".tt02.altinn.no"}),", ",e.jsx(n.code,{children:".at23.altinn.cloud"})," and ",e.jsx(n.code,{children:".yt01.altinn.cloud"}),` in
test. The leading dot is legacy syntax, not a wildcard. Unrecognised hosts, including localhost and preview
deployments, get a host-only cookie.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"v"}),` is the policy version. A cookie written by an older version counts as unanswered, which is how a
re-consent is forced. Unknown keys are ignored, so an application that adds a category does not invalidate
the answer for the categories other applications already understand — adding a category is not a reason to
bump `,e.jsx(n.code,{children:"v"}),"."]}),`
`,e.jsx(n.p,{children:`Because a host in a test environment also matches the production domain, the same cookie name can appear
twice with no way to tell which domain each value came from. Values that disagree resolve to the most
restrictive one.`})]})}function c(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default};
