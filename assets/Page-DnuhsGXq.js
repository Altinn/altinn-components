var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a6 as n,r as a}from"./iframe-qf9-WDF6.js";import"./PageMenu.stories-CX-S_rdp.js";import"./PageNav.stories-Fims1mD5.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-qVY4yQsv.js";import"./ArrowRedo-DZdU4zTU.js";import"./Eye-BXwEdR5X.js";import"./Archive-u7sh-Eny.js";import"./Trash-BZaaSweo.js";import"./BreadcrumbsLink-DKa8_fUt.js";import"./ArrowRight-e4eyEntm.js";import"./ArrowLeft-C4bGHnOT.js";import"./Flex-CKfD6hy-.js";import"./ClockDashed-CvnPC6A_.js";import"./ContextMenu-CTJnsyVJ.js";import"./useDropdownMenuController-CAFbDRJV.js";import"./Dropdown-uPy0PMPK.js";import"./SearchField-_nVMBmov.js";import"./MagnifyingGlass-Cdozzsty.js";import"./MenuListItem-DipxFI8g.js";import"./MenuListDivider-jbpIOTgw.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemMedia-Fak15njE.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./ItemLabel-99ZX_KO1.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ItemControls-BmhBXfnl.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ChevronRight-NAoaHsS_.js";import"./FieldBase-D7ZJbpSW.js";import"./Typography-BcM5UJCL.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./useMenu-DZRK4ukY.js";import"./InformationSquare-Diuvkxkj.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
`,n.jsx(e.p,{children:"Articles, topics and other pages with content."})]})}s(o,"_createMdxContent");function W(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}s(W,"MDXContent");export{W as default};
