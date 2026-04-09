import{j as e,M as i,C as r}from"./iframe-DgiLb7Jh.js";import{useMDXComponents as n}from"./index-BRCEKszM.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Bv9sZnrq.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B0bv2JoM.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-Dx4FUd9u.js";import"./useIsDesktop-DnJ6rrKA.js";import"./index-CzzvqmNv.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./useId-6J1VG5PF.js";import"./XMark-DE16CL-6.js";import"./Icon-uoDJWBW9.js";import"./Skeleton-CjXkBVSw.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CSfi4S0p.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./useHighlightedText-C3KXFHAg.js";import"./ChevronRight-B8GqJ6hU.js";import"./Badge-DFo-bNGw.js";import"./QueryLabel-BitPHzo5.js";import"./Plus-gYiwb3vr.js";import"./useMenu-7q5OpfBf.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./Section-BoeinIOl.js";import"./Flex-BfnRV8tR.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
