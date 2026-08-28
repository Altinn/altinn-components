import{ag as n,a7 as e,r as i,C as r}from"./iframe-BRgClhpr.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-CSlYnfw9.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-oCcmK9MG.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-6x5OXkzD.js";import"./MagnifyingGlass-DQctf2To.js";import"./AutocompleteItem-B5aglJAj.js";import"./useMenu-C_5VwfPF.js";import"./MenuItem-jszC7nZR.js";import"./ItemMedia-DpaVUI33.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ItemControls-WDxokqHy.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./ChevronRight-BLIKQh_h.js";import"./QueryLabel-DGuFu2RL.js";import"./Plus-Bhd65Ctm.js";import"./MenuListItem-rBdScGXY.js";import"./MenuListDivider-DSrBiGuI.js";import"./MenuListHeading-BqZAg_LU.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function G(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{G as default};
