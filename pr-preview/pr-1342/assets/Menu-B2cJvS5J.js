import{ag as r,a7 as e,r as s,C as i}from"./iframe-ju2_P8cU.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-BTKOj6x2.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DW76aT0-.js";import"./InformationSquare-DxoPvZKH.js";import"./Eye-CoR75i8J.js";import"./MenuHamburger-Cqp41b9X.js";import"./MenuGrid-BLSZyrUU.js";import"./Buildings2-DXN57OJJ.js";import"./PersonGroup-B9aEl4tN.js";import"./Bell-Cqbuk4aR.js";import"./ClockDashed-7dwE9AIG.js";import"./Truck-C2ZaXnWP.js";import"./Cog-Cj4IvqKf.js";import"./Enter-CwR9nqj6.js";import"./InboxFill-Bru-lmu8.js";import"./PersonCircle-C_rQa6TJ.js";import"./Globe-CDPZ8tgx.js";import"./EyeClosed-C3DvTq1l.js";import"./Archive-DxR_PIAA.js";import"./Trash-CVIa8LCo.js";import"./Bookmark-HI6dxZQb.js";import"./TeddyBear-DpC-d6_y.js";import"./SearchField-DBcXR3Pi.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./FieldBase-B0oEW9Tf.js";import"./Typography-B5wbJTRa.js";import"./useHighlightedText-Ds75xSSg.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./Input-DOMevMNG.js";import"./useMenu-C_YjP6fk.js";import"./MenuListItem-DYFDVXHn.js";import"./MenuListDivider-CKbzfKKF.js";import"./MenuListHeading-CawXvXz1.js";import"./MenuItem-CTnwjskA.js";import"./ItemMedia-BZfNDLpv.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Checkmark-DdndXx_3.js";import"./ItemLabel-DZZbZME8.js";import"./Heading-BwdjGJ12.js";import"./ItemControls-DCzps0Gu.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./ChevronRight-C-B7qVOy.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
