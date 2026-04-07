import{j as e,M as i,C as r}from"./iframe-B1AqnzaQ.js";import{useMDXComponents as n}from"./index-DTlYiLDq.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-C5xCx1Sg.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BBJHwPW2.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-Crisi6Aq.js";import"./useIsDesktop-DKxFqwuA.js";import"./index-Ddi2Dmvi.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./useId-D3sFZbtB.js";import"./XMark-COJVLPGF.js";import"./Icon-68Gi_xA8.js";import"./Skeleton-6Posg2tf.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CCXjG5Ba.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./ChevronRight-BOPTtlba.js";import"./Badge-DUhzLQsC.js";import"./QueryLabel-Cv9IsP_R.js";import"./Plus-DnGMnLWk.js";import"./useMenu-5Lc1jfY6.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./Section-BiNpoqqK.js";import"./Flex-DsTgjl9e.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
