import{j as e,M as i,C as r}from"./iframe-BM6RZuQM.js";import{useMDXComponents as n}from"./index-DP3NQFcB.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BlZan37l.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-D8rWjJIR.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Dm2dj1pd.js";import"./index-DAnedVDn.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./useId-BYt_OYJh.js";import"./XMark-EbOSJv8a.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./AutocompleteItem-Doq-ZG_5.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./QueryLabel-DVRzqAqw.js";import"./Plus-DESzxFez.js";import"./useMenu-DmjwUxq0.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./Section-h9TGEdkh.js";import"./Flex-DCHL4VAz.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
