import{ag as r,a7 as e,r as s,C as i}from"./iframe-D6Pw3lmv.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-E-vySL4h.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-D_Cz5rNA.js";import"./InformationSquare-D2Bd0bEl.js";import"./Eye-Ci1-KX1b.js";import"./MenuHamburger-DaPB2oTh.js";import"./MenuGrid-DNKVbrWb.js";import"./Buildings2-BaIjKe8w.js";import"./PersonGroup-6_bDI7S_.js";import"./Bell-FB6IfEql.js";import"./ClockDashed-4YASebKO.js";import"./Truck-CkVh1JOV.js";import"./Cog-BLe2YZ6o.js";import"./Enter-BA1biyqm.js";import"./InboxFill-j6jQxy97.js";import"./PersonCircle-BTLC5Zvt.js";import"./Globe-BCYHihqy.js";import"./EyeClosed-DkRsieqq.js";import"./Archive-CA4pjqQu.js";import"./Trash-B3d5chwP.js";import"./Bookmark-DaI5CD2v.js";import"./TeddyBear-Bw2-q9Xc.js";import"./SearchField-EcYIPpv0.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./Heading-Bsu5tLR0.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronRight-DrJyRyMs.js";import"./index-CjPQDnhT.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
