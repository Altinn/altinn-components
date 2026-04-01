import{j as e,M as r}from"./iframe-DxKlu2kD.js";import{useMDXComponents as s}from"./index-xnwFrkNa.js";import"./PageMenu.stories-DqIyYYWY.js";import"./PageNav.stories-FpWlCerK.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-JcaIHuC6.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Icon-CrZKj0Yv.js";import"./index-BWCSYHeO.js";import"./Skeleton-niSIm0IT.js";import"./ArrowRedo-D9tiKF0k.js";import"./useId-_YfdAmsW.js";import"./Eye-xoGFvx_M.js";import"./Archive-DOcjXifM.js";import"./Trash-BduIn3aS.js";import"./ClockDashed-D0rwVTqN.js";import"./PageNav-CPkN1MxB.js";import"./ArrowLeft-B0rWLvMS.js";import"./Flex-CFZAXqgp.js";import"./BreadcrumbsLink-yV83uJc4.js";import"./ArrowRight-DMu2HrHk.js";import"./ContextMenu-BRoNLVIW.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Dropdown-BlFnr1UG.js";import"./XMark-C1fx_pyo.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Brj3vs9F.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
