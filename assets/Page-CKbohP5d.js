var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a7 as n,r as a}from"./iframe-BhbNl8M-.js";import"./PageMenu.stories-BluU10WX.js";import"./PageNav.stories-CU-p-9jm.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-BuN2e6zp.js";import"./ArrowRedo-B4ji5whx.js";import"./Eye-DNiUrCQs.js";import"./Archive-CfOkFSG4.js";import"./Trash-Df4Pkq18.js";import"./BreadcrumbsLink-lneiUb_j.js";import"./ArrowRight-40scby1E.js";import"./ArrowLeft-KTvQayfH.js";import"./Flex-ywhhAUvJ.js";import"./ClockDashed-CjBrcx7s.js";import"./ContextMenu-Ij8B0w81.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
