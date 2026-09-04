import{ag as r,a7 as e,r as s,C as i}from"./iframe-qmQCxFa-.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-q8tPjO9c.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CI5w_XIV.js";import"./InformationSquare-dfx4dBae.js";import"./Eye-BxDxGbvo.js";import"./MenuHamburger-Ctdi4oJ4.js";import"./MenuGrid-Cn1IycGn.js";import"./Buildings2-Ch8yvNUc.js";import"./PersonGroup-D75pK7xH.js";import"./Bell-BAkU5Gwo.js";import"./ClockDashed-D21SJp05.js";import"./Truck-BYDwG59T.js";import"./Cog-CTOg5MC1.js";import"./Enter-CyT7V59U.js";import"./InboxFill-D5LHzFom.js";import"./PersonCircle-B9QME0XZ.js";import"./Globe-B7Kw2TJm.js";import"./EyeClosed-kEtkWEpN.js";import"./Archive-C5MJ9MzP.js";import"./Trash-Bwnj9cI7.js";import"./Bookmark-D42G2HHb.js";import"./TeddyBear-DOE7-87X.js";import"./SearchField-yI2IHctk.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./useHighlightedText-DvW-80BF.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./useMenu-BTzsKN7O.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./Heading-BfhEliS6.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ChevronRight-D4PJikp-.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
