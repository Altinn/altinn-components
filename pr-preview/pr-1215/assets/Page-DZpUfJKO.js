import{w as o,p as e,c as t}from"./iframe-HmDeAVAp.js";import"./PageMenu.stories-B1vW4eEi.js";import"./PageNav.stories-BgKqGXJU.js";import"./preload-helper-PPVm8Dsz.js";import"./PageMenu-CpUZQnoI.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./Icon-DE5JaAj2.js";import"./index-CDtevUxF.js";import"./Skeleton-C_Dxe6ID.js";import"./ArrowRedo-jTQJwTeE.js";import"./useId-BNhfXdUV.js";import"./Eye-SZ3J1_6O.js";import"./Archive-DP3tiXIo.js";import"./Trash-DTo3Lvzs.js";import"./BreadcrumbsLink-CKGTzOaK.js";import"./ArrowRight-IsDuRZS-.js";import"./ArrowLeft-XFW88PMq.js";import"./Flex-CKAWkLAd.js";import"./ClockDashed-DPb7YX4C.js";import"./ContextMenu-oQVSL7Ks.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./XMark-DFSmJjac.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./Heading-CYuK0FXt.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronRight-Cqfpq8PE.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./MenuElipsisHorizontal-BDeVXpR4.js";function s(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Page"}),`
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
`,e.jsx(i.p,{children:"Articles, topics and other pages with content."})]})}function ie(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{ie as default};
