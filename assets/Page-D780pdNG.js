import{j as e,M as r}from"./iframe-CpLxKnDM.js";import{useMDXComponents as s}from"./index-BbdVCkqs.js";import"./PageMenu.stories-DUCVuF7e.js";import"./PageNav.stories-CPtnPrYF.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-C0LJzRJi.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Icon-xH6stteC.js";import"./index-BZrYlxzi.js";import"./Skeleton-B2kLb9z1.js";import"./ArrowRedo-DuiSzzLl.js";import"./useId-Dk2QO8VQ.js";import"./Eye-CIuKAz7x.js";import"./Archive-2zuUqDx-.js";import"./Trash-0aRAlmkw.js";import"./ArrowLeft-DquJkCka.js";import"./Flex-DdRay9SF.js";import"./BreadcrumbsLink-CINDBRb6.js";import"./ArrowRight-D1EGWhkX.js";import"./ClockDashed-CK_NRh5l.js";import"./ContextMenu-6xw2WymN.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Dropdown-gyW_V0cZ.js";import"./XMark-BkFwP2BW.js";import"./MenuElipsisHorizontal-BwK0VJ96.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useHighlightedText-De1FlINf.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
