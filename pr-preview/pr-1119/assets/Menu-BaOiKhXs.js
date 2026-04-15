import{j as e,M as s,C as i}from"./iframe-BWWyepKi.js";import{useMDXComponents as r}from"./index-Cdy6X_Oe.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BTtWgSa-.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-B931rBbb.js";import"./useId-CMCVT55W.js";import"./InformationSquare-WPPzSpdY.js";import"./Eye-BUErm0To.js";import"./Truck-BVlLq1ir.js";import"./PersonGroup-zz0Q4xGr.js";import"./Cog-DzLGL7K1.js";import"./TeddyBear-DAUf9ypm.js";import"./MenuGrid-BzIQlHmL.js";import"./Enter-CKhL2F_O.js";import"./InboxFill-CGl49g3V.js";import"./PadlockLockedFill-DBaRumWt.js";import"./Buildings2-DRqyTy38.js";import"./Globe-qk8GfdhN.js";import"./PersonCircle-BNXH9dF5.js";import"./Bell-CszqB2U-.js";import"./Bookmark-CCyimZDh.js";import"./ClockDashed-C37jzxs0.js";import"./Archive-C0BkWIAH.js";import"./Trash-DMXRjDw8.js";import"./EyeClosed-BMTReKaW.js";import"./MenuHamburger-R6t8Z0iD.js";import"./SearchField-BuZQEnM8.js";import"./index-fkRlyifr.js";import"./MagnifyingGlass-B591vdqr.js";import"./XMark-DJOirLMA.js";import"./FieldBase-DnRTsvox.js";import"./Typography-C9vgo_J4.js";import"./useHighlightedText-BYfI8EMJ.js";import"./Skeleton-CYDyiFkf.js";import"./Label-DYc4A36I.js";import"./index-2Prco8uk.js";import"./use-merge-refs-CbLzoZkL.js";import"./lite-DaUVFjkg.js";import"./Input-BcqR7Mo_.js";import"./input-CuS4pR7j.js";import"./Button-DaLP9UzX.js";import"./button-dq33hCwG.js";import"./MenuListItem-uASMHa_1.js";import"./MenuListHeading-CgclVl9k.js";import"./MenuItem-Dk1uy6my.js";import"./ItemMedia-h4TQiEvV.js";import"./Avatar-CiKCHN1S.js";import"./AvatarGroup-DPHuhQ41.js";import"./Icon-w9oNx8pI.js";import"./Checkmark-C84HjHaR.js";import"./Heading-DQYelGqr.js";import"./ItemControls-jVI2cRmn.js";import"./ChevronRight-I2Pyvoyr.js";import"./Badge-CiufGa4u.js";import"./Tooltip-C4xENPhK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BnIxk9FT.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
