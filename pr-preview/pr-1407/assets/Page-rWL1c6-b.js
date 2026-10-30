var r=Object.defineProperty;var s=(i,e)=>r(i,"name",{value:e,configurable:!0});import{af as t,a5 as n,q as a}from"./iframe-BenRi1VF.js";import"./PageMenu.stories-D1WddVGj.js";import"./PageNav.stories-CI9wB4Ag.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-B60xRXBf.js";import"./ArrowRedo-CM8cT5K_.js";import"./Eye-DVrqDlUx.js";import"./Archive-BQnOimYU.js";import"./Trash-D1ucPBDs.js";import"./BreadcrumbsLink-BYA8JUuU.js";import"./ArrowRight-C2GQq3jg.js";import"./ArrowLeft-DLawS7NC.js";import"./Flex-BtqRQeFd.js";import"./ClockDashed-L9d5kKWy.js";import"./ContextMenu-DWCYTvGm.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./SearchField-BPBX14Ku.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./ItemLabel-lIFyccob.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ItemControls-C62YDQLR.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ChevronRight-B0Rwz_dW.js";import"./FieldBase-Blf3tEjx.js";import"./Typography-CY6bfOBd.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./useMenu-DrYFOky6.js";import"./MenuListDivider-v6fvRPAn.js";import"./InformationSquare-g2viFsxF.js";import"./MenuElipsisHorizontal-DAMpcxKP.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
`,n.jsx(e.p,{children:"Articles, topics and other pages with content."})]})}s(o,"_createMdxContent");function Z(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}s(Z,"MDXContent");export{Z as default};
