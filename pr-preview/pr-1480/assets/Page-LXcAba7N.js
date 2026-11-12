var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a6 as n,r as a}from"./iframe-M-0W2Kc9.js";import"./PageMenu.stories-Baj-G_H1.js";import"./PageNav.stories-BoIDPnuI.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-CBf8eVnU.js";import"./ArrowRedo-Cnr0MewE.js";import"./Eye-mvdxRCiO.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./BreadcrumbsLink-CRb6C2Tw.js";import"./ArrowRight-BaGs8lxe.js";import"./ArrowLeft-ZCDYfHmi.js";import"./Flex-CvQqYnnc.js";import"./ClockDashed-CE3rKYo4.js";import"./ContextMenu-BvjrPqZd.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
`,n.jsx(e.h1,{id:"building-pages",children:"Building pages"}),`
`,n.jsxs(e.p,{children:["Build pages using ",n.jsx(e.code,{children:"PageBase"})," and specific components or general purpose components like ",n.jsx(e.code,{children:"Section"})," and ",n.jsx(e.code,{children:"Heading"})," to divide and create hierarchy."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`return (
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
`,n.jsx(e.h2,{id:"section-list-and-grid",children:"Section, List and Grid"}),`
`,n.jsxs(e.p,{children:["Layout components share similar props for ",n.jsx(e.code,{children:"color"}),", ",n.jsx(e.code,{children:"size"}),", which is inherited to it's children."]}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"Section"})," to divide pages into appropriate pieces. Section can be extended using ",n.jsx(e.code,{children:"padding"})," and ",n.jsx(e.code,{children:"spacing"})," props."]}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"List"})," and ",n.jsx(e.code,{children:"Grid"})," to present content in lists or grid, respectively. Both have a default ",n.jsx(e.code,{children:"spacing"}),", relative to it's ",n.jsx(e.code,{children:"size"}),"."]}),`
`,n.jsxs(e.p,{children:["If none of these works, you can use ",n.jsx(e.code,{children:"Flex"}),", which is a general purpose layout component, containing shared props and styles that are used to build more specific components."]}),`
`,n.jsx(e.h2,{id:"heading-and-typography",children:"Heading and Typography"}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"Heading"})," for headings. Use ",n.jsx(e.code,{children:"Typography"})," for bodytext including paragraphs, lists, and headings."]}),`
`,n.jsx(e.h2,{id:"list-pages",children:"List pages"}),`
`,n.jsx(e.p,{children:"Pages that contains lists of objects, for example a list of accounts or users."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`return (
  <PageBase>
    <PageNav breadcrumbs />
    <Heading siz="xl" />
    <Toolbar />
    <List />
  </PageBase>
);
`})}),`
`,n.jsx(e.h2,{id:"dashboards",children:"Dashboards"}),`
`,n.jsx(e.p,{children:"Dashboard pages, used as a starting point for an area that focuses on a single person or company."}),`
`,n.jsx(e.h2,{id:"settings-pages",children:"Settings pages"}),`
`,n.jsx(e.p,{children:"Pages with settings, divided into groups."}),`
`,n.jsx(e.h2,{id:"content-pages",children:"Content pages"}),`
`,n.jsx(e.p,{children:"Articles, topics and other pages with content."})]})}s(o,"_createMdxContent");function Y(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}s(Y,"MDXContent");export{Y as default};
