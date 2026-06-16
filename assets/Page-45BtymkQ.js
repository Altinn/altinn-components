import{ag as o,a7 as e,r}from"./iframe-5uZaoZDv.js";import"./PageMenu.stories-O7xsgNfz.js";import"./PageNav.stories-CNcaKVYG.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-WD_CMSiN.js";import"./ArrowRedo-CNwhAcUP.js";import"./Eye-f94ujOp8.js";import"./Archive-3ezaIRLA.js";import"./Trash-2WKaOU1P.js";import"./BreadcrumbsLink-fOI1FWh4.js";import"./ArrowRight-Ucu-Xew7.js";import"./ArrowLeft-Bv_scvOb.js";import"./Flex-n4FQi775.js";import"./ClockDashed-D9mjhE8V.js";import"./ContextMenu-B6BhHYA_.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./useHighlightedText-SumDRzv0.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./Heading-B0bYr3fv.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronRight-Bm7ufgRx.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
