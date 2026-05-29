import{w as n,p as e,c as i,C as r}from"./iframe-D7BK96qe.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BheBAYzO.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DMu31vbV.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-PMHXXYUc.js";import"./index-CL9j6gFH.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./useId-B1IjdNvC.js";import"./XMark-DKvmykI8.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Button-UbmuloFB.js";import"./tooltip-B8elfXS-.js";import"./AutocompleteItem-Vni__naF.js";import"./useMenu-CRon1bQ1.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./ChevronRight-B2Fr_XJI.js";import"./QueryLabel-CFET3oqh.js";import"./Plus-C-8iSYwG.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./Section-G7MRDbZ9.js";import"./Flex-DKrdkBVD.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
