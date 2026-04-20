import{j as e,M as i,C as r}from"./iframe-yBEatwQ0.js";import{useMDXComponents as n}from"./index-CsIRPvpu.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-B34dEX8a.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories--LC1tesR.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-FDl630BK.js";import"./useIsDesktop-DNc8DhfV.js";import"./index-B7J_eA84.js";import"./MagnifyingGlass-SlzD67D9.js";import"./useId-DyCIbqyR.js";import"./XMark-DRdfunCf.js";import"./Icon-m6GSRHhZ.js";import"./Skeleton-D2AOT5bt.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BNY-TR_e.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./useHighlightedText-Dt8J34OD.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./Badge-Bt5kdhhY.js";import"./QueryLabel-DQ7-405k.js";import"./Plus-CN2BINNw.js";import"./useMenu-DUoC-ldr.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./Section-CLhotqus.js";import"./Flex-Co0GST2J.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
