import{j as e,M as r}from"./iframe-BFO1Hsm7.js";import{useMDXComponents as o}from"./index-pgO93lf9.js";import"./PageMenu.stories-BuSVYqJP.js";import"./PageNav.stories-D-Z7VfF9.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Dbrm8nl_.js";import"./Button-D67YnkXJ.js";import"./tooltip-DUJ67ouq.js";import"./Icon-B4PZu81w.js";import"./index-q4P8UESO.js";import"./Skeleton-BRac3_14.js";import"./ArrowRedo-IwAe62JJ.js";import"./useId-Bk4Ffxqs.js";import"./Eye-BpkaW8HI.js";import"./Archive-CTVg4aGD.js";import"./Trash-BNKVyqtr.js";import"./ArrowLeft-Bw_3FpL9.js";import"./Flex-QSO1QCFn.js";import"./BreadcrumbsLink-Djqw2xtc.js";import"./ArrowRight-CuiiB8iB.js";import"./ClockDashed-bbJ-SAWp.js";import"./ContextMenu-0mdRRQji.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Dropdown-DNakKmHK.js";import"./XMark-DHT-JiZe.js";import"./MenuElipsisHorizontal-0YAAkQrN.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./useHighlightedText-BBNMb3RU.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Checkmark-BeWey6nu.js";import"./Heading-BaJonbem.js";import"./ItemControls-Dko-TfIa.js";import"./ChevronRight-CdUbwk3C.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
