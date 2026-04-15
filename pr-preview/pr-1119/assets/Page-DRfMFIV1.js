import{j as e,M as r}from"./iframe-BWWyepKi.js";import{useMDXComponents as s}from"./index-Cdy6X_Oe.js";import"./PageMenu.stories-CNw6pB7y.js";import"./PageNav.stories-CECp5zQy.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CGZcC9QN.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./Icon-w9oNx8pI.js";import"./index-fkRlyifr.js";import"./Skeleton-CYDyiFkf.js";import"./ArrowRedo-DTJQRJT_.js";import"./useId-CMCVT55W.js";import"./Eye-BUErm0To.js";import"./Archive-C0BkWIAH.js";import"./Trash-DMXRjDw8.js";import"./ArrowLeft-B0i4v3TH.js";import"./Flex-C8xEqik7.js";import"./BreadcrumbsLink-Bzsm7kxW.js";import"./ArrowRight-8Ucc1x_N.js";import"./ClockDashed-C37jzxs0.js";import"./ContextMenu-Bmz4Uucx.js";import"./useDropdownMenuController-Dc9W55Rj.js";import"./Dropdown-BWKRG_29.js";import"./XMark-DJOirLMA.js";import"./MenuElipsisHorizontal-xqi8fzGv.js";import"./SearchField-BuZQEnM8.js";import"./MagnifyingGlass-B591vdqr.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BnIxk9FT.js";import"./InformationSquare-WPPzSpdY.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Page"}),`
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
