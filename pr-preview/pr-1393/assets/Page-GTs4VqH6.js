import{ag as o,a7 as e,r}from"./iframe-DXZBp66t.js";import"./PageMenu.stories-Bi3HVaBV.js";import"./PageNav.stories-CXcU1WI0.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Dj06Tzhg.js";import"./ArrowRedo-CAwIphET.js";import"./Eye-BKNKFWAZ.js";import"./Archive-D_fDrU6A.js";import"./Trash-BVvBgCOa.js";import"./BreadcrumbsLink-CoaUA2nb.js";import"./ArrowRight-CFon2rf8.js";import"./ArrowLeft-Cs6NoMdI.js";import"./Flex-D7Hg4_mS.js";import"./ClockDashed-_D1rSVtE.js";import"./ContextMenu-BUJ5Tr27.js";import"./useDropdownMenuController-DlFwuKli.js";import"./Dropdown-C18yy08p.js";import"./SearchField-Bxud3zBq.js";import"./MagnifyingGlass-D2DSD_Zc.js";import"./FieldBase-Cs4Gpo93.js";import"./Typography-YwBvvLgA.js";import"./useHighlightedText-D_TdPqyJ.js";import"./Field-awsdGPJZ.js";import"./Label-Byvm_JcV.js";import"./Input--Cg-6oUs.js";import"./useMenu-CLawwFGJ.js";import"./MenuListItem-Clm2r-Mx.js";import"./MenuListDivider-CFvZmzp8.js";import"./MenuListHeading-vVix4BjR.js";import"./MenuItem-iQrBISbT.js";import"./ItemMedia-C0bdVmnE.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Checkmark-B8V7JmGk.js";import"./ItemLabel-ErnjkFel.js";import"./Heading-Dabq2F6t.js";import"./ItemControls-CKEXZGvE.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./ChevronRight-Cf4DVjz-.js";import"./InformationSquare-CBzXkt4t.js";import"./MenuElipsisHorizontal-DFviO9eH.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
