import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{SuggestedFilters as i,SuggestedHits as a}from"./Autocomplete.stories-BAls-lF_.js";import{GlobalSearch as o,InboxScopesExpanded as s,InboxSearch as c}from"./Searchbar.stories-BwPhkeSh.js";var l=e();function u(e){let u={h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Layout/Searchbar`}),`
`,(0,l.jsx)(u.h1,{id:`the-searchbar`,children:`The searchbar`}),`
`,(0,l.jsx)(u.p,{children:`The layout includes a prominent search that should handle search behavior across products.`}),`
`,(0,l.jsx)(u.p,{children:`Until we are able to provide a global search across all products, the search will start out as a local search in context of each product.`}),`
`,(0,l.jsx)(u.h2,{id:`search-context-and-scopes`,children:`Search context and scopes`}),`
`,(0,l.jsx)(u.p,{children:`The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:`}),`
`,(0,l.jsx)(t,{of:o}),`
`,(0,l.jsx)(u.p,{children:`In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context.`}),`
`,(0,l.jsx)(t,{of:c}),`
`,(0,l.jsx)(u.p,{children:`To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context.`}),`
`,(0,l.jsx)(t,{of:s}),`
`,(0,l.jsx)(u.h2,{id:`using-suggestions`,children:`Using suggestions`}),`
`,(0,l.jsx)(u.p,{children:`Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name.`}),`
`,(0,l.jsxs)(u.p,{children:[(0,l.jsx)(u.strong,{children:`Note`}),`: Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel.`]}),`
`,(0,l.jsx)(t,{of:i}),`
`,(0,l.jsx)(u.p,{children:`Autocomplete can also be used to suggest top hits:`}),`
`,(0,l.jsx)(t,{of:a})]})}function d(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}export{d as default};