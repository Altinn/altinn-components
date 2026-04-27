import{j as i,M as s,C as n}from"./iframe-B56t8i7v.js";import{useMDXComponents as r}from"./index-D2y4v_6X.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-DTny0rrU.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-D-xe0wnJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-DUjF8sgK.js";import"./index-CHgNdXFp.js";import"./XMark-CQR84vCO.js";import"./useId-Ce_44NzT.js";import"./Pencil-2DT9n4xE.js";import"./ArrowRight-CTIl-Czw.js";import"./ArrowLeft-3Ry1-6FF.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useHighlightedText-YMvuFtwb.js";import"./Skeleton-Cer98cLN.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./ButtonGroupDivider-CubiqsGU.js";import"./ChevronUpDown-txj3YvMU.js";import"./Plus-DP2GFhc-.js";import"./Bookmark-DhU-ifQv.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
