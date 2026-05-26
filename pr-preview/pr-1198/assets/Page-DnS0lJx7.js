import{j as e,M as r}from"./iframe-YdRL1NzV.js";import{useMDXComponents as o}from"./index-BWf8uQ1H.js";import"./PageMenu.stories-Bl3BnyCR.js";import"./PageNav.stories-84RuG3Hg.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Cp8oE2HR.js";import"./Button-BwQOxknK.js";import"./tooltip-D0NJwlFT.js";import"./Icon-B4-srULI.js";import"./index-SoIsie1y.js";import"./Skeleton-C3i9Ug5T.js";import"./ArrowRedo-6v2flXIv.js";import"./useId-DxHKrSZ4.js";import"./Eye-aCB71A3t.js";import"./Archive-C1GJOqq_.js";import"./Trash-Bas2iEP8.js";import"./ArrowLeft-WbZp2TlL.js";import"./Flex-8MCCOfGV.js";import"./BreadcrumbsLink-D1bNirUt.js";import"./ArrowRight-BXATOlQ9.js";import"./ClockDashed-C354w78W.js";import"./ContextMenu-BsQBLQnd.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Dropdown-CFQlkMFa.js";import"./XMark-1l7ZvP46.js";import"./MenuElipsisHorizontal-D5EdTq6X.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./Label-CoBwam8t.js";import"./Input-Co3wY2OB.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
