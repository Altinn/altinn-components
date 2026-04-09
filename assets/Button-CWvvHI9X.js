import{j as n,M as s,C as t}from"./iframe-DgiLb7Jh.js";import{useMDXComponents as r}from"./index-BRCEKszM.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-Bq5z3Rw8.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-C8m6joyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-Ds9mrFFQ.js";import"./index-CzzvqmNv.js";import"./XMark-DE16CL-6.js";import"./useId-6J1VG5PF.js";import"./Pencil-BqMVvXmZ.js";import"./ArrowRight-OkB-GOOC.js";import"./ArrowLeft-CBE1u3F9.js";import"./SearchField-CTb1s1hd.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useHighlightedText-C3KXFHAg.js";import"./Skeleton-CjXkBVSw.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./ChevronRight-B8GqJ6hU.js";import"./Badge-DFo-bNGw.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";import"./ButtonGroupDivider-eHUmueO9.js";import"./ChevronUpDown-agMv5gvN.js";import"./Plus-gYiwb3vr.js";import"./Bookmark-BMlh_PGy.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
