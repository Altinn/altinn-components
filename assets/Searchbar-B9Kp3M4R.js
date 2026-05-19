import{j as e,M as i,C as r}from"./iframe-GJv3-kpe.js";import{useMDXComponents as n}from"./index-BGOihoxM.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-C9iU3hDd.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B7vGaHBQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-B-Z1HFB-.js";import"./index-D19pPnAw.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./useId-B1GQrjht.js";import"./XMark-D7blLnze.js";import"./Icon-DKgAzIsH.js";import"./Skeleton-dVNdeapn.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-nCibewkU.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./ItemControls-3C4JbZ3m.js";import"./ChevronRight-C3wqtQo3.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-C4dr9Kep.js";import"./Plus-9DzdC6C4.js";import"./useMenu-D_O6qRR4.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./Section-BvBlt0Cn.js";import"./Flex-CxS25VqD.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
