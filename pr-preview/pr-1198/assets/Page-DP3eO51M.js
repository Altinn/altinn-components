import{j as e,M as r}from"./iframe-C6Awlou2.js";import{useMDXComponents as o}from"./index-CFcRwB6s.js";import"./PageMenu.stories-CY_p6bz_.js";import"./PageNav.stories-DqigUBuq.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DJraguuS.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./Icon-DNxmTYNY.js";import"./index-DlBZqmFk.js";import"./Skeleton-Dzw9idTE.js";import"./ArrowRedo-DKrhBbVI.js";import"./useId-InpKFtFj.js";import"./Eye-B6PTDSFS.js";import"./Archive-Cyt7GbXr.js";import"./Trash-Ccqpg617.js";import"./ArrowLeft-C75heOGB.js";import"./Flex-CdwLgxBs.js";import"./BreadcrumbsLink-BMloO8NQ.js";import"./ArrowRight-DqNeR1fr.js";import"./ClockDashed-BMcmzfJx.js";import"./ContextMenu-Bd4hTYBx.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Dropdown-A06NMf9H.js";import"./XMark-BEbAfGHw.js";import"./MenuElipsisHorizontal-DVK_g9_l.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
`,e.jsx(i.h1,{id:"building-pages",children:"Building pages"}),`
`,e.jsxs(i.p,{children:["Build pages using ",e.jsx(i.code,{children:"PageBase"})," and specific components or general purpose components like ",e.jsx(i.code,{children:"Section"})," and ",e.jsx(i.code,{children:"Heading"})," to divide and create hierarchy."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`return (
  <PageBase>
    <PageNav />
    <Heading siz="xl" />
    <Section>
      <Heading siz="lg" />
    </Section>
    <Section>
      <Heading siz="lg" />
    </Section>
  </PageBase>
);
`})}),`
`,e.jsx(i.h2,{id:"section-list-and-grid",children:"Section, List and Grid"}),`
`,e.jsxs(i.p,{children:["Layout components share similar props for ",e.jsx(i.code,{children:"color"}),", ",e.jsx(i.code,{children:"size"}),", which is inherited to it's children."]}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"Section"})," to divide pages into appropriate pieces. Section can be extended using ",e.jsx(i.code,{children:"padding"})," and ",e.jsx(i.code,{children:"spacing"})," props."]}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"List"})," and ",e.jsx(i.code,{children:"Grid"})," to present content in lists or grid, respectively. Both have a default ",e.jsx(i.code,{children:"spacing"}),", relative to it's ",e.jsx(i.code,{children:"size"}),"."]}),`
`,e.jsxs(i.p,{children:["If none of these works, you can use ",e.jsx(i.code,{children:"Flex"}),", which is a general purpose layout component, containing shared props and styles that are used to build more specific components."]}),`
`,e.jsx(i.h2,{id:"heading-and-typography",children:"Heading and Typography"}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"Heading"})," for headings. Use ",e.jsx(i.code,{children:"Typography"})," for bodytext including paragraphs, lists, and headings."]}),`
`,e.jsx(i.h2,{id:"list-pages",children:"List pages"}),`
`,e.jsx(i.p,{children:"Pages that contains lists of objects, for example a list of accounts or users."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`return (
  <PageBase>
    <PageNav breadcrumbs />
    <Heading siz="xl" />
    <Toolbar />
    <List />
  </PageBase>
);
`})}),`
`,e.jsx(i.h2,{id:"dashboards",children:"Dashboards"}),`
`,e.jsx(i.p,{children:"Dashboard pages, used as a starting point for an area that focuses on a single person or company."}),`
`,e.jsx(i.h2,{id:"settings-pages",children:"Settings pages"}),`
`,e.jsx(i.p,{children:"Pages with settings, divided into groups."}),`
`,e.jsx(i.h2,{id:"content-pages",children:"Content pages"}),`
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function ee(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ee as default};
