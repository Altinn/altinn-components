import{j as i,M as s,C as n}from"./iframe-0B_Yudin.js";import{useMDXComponents as r}from"./index-Mx4bqmK6.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-9oXK5gpi.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-CnHvRgK4.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-CSUZvsoD.js";import"./index-bzqtFzN_.js";import"./XMark-4vnuAWTz.js";import"./useId-BUxMg0Ir.js";import"./Pencil-ByhlV4aA.js";import"./ArrowRight-8nOEs7Bb.js";import"./ArrowLeft-BZAg0O1j.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Skeleton-CCW5QxrE.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./ButtonGroupDivider-BIa7C9rx.js";import"./ChevronUpDown-oD2FsggY.js";import"./Plus-BmqtHu8-.js";import"./Bookmark-xUjEkd69.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
`,i.jsx(n,{of:a}),`
`,i.jsxs(t.p,{children:["Use ",i.jsx(t.code,{children:"ButtonGroupDivider"})," to divide connected buttons."]}),`
`,i.jsx(n,{of:m}),`
`,i.jsx(t.p,{children:"Use ButtonGroup to create ComboButtons:"}),`
`,i.jsx(n,{of:u}),`
`,i.jsx(t.h2,{id:"toolbars",children:"Toolbars"}),`
`,i.jsx(t.p,{children:"Create toolbars by combining ButtonGroup, Inputs and different Button variants."}),`
`,i.jsx(n,{of:x})]})}function di(o={}){const{wrapper:t}={...r(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(e,{...o})}):e(o)}export{di as default};
