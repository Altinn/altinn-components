import{j as e,M as i,C as r}from"./iframe-CFpZEpOT.js";import{useMDXComponents as n}from"./index-Dck6vUtY.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-qFyjtY7r.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BeKeqQTD.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-BQvBQvnx.js";import"./useIsDesktop-DbbL3aCv.js";import"./index-CMCH-iYZ.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./useId-Bpa1--zZ.js";import"./XMark-DsxdrTa7.js";import"./Icon-CcpuJg5J.js";import"./Skeleton-BxeTCVQ2.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-DX0tkWsQ.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./QueryLabel-DYFcubLK.js";import"./Plus-BvInV0-S.js";import"./useMenu-BHNp1hvr.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./Section-0tWdfaTG.js";import"./Flex-LzaqVov5.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function O(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{O as default};
