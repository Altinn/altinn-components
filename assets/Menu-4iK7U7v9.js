var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as s,a6 as e,r as c,C as o}from"./iframe-ZrU_khjL.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-DX3WN588.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-CUXuu9KH.js";import"./InformationSquare-v_Dcjud5.js";import"./Eye-BngehXyN.js";import"./MenuHamburger-Bmp7ovD_.js";import"./MenuGrid-OFU6OM4f.js";import"./Buildings2-D071t-hU.js";import"./PersonGroup-DYx2cCvR.js";import"./Bell-TXVB7B0D.js";import"./ClockDashed-D-aa8QuT.js";import"./Truck-fPogoIcu.js";import"./Cog-hMKdugLg.js";import"./Enter-C2hxxdFf.js";import"./InboxFill-DvTncqt1.js";import"./PersonCircle-BpkEJcqi.js";import"./Globe-FslnJAPK.js";import"./EyeClosed-BukvvWm-.js";import"./Archive-BqlJd5xK.js";import"./Trash-D_09wouA.js";import"./Bookmark-ChOY-J_L.js";import"./TeddyBear-CrnJMxd5.js";import"./SearchField-BKf2_wz5.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ItemLabel-Dkx3E56O.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ChevronRight-I-BGQZW2.js";import"./FieldBase-Bti6f0lr.js";import"./Typography-FbkShcFO.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./useMenu-D1AoRPPj.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(o,{of:a}),`
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
`})})]})}i(r,"_createMdxContent");function re(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}i(re,"MDXContent");export{re as default};
