import{j as e,M as r}from"./iframe-BqnZkKPi.js";import{useMDXComponents as s}from"./index-Dl7l-Wuh.js";import"./PageMenu.stories-DihPLe1e.js";import"./PageNav.stories-Dj6n4-XZ.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu---Xj-IZ8.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Icon-CnWjusVH.js";import"./index-DAuAfjpD.js";import"./Skeleton-1qnYSSLw.js";import"./ArrowRedo-seGBeKya.js";import"./useId-9kVvsXig.js";import"./Eye-BjK7HgG_.js";import"./Archive-BMrgF3IC.js";import"./Trash-CfRAqYTy.js";import"./ArrowLeft-WkZKzR-A.js";import"./Flex-Dfcm_wdC.js";import"./BreadcrumbsLink-DijZewDq.js";import"./ArrowRight-DYe8V0HY.js";import"./ClockDashed-BB8orsTQ.js";import"./ContextMenu-D7gS0wo-.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Dropdown-hZuchDzz.js";import"./XMark-Y2_85_oc.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Dd8yBnUU.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useHighlightedText-Clj8nPui.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./Badge-wAZ__xuM.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
