import{j as e,M as r}from"./iframe-BbAJh2l_.js";import{useMDXComponents as s}from"./index-BU8kjn93.js";import"./PageMenu.stories-CZjZUPYr.js";import"./PageNav.stories-Cq2O6uV-.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Delbsf5y.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./Icon-BPIDnrjf.js";import"./index-D4eFSvt3.js";import"./Skeleton-DCAPmpFX.js";import"./ArrowRedo-BoftjVXg.js";import"./useId-DlaeWOGU.js";import"./Eye-DLDyRtc6.js";import"./Archive-BnSuVF__.js";import"./Trash-CReBsH0T.js";import"./ClockDashed-CG4xQbHM.js";import"./PageNav-CMm01v0x.js";import"./ArrowLeft-lWhpFl88.js";import"./Flex-c7I9zH32.js";import"./BreadcrumbsLink-CSB0nW6U.js";import"./ArrowRight-q_aSapAv.js";import"./ContextMenu-WSksyULt.js";import"./useDropdownMenuController-C3VaoHjC.js";import"./Dropdown-oBR_mdc3.js";import"./XMark-CBD09dy-.js";import"./Tooltip-C777j_wE.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DkCmNo2T.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./Badge-Bayw0f9c.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function re(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{re as default};
