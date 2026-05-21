import{j as e,M as r}from"./iframe-CXxOXnma.js";import{useMDXComponents as o}from"./index-jOt5FO3J.js";import"./PageMenu.stories-BbVR5YGr.js";import"./PageNav.stories-Xf81V-7u.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-DKwU4Oce.js";import"./Button-Dot-dF6F.js";import"./tooltip-F-8CLWbq.js";import"./Icon-CyU2k-nr.js";import"./index-DvzmMrBu.js";import"./Skeleton-DaZzKoDP.js";import"./ArrowRedo-4AMvomRo.js";import"./useId-CYy4MNIP.js";import"./Eye-ClEd4FCG.js";import"./Archive-Ckj3Uw1e.js";import"./Trash-BwBqKSjv.js";import"./ArrowLeft-CnFOreR4.js";import"./Flex-Cdw8i_ge.js";import"./BreadcrumbsLink-vli8n6TE.js";import"./ArrowRight-BEJaF5VH.js";import"./ClockDashed-BGkl1v-H.js";import"./ContextMenu-DWu5Hmy2.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Dropdown-Dq-7A4eI.js";import"./XMark-DvGwYctt.js";import"./MenuElipsisHorizontal-Bm1EICSF.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useHighlightedText-Cggf4nMP.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./ItemControls-D969--fk.js";import"./ChevronRight-fDr-lddl.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
