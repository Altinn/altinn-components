import{j as n,M as s,C as t}from"./iframe-CRyMHjBa.js";import{useMDXComponents as r}from"./index-D4sgrM0U.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-CtqFYHKt.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-Unj_N5of.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-Be2TeWIw.js";import"./index-DHHnxdIx.js";import"./XMark-Bzo2iZ4y.js";import"./useId-Gvikg1Q9.js";import"./Pencil-pZXlCpUf.js";import"./ArrowRight-BuoWqs5I.js";import"./ArrowLeft-DO_DgEAQ.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./ButtonGroupDivider-uVMrpMEY.js";import"./ChevronUpDown-iXCDP4yz.js";import"./Plus-OcRWzOJe.js";import"./Bookmark-BZtiRB5z.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
