import{j as e,M as r}from"./iframe-JDDu8qct.js";import{useMDXComponents as s}from"./index-CUkpYR0r.js";import"./PageMenu.stories-zhzpGlyp.js";import"./PageNav.stories-DBhXiC02.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-qTmAlIe_.js";import"./Button-DJdKIqrT.js";import"./button-xt_-egYh.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Icon-DIHT6axv.js";import"./index--LOES4hQ.js";import"./Skeleton-CG77vT0k.js";import"./ArrowRedo-D1ditHdQ.js";import"./useId-BWG34Gxg.js";import"./Eye-ClYhzeVq.js";import"./Archive-CIT6mhgS.js";import"./Trash-BUbta1pc.js";import"./ArrowLeft-BKgiZyh0.js";import"./Flex-BxwOuuQR.js";import"./BreadcrumbsLink-CdI_pAsN.js";import"./ArrowRight-G6csqhYC.js";import"./ClockDashed-6gH_acLs.js";import"./ContextMenu-CY-OQIYm.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Dropdown-C4SP0e_D.js";import"./XMark-YkWOq4QK.js";import"./MenuElipsisHorizontal-3YEM2VfJ.js";import"./SearchField-CPeUZoGo.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./FieldBase-D3HPIoAl.js";import"./Typography-yaBddsX3.js";import"./useHighlightedText-CEk7sGm4.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./Avatar-C90IY9ut.js";import"./AvatarGroup-iM9HxeRB.js";import"./Checkmark-D1rpd2hz.js";import"./Heading-DTbUzRnV.js";import"./ItemControls-_7JFqe2W.js";import"./ChevronRight-CAXd-oaR.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
