import{j as e,M as i,C as r}from"./iframe-Bk_HwK4l.js";import{useMDXComponents as n}from"./index-BOe1SkkV.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-D7cqxXLH.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CgwTd7AD.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-DtaFkEnB.js";import"./index-Bj80ru-z.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./useId-WArpTTRC.js";import"./XMark-BlM7H2uk.js";import"./Icon-BbsTdu7G.js";import"./Skeleton-CZ4GHxMp.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-DK4q39G1.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./Avatar-B1R5c004.js";import"./AvatarGroup-CkGvw6sL.js";import"./Checkmark-BwmprQFp.js";import"./Heading-D6li-Zgs.js";import"./useHighlightedText-BjD5CEaG.js";import"./ItemControls-DoACt_K_.js";import"./ChevronRight-BEdxYQXL.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CZc9dsnK.js";import"./Plus-Db6y3gEP.js";import"./useMenu-BNIm_aif.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./Section-DaLGW2Wx.js";import"./Flex-CqtyDzLK.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
