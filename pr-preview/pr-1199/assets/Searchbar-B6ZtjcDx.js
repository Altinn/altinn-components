import{j as e,M as i,C as r}from"./iframe-D-ID03Ik.js";import{useMDXComponents as n}from"./index-D77CybYZ.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Dbdznj6F.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CuVyIRCf.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-bpU9K9vW.js";import"./index-DpFyEq-2.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./useId-DxZoCrQU.js";import"./XMark-DAr8sgUQ.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./AutocompleteItem-DAmdEfrd.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Checkmark-WbwQiDGB.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ItemControls-Bpd8WrWV.js";import"./ChevronRight-CxM-6AgC.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./QueryLabel-CG_dAIz0.js";import"./Plus-DTGwq1FZ.js";import"./useMenu-OLkOIIh8.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./Section-Df_v2ciX.js";import"./Flex-pOoXofWS.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
