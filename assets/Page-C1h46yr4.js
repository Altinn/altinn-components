import{p as e,b as r}from"./iframe-Ca1pxjCh.js";import{useMDXComponents as o}from"./index-yzsl9csy.js";import"./PageMenu.stories-LCoVlGk1.js";import"./PageNav.stories-l_7E2R_t.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-qTpmKbQK.js";import"./Button-BUoYLOjU.js";import"./tooltip-DBInG_0S.js";import"./Icon-DX2teY26.js";import"./index-qsemo-NB.js";import"./Skeleton-CjJRr45L.js";import"./ArrowRedo-DVHisnmv.js";import"./useId-DKdvhqLE.js";import"./Eye-hNVApuei.js";import"./Archive-XJdMJ4po.js";import"./Trash-CHO3PH3Q.js";import"./BreadcrumbsLink-28UwBoEQ.js";import"./ArrowRight-k4XjWsje.js";import"./ArrowLeft-BzaFSAyN.js";import"./Flex-CU26bbCS.js";import"./ClockDashed-BAsUGnWe.js";import"./ContextMenu-CZ_jSmTp.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./XMark-D_G5yHBr.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useHighlightedText-B4z3dUTF.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./useMenu-CVV4ErAO.js";import"./MenuListItem-ChEwMlMz.js";import"./MenuListHeading-CfNBOaKJ.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./Avatar-D6lLgCNX.js";import"./AvatarGroup-DbBgQl7c.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./ChevronRight-Dx7-HhpA.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./MenuElipsisHorizontal-Bwy8rMfn.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
