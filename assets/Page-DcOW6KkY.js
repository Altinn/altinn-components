import{p as e,b as r}from"./iframe-a6n42jIx.js";import{useMDXComponents as o}from"./index-IXQiAFUy.js";import"./PageMenu.stories-BZ3kIgIP.js";import"./PageNav.stories-BPr5DwvV.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-zWk8vA_H.js";import"./Button-DYhT04-k.js";import"./tooltip-D8RdZxwd.js";import"./Icon-C2KYL6xM.js";import"./index-D2z1-3lt.js";import"./Skeleton-BMznOa58.js";import"./ArrowRedo-BnbrKyQg.js";import"./useId-JsUrCC3L.js";import"./Eye-CrHnsRDH.js";import"./Archive-C-KNrort.js";import"./Trash-BiwQCIF6.js";import"./BreadcrumbsLink-DlIyvrPR.js";import"./ArrowRight-xh97N2k0.js";import"./ArrowLeft-Btjbrux7.js";import"./Flex-BTGTFkLF.js";import"./ClockDashed-D-ph8zZH.js";import"./ContextMenu-D_LAygeA.js";import"./useDropdownMenuController-ChUHZsVx.js";import"./Dropdown-MBw9TKMx.js";import"./XMark-ENWUN_kz.js";import"./SearchField-Cpk_dpFX.js";import"./MagnifyingGlass-CsfVCXI1.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useHighlightedText-Bq-Ej33u.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./useMenu-BnSKl7OB.js";import"./MenuListItem-BG5nT3q2.js";import"./MenuListHeading-Bp0V-0Ne.js";import"./MenuItem-DlDQtEmE.js";import"./ItemMedia-9TYJyMgm.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Checkmark-NdO0COsu.js";import"./Heading-Dza3pExo.js";import"./ItemControls-vHjq0nAG.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./ChevronRight-DzQRiVjQ.js";import"./index-Bc5QqnLi.js";import"./InformationSquare-DAX_zw-n.js";import"./MenuElipsisHorizontal-B575Bwb2.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
