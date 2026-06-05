import{ag as o,a7 as e,r}from"./iframe-DWxW88Wb.js";import"./PageMenu.stories-DEbPBm1j.js";import"./PageNav.stories-Djf0OjYO.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BlBvbh1i.js";import"./ArrowRedo-BQHpo6jY.js";import"./Eye-cMaAT_DO.js";import"./Archive-FtzxqCV-.js";import"./Trash-D9-PBT3O.js";import"./BreadcrumbsLink-CNTXGuVE.js";import"./ArrowRight-DK82HgDq.js";import"./ArrowLeft-COebtD31.js";import"./Flex-DNJfc4Fp.js";import"./ClockDashed-CcEfkX7I.js";import"./ContextMenu-CS8Y-rHM.js";import"./useDropdownMenuController-D6SwXekY.js";import"./Dropdown-CCIsf4ws.js";import"./SearchField-DiX0tG9c.js";import"./MagnifyingGlass-DeszhIH4.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./useHighlightedText-Kme-_nwy.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./useMenu-DXA38xVt.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./Heading-Dg7_b6ZQ.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronRight-CaZE672G.js";import"./index-BBaxa0Qn.js";import"./InformationSquare-BIrp2N6S.js";import"./MenuElipsisHorizontal-Cf3wHrhL.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
