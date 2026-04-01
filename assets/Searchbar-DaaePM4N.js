import{j as e,M as i,C as r}from"./iframe-DxxW_Hah.js";import{useMDXComponents as n}from"./index-DKIurCIe.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CxD8tY-I.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Dik-icLu.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-65WoTiJp.js";import"./useIsDesktop-B3tDsVL2.js";import"./index-pOAXHZ6n.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./useId-CckRU7I8.js";import"./XMark-ChXBbXGN.js";import"./Icon-Cf03fdWw.js";import"./Skeleton-DiRARuJ9.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-DUT1Lmut.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./useHighlightedText-C9OLcmcP.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./QueryLabel-DBDpIjTe.js";import"./Plus-CScsMow9.js";import"./useMenu-DMxEdeKU.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./Section-DDQuxuHV.js";import"./Flex-CRmH3H-L.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
