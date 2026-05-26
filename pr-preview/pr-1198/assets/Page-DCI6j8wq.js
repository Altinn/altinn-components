import{j as e,M as r}from"./iframe-DU0n7__8.js";import{useMDXComponents as o}from"./index-FebBi8vE.js";import"./PageMenu.stories-A2Wemspf.js";import"./PageNav.stories-FNXvgKLg.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CoOW1x5Q.js";import"./Button-pXyw-iqn.js";import"./tooltip-UENHGvJl.js";import"./Icon-Dg7nJLrw.js";import"./index-sAFX08uI.js";import"./Skeleton-etbnaSOo.js";import"./ArrowRedo-BCJe7Iwg.js";import"./useId-DCXiBgwp.js";import"./Eye-rXBIJWK8.js";import"./Archive-BK5DGjhH.js";import"./Trash-MdbyzcW1.js";import"./ArrowLeft-DUY7tFwk.js";import"./Flex-C_O_eubX.js";import"./BreadcrumbsLink-DMWRlgdL.js";import"./ArrowRight-DSxX6LAd.js";import"./ClockDashed-BJpd6pOc.js";import"./ContextMenu-ki5GIL8X.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Dropdown-Bvq9VpIR.js";import"./XMark-DGVnrVrT.js";import"./MenuElipsisHorizontal-BxaMmiED.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./useHighlightedText-Wa_y882s.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function ee(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ee as default};
