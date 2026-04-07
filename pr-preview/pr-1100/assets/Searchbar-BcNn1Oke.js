import{j as e,M as i,C as r}from"./iframe-BTgHnb1V.js";import{useMDXComponents as n}from"./index-BoSGDamv.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BzG08fEi.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CcFCAGrx.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-H7iFpAxy.js";import"./useIsDesktop-DJp9AwJx.js";import"./index-t_Anj6Qz.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./useId-DWidDjIe.js";import"./XMark-DMQzhoj3.js";import"./Icon-PY6OftAR.js";import"./Skeleton-B3M39f3D.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-ufEr20HH.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./useHighlightedText-DrZCsmQU.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./QueryLabel-CdQVl2J-.js";import"./Plus-D5thgfNG.js";import"./useMenu-DSfKnhCX.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./Section-B92QpPhv.js";import"./Flex-ujxLNWuk.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
