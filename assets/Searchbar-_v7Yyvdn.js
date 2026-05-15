import{j as e,M as i,C as r}from"./iframe-CZMLD2fe.js";import{useMDXComponents as n}from"./index-BuswU1Mt.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-D9rMcB4d.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BfTjIrc3.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DX1vl52f.js";import"./index-iGjPLQV7.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./useId-Dmu9AgSD.js";import"./XMark-BBRiAlI8.js";import"./Icon-CbE8dCFV.js";import"./Skeleton-D52MvI5U.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-DhaOsxUG.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./useHighlightedText-CmlayFSP.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CdbQAGT7.js";import"./Plus-2Q0T7s3R.js";import"./useMenu-CEG7UMF2.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./Section-B1dSFwPq.js";import"./Flex-oWhCvzqt.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
