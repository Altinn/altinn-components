import{j as e,M as i,C as r}from"./iframe-BDpWuaMs.js";import{useMDXComponents as n}from"./index-bvgxtA7N.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CuYLfPqy.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CKSgCrGV.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BLdKrDcu.js";import"./index-DVPUayQ0.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./useId-BKmV9YxM.js";import"./XMark-Cx5Omj8e.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Button-m_FXpHGO.js";import"./tooltip-DLcd2lCg.js";import"./AutocompleteItem-DaqtvgUv.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./QueryLabel-BgKu4SlG.js";import"./Plus-CPPR_4GW.js";import"./useMenu-CniiHJSE.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./Section-B9Daowr7.js";import"./Flex-zEgiMRQg.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
