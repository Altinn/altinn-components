import{ag as o,a7 as e,r}from"./iframe-BRgClhpr.js";import"./PageMenu.stories-DP2mfRvR.js";import"./PageNav.stories-vRyve7Ww.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-B9BAoiOq.js";import"./ArrowRedo-BnoU49mh.js";import"./Eye-DmfViiBh.js";import"./Archive-D_ouN-S2.js";import"./Trash-Dik4P95g.js";import"./BreadcrumbsLink-DdoqkALs.js";import"./ArrowRight-BXMFSAvd.js";import"./ArrowLeft--TXF6Wul.js";import"./Flex-A0QnVpm8.js";import"./ClockDashed-CWknIAj4.js";import"./ContextMenu-BusqlWA9.js";import"./useDropdownMenuController-CFHgccGy.js";import"./Dropdown-DgbN3_NI.js";import"./SearchField--IrWsBEa.js";import"./MagnifyingGlass-DQctf2To.js";import"./FieldBase-D8LAV1W4.js";import"./Typography-BKJ9hmvo.js";import"./useHighlightedText-DTOSK592.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./Input-C7r6_Ftd.js";import"./useMenu-C_5VwfPF.js";import"./MenuListItem-rBdScGXY.js";import"./MenuListDivider-DSrBiGuI.js";import"./MenuListHeading-BqZAg_LU.js";import"./MenuItem-jszC7nZR.js";import"./ItemMedia-DpaVUI33.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./Heading-D9ujzuNV.js";import"./ItemControls-WDxokqHy.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./ChevronRight-BLIKQh_h.js";import"./InformationSquare-DK9XnxPK.js";import"./MenuElipsisHorizontal-CzndoW4V.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
