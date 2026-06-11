import{ag as o,a7 as e,r}from"./iframe-DH0sUlof.js";import"./PageMenu.stories-DVbduFh9.js";import"./PageNav.stories-K0BCSm0z.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DAaByJWx.js";import"./ArrowRedo-DqAiZrnf.js";import"./Eye-oUX4NOQ8.js";import"./Archive-VkO0gQpm.js";import"./Trash-Du_QY7Ml.js";import"./BreadcrumbsLink-DLp81Nza.js";import"./ArrowRight-CJRbVSUn.js";import"./ArrowLeft-CmZAxNy-.js";import"./Flex-D6bQl7-N.js";import"./ClockDashed-ajLram_e.js";import"./ContextMenu-DRV4f9iJ.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./SearchField-CPfjDOA9.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./FieldBase-DCz4GC6j.js";import"./Typography-PtbhQdVx.js";import"./useHighlightedText-DycG_gS6.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";import"./useMenu-CPWn58Ca.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuListHeading-DWFD_r7c.js";import"./MenuItem-BT1jodiz.js";import"./ItemMedia-BGZXzift.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./Heading-CPu50xm5.js";import"./ItemControls-BwbZayit.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ChevronRight-CNDn15vN.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./MenuElipsisHorizontal-aeLtgluJ.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
