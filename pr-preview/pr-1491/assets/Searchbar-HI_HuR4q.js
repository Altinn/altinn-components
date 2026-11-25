var a=Object.defineProperty;var s=(o,t)=>a(o,"name",{value:t,configurable:!0});import{ag as i,a6 as e,r as c,C as r}from"./iframe-CZm9Z2L_.js";import{GlobalSearch as h,InboxSearch as p,InboxScopesExpanded as l}from"./Searchbar.stories-Ci-8zOiF.js";import{SuggestedFilters as d,SuggestedHits as m}from"./Autocomplete.stories-hgSK7vro.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-IAQovNa1.js";import"./MagnifyingGlass-DwPErScE.js";import"./AutocompleteItem-uHA2J6E0.js";import"./useMenu-czaSJY_k.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";import"./QueryLabel-CMhNYYFg.js";import"./Plus-B_1tuTHV.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";function n(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:m})]})}s(n,"_createMdxContent");function R(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}s(R,"MDXContent");export{R as default};
