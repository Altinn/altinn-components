import{j as e,M as i,C as r}from"./iframe-YdRL1NzV.js";import{useMDXComponents as n}from"./index-BWf8uQ1H.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BrcjeAp8.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-ONkUZsAH.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DNaKtoN_.js";import"./index-SoIsie1y.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./useId-DxHKrSZ4.js";import"./XMark-1l7ZvP46.js";import"./Icon-B4-srULI.js";import"./Skeleton-C3i9Ug5T.js";import"./Button-BwQOxknK.js";import"./tooltip-D0NJwlFT.js";import"./AutocompleteItem-CXsNMDWO.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./QueryLabel-BLfanfjW.js";import"./Plus-BNGbhyZ6.js";import"./useMenu-Cp2blUti.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./Section-Bmd_KobT.js";import"./Flex-8MCCOfGV.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
