import{j as e,M as r}from"./iframe-BLYnYdJi.js";import{useMDXComponents as s}from"./index-D-vv9O49.js";import"./PageMenu.stories-DYQgoalq.js";import"./PageNav.stories-Zn8-TbaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-4JgNohZn.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Icon-BBgjdpk7.js";import"./index-B87fQ9Ty.js";import"./Skeleton-DVFvYbaO.js";import"./ArrowRedo-BsDNR1Pn.js";import"./useId-X7maRfkh.js";import"./Eye-CdC36Qhm.js";import"./Archive-CQEKpySn.js";import"./Trash-C9XX2244.js";import"./ArrowLeft-D-meCQZJ.js";import"./Flex-CND7PM33.js";import"./BreadcrumbsLink-D9gY_2H_.js";import"./ArrowRight-C7Lk-vhQ.js";import"./ClockDashed-DbsDanPS.js";import"./ContextMenu-B4pAtZpC.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Dropdown-B_CqShRd.js";import"./XMark-Df3dBUtr.js";import"./MenuElipsisHorizontal-CLaaCIK6.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./useHighlightedText-omqdYwyr.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
