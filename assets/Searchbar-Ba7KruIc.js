import{j as e,M as i,C as r}from"./iframe-DUgQHy5z.js";import{useMDXComponents as n}from"./index-CBbqP8KK.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-YRxaOCNo.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B1u8QJ-s.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-BqKLD53f.js";import"./useIsDesktop-DrWtlE9w.js";import"./index-CHKdKrFD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./useId-BEmmm-9F.js";import"./XMark-CIC6hSAY.js";import"./Icon-D31Usj2D.js";import"./Skeleton-BWHbMU5J.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-Cw4u_fUl.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-CsEx37Me.js";import"./Plus-DMuAFtu8.js";import"./useMenu-DKqXZTHj.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./Section-BJevJr8H.js";import"./Flex-CL-SSZvT.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function V(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{V as default};
