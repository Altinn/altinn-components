var a=Object.defineProperty;var s=(o,t)=>a(o,"name",{value:t,configurable:!0});import{ag as i,a7 as e,r as c,C as r}from"./iframe-DZEBeon6.js";import{GlobalSearch as h,InboxSearch as p,InboxScopesExpanded as l}from"./Searchbar.stories-DDAfh8O2.js";import{SuggestedFilters as d,SuggestedHits as m}from"./Autocomplete.stories-Dt4Yb35E.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BUvzy5Tw.js";import"./MagnifyingGlass-CTxcpUID.js";import"./AutocompleteItem-CzbnhRht.js";import"./useMenu-BVHVYpiB.js";import"./MenuItem-BGB4ycnF.js";import"./ItemMedia-6pV5l8vT.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ChevronRight-USTqc2u1.js";import"./QueryLabel-7J6HrgVy.js";import"./Plus-CVzkbDMT.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListDivider-C1mJKicD.js";import"./MenuListHeading-BypPBxNY.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";function n(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:m})]})}s(n,"_createMdxContent");function R(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}s(R,"MDXContent");export{R as default};
