import{j as e,M as i,C as r}from"./iframe-D8UVhXtj.js";import{useMDXComponents as n}from"./index-DPSA2vpm.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DgPEacR9.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DGhQs19o.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-C9qphrgF.js";import"./useIsDesktop-BHp6sORW.js";import"./index-DZ6CWLt4.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./useId-B_5z_sER.js";import"./XMark-RzwOtF1Q.js";import"./Icon-DPTwfvyC.js";import"./Skeleton-DuOqXwDT.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-Olet9oGK.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./QueryLabel-XhqpPWA7.js";import"./Plus-DWBglMau.js";import"./useMenu-Bi-E8KDv.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./Section-CECOJo4z.js";import"./Flex-C6te8drU.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
