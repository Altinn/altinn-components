import{ag as o,a7 as e,r}from"./iframe-D3QbR5Le.js";import"./PageMenu.stories-DkhXMB2C.js";import"./PageNav.stories-CN1t85b4.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BxEUe-bD.js";import"./ArrowRedo-Br8PBoUg.js";import"./Eye-bQD8N6fQ.js";import"./Archive-BPPn0ndA.js";import"./Trash-BkS8tkBS.js";import"./BreadcrumbsLink-m0IJbbKb.js";import"./ArrowRight-DLgRKrIE.js";import"./ArrowLeft-Bcb7vGbA.js";import"./Flex-Dql3tqb8.js";import"./ClockDashed-DFvOJ2tV.js";import"./ContextMenu-DszTDAnz.js";import"./useDropdownMenuController-DUFIDFh-.js";import"./Dropdown-DfrU0yXs.js";import"./SearchField-C1oRwJ9X.js";import"./MagnifyingGlass-odaglt7B.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useHighlightedText-Cs6VCP7b.js";import"./Field-CmklkMP8.js";import"./Label-1ernyuR0.js";import"./Input-fbRgifOV.js";import"./useMenu-CKRyFifW.js";import"./MenuListItem-CIRSIckJ.js";import"./MenuListHeading-CUGWWC4c.js";import"./MenuItem-p2P7kMgy.js";import"./ItemMedia-By1N_mbL.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Checkmark-DPa9YJ2d.js";import"./ItemLabel-D38lX0bX.js";import"./Heading-D807jdih.js";import"./ItemControls-UDFYeL-1.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronRight-CW8WMRnL.js";import"./index-1UUqftsp.js";import"./InformationSquare-B-kAc2gK.js";import"./MenuElipsisHorizontal-Tn2MvOgZ.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
