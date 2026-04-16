import{j as e,M as i,C as r}from"./iframe-qDHSBZ_X.js";import{useMDXComponents as n}from"./index-Bq_LsmmS.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CsMySO_S.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DdTG3DoU.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-LP6FBo7g.js";import"./useIsDesktop-BFZhxv40.js";import"./index-DTh2bawh.js";import"./MagnifyingGlass-52kli1F6.js";import"./useId-DLE_nI5l.js";import"./XMark-D8iHP3Cp.js";import"./Icon-BDVkMuHy.js";import"./Skeleton-CJ3n2_6V.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BQeM350o.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./Badge-CmtcZ1do.js";import"./QueryLabel-0k68MKss.js";import"./Plus-BXcVwr4C.js";import"./useMenu-5iviLK-9.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./Section-BGNwMxU-.js";import"./Flex-BTOiCOb2.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function P(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
