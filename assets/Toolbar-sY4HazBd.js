import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{AccountMenuAndFilters as i,AccountMenuAndSearch as a,AccountMenuAndSubmenu as o,Composition as s,RemovableFilters as c,SearchAndFilter as l,SearchAndSwitch as u,StaticFilters as d}from"./Toolbar.stories-DThJr3lg.js";var f=e();function p(e){let p={h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...r(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Toolbar/Toolbar`}),`
`,(0,f.jsx)(p.h1,{id:`the-toolbar`,children:`The Toolbar`}),`
`,(0,f.jsx)(p.p,{children:`The toolbar provides a way of navigating and filtering content. It should appear directly above the content that can be filtered.`}),`
`,(0,f.jsx)(p.h2,{id:`building-a-toolbar`,children:`Building a toolbar`}),`
`,(0,f.jsx)(p.p,{children:`Toolbars can include menus, a search field and filters, or a combination of some of them:`}),`
`,(0,f.jsx)(t,{of:s}),`
`,(0,f.jsx)(p.p,{children:`A toolbar with search and filter:`}),`
`,(0,f.jsx)(t,{of:l}),`
`,(0,f.jsx)(p.p,{children:`For simple, single-option filters, like showing or hiding deleted items, a switch might be a better option than a filter:`}),`
`,(0,f.jsx)(t,{of:u}),`
`,(0,f.jsx)(p.h2,{id:`using-filters`,children:`Using filters`}),`
`,(0,f.jsx)(p.p,{children:`Toolbars can include multiple filters:`}),`
`,(0,f.jsx)(p.h3,{id:`static-filters`,children:`Static filters`}),`
`,(0,f.jsx)(p.p,{children:`Filters can be static, making all available filters available at once.`}),`
`,(0,f.jsx)(t,{of:d}),`
`,(0,f.jsx)(p.h3,{id:`removable-filters`,children:`Removable filters`}),`
`,(0,f.jsx)(p.p,{children:`When using multiple filtes, consider making some or all filters removable, displaying relevant filters as they are added to the toolbar:`}),`
`,(0,f.jsx)(p.p,{children:`This type of filtering works well for faceted navigation, where available filters might change depending on what is selected.`}),`
`,(0,f.jsx)(t,{of:c}),`
`,(0,f.jsx)(p.h2,{id:`combining-with-account-selector`,children:`Combining with account selector`}),`
`,(0,f.jsx)(p.p,{children:`The Toolbar can include the AccountMenu, creating a shortcut for switching accounts. Combined with addable filters, the current account marks a starting point for faceted navigation.`}),`
`,(0,f.jsx)(t,{of:i}),`
`,(0,f.jsx)(p.p,{children:`Selecting subaccounts:`}),`
`,(0,f.jsx)(t,{of:o}),`
`,(0,f.jsx)(p.h2,{id:`combining-with-search`,children:`Combining with search`}),`
`,(0,f.jsx)(p.p,{children:`Filters available in the toolbar can work as post-filtering for a global search, but the Toolbar can also include a simple search that can be used for filtering content by simple queries.`}),`
`,(0,f.jsx)(t,{of:a})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(p,{...e})}):p(e)}export{m as default};