import{ag as n,a7 as e,r as i,C as r}from"./iframe-vkxhbe5D.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-z3lsaolC.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-yjSR4xyK.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-MoD1iq-0.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./AutocompleteItem-BCZaJl5K.js";import"./useMenu-pP3xGIIj.js";import"./MenuItem-CzOEvYQv.js";import"./ItemMedia-iOETwWXj.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronRight-BjSUzT6t.js";import"./QueryLabel-B8IFt_Dj.js";import"./Plus-DvLwQ2c5.js";import"./MenuListItem-BToT8FwM.js";import"./MenuListDivider-DNPFWOP3.js";import"./MenuListHeading-DcoOXLFk.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
