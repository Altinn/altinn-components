import{ag as n,a7 as e,r as i,C as r}from"./iframe-Byxtd80g.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-D_T0L2m6.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-QhZ5UUxc.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CYSB9jRz.js";import"./MagnifyingGlass-DByXWuC9.js";import"./AutocompleteItem-C42tOhGv.js";import"./useMenu-ClfrC7iO.js";import"./MenuItem-BIjlfqyX.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./ChevronRight-Cr__dFRw.js";import"./QueryLabel-DnOFkVTS.js";import"./Plus-Baef_WWy.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./Section-BiXimCdL.js";import"./Flex-DvsQk1i3.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function G(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{G as default};
