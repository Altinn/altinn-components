import{j as n,M as s,C as t}from"./iframe-BbAJh2l_.js";import{useMDXComponents as r}from"./index-BU8kjn93.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-CFMLpo4N.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-DJbrC6cn.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-CfWicBai.js";import"./index-D4eFSvt3.js";import"./XMark-CBD09dy-.js";import"./useId-DlaeWOGU.js";import"./Pencil-BfQO2BKA.js";import"./ArrowRight-q_aSapAv.js";import"./ArrowLeft-lWhpFl88.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./Skeleton-DCAPmpFX.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Icon-BPIDnrjf.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./Badge-Bayw0f9c.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./ButtonGroupDivider-BKjt-F_a.js";import"./ChevronUpDown-CYRKV1V8.js";import"./Plus-Db8QMMb0.js";import"./Bookmark-B1ei_95V.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
