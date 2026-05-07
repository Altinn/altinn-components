import{j as e,M as i,C as r}from"./iframe-BLYnYdJi.js";import{useMDXComponents as n}from"./index-D-vv9O49.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CS-5t7XH.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BbV3ctYM.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Bj1AMvX0.js";import"./index-B87fQ9Ty.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./useId-X7maRfkh.js";import"./XMark-Df3dBUtr.js";import"./Icon-BBgjdpk7.js";import"./Skeleton-DVFvYbaO.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-Ds6_1htJ.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CvjUh3gE.js";import"./Plus-BP2D1YPb.js";import"./useMenu-DImJoMjP.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./Section-B5XykhYf.js";import"./Flex-CND7PM33.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
