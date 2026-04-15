import{j as e,M as i,C as r}from"./iframe-BWWyepKi.js";import{useMDXComponents as n}from"./index-Cdy6X_Oe.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DcD4bYCZ.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DwrlJRUi.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-DXpZt8O3.js";import"./useIsDesktop-CYXiMf6h.js";import"./index-fkRlyifr.js";import"./MagnifyingGlass-B591vdqr.js";import"./useId-CMCVT55W.js";import"./XMark-DJOirLMA.js";import"./Icon-w9oNx8pI.js";import"./Skeleton-CYDyiFkf.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BW8L80bJ.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./useHighlightedText-BYfI8EMJ.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-DBvi2_kM.js";import"./Plus-i5lFDX1a.js";import"./useMenu-BnIxk9FT.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./Section-B8U8libR.js";import"./Flex-C8xEqik7.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function V(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{V as default};
