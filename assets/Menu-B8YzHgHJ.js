import{ag as r,a7 as e,r as s,C as i}from"./iframe-CD11FhkO.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-kSYyliw8.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-f4OOSp0t.js";import"./InformationSquare-885_pUeZ.js";import"./Eye-C-UBsLKN.js";import"./MenuHamburger-D8TsZxA8.js";import"./MenuGrid-RMwWwWT0.js";import"./Buildings2-OONJku9z.js";import"./PersonGroup-CT2RCXE3.js";import"./Bell-Cb8Dh618.js";import"./ClockDashed-O__rc6MV.js";import"./Truck-EN1JHF6F.js";import"./Cog-QYbjb4Ej.js";import"./Enter-BNdrBqs7.js";import"./InboxFill-8fqvhhKE.js";import"./PersonCircle-BWn3zrq3.js";import"./Globe-BiVm3Xkx.js";import"./EyeClosed-M0si0zz0.js";import"./Archive-CgLppSoK.js";import"./Trash-wzs9uMoD.js";import"./Bookmark-Du8iI8kI.js";import"./TeddyBear-BwRzIP3t.js";import"./SearchField-DTHysOBi.js";import"./MagnifyingGlass-DzHVnCkX.js";import"./FieldBase-BjWFGCCi.js";import"./Typography-CsSTPRBO.js";import"./useHighlightedText-BLIWo84c.js";import"./Field-D2tRhsyN.js";import"./Label-eTdXAbuC.js";import"./Input-By1HeiMt.js";import"./useMenu-PhHDaKm4.js";import"./MenuListItem-BXuXLU5Z.js";import"./MenuListDivider-C8FBE3A1.js";import"./MenuListHeading-CEMMnaXl.js";import"./MenuItem-Q62E5xuF.js";import"./ItemMedia-Da1KaWKQ.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Checkmark-1mKhNNmo.js";import"./ItemLabel-C4LW5Gzw.js";import"./Heading-DRFiIxuE.js";import"./ItemControls-BM5eXiWu.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./ChevronRight-DorAbKkm.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:p}),`
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
`})})]})}function te(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{te as default};
