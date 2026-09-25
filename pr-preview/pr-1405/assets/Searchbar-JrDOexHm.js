import{ag as n,a7 as e,r as i,C as r}from"./iframe-C7-WWuUz.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CM9oiYRS.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-ChMDuHAx.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BO3ypbFb.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./AutocompleteItem-W30fx_Dt.js";import"./useMenu-pD-uRv9Z.js";import"./MenuItem-kril0LwU.js";import"./ItemMedia-CBTlpYQC.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./ItemControls-Bq7352tZ.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ChevronRight-C0CFQIi6.js";import"./QueryLabel-DcDKTr7k.js";import"./Plus-0EP1hD2t.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuListDivider-FRFmhjs8.js";import"./MenuListHeading-BO147Bx-.js";import"./Section-D_PXiQbH.js";import"./Flex-C-tyhriT.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
