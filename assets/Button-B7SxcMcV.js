import{j as n,M as s,C as t}from"./iframe-gnB9S1An.js";import{useMDXComponents as r}from"./index-Cj8L4guz.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-CgTgKXZl.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-ByGl7d08.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-b_-H3sds.js";import"./index-C4jL9APw.js";import"./XMark-F0lxfgWB.js";import"./useId-B9nFNwMW.js";import"./Pencil-C_J2dT-u.js";import"./ArrowRight-hwUAmRVG.js";import"./ArrowLeft-CggKF-vk.js";import"./SearchField-CW2AroNW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./useHighlightedText-BAP0b8E_.js";import"./Skeleton-_K166C5F.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./ItemControls-0hV_6Ao9.js";import"./ChevronRight-CmdeYhPT.js";import"./Badge-D2lHyQ6d.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";import"./ButtonGroupDivider-CPu4IzmD.js";import"./ChevronUpDown-BsjklsEy.js";import"./Plus-p8k1KwpY.js";import"./Bookmark-GTwORL86.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
