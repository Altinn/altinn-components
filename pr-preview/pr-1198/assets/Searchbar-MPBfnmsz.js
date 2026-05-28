import{w as n,p as e,c as i,C as r}from"./iframe-DrMVe4hJ.js";import{GlobalSearch as a,InboxSearch as c,InboxScopesExpanded as h}from"./Searchbar.stories-DAMmofqy.js";import{SuggestedFilters as p,SuggestedHits as l}from"./Autocomplete.stories-Bu8zim8D.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-BPcHKUeF.js";import"./index-B2LUQ97G.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./useId-CwrI0QJg.js";import"./XMark-BXMpu0Gf.js";import"./Icon-CK8FcAiF.js";import"./Skeleton-BKl0bJYN.js";import"./Button-B40GVZAo.js";import"./tooltip-BY1BnveL.js";import"./AutocompleteItem-CLO_ITnQ.js";import"./useMenu-CrRt-E4f.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./useHighlightedText-BA3QT9FH.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./ChevronRight-u16zgCRT.js";import"./QueryLabel-DcDaMQuD.js";import"./Plus-CPTNbqFv.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./Section-BOFb_opG.js";import"./Flex-Bv-_adYq.js";function s(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Layout/Searchbar"}),`
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
`,e.jsx(r,{of:l})]})}function K(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{K as default};
