import{j as e,M as i,C as r}from"./iframe-C6Awlou2.js";import{useMDXComponents as n}from"./index-CFcRwB6s.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CGTEEM_V.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-CjRj7B4p.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-D-E7EXZk.js";import"./index-DlBZqmFk.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./useId-InpKFtFj.js";import"./XMark-BEbAfGHw.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./AutocompleteItem-CNhbVBg2.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./QueryLabel-RNavFCKB.js";import"./Plus-CQfWxjRv.js";import"./useMenu-CAczdzUV.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./Section-Bo2XNiOH.js";import"./Flex-CdwLgxBs.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
