import{ag as r,a7 as e,r as s,C as i}from"./iframe-BZiA3Dc9.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-CYKauhqA.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-D662rRmV.js";import"./InformationSquare-mZWip9WA.js";import"./Eye--89b7rat.js";import"./MenuHamburger-CH0SCgCh.js";import"./MenuGrid-DhGk5t1z.js";import"./Buildings2-BRuUUWGZ.js";import"./PersonGroup-4wTcCYQ2.js";import"./Bell-Ca1iHeTq.js";import"./ClockDashed-IS1yr7JH.js";import"./Truck-T-lqwI9K.js";import"./Cog-DTExHnoN.js";import"./Enter-D45C4ZyH.js";import"./InboxFill-BCgBfUTn.js";import"./PersonCircle-C_-LNb0c.js";import"./Globe-D2JmmsD8.js";import"./EyeClosed-DzJ2GlIF.js";import"./Archive-BSbbJQpu.js";import"./Trash-DL-j6TXo.js";import"./Bookmark-DaeAt-nZ.js";import"./TeddyBear-CuoAQB8Y.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./useHighlightedText-gnIxErVs.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./Heading-DduTyBY0.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronRight-CRJJFvsY.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
