import{j as e,M as i,C as r}from"./iframe-B56t8i7v.js";import{useMDXComponents as n}from"./index-D2y4v_6X.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BLM2M4Qr.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-C9JRI0hS.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-rAjucfX_.js";import"./useIsDesktop-CFGjVeHW.js";import"./index-CHgNdXFp.js";import"./MagnifyingGlass-U17pnqdh.js";import"./useId-Ce_44NzT.js";import"./XMark-CQR84vCO.js";import"./Icon-CgN9F-ql.js";import"./Skeleton-Cer98cLN.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-D-FpMDwU.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-nVdg74zq.js";import"./Plus-DP2GFhc-.js";import"./useMenu-Bz8Gr0jh.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./Section-DXg-mnVx.js";import"./Flex-BSViFEWJ.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
