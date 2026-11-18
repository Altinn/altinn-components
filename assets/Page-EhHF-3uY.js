var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a6 as n,r as a}from"./iframe-Cf4UALw8.js";import"./PageMenu.stories-Wr1so5Vz.js";import"./PageNav.stories-BywxidgS.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-J0810s_1.js";import"./ArrowRedo-CCAle-YW.js";import"./Eye-BeIULvpA.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./BreadcrumbsLink-zy9RVUNR.js";import"./ArrowRight-C3hJKAqP.js";import"./ArrowLeft-CLqAo6G4.js";import"./Flex-CiSMsFR7.js";import"./ClockDashed-BLeXrSnX.js";import"./ContextMenu-DZnF37e0.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
