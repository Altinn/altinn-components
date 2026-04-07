import{j as e,M as r}from"./iframe-D8UVhXtj.js";import{useMDXComponents as s}from"./index-DPSA2vpm.js";import"./PageMenu.stories-Cg0sy6x7.js";import"./PageNav.stories-BTERSeAH.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-BhBDGtDC.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Icon-DPTwfvyC.js";import"./index-DZ6CWLt4.js";import"./Skeleton-DuOqXwDT.js";import"./ArrowRedo-FDDR50tt.js";import"./useId-B_5z_sER.js";import"./Eye-Co5XTG_V.js";import"./Archive-yOskI6Ky.js";import"./Trash-CZH-fdX8.js";import"./ClockDashed-BaXKWOyL.js";import"./PageNav-BC2J9uM5.js";import"./ArrowLeft-C_QtZ47Y.js";import"./Flex-C6te8drU.js";import"./BreadcrumbsLink-BtRWxLRJ.js";import"./ArrowRight-DGgwj-q9.js";import"./ContextMenu-_5Z_O_-3.js";import"./useDropdownMenuController-DzAqcIMc.js";import"./Dropdown-DCJfu5rP.js";import"./XMark-RzwOtF1Q.js";import"./Tooltip-Z_wNKmlw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CLjONwTq.js";import"./SearchField-DrqRDMva.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useHighlightedText-CniNcpSk.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
