import{j as e,M as i,C as r}from"./iframe-CRyMHjBa.js";import{useMDXComponents as n}from"./index-D4sgrM0U.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Dh4kQMzs.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B7NsAFwS.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-Bw2MRBgk.js";import"./useIsDesktop-C5D59x5L.js";import"./index-DHHnxdIx.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./useId-Gvikg1Q9.js";import"./XMark-Bzo2iZ4y.js";import"./Icon-BfxILC1T.js";import"./Skeleton-CU7lBKK8.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CPNkGDfs.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./QueryLabel-C16cTESP.js";import"./Plus-OcRWzOJe.js";import"./useMenu-lx2RC1HO.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./Section-CFSk5LUB.js";import"./Flex-B-FAPRYp.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function O(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{O as default};
