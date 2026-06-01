import{ag as n,a7 as e,r as a,C as r}from"./iframe-CAfDO4Rw.js";import{GlobalSearch as i,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CoeQuP-9.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DHRLLT-w.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-oe3Vmt84.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./AutocompleteItem-CoDYLK7o.js";import"./useMenu-BpN0JSlm.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronRight-CMD5YJ4n.js";import"./QueryLabel-AutZj0NM.js";import"./Plus-Do7Jzj4H.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:l})]})}function A(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{A as default};
