import{ag as o,a7 as e,r}from"./iframe-C9sF4CIH.js";import"./PageMenu.stories-CrU_AU5n.js";import"./PageNav.stories-7_YftxuM.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-wEjregHf.js";import"./ArrowRedo-Cjuulx0-.js";import"./Eye-LXSbh1vN.js";import"./Archive-C9EZoKY1.js";import"./Trash-DtuzqxyC.js";import"./BreadcrumbsLink-B_5wbeSS.js";import"./ArrowRight-C_e3H3Ut.js";import"./ArrowLeft-ByC8mo5U.js";import"./Flex-DnMHh9vb.js";import"./ClockDashed-CPjWxQp2.js";import"./ContextMenu-ZXotIdMM.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./useMenu-BFGedA5y.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./ItemMedia-Ck6acBMI.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./Heading-CN6nglwQ.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ChevronRight-BzqVHEpk.js";import"./InformationSquare-BmRwhtkQ.js";import"./MenuElipsisHorizontal-BiPwQStA.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
