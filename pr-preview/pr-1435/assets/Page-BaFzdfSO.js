var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a7 as n,r as a}from"./iframe-C_3qWz8U.js";import"./PageMenu.stories-BBv9qVV8.js";import"./PageNav.stories-CNmSKOC1.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-D8X4OdxX.js";import"./ArrowRedo-B-GLWdzb.js";import"./Eye-CE1cd7I2.js";import"./Archive-BEuDz18x.js";import"./Trash-CF3fiEwO.js";import"./BreadcrumbsLink-DTRccQS2.js";import"./ArrowRight-BfdhXNgV.js";import"./ArrowLeft-Dsf1NijT.js";import"./Flex-BTfeLS8w.js";import"./ClockDashed-Bi2OBX1v.js";import"./ContextMenu-d1Kruqes.js";import"./useDropdownMenuController-B_MLek_v.js";import"./Dropdown-C4WgdX01.js";import"./SearchField-wVxLElBM.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./useHighlightedText-ChiMW-L8.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./useMenu-DHyqVfH8.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./Heading-mFc3Xe1m.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronRight-Cfc1KVT6.js";import"./InformationSquare-BJVzaHsz.js";import"./MenuElipsisHorizontal-D39QN37D.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
`,n.jsx(e.p,{children:"Articles, topics and other pages with content."})]})}s(o,"_createMdxContent");function Y(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}s(Y,"MDXContent");export{Y as default};
