import{j as e,M as s,C as i}from"./iframe-aFNUvxii.js";import{useMDXComponents as r}from"./index-i6YJ6RY7.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BcPyRHf8.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CY9V8ZeY.js";import"./useId-W_OLMGMd.js";import"./InformationSquare-WTyA5DCk.js";import"./Eye-CQBeI3AO.js";import"./Truck-CEVTFlOM.js";import"./PersonGroup-7p4xrvo6.js";import"./Cog--2PdTOMY.js";import"./TeddyBear-BWwRV_p2.js";import"./MenuGrid-Q6gxdajk.js";import"./Enter-BWGj_m6z.js";import"./InboxFill-DOLbkCeC.js";import"./PersonCircle-B1Dz56Ee.js";import"./Buildings2-Cosw4hpx.js";import"./Globe-Bor6Iwii.js";import"./Bell-BRZN0HEA.js";import"./Bookmark-K0qzsBTB.js";import"./ClockDashed-DpEl0pcn.js";import"./Archive-CsRyWol-.js";import"./Trash-CL4Cjfxa.js";import"./EyeClosed-C8wjsZGa.js";import"./MenuHamburger-CgxLJfBy.js";import"./SearchField-CnqR4pyv.js";import"./index-DmNdTbFH.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./XMark-BNsj9R6R.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useHighlightedText-DGtjyph8.js";import"./Skeleton-Cd5GNeeI.js";import"./Label-CFD6MxAu.js";import"./index-BLgLADsA.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuListHeading-Bej_UvLn.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./Avatar-DUHlMNex.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./ItemControls-BgCWQjxP.js";import"./ChevronRight-B0RIPM-U.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
`,e.jsx(n.h1,{id:"using-menus",children:"Using menus"}),`
`,e.jsxs(n.p,{children:["The menu component is the basis of all menus, including the ",e.jsx(n.code,{children:"GlobalMenu"}),". It is also part of ",e.jsx(n.code,{children:"Layout"})," as an optional local menu."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Menu"})," by providing an array of ",e.jsx(n.code,{children:"items"})," and an optional ",e.jsx(n.code,{children:"groups"})," object. Items can be nested."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Menu } from "@altinn/altinn-components";

return (
  <Menu groups={<MenuItemGroups>} items={<MenuItemProps[]>}>
);
`})}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MenuItem"})," represent a single link. It must include at least a ",e.jsx(n.code,{children:"title"})," and an ",e.jsx(n.code,{children:"id"}),". Use ",e.jsx(n.code,{children:"icon"})," to emphasise meaning."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"menu-composition",children:"Menu composition"}),`
`,e.jsx(n.p,{children:"Under the hood, menus are constructed using multiple components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`return (
    <MenuList>
      <MenuListItem>
        <MenuItem />
      </MenuListItem>
      <MenuListItem>
        <MenuItem />
        <MenuList>
          <MenuListItem>
            <MenuItem />
          </MenuListItem>
          <MenuListItem>
            <MenuItem />
          </MenuListItem>
        </MenuList>
      </MenuListItem>
    </MenuList>
);
`})})]})}function le(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{le as default};
