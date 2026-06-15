import{ag as o,a7 as e,r}from"./iframe-CH-Rf2AI.js";import"./PageMenu.stories-CQfkJvs_.js";import"./PageNav.stories-DwVqEcGD.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Dy-DCFPC.js";import"./ArrowRedo-D1NNhxuU.js";import"./Eye-BoZFsIWT.js";import"./Archive-hrfshYGt.js";import"./Trash-BAmIqX5W.js";import"./BreadcrumbsLink-jByZbqzh.js";import"./ArrowRight-CDNjHBQ0.js";import"./ArrowLeft-Ck7LLI-q.js";import"./Flex-BtYwPl5t.js";import"./ClockDashed-An8qJSBT.js";import"./ContextMenu-ClDw9k8P.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Typography-CqA3kMNv.js";import"./useHighlightedText-DIHcSE2r.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./useMenu-FkcUMU_-.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./Heading-BVqV7FRe.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronRight-uifDbL9f.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./MenuElipsisHorizontal-BHY8BNqA.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
