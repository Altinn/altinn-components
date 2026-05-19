import{j as e,M as i,C as r}from"./iframe-CPVbSj3C.js";import{useMDXComponents as n}from"./index-C-bkg60x.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Cvre7Fv7.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-ybbezlsx.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BZmvipjT.js";import"./index-B-yq3MoC.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./useId-CeU55pH0.js";import"./XMark-DWjKCZtX.js";import"./Icon-DFTXBWnL.js";import"./Skeleton-O-y9i0gG.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-pFGGqfJe.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./useHighlightedText-cpJ8B6bV.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-itsnj659.js";import"./Plus-ChI102rs.js";import"./useMenu-CE-qOAep.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./Section-D88C7V2M.js";import"./Flex-DcepQHCt.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
