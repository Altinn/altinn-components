import{ag as o,a7 as e,r}from"./iframe-BidFzEoe.js";import"./PageMenu.stories-qZURhj0n.js";import"./PageNav.stories-BEEWjgI5.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CUUJeP71.js";import"./ArrowRedo-Bm5zfxjo.js";import"./Eye-CMjHzZTm.js";import"./Archive-C8P_Y27w.js";import"./Trash-C23skxme.js";import"./BreadcrumbsLink-BjaXo9b0.js";import"./ArrowRight-B6fMiaoa.js";import"./ArrowLeft-BQ3DgQjF.js";import"./Flex-BXtaAm49.js";import"./ClockDashed-DycEaa7b.js";import"./ContextMenu-Cdisi90L.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./SearchField-CPTH-dMf.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./useHighlightedText-B2dzt3_l.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./Heading-XBMlN0kz.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronRight-B3flyXKQ.js";import"./InformationSquare-B1R5HfkF.js";import"./MenuElipsisHorizontal-BhNI2fK5.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
