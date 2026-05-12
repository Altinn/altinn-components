import{j as i,M as s,C as n}from"./iframe-aFNUvxii.js";import{useMDXComponents as r}from"./index-i6YJ6RY7.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-X0Vn3pjp.js";import{Default as h,Connected as m,WithDivider as a,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-D1trn_Di.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-Cv-I5W75.js";import"./index-DmNdTbFH.js";import"./XMark-BNsj9R6R.js";import"./useId-W_OLMGMd.js";import"./Pencil-DO0XgvAI.js";import"./ArrowRight-C6LNBpBr.js";import"./ArrowLeft-CyQ3Sw5F.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useHighlightedText-DGtjyph8.js";import"./Skeleton-Cd5GNeeI.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./ItemControls-BgCWQjxP.js";import"./ChevronRight-B0RIPM-U.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./ButtonGroupDivider-BWsibbzd.js";import"./ChevronUpDown-sl0ayiQO.js";import"./Plus-BzMVfyBN.js";import"./Bookmark-K0qzsBTB.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
`,i.jsx(t.h1,{id:"button-and-buttongroup",children:"Button and ButtonGroup"}),`
`,i.jsx(t.p,{children:"Use Buttons to initialize actions. The label should indicate what action will occur when the user interacts with it."}),`
`,i.jsx(t.h2,{id:"differences-from-designsystemet",children:"Differences from Designsystemet"}),`
`,i.jsx(t.p,{children:"The Button-component is built upon the Button-component from Designsystemet. Key differences:"}),`
`,i.jsxs(t.ul,{children:[`
`,i.jsxs(t.li,{children:["The ",i.jsx(t.code,{children:"asChild"})," prop is replaced with an ",i.jsx(t.code,{children:"as"})," prop."]}),`
`,i.jsxs(t.li,{children:["The ",i.jsx(t.code,{children:"data-size"})," prop is replaced with a ",i.jsx(t.code,{children:"size"})," prop."]}),`
`,i.jsxs(t.li,{children:["The ",i.jsx(t.code,{children:"data-variant"})," prop is replaced with an ",i.jsx(t.code,{children:"variant"})," prop."]}),`
`,i.jsx(t.li,{children:"Altinn uses descriptive variants (solid, tinted, outline, ghost)."}),`
`,i.jsxs(t.li,{children:["Altinn introduces a ",i.jsx(t.code,{children:"rounded"})," prop to make buttons circular."]}),`
`,i.jsxs(t.li,{children:["Altinn introduces a ",i.jsx(t.code,{children:"ButtonGroup"})," component to group buttons."]}),`
`]}),`
`,i.jsx(t.h2,{id:"colors",children:"Colors"}),`
`,i.jsxs(t.p,{children:["Buttons can be colored with the ",i.jsx(t.code,{children:"color"})," prop."]}),`
`,i.jsx(n,{of:c}),`
`,i.jsx(t.h2,{id:"sizes",children:"Sizes"}),`
`,i.jsx(t.p,{children:"Sizes range from xs to lg. Md is the default size."}),`
`,i.jsx(n,{of:d}),`
`,i.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(t.p,{children:"While Designsystemet uses variants according to importance (primary, secondary, tertiary), Altinn uses descriptive variants."}),`
`,i.jsx(n,{of:p}),`
`,i.jsx(t.h2,{id:"using-icons",children:"Using icons"}),`
`,i.jsxs(t.p,{children:["Buttons can be used with icons. Use ",i.jsx(t.code,{children:"icon=true"})," for a slightly larger icon."]}),`
`,i.jsx(n,{of:l}),`
`,i.jsx(t.h2,{id:"combining-buttons-with-buttongroup",children:"Combining buttons with ButtonGroup"}),`
`,i.jsxs(t.p,{children:["Use ",i.jsx(t.code,{children:"ButtonGroup"})," with a ",i.jsx(t.code,{children:"size"})," prop to combine buttons with normalized spacing. The ",i.jsx(t.code,{children:"size"})," prop is inherited to the children."]}),`
`,i.jsx(n,{of:h}),`
`,i.jsxs(t.p,{children:["Add ",i.jsx(t.code,{children:"connected=true"})," to remove spacing."]}),`
`,i.jsx(n,{of:m}),`
`,i.jsxs(t.p,{children:["Use ",i.jsx(t.code,{children:"ButtonGroupDivider"})," to divide connected buttons."]}),`
`,i.jsx(n,{of:a}),`
`,i.jsx(t.p,{children:"Use ButtonGroup to create ComboButtons:"}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(t.h2,{id:"toolbars",children:"Toolbars"}),`
`,i.jsx(t.p,{children:"Create toolbars by combining ButtonGroup, Inputs and different Button variants."}),`
`,i.jsx(n,{of:x})]})}function pi(o={}){const{wrapper:t}={...r(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(e,{...o})}):e(o)}export{pi as default};
