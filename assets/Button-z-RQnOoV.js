import{j as n,M as s,C as t}from"./iframe-DxxW_Hah.js";import{useMDXComponents as r}from"./index-DKIurCIe.js";import{Colors as c,Sizes as d,Variants as p,Icons as l}from"./Button.stories-CgdDldez.js";import{Default as h,Connected as a,WithDivider as m,ComboButton as u,Toolbar as x}from"./ButtonGroup.stories-CwBzmkcH.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";import"./ButtonGroup-wgVYayc9.js";import"./index-pOAXHZ6n.js";import"./XMark-ChXBbXGN.js";import"./useId-CckRU7I8.js";import"./Pencil-B5ss49Re.js";import"./ArrowRight-DC8n_eRS.js";import"./ArrowLeft-DGGEeyL2.js";import"./SearchField-ptc2QeHn.js";import"./MagnifyingGlass-B8dYO_M2.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./Label-YFmv6AXl.js";import"./index-D2WP85Bl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./MenuListItem-BWh93a_i.js";import"./MenuListHeading-CIz6aOLR.js";import"./MenuItem-SOEG9Ke8.js";import"./ItemMedia-DDT4_MLi.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Icon-Cf03fdWw.js";import"./Checkmark-pZi8btQa.js";import"./Heading-Bejow2zA.js";import"./ChevronRight-CqOTbusb.js";import"./Badge-CQ9EBUDZ.js";import"./useMenu-DMxEdeKU.js";import"./InformationSquare-CuO8i3VE.js";import"./ButtonGroupDivider-i0Wffh1Y.js";import"./ChevronUpDown-CXtDHS57.js";import"./Plus-CScsMow9.js";import"./Bookmark-B8Ru0JCx.js";function e(o){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Button/Button"}),`
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
