import{ag as r,a7 as e,r as s,C as i}from"./iframe-Byxtd80g.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-8S5ljCkA.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CyfpQaVT.js";import"./InformationSquare-CfrYT55Z.js";import"./Eye-BJUZ9eMd.js";import"./MenuHamburger-Djtct37j.js";import"./MenuGrid-DKOA70_A.js";import"./Buildings2-DE1ScjU0.js";import"./PersonGroup-Esebtzdd.js";import"./Bell-C0dVVEnv.js";import"./ClockDashed-CUKZ9Cab.js";import"./Truck-9XUy-KPS.js";import"./Cog-Cr2J48th.js";import"./Enter-DFJxMCsB.js";import"./InboxFill-DI4oJ5bC.js";import"./PersonCircle-D7O4OnpB.js";import"./Globe-Bz6a-Y3A.js";import"./EyeClosed-aYZJq78V.js";import"./Archive-DN9JKnJD.js";import"./Trash-LkpJF2Ft.js";import"./Bookmark-CcRZkTPq.js";import"./TeddyBear-yQwUnbIs.js";import"./SearchField-BrxR5w_Y.js";import"./MagnifyingGlass-DByXWuC9.js";import"./FieldBase-BpV90x03.js";import"./Typography-B9U7pBH4.js";import"./useHighlightedText-Cf3y_8YK.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";import"./useMenu-ClfrC7iO.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./MenuItem-BIjlfqyX.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./Heading-MBvMqbLo.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./ChevronRight-Cr__dFRw.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
