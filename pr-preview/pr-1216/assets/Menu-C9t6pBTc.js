import{ag as r,a7 as e,r as s,C as i}from"./iframe-cf7ESM3q.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-k3CINcxu.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BpZjcFPO.js";import"./InformationSquare-DtaIp5wP.js";import"./Eye-C8rWw0oW.js";import"./MenuHamburger-34tTEjhH.js";import"./MenuGrid-5MmXaPGz.js";import"./Buildings2-CkZ7T4sb.js";import"./PersonGroup-ClvKGb42.js";import"./Bell-B3M1gHWV.js";import"./ClockDashed-Tc18NaL0.js";import"./Truck-CP23KWmX.js";import"./Cog-BaCenRsq.js";import"./Enter-yIOjQNNu.js";import"./InboxFill-Bs1HmCam.js";import"./PersonCircle-CpTbD8Rr.js";import"./Globe-Cxc02z3t.js";import"./EyeClosed-6Gr-6-Ja.js";import"./Archive-SoY9DUBK.js";import"./Trash-DdUwR8QG.js";import"./Bookmark-ALvQmNlV.js";import"./TeddyBear-C3XYx_4J.js";import"./SearchField-B1yhNL-S.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./useHighlightedText-D_wbJNXZ.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./useMenu-_swqW8No.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuListHeading-0GDPIxXY.js";import"./MenuItem-CoaVEq9r.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./Heading-CpNWi06X.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ChevronRight-Dy1T7Tgm.js";import"./index-BVMz6Wm9.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
