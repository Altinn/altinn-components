var r=Object.defineProperty;var s=(i,e)=>r(i,"name",{value:e,configurable:!0});import{af as t,a5 as n,q as a}from"./iframe-CQ8LzMHp.js";import"./PageMenu.stories-BJ5YEBm4.js";import"./PageNav.stories-DbURyv4T.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-DolRlg45.js";import"./ArrowRedo-m5BV143n.js";import"./Eye-BbHrpMpQ.js";import"./Archive-D8VT4iDx.js";import"./Trash-CygTswjF.js";import"./BreadcrumbsLink-C93ln5Ut.js";import"./ArrowRight-CCTsBz-f.js";import"./ArrowLeft-CsCJke0a.js";import"./Flex-DjPJH1VJ.js";import"./ClockDashed-BNcJLMaQ.js";import"./ContextMenu-nxKWxJk3.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ItemLabel-CgsktDzP.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Typography-C0hb-rov.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./MenuElipsisHorizontal-Dwc1VYHN.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
