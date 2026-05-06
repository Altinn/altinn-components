import{j as i,M as s,C as n}from"./iframe-Cppd0qv6.js";import{useMDXComponents as r}from"./index-DhZ44uC8.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-DOJDzgup.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-DSA52Ppt.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-DWofFi2X.js";import"./index-BRImx9w3.js";import"./XMark-xtLLERRk.js";import"./useId-BBgZM5Xr.js";import"./Pencil-BC3i_iD0.js";import"./ArrowRight-CuMZ4iZb.js";import"./ArrowLeft-Hdl8Sb_B.js";import"./SearchField-Cfz4mYX1.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useHighlightedText-CnlmbfHa.js";import"./Skeleton-DZL_2b5i.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./ItemMedia-B28DyjI4.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./Checkmark-Ci2lQnJg.js";import"./Heading-CVWk1BMK.js";import"./ItemControls-D1uxt3OD.js";import"./ChevronRight-CWvUN_3J.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./ButtonGroupDivider-Cf7MVCnb.js";import"./ChevronUpDown-wLjF1tcy.js";import"./Plus-Budqe_al.js";import"./Bookmark-BY8QGZKs.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
