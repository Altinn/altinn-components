var t=Object.defineProperty;var s=(i,e)=>t(i,"name",{value:e,configurable:!0});import{ag as r,a7 as n,r as a}from"./iframe-CtXhLetY.js";import"./PageMenu.stories-CdUnV4Zc.js";import"./PageNav.stories-C5-8flF8.js";import"./preload-helper-Cc2_yIPf.js";import"./PageMenu-IsF1DsIB.js";import"./ArrowRedo-BxOqg4rk.js";import"./Eye-CcbJkz05.js";import"./Archive-CMlmkXHW.js";import"./Trash-BBjuHv-u.js";import"./BreadcrumbsLink-CMSo1muQ.js";import"./ArrowRight-BEFYgB7Z.js";import"./ArrowLeft-B47bq9RJ.js";import"./Flex-B2jEbRqX.js";import"./ClockDashed-Bf3NF91U.js";import"./ContextMenu-prDkaT0d.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./SearchField-DGLH3IXX.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./ItemMedia-BiJdsWyj.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./ChevronRight-S5R-64jg.js";import"./FieldBase-CnqvqYs3.js";import"./Typography-BeyzbKvD.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./useMenu-BNTP8R_q.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";import"./MenuElipsisHorizontal-Cc3YoMLz.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Page"}),`
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
