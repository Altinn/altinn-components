import{ag as r,a7 as e,r as s,C as i}from"./iframe-F_FB4Yxl.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-CJafJp2_.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DDdjob3E.js";import"./InformationSquare-DJU8cSbx.js";import"./Eye-KK66zUsA.js";import"./MenuHamburger-cCPt-O4j.js";import"./MenuGrid-C6fQQxLN.js";import"./Buildings2-BJinqt1L.js";import"./PersonGroup-Dd70qOJ9.js";import"./Bell-BRMGKliV.js";import"./ClockDashed-tUg54Bgy.js";import"./Truck-DTm3oZVx.js";import"./Cog-f9F6L37o.js";import"./Enter-0fKM4Pjc.js";import"./InboxFill-B14G7Rsc.js";import"./PersonCircle-CpNckihI.js";import"./Globe-DJMPhBx_.js";import"./EyeClosed-Cs3ttYjt.js";import"./Archive-CNHNV7Oe.js";import"./Trash-FK26Fd-e.js";import"./Bookmark-BCV92YUB.js";import"./TeddyBear-BJ4rcYSD.js";import"./SearchField-XLSYMjsy.js";import"./MagnifyingGlass-xYv1kWZx.js";import"./FieldBase-DKsxkZ_u.js";import"./Typography-BQdVTYYF.js";import"./useHighlightedText-CJsPbXHy.js";import"./Field-DOnuYCd0.js";import"./Label-DEw_iIGq.js";import"./Input-CADZ4I-X.js";import"./useMenu-DGY2fmdm.js";import"./MenuListItem-X5TFO5En.js";import"./MenuListDivider-Cy2nuh7X.js";import"./MenuListHeading-BlfnlMHy.js";import"./MenuItem-Cx2LMlDr.js";import"./ItemMedia-CoUbiAZN.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Checkmark-CMCe3Dch.js";import"./ItemLabel-BJusrNMy.js";import"./Heading-Cj7rgSGX.js";import"./ItemControls-4PJArwOE.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./ChevronRight-f1WSa4_L.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
