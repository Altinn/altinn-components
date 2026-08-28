import{ag as o,a7 as e,r}from"./iframe-Drliw4W2.js";import"./PageMenu.stories-B8r5Mh1T.js";import"./PageNav.stories-7HmC7OzH.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BBQhr2B5.js";import"./ArrowRedo-BJyCcmxe.js";import"./Eye-B6cevlmU.js";import"./Archive-CSI-M84_.js";import"./Trash-fPJYexBH.js";import"./BreadcrumbsLink-DetwcVV_.js";import"./ArrowRight-y6U1LVbM.js";import"./ArrowLeft-BCqEVCAd.js";import"./Flex-Bge8S33P.js";import"./ClockDashed-CsZ31Wkx.js";import"./ContextMenu-XpuA0EJC.js";import"./useDropdownMenuController-CymhG5YZ.js";import"./Dropdown-B9PzuGtE.js";import"./SearchField-42vl3Hhr.js";import"./MagnifyingGlass-Dg8GT9AE.js";import"./FieldBase-XimphOI7.js";import"./Typography-DpltYWx0.js";import"./useHighlightedText-Cu370CX4.js";import"./Field-m4myDHlq.js";import"./Label-B3MuHrJK.js";import"./Input-BD6Nzkxf.js";import"./useMenu-DH_c0Y1A.js";import"./MenuListItem-BLBbt-OG.js";import"./MenuListDivider-Bm7Xh7zM.js";import"./MenuListHeading-B-ydP8rv.js";import"./MenuItem-CDxKhji-.js";import"./ItemMedia-BONexNJs.js";import"./Avatar-BwQy9G5d.js";import"./AvatarGroup-BRFSw4GH.js";import"./Checkmark-cWANswWC.js";import"./ItemLabel-L3oJYJ9M.js";import"./Heading-CnkMiV4w.js";import"./ItemControls-CQnobUv3.js";import"./Badge-CrnK53sw.js";import"./Tooltip-DP9V_ar-.js";import"./ChevronRight-_-mAy6yU.js";import"./InformationSquare-DpTm6Ali.js";import"./MenuElipsisHorizontal-kdZIghGy.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
