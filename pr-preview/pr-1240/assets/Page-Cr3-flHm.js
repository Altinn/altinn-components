import{ag as o,a7 as e,r}from"./iframe-BtrieXtc.js";import"./PageMenu.stories-l_RLS7wx.js";import"./PageNav.stories-B9qpyV7j.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BdUS0YvE.js";import"./ArrowRedo-CaCZPu69.js";import"./Eye-CmrdHzy5.js";import"./Archive-CFC9XJ3c.js";import"./Trash-CK3701XQ.js";import"./BreadcrumbsLink-Dabr0LDg.js";import"./ArrowRight-C4F-KsN1.js";import"./ArrowLeft-CMHBCx4u.js";import"./Flex-Dld0WRRq.js";import"./ClockDashed-BcQ_Y7Z0.js";import"./ContextMenu-D3dKMSB7.js";import"./useDropdownMenuController-DeNWB_nX.js";import"./Dropdown-CPgwwZJ7.js";import"./SearchField-Du6Gz1k6.js";import"./MagnifyingGlass-C5aguymI.js";import"./FieldBase-CTDBNJ5K.js";import"./Typography-BRa08Jyj.js";import"./useHighlightedText-B6dVubhR.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";import"./useMenu-BNfzuibe.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuListHeading-D0-5HT2_.js";import"./MenuItem-CHl6gjJ7.js";import"./ItemMedia-eBYq579p.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./Heading-CdtnAJEW.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./ChevronRight-DjbS-LPA.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";import"./MenuElipsisHorizontal-26vaDD2T.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
`,e.jsx(n.h1,{id:"building-pages",children:"Building pages"}),`
`,e.jsxs(n.p,{children:["Build pages using ",e.jsx(n.code,{children:"PageBase"})," and specific components or general purpose components like ",e.jsx(n.code,{children:"Section"})," and ",e.jsx(n.code,{children:"Heading"})," to divide and create hierarchy."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`return (
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
`,e.jsx(n.h2,{id:"section-list-and-grid",children:"Section, List and Grid"}),`
`,e.jsxs(n.p,{children:["Layout components share similar props for ",e.jsx(n.code,{children:"color"}),", ",e.jsx(n.code,{children:"size"}),", which is inherited to it's children."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Section"})," to divide pages into appropriate pieces. Section can be extended using ",e.jsx(n.code,{children:"padding"})," and ",e.jsx(n.code,{children:"spacing"})," props."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"List"})," and ",e.jsx(n.code,{children:"Grid"})," to present content in lists or grid, respectively. Both have a default ",e.jsx(n.code,{children:"spacing"}),", relative to it's ",e.jsx(n.code,{children:"size"}),"."]}),`
`,e.jsxs(n.p,{children:["If none of these works, you can use ",e.jsx(n.code,{children:"Flex"}),", which is a general purpose layout component, containing shared props and styles that are used to build more specific components."]}),`
`,e.jsx(n.h2,{id:"heading-and-typography",children:"Heading and Typography"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Heading"})," for headings. Use ",e.jsx(n.code,{children:"Typography"})," for bodytext including paragraphs, lists, and headings."]}),`
`,e.jsx(n.h2,{id:"list-pages",children:"List pages"}),`
`,e.jsx(n.p,{children:"Pages that contains lists of objects, for example a list of accounts or users."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`return (
  <PageBase>
    <PageNav breadcrumbs />
    <Heading siz="xl" />
    <Toolbar />
    <List />
  </PageBase>
);
`})}),`
`,e.jsx(n.h2,{id:"dashboards",children:"Dashboards"}),`
`,e.jsx(n.p,{children:"Dashboard pages, used as a starting point for an area that focuses on a single person or company."}),`
`,e.jsx(n.h2,{id:"settings-pages",children:"Settings pages"}),`
`,e.jsx(n.p,{children:"Pages with settings, divided into groups."}),`
`,e.jsx(n.h2,{id:"content-pages",children:"Content pages"}),`
`,e.jsx(n.p,{children:"Articles, topics and other pages with content."})]})}function Q(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{Q as default};
