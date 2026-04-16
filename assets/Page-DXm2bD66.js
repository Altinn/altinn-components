import{j as e,M as r}from"./iframe-qDHSBZ_X.js";import{useMDXComponents as s}from"./index-Bq_LsmmS.js";import"./PageMenu.stories-BfSZb5BJ.js";import"./PageNav.stories-aRRm__1z.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BOGXPqID.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./Icon-BDVkMuHy.js";import"./index-DTh2bawh.js";import"./Skeleton-CJ3n2_6V.js";import"./ArrowRedo-B3bbel1y.js";import"./useId-DLE_nI5l.js";import"./Eye-krQJbsJx.js";import"./Archive-C71dF3LI.js";import"./Trash-CJ5RcE6N.js";import"./ArrowLeft-BoqFEcsW.js";import"./Flex-BTOiCOb2.js";import"./BreadcrumbsLink-B7m4L_ms.js";import"./ArrowRight-B5E8ZVvl.js";import"./ClockDashed-CCGqbt4n.js";import"./ContextMenu-DOLPZcNs.js";import"./useDropdownMenuController-CkPbLtTM.js";import"./Dropdown-zJkG990V.js";import"./XMark-D8iHP3Cp.js";import"./Tooltip-gFU6qfTf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DaGYavuu.js";import"./SearchField-owOVnt34.js";import"./MagnifyingGlass-52kli1F6.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useHighlightedText-D75SWcvd.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./Badge-CmtcZ1do.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
