var r=Object.defineProperty;var t=(s,e)=>r(s,"name",{value:e,configurable:!0});import{ag as i,a7 as n,r as a}from"./iframe-DliZ2j7V.js";import"./preload-helper-Cc2_yIPf.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Surveys and consent/Cookie consent"}),`
`,n.jsx(e.h1,{id:"cookie-consent",children:"Cookie consent"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useConsent"}),` reads and writes the shared Altinn consent cookie. It resolves the environment's cookie domain
itself, so an application never has to know about domains or the value format.`]}),`
`,n.jsx(e.p,{children:`Every instance shares one store, so a banner and the components gated by it stay in sync without a provider
above them, including where there is no common React root.`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SkyraSurvey, useConsent } from "@altinn/altinn-components";

const { consent, isAnswered, acceptAll, rejectAll } = useConsent();

return (
  <>
    <SkyraSurvey consent={consent.statistics} />
    {!isAnswered && <CookieBanner onAccept={acceptAll} onReject={rejectAll} />}
  </>
);
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"consent.statistics"})," — boolean, true only when granted. This is the one to gate on."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"status.statistics"})," — ",n.jsx(e.code,{children:"granted"}),", ",n.jsx(e.code,{children:"denied"})," or ",n.jsx(e.code,{children:"unknown"}),". ",n.jsx(e.code,{children:"unknown"})," means the user has not answered."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"isAnswered"})," — false until every category has an answer. Show the banner while it is false."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"setConsent({ statistics: true })"})," — answers specific categories. ",n.jsx(e.code,{children:"acceptAll"})," and ",n.jsx(e.code,{children:"rejectAll"})," cover the rest."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"clear()"})," — deletes the cookie, so nothing is answered and the banner comes back."]}),`
`]}),`
`,n.jsxs(e.p,{children:["A boolean cannot express all three states, which is why the banner is driven by ",n.jsx(e.code,{children:"isAnswered"}),` rather than by
`,n.jsx(e.code,{children:"consent"}),". Anything unanswered, malformed or stale reads as ",n.jsx(e.code,{children:"unknown"}),`, so an ambiguous cookie asks again
instead of assuming an answer.`]}),`
`,n.jsx(e.h2,{id:"the-banner",children:"The banner"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CookieBanner"}),` is the question itself. It renders whenever it is mounted and never reads the cookie, so the
application decides when to show it — normally while `,n.jsx(e.code,{children:"isAnswered"})," is false, as above."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onAccept"})," and ",n.jsx(e.code,{children:"onReject"})," are the only required props. Everything else has a default."]}),`
`,n.jsxs(e.p,{children:["With ",n.jsx(e.code,{children:"Layout"}),", pass it as the ",n.jsx(e.code,{children:"cookieBanner"})," prop rather than rendering it yourself. ",n.jsx(e.code,{children:"Layout"}),` puts it before
the rest of the page, so the question comes first both on screen and in reading order:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const { isAnswered, acceptAll, rejectAll } = useConsent();

<Layout {...layout} cookieBanner={isAnswered ? undefined : { onAccept: acceptAll, onReject: rejectAll }}>
  {children}
</Layout>;
`})}),`
`,n.jsxs(e.p,{children:[`The prop takes the banner's own props, so everything below applies to it unchanged. Leaving it out is what
hides the banner, which is why the answered case passes `,n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsxs(e.p,{children:["Without ",n.jsx(e.code,{children:"Layout"}),", render it standalone, before anything else of content:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<>
  {!isAnswered && <CookieBanner onAccept={acceptAll} onReject={rejectAll} />}
  <main>{children}</main>
</>
`})}),`
`,n.jsxs(e.p,{children:["The text follows the ",n.jsx(e.code,{children:"languageCode"})," set on ",n.jsx(e.code,{children:"RootProvider"}),`, in bokmål, nynorsk and English. Bokmål is the
fallback, so a banner rendered without a `,n.jsx(e.code,{children:"RootProvider"})," still reads correctly."]}),`
`,n.jsxs(e.p,{children:["Each string can still be replaced, for an application that brings its own translations: ",n.jsx(e.code,{children:"heading"}),`,
`,n.jsx(e.code,{children:"description"})," and ",n.jsx(e.code,{children:"necessaryText"})," take a node as well as a string, and ",n.jsx(e.code,{children:"acceptLabel"})," and ",n.jsx(e.code,{children:"rejectLabel"}),` are
`,n.jsx(e.code,{children:"Ja"})," and ",n.jsx(e.code,{children:"Nei"}),". Replacing ",n.jsx(e.code,{children:"necessaryText"})," drops its trailing link, so pass a node if you want to keep one."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"necessaryUrl"})," is where that trailing link points, https://info.altinn.no/om-altinn/personvern/ by default."]}),`
`,n.jsx(e.h2,{id:"withdrawing-versus-resetting",children:"Withdrawing versus resetting"}),`
`,n.jsx(e.p,{children:"These are different things, and a settings page usually wants the first."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Withdraw consent"})," is ",n.jsx(e.code,{children:"rejectAll()"}),", or ",n.jsx(e.code,{children:"setConsent({ statistics: false })"}),` for one category. It records a
denial: tracking stops, cookies set under the old answer should be cleaned up, and the user is not asked
again. This is what a "withdraw consent" control in a privacy page should do.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reset"})," is ",n.jsx(e.code,{children:"clear()"}),`. It deletes the cookie entirely, so the user counts as never having answered and the
banner appears on the next page view. Useful for a "ask me again" control and for testing.`]}),`
`]}),`
`,n.jsxs(e.p,{children:["Reaching for ",n.jsx(e.code,{children:"clear()"}),` on a withdraw button means the banner returns on every visit, which is worse for the
user and is not what withdrawing requires.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"clear()"}),` deletes the cookie at the two scopes this module writes, the environment's shared domain and
host-only. It deliberately does not walk up to parent domains, so resetting in a test environment cannot
remove the production answer. The consequence is that on a host under `,n.jsx(e.code,{children:"tt02.altinn.no"}),` a production cookie
stays visible and the reset appears not to take.`]}),`
`,n.jsx(e.h2,{id:"the-cookie",children:"The cookie"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Name"})," ",n.jsx(e.code,{children:"altinn-consent"}),`, on the environment's shared domain, so an answer given in one Altinn application
applies to the others.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Value"})," a raw, unencoded query string, currently ",n.jsx(e.code,{children:"v=1&statistics=granted"}),`. Write it raw; a
percent-encoded value is still read, but only as a fallback for helpers that encode by default.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Attributes"})," ",n.jsx(e.code,{children:"Path=/"}),", ",n.jsx(e.code,{children:"SameSite=Lax"}),", ",n.jsx(e.code,{children:"Secure"})," over https, and a one year ",n.jsx(e.code,{children:"Max-Age"}),". Not ",n.jsx(e.code,{children:"HttpOnly"}),`, so
it is a user preference and never an authorisation signal.`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Domain"})," ",n.jsx(e.code,{children:".altinn.no"})," in production, ",n.jsx(e.code,{children:".tt02.altinn.no"}),", ",n.jsx(e.code,{children:".at23.altinn.cloud"})," and ",n.jsx(e.code,{children:".yt01.altinn.cloud"}),` in
test. The leading dot is legacy syntax, not a wildcard. Unrecognised hosts, including localhost and preview
deployments, get a host-only cookie.`]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"v"}),` is the policy version. A cookie written by an older version counts as unanswered, which is how a
re-consent is forced. Unknown keys are ignored, so an application that adds a category does not invalidate
the answer for the categories other applications already understand — adding a category is not a reason to
bump `,n.jsx(e.code,{children:"v"}),"."]}),`
`,n.jsx(e.p,{children:`Because a host in a test environment also matches the production domain, the same cookie name can appear
twice with no way to tell which domain each value came from. Values that disagree resolve to the most
restrictive one.`})]})}t(o,"_createMdxContent");function h(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}t(h,"MDXContent");export{h as default};
