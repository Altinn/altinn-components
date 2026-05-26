import{p as e,b as i,C as r}from"./iframe-a6n42jIx.js";import{useMDXComponents as n}from"./index-IXQiAFUy.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-BBjQiSTx.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-ZUrOJ-c1.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-Dz8Xfx0T.js";import"./index-D2z1-3lt.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./useId-JsUrCC3L.js";import"./XMark-ENWUN_kz.js";import"./Icon-C2KYL6xM.js";import"./Skeleton-BMznOa58.js";import"./Button-DYhT04-k.js";import"./tooltip-D8RdZxwd.js";import"./AutocompleteItem-DHS-OLfr.js";import"./useMenu-BnSKl7OB.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./ChevronRight-DzQRiVjQ.js";import"./QueryLabel-CSxDB6uf.js";import"./Plus-DWNwY5kK.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./Section-SbJC69tZ.js";import"./Flex-BTGTFkLF.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
