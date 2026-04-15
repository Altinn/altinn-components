import{j as n,M as s,C as t}from"./iframe-Bka3lqwZ.js";import{useMDXComponents as r}from"./index-CzEAr-GI.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-Dn3hHrvU.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-CB-bb8O4.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-DnIZGAD0.js";import"./index-97QH58ax.js";import"./XMark-BopKFElT.js";import"./useId-BOUKUp4S.js";import"./Pencil-CQqiGmRF.js";import"./ArrowRight-BJiXxkts.js";import"./ArrowLeft-C8T1zrTL.js";import"./SearchField-CSZgV0pa.js";import"./MagnifyingGlass-ohRS00MN.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./useHighlightedText-DGjnrdw2.js";import"./Skeleton-ECUY2hPc.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Icon-DoXRGO_6.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./ItemControls-abhSx9yX.js";import"./ChevronRight-1C-HJkAE.js";import"./Badge-Dr-ny6rj.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./ButtonGroupDivider-CRf9txov.js";import"./ChevronUpDown-BuMNK9b7.js";import"./Plus-Cr5OOVFj.js";import"./Bookmark-B-uB1Rkc.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
