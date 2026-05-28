import{w as n,p as e,c as i,C as r}from"./iframe-BBbEwSaq.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BeJXg4mV.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BQ5e7GvD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CDpRqHhY.js";import"./index-awH0sXcw.js";import"./MagnifyingGlass-B6FIAadU.js";import"./useId-DZp72-eX.js";import"./XMark-Dw8JSfSd.js";import"./Icon-Cx6QAjG2.js";import"./Skeleton-DFF9p8Mx.js";import"./Button-DpW4Pu6O.js";import"./tooltip-D3G3Ewte.js";import"./AutocompleteItem-CODPY2w-.js";import"./useMenu-CP6B3JUk.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./QueryLabel-CCla4rNK.js";import"./Plus-CmpsnneT.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:l})]})}function K(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{K as default};
