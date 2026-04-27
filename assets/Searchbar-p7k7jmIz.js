import{j as e,M as i,C as r}from"./iframe-BJEbXdzo.js";import{useMDXComponents as n}from"./index-D02edywB.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DCDCYttW.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Cb-cLUdX.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-fEPaYotL.js";import"./useIsDesktop-DRdiko2E.js";import"./index-ChGHkNNv.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./useId-DgrNWXh_.js";import"./XMark-sTHnj54s.js";import"./Icon-msEkDcFf.js";import"./Skeleton-DWcIZ1wH.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BwoKZe1C.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./useHighlightedText-Chj_Mw3b.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-EpxeOwi6.js";import"./Plus-DGG8hdRK.js";import"./useMenu-9_PPaP-8.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./Section-BfJWddEs.js";import"./Flex-DRE_amb0.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function V(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{V as default};
