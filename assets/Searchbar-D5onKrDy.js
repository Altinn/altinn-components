import{j as e,M as i,C as r}from"./iframe-BbAJh2l_.js";import{useMDXComponents as n}from"./index-BU8kjn93.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-COavfFNN.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-uThdZ8yT.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-Cpy9Marg.js";import"./useIsDesktop-CLdfxTOe.js";import"./index-D4eFSvt3.js";import"./MagnifyingGlass-DGbwovi2.js";import"./useId-DlaeWOGU.js";import"./XMark-CBD09dy-.js";import"./Icon-BPIDnrjf.js";import"./Skeleton-DCAPmpFX.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-tZKgj1qi.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./Badge-Bayw0f9c.js";import"./QueryLabel-BVV4lG_E.js";import"./Plus-Db8QMMb0.js";import"./useMenu-YgVQ1Cwa.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./Section-DKBhzXh6.js";import"./Flex-c7I9zH32.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function P(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
