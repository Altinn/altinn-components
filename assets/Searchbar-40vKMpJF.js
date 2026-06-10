import{ag as n,a7 as e,r as a,C as r}from"./iframe-BBxI6Qoj.js";import{GlobalSearch as i,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories--RVRkHSv.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BYIHJn_a.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-CbM6cjnW.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./AutocompleteItem-C1thDz_n.js";import"./useMenu-B76EeFEP.js";import"./MenuItem-B1Q66lNx.js";import"./ItemMedia-vu0P71y8.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./Heading-D61lhVl1.js";import"./useHighlightedText-CESRz6Ap.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ChevronRight-DVToFFYf.js";import"./QueryLabel-DQnX2ifk.js";import"./Plus-CVz3L4Fh.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./Section-2oE2jyh4.js";import"./Flex-DehNIx1U.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:l})]})}function A(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{A as default};
