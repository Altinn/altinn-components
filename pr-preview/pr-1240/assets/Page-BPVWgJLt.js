import{ag as o,a7 as e,r}from"./iframe-B0WoJH5H.js";import"./PageMenu.stories-CTdQsPKa.js";import"./PageNav.stories-CGjHGl2V.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DJolZyGa.js";import"./ArrowRedo-DLyyPYg9.js";import"./Eye-Cp93npSp.js";import"./Archive-BFiK2iNm.js";import"./Trash-CO6lVbOZ.js";import"./BreadcrumbsLink-DpOnqGiT.js";import"./ArrowRight-D_Xst9rm.js";import"./ArrowLeft-Bd9I5XxC.js";import"./Flex-DKCofw-s.js";import"./ClockDashed-BYruIMSN.js";import"./ContextMenu-Bjez-tdT.js";import"./useDropdownMenuController-CzjMq5Jo.js";import"./Dropdown-trRXYlHt.js";import"./SearchField-B4XHRk25.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./FieldBase-HmzGYXkl.js";import"./Typography-BsE1w5gb.js";import"./useHighlightedText-BkoAp9J_.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./useMenu-BEojsPyg.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./Heading-DxONre_z.js";import"./ItemControls-AxIj9K4z.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronRight-DJgUHhg2.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./MenuElipsisHorizontal-rgMWcXSh.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
