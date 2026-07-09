import{ag as o,a7 as e,r}from"./iframe-BZiA3Dc9.js";import"./PageMenu.stories-Dg2GdQ7H.js";import"./PageNav.stories-DzsH7Avz.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DKhntpBs.js";import"./ArrowRedo-BB4h3wli.js";import"./Eye--89b7rat.js";import"./Archive-BSbbJQpu.js";import"./Trash-DL-j6TXo.js";import"./BreadcrumbsLink-BfnL9fjg.js";import"./ArrowRight-W2FxJoMq.js";import"./ArrowLeft-BOHRmu10.js";import"./Flex-DlKNIBbG.js";import"./ClockDashed-IS1yr7JH.js";import"./ContextMenu-98Gzvt6m.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./useHighlightedText-gnIxErVs.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./Heading-DduTyBY0.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronRight-CRJJFvsY.js";import"./InformationSquare-mZWip9WA.js";import"./MenuElipsisHorizontal-C2yCxxi6.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
