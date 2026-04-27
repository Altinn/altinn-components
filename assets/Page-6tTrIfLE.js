import{j as e,M as r}from"./iframe-BJEbXdzo.js";import{useMDXComponents as s}from"./index-D02edywB.js";import"./PageMenu.stories-Cc2zBtTN.js";import"./PageNav.stories-ueyF0Juh.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CB8HSvvk.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./Icon-msEkDcFf.js";import"./index-ChGHkNNv.js";import"./Skeleton-DWcIZ1wH.js";import"./ArrowRedo-BEbKJysc.js";import"./useId-DgrNWXh_.js";import"./Eye-Bd51zfnO.js";import"./Archive-dgyTBxhE.js";import"./Trash-C9Nxl2VC.js";import"./ArrowLeft-C_pSS9jy.js";import"./Flex-DRE_amb0.js";import"./BreadcrumbsLink-f9VdC24X.js";import"./ArrowRight-C1_x0DTX.js";import"./ClockDashed-DOP-lu-g.js";import"./ContextMenu-BZKtsYlZ.js";import"./useDropdownMenuController-DuWgBdSv.js";import"./Dropdown-BWrGCxZb.js";import"./XMark-sTHnj54s.js";import"./MenuElipsisHorizontal-_50h2TOj.js";import"./SearchField-C43D0Bvg.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-9_PPaP-8.js";import"./InformationSquare-e9K9-Rpn.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
`,e.jsx(i.h1,{id:"building-pages",children:"Building pages"}),`
`,e.jsxs(i.p,{children:["Build pages using ",e.jsx(i.code,{children:"PageBase"})," and specific components or general purpose components like ",e.jsx(i.code,{children:"Section"})," and ",e.jsx(i.code,{children:"Heading"})," to divide and create hierarchy."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`return (
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
`,e.jsx(i.h2,{id:"section-list-and-grid",children:"Section, List and Grid"}),`
`,e.jsxs(i.p,{children:["Layout components share similar props for ",e.jsx(i.code,{children:"color"}),", ",e.jsx(i.code,{children:"size"}),", which is inherited to it's children."]}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"Section"})," to divide pages into appropriate pieces. Section can be extended using ",e.jsx(i.code,{children:"padding"})," and ",e.jsx(i.code,{children:"spacing"})," props."]}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"List"})," and ",e.jsx(i.code,{children:"Grid"})," to present content in lists or grid, respectively. Both have a default ",e.jsx(i.code,{children:"spacing"}),", relative to it's ",e.jsx(i.code,{children:"size"}),"."]}),`
`,e.jsxs(i.p,{children:["If none of these works, you can use ",e.jsx(i.code,{children:"Flex"}),", which is a general purpose layout component, containing shared props and styles that are used to build more specific components."]}),`
`,e.jsx(i.h2,{id:"heading-and-typography",children:"Heading and Typography"}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"Heading"})," for headings. Use ",e.jsx(i.code,{children:"Typography"})," for bodytext including paragraphs, lists, and headings."]}),`
`,e.jsx(i.h2,{id:"list-pages",children:"List pages"}),`
`,e.jsx(i.p,{children:"Pages that contains lists of objects, for example a list of accounts or users."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`return (
  <PageBase>
    <PageNav breadcrumbs />
    <Heading siz="xl" />
    <Toolbar />
    <List />
  </PageBase>
);
`})}),`
`,e.jsx(i.h2,{id:"dashboards",children:"Dashboards"}),`
`,e.jsx(i.p,{children:"Dashboard pages, used as a starting point for an area that focuses on a single person or company."}),`
`,e.jsx(i.h2,{id:"settings-pages",children:"Settings pages"}),`
`,e.jsx(i.p,{children:"Pages with settings, divided into groups."}),`
`,e.jsx(i.h2,{id:"content-pages",children:"Content pages"}),`
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function se(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{se as default};
