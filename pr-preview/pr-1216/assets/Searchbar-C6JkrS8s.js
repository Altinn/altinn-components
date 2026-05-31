import{w as n,p as e,c as i,C as r}from"./iframe-B0raGbVc.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-cVWfhkMJ.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B8I6Cewi.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Cwvy_3Jm.js";import"./index-BFPoepm_.js";import"./MagnifyingGlass-M1myOHdK.js";import"./useId-DjmMrSjF.js";import"./XMark-Vu63tlKp.js";import"./Icon-CkGS8ofh.js";import"./Skeleton-Bie46BNt.js";import"./Button-DaZ5Xj9O.js";import"./tooltip-C563LrpG.js";import"./AutocompleteItem-C_GPNZF0.js";import"./useMenu-DBDHaupH.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./ChevronRight-B1cS3dE4.js";import"./QueryLabel-DGYI0S1S.js";import"./Plus-Ddu_AJ6f.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function K(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{K as default};
