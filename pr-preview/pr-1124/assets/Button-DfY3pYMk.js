import{j as n,M as s,C as t}from"./iframe-C30XMp4u.js";import{useMDXComponents as r}from"./index-Cihnk0wP.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-CWbAHGwg.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-DnIn0R17.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-B8wqqWfc.js";import"./index-Dfjgmy9H.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./Pencil-BC0Lwdzv.js";import"./ArrowRight-DqsQp-IZ.js";import"./ArrowLeft-DMs1pUEa.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./ChevronUpDown-7yy58H4K.js";import"./Plus-zIuJSXr8.js";import"./Bookmark-Bq9PXl-2.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
`,n.jsx(i.h1,{id:"button-and-buttongroup",children:"Button and ButtonGroup"}),`
`,n.jsx(i.p,{children:"Use Buttons to initialize actions. The label should indicate what action will occur when the user interacts with it."}),`
`,n.jsx(i.h2,{id:"differences-from-designsystemet",children:"Differences from Designsystemet"}),`
`,n.jsx(i.p,{children:"The Button-component is built upon the Button-component from Designsystemet. Key differences:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["The ",n.jsx(i.code,{children:"asChild"})," prop is replaced with an ",n.jsx(i.code,{children:"as"})," prop."]}),`
`,n.jsxs(i.li,{children:["The ",n.jsx(i.code,{children:"data-size"})," prop is replaced with a ",n.jsx(i.code,{children:"size"})," prop."]}),`
`,n.jsxs(i.li,{children:["The ",n.jsx(i.code,{children:"data-variant"})," prop is replaced with an ",n.jsx(i.code,{children:"variant"})," prop."]}),`
`,n.jsx(i.li,{children:"Altinn uses descriptive variants (solid, tinted, outline, ghost)."}),`
`,n.jsxs(i.li,{children:["Altinn introduces a ",n.jsx(i.code,{children:"rounded"})," prop to make buttons circular."]}),`
`,n.jsxs(i.li,{children:["Altinn introduces a ",n.jsx(i.code,{children:"ButtonGroup"})," component to group buttons."]}),`
`]}),`
`,n.jsx(i.h2,{id:"colors",children:"Colors"}),`
`,n.jsxs(i.p,{children:["Buttons can be colored with the ",n.jsx(i.code,{children:"color"})," prop."]}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(i.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(i.p,{children:"Sizes range from xs to lg. Md is the default size."}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(i.p,{children:"While Designsystemet uses variants according to importance (primary, secondary, tertiary), Altinn uses descriptive variants."}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(i.h2,{id:"using-icons",children:"Using icons"}),`
`,n.jsxs(i.p,{children:["Buttons can be used with icons. Use ",n.jsx(i.code,{children:"icon=true"})," for a slightly larger icon."]}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(i.h2,{id:"combining-buttons-with-buttongroup",children:"Combining buttons with ButtonGroup"}),`
`,n.jsxs(i.p,{children:["Use ",n.jsx(i.code,{children:"ButtonGroup"})," with a ",n.jsx(i.code,{children:"size"})," prop to combine buttons with normalized spacing. The ",n.jsx(i.code,{children:"size"})," prop is inherited to the children."]}),`
`,n.jsx(t,{of:h}),`
`,n.jsxs(i.p,{children:["Add ",n.jsx(i.code,{children:"connected=true"})," to remove spacing."]}),`
`,n.jsx(t,{of:a}),`
`,n.jsxs(i.p,{children:["Use ",n.jsx(i.code,{children:"ButtonGroupDivider"})," to divide connected buttons."]}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(i.p,{children:"Use ButtonGroup to create ComboButtons:"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(i.h2,{id:"toolbars",children:"Toolbars"}),`
`,n.jsx(i.p,{children:"Create toolbars by combining ButtonGroup, Inputs and different Button variants."}),`
`,n.jsx(t,{of:x})]})}function cn(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{cn as default};
