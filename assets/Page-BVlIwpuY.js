import{ag as o,a7 as e,r}from"./iframe-CAjSv_nS.js";import"./PageMenu.stories-BsjtuhjO.js";import"./PageNav.stories-DIbd88F9.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CMgRP-jg.js";import"./ArrowRedo-CjQbPxnX.js";import"./Eye-CGQWJv-o.js";import"./Archive-D9_PLgbn.js";import"./Trash-CNWgj8JD.js";import"./BreadcrumbsLink-CywEWjrR.js";import"./ArrowRight-BIY-HWMN.js";import"./ArrowLeft-Co4FK8l5.js";import"./Flex-Dkl3V3J_.js";import"./ClockDashed-Bkab8kOk.js";import"./ContextMenu-BXFgsv5t.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./SearchField-BeyrM52L.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./InformationSquare-CA9knMPH.js";import"./MenuElipsisHorizontal-BDVfbbpF.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
