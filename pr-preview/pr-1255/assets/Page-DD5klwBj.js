import{ag as o,a7 as e,r}from"./iframe-D-JzFSbn.js";import"./PageMenu.stories-DVgglrjg.js";import"./PageNav.stories-C_eCrbQu.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Cj32dEf9.js";import"./ArrowRedo-B7pSqWNI.js";import"./Eye-DBkbZns5.js";import"./Archive-CvXQ6eh-.js";import"./Trash-D3qdF3-Q.js";import"./BreadcrumbsLink-fssIU64W.js";import"./ArrowRight-C7Q4eiPE.js";import"./ArrowLeft-lvrbuWGY.js";import"./Flex-LyiOw0eI.js";import"./ClockDashed-oddFCb0b.js";import"./ContextMenu-DTF5h8Vw.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./SearchField-Cu2rkG8b.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./FieldBase-BAxlQmDt.js";import"./Typography-B37rH5fJ.js";import"./useHighlightedText-kVudreWZ.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./useMenu-DF0RLrk1.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuListDivider-DzTLggx0.js";import"./MenuListHeading-B2S0HcdV.js";import"./MenuItem-wkNgjJsE.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./Heading-BuD5A-91.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./ChevronRight-CnTD3zzq.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./MenuElipsisHorizontal-CYuAhYGx.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
`,e.jsx(n.p,{children:"Articles, topics and other pages with content."})]})}function V(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{V as default};
