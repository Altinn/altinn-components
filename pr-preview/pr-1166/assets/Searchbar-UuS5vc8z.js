import{j as e,M as i,C as r}from"./iframe-0B_Yudin.js";import{useMDXComponents as n}from"./index-Mx4bqmK6.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DteWh1Xw.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CSWfRDLo.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BJe-cVtk.js";import"./index-bzqtFzN_.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./useId-BUxMg0Ir.js";import"./XMark-4vnuAWTz.js";import"./Icon-CbCRlB_g.js";import"./Skeleton-CCW5QxrE.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CbMBcAaH.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-Dxn51UAp.js";import"./Plus-BmqtHu8-.js";import"./useMenu-G8FOBFFN.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./Section-byNAOZ7t.js";import"./Flex-CcsVAtXA.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
