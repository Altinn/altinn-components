import{j as e,M as i,C as r}from"./iframe-DU0n7__8.js";import{useMDXComponents as n}from"./index-FebBi8vE.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CMOZDQtT.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CTdjCxTN.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-C2Brmgmw.js";import"./index-sAFX08uI.js";import"./MagnifyingGlass-COVfkIqf.js";import"./useId-DCXiBgwp.js";import"./XMark-DGVnrVrT.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Button-pXyw-iqn.js";import"./tooltip-UENHGvJl.js";import"./AutocompleteItem-CrcIy4dI.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./QueryLabel-CaEIA6-Q.js";import"./Plus-BxZePwQm.js";import"./useMenu-CrvHU43k.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./Section-DwU7Gyqo.js";import"./Flex-C_O_eubX.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
