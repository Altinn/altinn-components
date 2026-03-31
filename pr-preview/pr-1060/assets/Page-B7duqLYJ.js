import{j as e,M as r}from"./iframe-CFpZEpOT.js";import{useMDXComponents as s}from"./index-Dck6vUtY.js";import"./PageMenu.stories-Bz7wowsD.js";import"./PageNav.stories-zLOY5BIh.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CW8bj95A.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Icon-CcpuJg5J.js";import"./index-CMCH-iYZ.js";import"./Skeleton-BxeTCVQ2.js";import"./ArrowRedo-DYHFH_mh.js";import"./useId-Bpa1--zZ.js";import"./Eye-D5FY-E5s.js";import"./Archive-CGP_n4PV.js";import"./Trash-B2QKAP19.js";import"./ClockDashed-B-vg0pWf.js";import"./PageNav-DgxVHRDt.js";import"./ArrowLeft-CckNtR6Q.js";import"./Flex-LzaqVov5.js";import"./BreadcrumbsLink-Dz2cmI-H.js";import"./ArrowRight-hR9_L869.js";import"./ContextMenu-CwPKUzNp.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Dropdown-CxnqCSsD.js";import"./XMark-DsxdrTa7.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CV_qxNWd.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
