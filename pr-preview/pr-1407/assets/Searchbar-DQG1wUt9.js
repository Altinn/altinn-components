var a=Object.defineProperty;var s=(o,t)=>a(o,"name",{value:t,configurable:!0});import{af as i,a5 as e,q as c,C as r}from"./iframe-k-5ppgch.js";import{GlobalSearch as h,InboxSearch as p,InboxScopesExpanded as l}from"./Searchbar.stories-Ceir1-_o.js";import{SuggestedFilters as d,SuggestedHits as m}from"./Autocomplete.stories-BSVOYPKh.js";import"./preload-helper-Cc2_yIPf.js";import"./useIsDesktop-BKfbiGbl.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./AutocompleteItem-BYMWauaV.js";import"./useMenu-DQYhP48A.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./QueryLabel-DVaeMmMn.js";import"./Plus-BfzF3o2K.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListDivider-BXcHHiOJ.js";import"./MenuListHeading-DOGIQowl.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";function n(o){const t={h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Layout/Searchbar"}),`
`,e.jsx(t.h1,{id:"the-searchbar",children:"The searchbar"}),`
`,e.jsx(t.p,{children:"The layout includes a prominent search that should handle search behavior across products."}),`
`,e.jsx(t.p,{children:"Until we are able to provide a global search across all products, the search will start out as a local search in context of each product."}),`
`,e.jsx(t.h2,{id:"search-context-and-scopes",children:"Search context and scopes"}),`
`,e.jsx(t.p,{children:"The placeholder text of the search should reflect the context of the product. Before login the placeholder should reflect what content is searchable:"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.p,{children:"In other contexts, like the Inbox, the placeholder should indicate that search will operate within that context."}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.p,{children:"To enable users to search across products, we can use scopes to provide an option to trigger the same query in a different context."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h2,{id:"using-suggestions",children:"Using suggestions"}),`
`,e.jsx(t.p,{children:"Based on the query, the autocomplete can be used to suggest relevant searches, for example applying a filter for sender if the query matches a sender's name."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note"}),": Indicating number of hits is a nice feature, but not required in first version; this requires a backend that explicitly can provide this information and/or requires searches in parallel."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.p,{children:"Autocomplete can also be used to suggest top hits:"}),`
`,e.jsx(r,{of:m})]})}s(n,"_createMdxContent");function z(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}s(z,"MDXContent");export{z as default};
