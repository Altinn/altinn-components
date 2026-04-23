import{j as e,M as i,C as r}from"./iframe-DDirkHus.js";import{useMDXComponents as n}from"./index-CXZOXrcs.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BA0u9qmq.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BPP3MHiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-jvVLPlxQ.js";import"./useIsDesktop-Byt4gJYs.js";import"./index-B2YDfdyU.js";import"./MagnifyingGlass-BGbR81wS.js";import"./useId-CVUrh2ea.js";import"./XMark-DldqIUES.js";import"./Icon-Cv1R39O2.js";import"./Skeleton-0VOrezcL.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CbJGLhHb.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./ItemControls-CqR56LSR.js";import"./ChevronRight-BUOZMhwy.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CUifN9Z4.js";import"./Plus-DXvjiSe3.js";import"./useMenu-DLxXpcV8.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./Section-CUHbf36A.js";import"./Flex-CKMYHSxr.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
