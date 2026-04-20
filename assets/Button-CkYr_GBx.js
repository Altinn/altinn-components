import{j as i,M as s,C as n}from"./iframe-Dj7Cj6th.js";import{useMDXComponents as r}from"./index-CkefpYF1.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-Bv_K4AQp.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-BaUO0X-P.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-FtWKGzEG.js";import"./index-CddsnUaU.js";import"./XMark-CFOHUWx0.js";import"./useId-ByPI58ip.js";import"./Pencil-DpJA5VDj.js";import"./ArrowRight-xr6Qdu7g.js";import"./ArrowLeft-B1nMFauw.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./useHighlightedText-BEM-o_8x.js";import"./Skeleton-D2EJPpRT.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./ButtonGroupDivider-BXtv9C3u.js";import"./ChevronUpDown-B9vT5o0M.js";import"./Plus-CoZtisp_.js";import"./Bookmark-D8nK4eWy.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
