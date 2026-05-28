import{w as o,p as e,c as t}from"./iframe-BBbEwSaq.js";import"./PageMenu.stories-C4FlSA02.js";import"./PageNav.stories-DSa5H_3e.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BNDC5-ta.js";import"./Button-DpW4Pu6O.js";import"./tooltip-D3G3Ewte.js";import"./Icon-Cx6QAjG2.js";import"./index-awH0sXcw.js";import"./Skeleton-DFF9p8Mx.js";import"./ArrowRedo-BRpncLYV.js";import"./useId-DZp72-eX.js";import"./Eye-DjmH3mmf.js";import"./Archive-D8Y6xMn8.js";import"./Trash-Cq0lfucZ.js";import"./BreadcrumbsLink-BWpQl82D.js";import"./ArrowRight-DScEIYh0.js";import"./ArrowLeft-sE5ezhqu.js";import"./Flex-Cc0Ueohf.js";import"./ClockDashed-BmClXrVK.js";import"./ContextMenu-j2psK2Du.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./XMark-Dw8JSfSd.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./MenuElipsisHorizontal-WptlvvL2.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Page"}),`
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
