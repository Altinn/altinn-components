import{j as e,M as r}from"./iframe-CRyMHjBa.js";import{useMDXComponents as s}from"./index-D4sgrM0U.js";import"./PageMenu.stories-DzFGg1zO.js";import"./PageNav.stories-r52xMwDR.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BcnSCw3E.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./Icon-BfxILC1T.js";import"./index-DHHnxdIx.js";import"./Skeleton-CU7lBKK8.js";import"./ArrowRedo-W9KHDxQk.js";import"./useId-Gvikg1Q9.js";import"./Eye-fG0hzg9_.js";import"./Archive-DkDv7ZML.js";import"./Trash-DL1Wx2eb.js";import"./ClockDashed-CfQvL8vj.js";import"./PageNav-BxxTHAE7.js";import"./ArrowLeft-DO_DgEAQ.js";import"./Flex-B-FAPRYp.js";import"./BreadcrumbsLink-DG92EI4a.js";import"./ArrowRight-BuoWqs5I.js";import"./ContextMenu-CLs9-bGN.js";import"./useDropdownMenuController-7zQVYc9O.js";import"./Dropdown-BU08g0A_.js";import"./XMark-Bzo2iZ4y.js";import"./Tooltip-BOYFMKfm.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DMdAke1l.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
