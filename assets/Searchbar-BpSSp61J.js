import{j as e,M as i,C as r}from"./iframe-V8BRfBgT.js";import{useMDXComponents as n}from"./index-a5g0NmPk.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-LvCzRMt-.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-jS4iIn3M.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Bl9_iylm.js";import"./index-Dg3z2A9f.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./useId-Cpax_hNq.js";import"./XMark-C45HvrEl.js";import"./Icon-BWOTtVf8.js";import"./Skeleton-BQtaEJM-.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-CMidaeet.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Checkmark-BKwfqVUb.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./ItemControls-BctCfWNT.js";import"./ChevronRight-Cz_uty1S.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-BxPUsrn3.js";import"./Plus-DYqQ5ZW1.js";import"./useMenu-D2cFOQcG.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./Section-BCm3_cLa.js";import"./Flex-Cr7oVI5u.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
