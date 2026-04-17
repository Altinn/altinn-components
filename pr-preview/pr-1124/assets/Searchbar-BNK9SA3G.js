import{j as e,M as i,C as r}from"./iframe-C30XMp4u.js";import{useMDXComponents as n}from"./index-Cihnk0wP.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Cp2n8Fes.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-m8X3722O.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-Cx5HsXRX.js";import"./useIsDesktop-r8DH4xrH.js";import"./index-Dfjgmy9H.js";import"./MagnifyingGlass-BcLoywmE.js";import"./useId-k4Xjw1TB.js";import"./XMark-ZCF0kQw6.js";import"./Icon-BW7eZq3t.js";import"./Skeleton-DYu3bsVd.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BXbOn6ST.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./QueryLabel-DA3OdOzv.js";import"./Plus-zIuJSXr8.js";import"./useMenu-HLwWT2ab.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./Section-DJhGIaQb.js";import"./Flex-Olz8YtsP.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
