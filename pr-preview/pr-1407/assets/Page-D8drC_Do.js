var r=Object.defineProperty;var s=(i,e)=>r(i,"name",{value:e,configurable:!0});import{af as t,a5 as n,q as a}from"./iframe-k-5ppgch.js";import"./PageMenu.stories-h5cvQjfZ.js";import"./PageNav.stories-B6pKXPB2.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-CYhZDdwJ.js";import"./ArrowRedo-BdVHHvaA.js";import"./Eye-BYYh3WW8.js";import"./Archive-mZAeZsrq.js";import"./Trash-D-Jav_7z.js";import"./BreadcrumbsLink-DlHMKow1.js";import"./ArrowRight-B0kRBzSw.js";import"./ArrowLeft-DY7GDo5i.js";import"./Flex-DfG9uaWh.js";import"./ClockDashed-KjzK9RZG.js";import"./ContextMenu-3vKarXaG.js";import"./useDropdownMenuController-OiRVKnjj.js";import"./Dropdown-CPtynmaA.js";import"./SearchField-BRPq9oj8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";import"./MenuElipsisHorizontal-B7A4Qcki.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
