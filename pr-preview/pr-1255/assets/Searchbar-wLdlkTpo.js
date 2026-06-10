import{ag as n,a7 as e,r as a,C as r}from"./iframe-B2qSCuzl.js";import{GlobalSearch as i,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-C8VzKElk.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CXmIF20O.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DFn6uBJT.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./AutocompleteItem-C0KIhL4P.js";import"./useMenu-4wlPj4vw.js";import"./MenuItem-DufE-zMI.js";import"./ItemMedia-C3fquT_8.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ItemControls-i4q63th9.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./ChevronRight-CE-Naqr7.js";import"./QueryLabel-Ci40n7fV.js";import"./Plus-C423HqNe.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./Section-vcV9OTBL.js";import"./Flex-DUbFTLOy.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Layout/Searchbar"}),`
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
