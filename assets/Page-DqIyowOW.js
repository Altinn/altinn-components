import{j as e,M as r}from"./iframe-Bs6hWG43.js";import{useMDXComponents as s}from"./index-Bw6n4Hpl.js";import"./PageMenu.stories-BGUZ26mi.js";import"./PageNav.stories-tX2KSBT4.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DaShjmrZ.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./Icon-DjH00Hl5.js";import"./index-DbNSDn3W.js";import"./Skeleton-7NyHq6Da.js";import"./ArrowRedo-sEWImUqb.js";import"./useId-eW1Sa_eP.js";import"./Eye-Bdit91ei.js";import"./Archive-9LOoqKn0.js";import"./Trash-DPxs7CFK.js";import"./ArrowLeft-DYLPMnIY.js";import"./Flex-DYzITT_K.js";import"./BreadcrumbsLink-DscDe-sp.js";import"./ArrowRight-Ba4RU4P9.js";import"./ClockDashed-J7vnxwTt.js";import"./ContextMenu-omWY5r2y.js";import"./useDropdownMenuController-D42biJGY.js";import"./Dropdown-z94Rg748.js";import"./XMark-Cx14Anho.js";import"./MenuElipsisHorizontal-yOcHxLrU.js";import"./SearchField-CTJqYruH.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
