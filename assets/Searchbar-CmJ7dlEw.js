import{ag as n,a7 as e,r as a,C as r}from"./iframe-DxDA2A5n.js";import{GlobalSearch as i,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Bw6Cyx1T.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BqS-eRXv.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-RJ_PrM3C.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./AutocompleteItem-BV7PCTem.js";import"./useMenu-CesabFz-.js";import"./MenuItem-DvVfNxyY.js";import"./ItemMedia-CnqN7ZMq.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./Heading-CDQRp2wK.js";import"./useHighlightedText-CKLIlaha.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ChevronRight-B7TpiReR.js";import"./QueryLabel-Bj_jripS.js";import"./Plus-BRpGG8-t.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./Section-BxDgugwi.js";import"./Flex-CfINokNW.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:l})]})}function A(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{A as default};
