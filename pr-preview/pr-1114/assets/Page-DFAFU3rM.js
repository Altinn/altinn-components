import{j as e,M as r}from"./iframe-BmFIVBn_.js";import{useMDXComponents as s}from"./index-DxKwZgsl.js";import"./PageMenu.stories-DWAZKKdX.js";import"./PageNav.stories-BsYN4QZE.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-Bv7UaqV6.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Icon-zZDqlwOf.js";import"./index-3BUTcXKg.js";import"./Skeleton-DRn19mA6.js";import"./ArrowRedo-CSlIZ1zz.js";import"./useId-ClegSKnE.js";import"./Eye-Lits53gm.js";import"./Archive-kTBarS_a.js";import"./Trash-eorIYi8J.js";import"./ClockDashed-D19_5m9-.js";import"./PageNav-DwPk9wbq.js";import"./ArrowLeft-D92gfloK.js";import"./Flex-CFezmhlL.js";import"./BreadcrumbsLink-BEnEhEUM.js";import"./ArrowRight-CoKGj20P.js";import"./ContextMenu-BSs9gTuy.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Dropdown-OBdyljPV.js";import"./XMark-DPeWQ31a.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-1g4ibsMX.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Badge-DoiHwmxA.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function re(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{re as default};
