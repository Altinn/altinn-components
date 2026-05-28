import{w as n,p as e,c as i,C as r}from"./iframe-43_RSSTf.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-B3xc6bfK.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-lodZk9Mu.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CRlQyS-C.js";import"./index-D9XEmR3s.js";import"./MagnifyingGlass-Bf1420VU.js";import"./useId-BLkk23cI.js";import"./XMark-Baw5EL5c.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./AutocompleteItem-I-BOwwU0.js";import"./useMenu-CLHDsGsG.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./QueryLabel-CTYDh99p.js";import"./Plus-BQyf1Gxm.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
