import{p as e,b as i,C as r}from"./iframe-Ca1pxjCh.js";import{useMDXComponents as n}from"./index-yzsl9csy.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CCVC-5Qz.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Cvsh3Qch.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-yFsEw24L.js";import"./index-qsemo-NB.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./useId-DKdvhqLE.js";import"./XMark-D_G5yHBr.js";import"./Icon-DX2teY26.js";import"./Skeleton-CjJRr45L.js";import"./Button-BUoYLOjU.js";import"./tooltip-DBInG_0S.js";import"./AutocompleteItem-DdPTvT2j.js";import"./useMenu-CVV4ErAO.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronRight-Dx7-HhpA.js";import"./QueryLabel-BQjDexh0.js";import"./Plus-C2mGPGYW.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./Section-BSLTGuDV.js";import"./Flex-CU26bbCS.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
