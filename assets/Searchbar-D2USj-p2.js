import{j as e,M as i,C as r}from"./iframe-DpqvNfuX.js";import{useMDXComponents as n}from"./index-DMMzqXxg.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BHNvooeW.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CG-ctFKG.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-DGheZoWO.js";import"./useIsDesktop-T_vm3OPM.js";import"./index-Ct2h27FF.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./useId-BXmkKvJa.js";import"./XMark-D5GqdRxj.js";import"./Icon-DaddCVMS.js";import"./Skeleton-CUXlhXSK.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CUyj1Vu6.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./ChevronRight-l4sUB0S3.js";import"./Badge-DH_aKElc.js";import"./QueryLabel-b0e8fvd2.js";import"./Plus-i3IwH-31.js";import"./useMenu-CL8JxMzd.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./Section-CtbhQhiL.js";import"./Flex-BVIzbH2w.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
