import{w as n,p as e,c as i,C as r}from"./iframe-HmDeAVAp.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-C1tbmeBi.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-vxdlTK4x.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DO6OG2LW.js";import"./index-CDtevUxF.js";import"./MagnifyingGlass-BBPHMis4.js";import"./useId-BNhfXdUV.js";import"./XMark-DFSmJjac.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./AutocompleteItem-Z6yZVA1v.js";import"./useMenu-l9Wd3rxx.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronRight-Cqfpq8PE.js";import"./QueryLabel-BRRwgwPe.js";import"./Plus-DQEVi2NZ.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
