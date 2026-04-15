import{j as e,M as i,C as r}from"./iframe-Bka3lqwZ.js";import{useMDXComponents as n}from"./index-CzEAr-GI.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-wRQYaDu0.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-BVoIS2z9.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-qiWMG-1y.js";import"./useIsDesktop-CD3cIJ_t.js";import"./index-97QH58ax.js";import"./MagnifyingGlass-ohRS00MN.js";import"./useId-BOUKUp4S.js";import"./XMark-BopKFElT.js";import"./Icon-DoXRGO_6.js";import"./Skeleton-ECUY2hPc.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-C3wMsO3s.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ItemControls-abhSx9yX.js";import"./ChevronRight-1C-HJkAE.js";import"./Badge-Dr-ny6rj.js";import"./QueryLabel-B9pbQKbm.js";import"./Plus-Cr5OOVFj.js";import"./useMenu-Cu8ej4cj.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./Section-DgAAlgWN.js";import"./Flex-CDu7UET9.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
