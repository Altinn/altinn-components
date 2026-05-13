import{j as e,M as i,C as r}from"./iframe-DkQPO9ro.js";import{useMDXComponents as n}from"./index-DdR79Dkh.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-C93q5r3o.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-aGystj2V.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Dz-OMeoK.js";import"./index-BrTdOUlk.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./useId-CwF4wxTL.js";import"./XMark-5G2rqhrX.js";import"./Icon-Dao4TSf9.js";import"./Skeleton-8DklmnzK.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-JRH8-gij.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-C4uQfAVe.js";import"./Plus-DTlIM-KK.js";import"./useMenu-BKpTfeOo.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./Section-DUH4Cyq_.js";import"./Flex-Cy28VffD.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function Q(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{Q as default};
