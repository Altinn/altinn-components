import{ag as o,a7 as e,r}from"./iframe-h3kpEY-8.js";import"./PageMenu.stories-7SjoLowH.js";import"./PageNav.stories-C3QxDkaw.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-34mDU3o4.js";import"./ArrowRedo-Cz6ra2PD.js";import"./Eye-j1llmHwA.js";import"./Archive-C2zjgILp.js";import"./Trash-Bbf21dp0.js";import"./BreadcrumbsLink-DDRIWfdO.js";import"./ArrowRight-BHwxkP2p.js";import"./ArrowLeft-DeuIMQbC.js";import"./Flex-BmiGVQGS.js";import"./ClockDashed-BJgLHY99.js";import"./ContextMenu-CoG70u__.js";import"./useDropdownMenuController-BHvOgZtq.js";import"./Dropdown-BZC5Raej.js";import"./SearchField-pLL_WmAV.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./useHighlightedText-Lwubglq6.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./useMenu-DIh14msT.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./Heading-Dn7fEFx7.js";import"./ItemControls-DTSXitWE.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ChevronRight-zeeAR8pp.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";import"./MenuElipsisHorizontal-DBgqCiOI.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
