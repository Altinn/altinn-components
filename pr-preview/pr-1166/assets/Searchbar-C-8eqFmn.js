import{j as e,M as i,C as r}from"./iframe-u1jxS1Oq.js";import{useMDXComponents as n}from"./index-CmyfXM46.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-ZHU457Cp.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DMi4juDw.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BUpuOEpy.js";import"./index-CuIYfQx6.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./useId-MxiBxM6f.js";import"./XMark-Bsujigqn.js";import"./Icon-DjXLk3vD.js";import"./Skeleton-vSjDGrjA.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-2B4Dsgg7.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./useHighlightedText-Cgx_Ij05.js";import"./ItemControls-GTSartAy.js";import"./ChevronRight-Dx4m7R44.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-DUYo15Ow.js";import"./Plus-DDBVjJkP.js";import"./useMenu-CJJuJq3h.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./Section-Dvplgvae.js";import"./Flex-CjSLdTf-.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
