var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a6 as n,r as a}from"./iframe-B3JK86DP.js";import"./PageMenu.stories-Dfple8KZ.js";import"./PageNav.stories-C1k9y7n0.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-BYLjy4Jj.js";import"./ArrowRedo-j7AV3Lkz.js";import"./Eye-BWcnjsbI.js";import"./Archive-DGM3iS45.js";import"./Trash-XyOTEtSX.js";import"./BreadcrumbsLink-CVLW5LEg.js";import"./ArrowRight-DDv59QSS.js";import"./ArrowLeft-u69WYQt7.js";import"./Flex-DTtFl6cz.js";import"./ClockDashed-DDD5Czsn.js";import"./ContextMenu-B2Ts5CPe.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./ItemLabel-UJIDw8s4.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ChevronRight-CXXN68ww.js";import"./FieldBase-BOLpoc-t.js";import"./Typography-AZ3lf-vT.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./useMenu-RTLBsPgV.js";import"./InformationSquare-DD61y5yY.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
