import{j as e,M as i,C as r}from"./iframe-DxKlu2kD.js";import{useMDXComponents as n}from"./index-xnwFrkNa.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Ccr8ZlRs.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-vDc5hUmL.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-DxqtDh0S.js";import"./useIsDesktop-BOE7l-hO.js";import"./index-BWCSYHeO.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./useId-_YfdAmsW.js";import"./XMark-C1fx_pyo.js";import"./Icon-CrZKj0Yv.js";import"./Skeleton-niSIm0IT.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BmmZWTfe.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./QueryLabel-9PVapst6.js";import"./Plus-Dz67JQoo.js";import"./useMenu-DwMeQcTX.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./Section-5cGBq3ET.js";import"./Flex-CFZAXqgp.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function O(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{O as default};
