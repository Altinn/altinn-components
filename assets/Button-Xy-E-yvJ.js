import{j as n,M as s,C as t}from"./iframe-CFpZEpOT.js";import{useMDXComponents as r}from"./index-Dck6vUtY.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-BYXbprLS.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-Ci3hOAWv.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-ix1R0MqJ.js";import"./index-CMCH-iYZ.js";import"./XMark-DsxdrTa7.js";import"./useId-Bpa1--zZ.js";import"./Pencil-B9RHEtUG.js";import"./ArrowRight-hR9_L869.js";import"./ArrowLeft-CckNtR6Q.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Skeleton-BxeTCVQ2.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Icon-CcpuJg5J.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./ButtonGroupDivider-BWSKwXfh.js";import"./ChevronUpDown-B9L9cM3W.js";import"./Plus-BvInV0-S.js";import"./Bookmark-DMRCbUCL.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
`,n.jsx(t,{of:x})]})}function sn(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{sn as default};
