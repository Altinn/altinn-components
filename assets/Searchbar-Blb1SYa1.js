import{j as e,M as i,C as r}from"./iframe-CpLxKnDM.js";import{useMDXComponents as n}from"./index-BbdVCkqs.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DTVlgz71.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Dc32fcX2.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BFm1-w7T.js";import"./index-BZrYlxzi.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./useId-Dk2QO8VQ.js";import"./XMark-BkFwP2BW.js";import"./Icon-xH6stteC.js";import"./Skeleton-B2kLb9z1.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-D7RB4Wgg.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./useHighlightedText-De1FlINf.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CbkMDprd.js";import"./Plus-7ibbtH5p.js";import"./useMenu-CCk7NyHy.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./Section-cnHf2d7L.js";import"./Flex-DdRay9SF.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
