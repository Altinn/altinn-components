import{j as n,M as s,C as t}from"./iframe-BTgHnb1V.js";import{useMDXComponents as r}from"./index-BoSGDamv.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-DzuYakua.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-CDiL93zW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Ccau3b8T.js";import"./button-DAOqBeHz.js";import"./use-merge-refs-8A0H_t2p.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-CI4RwwaJ.js";import"./index-t_Anj6Qz.js";import"./XMark-DMQzhoj3.js";import"./useId-DWidDjIe.js";import"./Pencil-DP4F3rfz.js";import"./ArrowRight-DEkU6yzP.js";import"./ArrowLeft-C3HhsOaq.js";import"./SearchField-Dea1MzEn.js";import"./MagnifyingGlass-DQ3ccb4H.js";import"./FieldBase-B5jTEalp.js";import"./Typography-CR3zr5Vv.js";import"./useHighlightedText-DrZCsmQU.js";import"./Skeleton-B3M39f3D.js";import"./Label-DOnz6ye3.js";import"./index-3lpPu1ww.js";import"./Input-CFaRcvTR.js";import"./input-z_rArVKU.js";import"./MenuListItem-DKnhIWL6.js";import"./MenuListHeading-CfRWVBZN.js";import"./MenuItem-DLwUzMv1.js";import"./ItemMedia-BOGO8xTn.js";import"./Avatar-DpDT0aNa.js";import"./AvatarGroup-4I2zgroj.js";import"./Icon-PY6OftAR.js";import"./Checkmark-jKAH024b.js";import"./Heading-Ca71xFkp.js";import"./ChevronRight-DEDRS1St.js";import"./Badge-sZl2g-is.js";import"./useMenu-DSfKnhCX.js";import"./InformationSquare-BM_VTFR-.js";import"./ButtonGroupDivider-DWFV_Mpd.js";import"./ChevronUpDown-Btx-mwnL.js";import"./Plus-D5thgfNG.js";import"./Bookmark-fKWwbmfi.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
