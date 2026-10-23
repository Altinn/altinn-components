var a=Object.defineProperty;var s=(o,t)=>a(o,"name",{value:t,configurable:!0});import{ag as i,a7 as e,r as c,C as r}from"./iframe-Ck42qOx1.js";import{GlobalSearch as h,InboxSearch as p,InboxScopesExpanded as l}from"./Searchbar.stories-CpRDLobp.js";import{SuggestedFilters as d,SuggestedHits as m}from"./Autocomplete.stories-BSM6hJ7B.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Bk2hO8WM.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./AutocompleteItem-DFHulkZC.js";import"./useMenu-BBAeNj9K.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./QueryLabel-HCbK7DZ5.js";import"./Plus-1EeeSaLT.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListDivider-CthpKcql.js";import"./MenuListHeading-C_C2TzXD.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";function n(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Layout/Searchbar"}),`
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
