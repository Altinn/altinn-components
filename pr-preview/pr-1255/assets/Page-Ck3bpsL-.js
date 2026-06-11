import{ag as o,a7 as e,r}from"./iframe-CdYVD6SD.js";import"./PageMenu.stories-CW88zFK0.js";import"./PageNav.stories-Uw75R_nN.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BW7TPPXC.js";import"./ArrowRedo-DAysNzb5.js";import"./Eye-pyPboNbx.js";import"./Archive-NYL17u-9.js";import"./Trash-Xory4lRl.js";import"./BreadcrumbsLink-BYbHpSOZ.js";import"./ArrowRight-Tr7SFlLA.js";import"./ArrowLeft-Bq0megZK.js";import"./Flex-Cyvp2qjC.js";import"./ClockDashed-CnOrWZDE.js";import"./ContextMenu-Dh3e6JFy.js";import"./useDropdownMenuController-DJh2Guga.js";import"./Dropdown-BNNn4VPY.js";import"./SearchField-B_NM7GXp.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./useHighlightedText-DItA3cBY.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./Heading-Kaqd1h94.js";import"./ItemControls-vidWw2G8.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronRight-Dr5zJkhS.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";import"./MenuElipsisHorizontal-BPjsS_Dz.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
