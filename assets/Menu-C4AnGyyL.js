import{j as e,M as s,C as i}from"./iframe-C32LkOFR.js";import{useMDXComponents as r}from"./index-CXO_PkpZ.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-ZIdabLyb.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DSqVpQqK.js";import"./useId-C6VS968l.js";import"./InformationSquare-BqsScoMm.js";import"./Eye-VpIxgA79.js";import"./Truck-1BGb97q_.js";import"./PersonGroup-D1_1FYwy.js";import"./Cog-CWiinJJW.js";import"./TeddyBear-BHtRsNtG.js";import"./MenuGrid-CUkG-sMG.js";import"./Enter-D1Z6jONJ.js";import"./InboxFill-CFq9SYOT.js";import"./PersonCircle-NpZjwD6u.js";import"./Buildings2-DWFUVmyZ.js";import"./Globe-AP3W_AdN.js";import"./Bell-CJjrcI_k.js";import"./Bookmark-BsIrq4-c.js";import"./ClockDashed-BYpO9OrU.js";import"./Archive-DlpjqB3V.js";import"./Trash-C9CuwFFb.js";import"./EyeClosed-CJ445f3o.js";import"./MenuHamburger-CP22A_hy.js";import"./SearchField-CSvKC2kE.js";import"./index-B41-Gq6i.js";import"./MagnifyingGlass-WQhuuXQl.js";import"./XMark-CJ_7TJfx.js";import"./FieldBase-C4PiPQJY.js";import"./Typography-BtAt1mkJ.js";import"./useHighlightedText-TWz6a-kb.js";import"./Skeleton-BFp1Ns5z.js";import"./Label--g4FWuur.js";import"./tooltip-C1z0ba6x.js";import"./Input-944JhKVs.js";import"./Button-DJyTPLgL.js";import"./MenuListItem-CpDZm8hJ.js";import"./MenuListHeading-DFXzzdQl.js";import"./MenuItem-B2ec7Awl.js";import"./ItemMedia-Bzb68dd0.js";import"./Avatar-Bfhk-MsW.js";import"./AvatarGroup-CngdFV9S.js";import"./Icon-ClcJ2Ugl.js";import"./Checkmark-Cohtyyf2.js";import"./Heading-C2AVc7ZV.js";import"./ItemControls-6sDFc5WV.js";import"./ChevronRight-BRam3foO.js";import"./Badge-B5rN9dZh.js";import"./Tooltip-D2U0c2nY.js";import"./useMenu-CglJcFc3.js";import"./index-DD5_FiA2.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function pe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{pe as default};
