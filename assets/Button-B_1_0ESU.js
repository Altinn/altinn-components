import{j as i,M as s,C as n}from"./iframe-Cqj3AiBb.js";import{useMDXComponents as r}from"./index-D112xVoV.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-D6pL4OZ0.js";import{Default as h,Connected as m,WithDivider as a,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-BMV0C9fs.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-HmC79Nv3.js";import"./index-CHG1hv9Q.js";import"./XMark-ReENydG3.js";import"./useId-Bi-DL88I.js";import"./Pencil-BW7gTPSy.js";import"./ArrowRight-CtrtZlDi.js";import"./ArrowLeft-eF1LYWJV.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ChevronUpDown-DokNKEik.js";import"./Plus-U9ILyx0n.js";import"./Bookmark-ykz9HJCL.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
