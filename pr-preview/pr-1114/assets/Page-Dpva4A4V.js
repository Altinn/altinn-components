import{j as e,M as r}from"./iframe-bdb8MxAl.js";import{useMDXComponents as s}from"./index-BB1brFqk.js";import"./PageMenu.stories-CkD58RFx.js";import"./PageNav.stories-BCJWnHKi.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BakW6ug2.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./Icon-DDIx0qrc.js";import"./index-p3wA3m8m.js";import"./Skeleton-BMmeChMq.js";import"./ArrowRedo-DMXwd77A.js";import"./useId-m2lwd_Ct.js";import"./Eye-BAVJ6LcY.js";import"./Archive-DDiFiqWF.js";import"./Trash-D-U6L-Nc.js";import"./ClockDashed-xI7DiCFJ.js";import"./PageNav-BwzDFljW.js";import"./ArrowLeft-CXgbtUkF.js";import"./Flex-7ZoZ5Zdr.js";import"./BreadcrumbsLink-B2V_pftG.js";import"./ArrowRight-6jmD34cI.js";import"./ContextMenu-CzMuKD40.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Dropdown-B41Ltmad.js";import"./XMark-ml8n1JcF.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-yLxiENdI.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useHighlightedText-BZip2xbp.js";import"./Label-DBSC-MMD.js";import"./index-Bm_5QTlm.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuListHeading-DgV7uPAe.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./Avatar-Di5f2hN1.js";import"./AvatarGroup-DeyVKu-1.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./ItemControls-CoqYqtfq.js";import"./ChevronRight-Cnln8IKV.js";import"./Badge-CZZ-T3gy.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
