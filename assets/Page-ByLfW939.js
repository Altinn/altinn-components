import{j as e,M as r}from"./iframe-0tjTS8nX.js";import{useMDXComponents as s}from"./index-Do5sMaSl.js";import"./PageMenu.stories-DRE83SKn.js";import"./PageNav.stories-CmuXKUtX.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CAPaVES2.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Icon-CEoRGh9j.js";import"./index-BHkRJabC.js";import"./Skeleton-CiSYBb75.js";import"./ArrowRedo-DPKV8tp9.js";import"./useId-DNFZveVv.js";import"./Eye-tfT7yxSX.js";import"./Archive-CxbiNxAX.js";import"./Trash-BerJMn2e.js";import"./ArrowLeft-BDWPSxqD.js";import"./Flex-BjLBa1JB.js";import"./BreadcrumbsLink-Bztu94MA.js";import"./ArrowRight-9wDMuPBl.js";import"./ClockDashed-Dt4Rg0dq.js";import"./ContextMenu-fefVb9IK.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./XMark-C6HGzv3s.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
