import{j as e,M as i,C as r}from"./iframe-DolAyTrH.js";import{useMDXComponents as n}from"./index-B9Yf3TqI.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BuRKlcQ5.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Dwc28Ehi.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-B-N7Dj6Y.js";import"./useIsDesktop-D-mQaJBC.js";import"./index-BGgdxP5s.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./useId-CHjpN4lF.js";import"./XMark-DTdVjjyM.js";import"./Icon-DyTdluPS.js";import"./Skeleton-CgJZAB6S.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-cQfQ0dve.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./ItemControls-B_Hdv8nx.js";import"./ChevronRight-Duke-dAu.js";import"./Badge-XZ4zcUXX.js";import"./QueryLabel-C-7eU317.js";import"./Plus-J7cjNzSf.js";import"./useMenu-BNSqPiQU.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuListHeading-ktY8lirO.js";import"./Section-B969stp2.js";import"./Flex-DJLVkQLj.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
