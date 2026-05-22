import{j as n,M as s,C as t}from"./iframe-C6Awlou2.js";import{useMDXComponents as r}from"./index-CFcRwB6s.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-BONDwle1.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-DUKRdxpH.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./ButtonGroup-wXquxLDR.js";import"./index-DlBZqmFk.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./Pencil-sKWMbRPT.js";import"./ArrowRight-DqNeR1fr.js";import"./ArrowLeft-C75heOGB.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./Label-C48-SpFn.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./ButtonGroupDivider-o9_G-o4g.js";import"./ChevronUpDown-ge_2OXZE.js";import"./Plus-CQfWxjRv.js";import"./Bookmark-RIYX3Zxk.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
`,n.jsx(t,{of:x})]})}function rn(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(e,{...o})}):e(o)}export{rn as default};
