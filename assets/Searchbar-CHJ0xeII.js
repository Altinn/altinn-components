import{j as e,M as i,C as r}from"./iframe-xsOFb0qB.js";import{useMDXComponents as n}from"./index-Dh3vZ7X5.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-atKdSvaN.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-DTkv2OnU.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BOJmI6K-.js";import"./index-C2Njje4x.js";import"./MagnifyingGlass--8bC5kd2.js";import"./useId-BSkX16Wf.js";import"./XMark-CIyVPbna.js";import"./Icon-Bfs0jdaJ.js";import"./Skeleton-DBfNAA4T.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-BqZ5phXJ.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./useHighlightedText-DlnkJmvJ.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-Dh4OgX92.js";import"./Plus-CO7gw69x.js";import"./useMenu-Cuq0hoPZ.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./Section-B92vWqdI.js";import"./Flex-D9aEciRT.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
