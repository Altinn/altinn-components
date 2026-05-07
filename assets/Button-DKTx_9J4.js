import{j as i,M as s,C as n}from"./iframe-Nkxls2w0.js";import{useMDXComponents as r}from"./index-DEhnau5t.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-hT4SZV7R.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-BI8HDtLf.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-HCy2ouFP.js";import"./index-M4TkGQLb.js";import"./XMark-D-ALqV0n.js";import"./useId-C8J5yFeN.js";import"./Pencil-Bke20GIE.js";import"./ArrowRight-fyKGUXd8.js";import"./ArrowLeft-DUVmp2JT.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./useHighlightedText-BtUjP4Uj.js";import"./Skeleton-DNS4c1Rp.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./Checkmark-DHusaxnp.js";import"./Heading-AZ4WQ_-Y.js";import"./ItemControls-BH6jrH_o.js";import"./ChevronRight-Bcpq3qt2.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ChevronUpDown-Cc1V6X6m.js";import"./Plus-DIAMQcGN.js";import"./Bookmark-Ae2OhZ5O.js";function e(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Button/Button"}),`
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
