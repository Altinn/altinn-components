import{j as e,M as i,C as r}from"./iframe-C32LkOFR.js";import{useMDXComponents as n}from"./index-CXO_PkpZ.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BCwhN95f.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-D2AGAGTv.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CuiebE6s.js";import"./index-B41-Gq6i.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./useId-C6VS968l.js";import"./XMark-CJ_7TJfx.js";import"./Icon-ClcJ2Ugl.js";import"./Skeleton-BFp1Ns5z.js";import"./Button-DJyTPLgL.js";import"./tooltip-C1z0ba6x.js";import"./AutocompleteItem-CXlohZdK.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Checkmark-Cohtyyf2.js";import"./Heading-C2AVc7ZV.js";import"./useHighlightedText-TWz6a-kb.js";import"./ItemControls-6sDFc5WV.js";import"./ChevronRight-BRam3foO.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./QueryLabel-qSZLfQuY.js";import"./Plus-BuKKYKtN.js";import"./useMenu-CglJcFc3.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./Section-BW54BVJv.js";import"./Flex-BUJ7sT5C.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
