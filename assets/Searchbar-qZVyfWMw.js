import{j as e,M as i,C as r}from"./iframe-BqnZkKPi.js";import{useMDXComponents as n}from"./index-Dl7l-Wuh.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-Uqy0EwDC.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-B7vy1-an.js";import"./preload-helper-PPVm8Dsz.js";import"./SearchbarField-yaEGn2Ew.js";import"./useIsDesktop-BGZ_Vqay.js";import"./index-DAuAfjpD.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./useId-9kVvsXig.js";import"./XMark-Y2_85_oc.js";import"./Icon-CnWjusVH.js";import"./Skeleton-1qnYSSLw.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-DU64l0Df.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./Badge-wAZ__xuM.js";import"./QueryLabel-BFhE5IIA.js";import"./Plus-7ff66Hwu.js";import"./useMenu-b_BS_LFk.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./Section-CvCvg2MJ.js";import"./Flex-Dfcm_wdC.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
