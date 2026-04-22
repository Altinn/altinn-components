import{j as e,M as r}from"./iframe-C5YDQF8t.js";import{useMDXComponents as s}from"./index-CNLHU9D9.js";import"./PageMenu.stories-BC3FGTks.js";import"./PageNav.stories-CltWQ1ml.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-gUJ4tgAd.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./Icon-CecLgcvt.js";import"./index-Wv9BNi45.js";import"./Skeleton-Drx-E9Fo.js";import"./ArrowRedo-BLCJm7Mc.js";import"./useId-D8_RB8wa.js";import"./Eye-C7fKJvBF.js";import"./Archive-vblwy2cE.js";import"./Trash-D8RBkZPj.js";import"./ArrowLeft-LD4kwQAE.js";import"./Flex-6suuLzFU.js";import"./BreadcrumbsLink-COCGco-V.js";import"./ArrowRight-xA-FdZ6J.js";import"./ClockDashed-CHE2RCR-.js";import"./ContextMenu-D457U-Bj.js";import"./useDropdownMenuController-BRCJdC3F.js";import"./Dropdown-r5WY9yG7.js";import"./XMark-DdTqeOk-.js";import"./MenuElipsisHorizontal-DeUO5vCb.js";import"./SearchField-DhRNQpTW.js";import"./MagnifyingGlass-CEZChhW1.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useHighlightedText-n06FiY88.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
