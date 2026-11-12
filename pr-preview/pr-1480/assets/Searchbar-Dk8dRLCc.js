var a=Object.defineProperty;var s=(o,t)=>a(o,"name",{value:t,configurable:!0});import{ag as i,a6 as e,r as c,C as r}from"./iframe-M-0W2Kc9.js";import{GlobalSearch as h,InboxSearch as p,InboxScopesExpanded as l}from"./Searchbar.stories-CGC2vMr2.js";import{SuggestedFilters as d,SuggestedHits as m}from"./Autocomplete.stories-DQSyyW5G.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-Cn7t9tR4.js";import"./MagnifyingGlass-BCQWJszI.js";import"./AutocompleteItem-CoBnUpv0.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./useMenu-D1I6Xbj7.js";import"./QueryLabel-B7kGTmjQ.js";import"./Plus-DyAe2qPf.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";function n(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Layout/Searchbar"}),`
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
