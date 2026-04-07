import{j as e,M as r}from"./iframe-B1AqnzaQ.js";import{useMDXComponents as s}from"./index-DTlYiLDq.js";import"./PageMenu.stories-DTbISDA0.js";import"./PageNav.stories-CjKsNB1h.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-juBnoiGl.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Icon-68Gi_xA8.js";import"./index-Ddi2Dmvi.js";import"./Skeleton-6Posg2tf.js";import"./ArrowRedo-BBsKLVxD.js";import"./useId-D3sFZbtB.js";import"./Eye-oWBsEYVn.js";import"./Archive-BQ-4sTsA.js";import"./Trash-DvhW7kU1.js";import"./ClockDashed-CC6jchBR.js";import"./PageNav-DHX5cVCp.js";import"./ArrowLeft-BEdniOAV.js";import"./Flex-DsTgjl9e.js";import"./BreadcrumbsLink-ejFt06Ra.js";import"./ArrowRight-BdZ-SkoS.js";import"./ContextMenu-BbOAT8ce.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Dropdown-CFvQqfeA.js";import"./XMark-COJVLPGF.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Bgx9uzOH.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useHighlightedText-D6JE0bc4.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./ChevronRight-BOPTtlba.js";import"./Badge-DUhzLQsC.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
