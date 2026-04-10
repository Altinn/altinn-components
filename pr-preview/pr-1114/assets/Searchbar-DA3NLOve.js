import{j as e,M as i,C as r}from"./iframe-CEV_bE_y.js";import{useMDXComponents as n}from"./index-DxVmWYuQ.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BmlMLUCc.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BxI24h4M.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-CsbZ30XY.js";import"./useIsDesktop-BlUQDDAY.js";import"./index-CGpVDQnA.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./useId-BHfJgDBc.js";import"./XMark-ByuttVGc.js";import"./Icon-BwPDmLy2.js";import"./Skeleton-cNOPtI7P.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-TqvRZWpV.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./QueryLabel-DfLFOOHP.js";import"./Plus-D1UdPMNR.js";import"./useMenu-EIG5MfCS.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./Section-BaBnzd0n.js";import"./Flex-BZtJmJL5.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function P(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
