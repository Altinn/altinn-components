import{ag as o,a7 as e,r}from"./iframe-BKcGtkf2.js";import"./PageMenu.stories-C0sveeAy.js";import"./PageNav.stories-Dg2XIOFP.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CbVzPtA8.js";import"./ArrowRedo-DrSZcERC.js";import"./Eye-DhzEO1a4.js";import"./Archive-CsURTuDo.js";import"./Trash-Bcnjmr1n.js";import"./BreadcrumbsLink-evuRcHdY.js";import"./ArrowRight-q4VIdZC3.js";import"./ArrowLeft-DS7bqeo4.js";import"./Flex-xlDXZNwq.js";import"./ClockDashed-CF5KyX9t.js";import"./ContextMenu-CyK_A0eq.js";import"./useDropdownMenuController-BPyTaE6X.js";import"./Dropdown-CApDEdpz.js";import"./SearchField-c4c7eBD1.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./FieldBase-kOxFDexg.js";import"./Typography-CpSlwMZW.js";import"./useHighlightedText-Qdo-jqVR.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";import"./useMenu-D9Zi9nWU.js";import"./MenuListItem-q_h-S_lZ.js";import"./MenuListDivider-BA6y76AD.js";import"./MenuListHeading-MK0rACd0.js";import"./MenuItem-BPSVutJE.js";import"./ItemMedia-DmxCD2ZI.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./Heading-iI-qniD3.js";import"./ItemControls-sjDYc_Mm.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./ChevronRight-Bik0Rfts.js";import"./InformationSquare-7aD0sTi5.js";import"./MenuElipsisHorizontal-D9ZiNbMs.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
