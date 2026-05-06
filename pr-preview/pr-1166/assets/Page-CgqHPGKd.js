import{j as e,M as r}from"./iframe-0B_Yudin.js";import{useMDXComponents as s}from"./index-Mx4bqmK6.js";import"./PageMenu.stories-B6enPEjh.js";import"./PageNav.stories-CkuHs_dl.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Ctrze-R6.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Icon-CbCRlB_g.js";import"./index-bzqtFzN_.js";import"./Skeleton-CCW5QxrE.js";import"./ArrowRedo-CG2MDWIG.js";import"./useId-BUxMg0Ir.js";import"./Eye-B-XCKYf4.js";import"./Archive-DM72aU-A.js";import"./Trash-C5AYfDtF.js";import"./ArrowLeft-BZAg0O1j.js";import"./Flex-CcsVAtXA.js";import"./BreadcrumbsLink-A99X6Qdv.js";import"./ArrowRight-8nOEs7Bb.js";import"./ClockDashed-Bz_gcxU0.js";import"./ContextMenu-CnWikKRV.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Dropdown-Ceu59hlm.js";import"./XMark-4vnuAWTz.js";import"./MenuElipsisHorizontal-Brw3IxFk.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function se(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{se as default};
