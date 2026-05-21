import{j as e,M as i,C as r}from"./iframe-CXxOXnma.js";import{useMDXComponents as n}from"./index-jOt5FO3J.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-mvZ_ESwj.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CtBBqPhC.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-pfWHUBPv.js";import"./index-DvzmMrBu.js";import"./MagnifyingGlass-D50FbQFC.js";import"./useId-CYy4MNIP.js";import"./XMark-DvGwYctt.js";import"./Icon-CyU2k-nr.js";import"./Skeleton-DaZzKoDP.js";import"./Button-Dot-dF6F.js";import"./tooltip-F-8CLWbq.js";import"./AutocompleteItem-CLTpBjnG.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ItemControls-D969--fk.js";import"./ChevronRight-fDr-lddl.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./QueryLabel-sjyVTaOI.js";import"./Plus-52Qbrw3J.js";import"./useMenu-B3yI9DRQ.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./Section-BI582Rxy.js";import"./Flex-Cdw8i_ge.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
