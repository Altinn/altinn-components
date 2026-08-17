import{ag as o,a7 as e,r}from"./iframe-DE6S9aZ4.js";import"./PageMenu.stories-CC6nqXHY.js";import"./PageNav.stories-CjaoQBT8.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BtVQMN6b.js";import"./ArrowRedo-DnroCoyD.js";import"./Eye-BUunqYKB.js";import"./Archive-vICIit_T.js";import"./Trash-DzwQmE5W.js";import"./BreadcrumbsLink-Bfs8jBLi.js";import"./ArrowRight-CYzhC7P8.js";import"./ArrowLeft-rnMB1WZq.js";import"./Flex-DAi1mqH2.js";import"./ClockDashed-CIHM6whj.js";import"./ContextMenu-OB_xrmDU.js";import"./useDropdownMenuController-DjzmpwyV.js";import"./Dropdown-CtTBKP-C.js";import"./SearchField-DLpVp_NL.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./FieldBase-Dqt8MJKx.js";import"./Typography-Cfn_aMgf.js";import"./useHighlightedText-C20f3R5e.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";import"./useMenu-BnFUnl7r.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuListDivider-TgKUiY6a.js";import"./MenuListHeading-C_U_JJdE.js";import"./MenuItem-DIQqnyL7.js";import"./ItemMedia-CpnAVdfr.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./Heading-BDklncvD.js";import"./ItemControls-BOAqxChM.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./ChevronRight-CaR2K8Z7.js";import"./InformationSquare-BoTINEEI.js";import"./MenuElipsisHorizontal-BBzbVmNF.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
