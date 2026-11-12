var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ah as r,a7 as n,r as a}from"./iframe-DdPcKG0O.js";import"./PageMenu.stories-nqAtcysu.js";import"./PageNav.stories-D4M9-dBw.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-85fvuN_D.js";import"./ArrowRedo-CSoYYtQw.js";import"./Eye-Co1qcO60.js";import"./Archive-Ru5RTNZx.js";import"./Trash-CS2QUAEY.js";import"./BreadcrumbsLink-DBNxqeKE.js";import"./ArrowRight-Dgw6wxdS.js";import"./ArrowLeft-CSvPw4Vo.js";import"./Flex-Cxkl80LA.js";import"./ClockDashed-BKb7SczD.js";import"./ContextMenu-DTBMpttb.js";import"./useDropdownMenuController-C4DxR2qZ.js";import"./useIsDesktop-Db5oQl2d.js";import"./Dropdown-COjWQps0.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./ItemLabel-vi7acRQa.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./ItemControls-Bf5MqGaN.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./ChevronRight-Cmdt4Cn7.js";import"./FieldBase-V879Q4R4.js";import"./Typography-D4dRQ14t.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./useMenu-B_zDT5uM.js";import"./InformationSquare-RfPtjfhK.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
`,n.jsx(e.p,{children:"Articles, topics and other pages with content."})]})}s(o,"_createMdxContent");function Z(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}s(Z,"MDXContent");export{Z as default};
