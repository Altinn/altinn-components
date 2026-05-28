import{w as r,p as e,c as s,C as i}from"./iframe-43_RSSTf.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-Cvbzphg4.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BTsZrMbs.js";import"./useId-BLkk23cI.js";import"./InformationSquare-BgUnCFaX.js";import"./Eye-B_h9zvOR.js";import"./MenuHamburger-aTqKFAcp.js";import"./MenuGrid-DpPBmXDm.js";import"./Buildings2-Chbhwy3k.js";import"./PersonGroup-Bre-kyxt.js";import"./Bell-OuASsAUs.js";import"./ClockDashed-BtdrgYQX.js";import"./Truck-BLxadAH6.js";import"./Cog-CVYugA4u.js";import"./Enter-DdOnloWp.js";import"./InboxFill-LO64aqnK.js";import"./PersonCircle-5C7xLqsV.js";import"./Globe-DE_rqwfk.js";import"./EyeClosed-BQ3hu7GA.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./Bookmark-Dm5c54YI.js";import"./TeddyBear-Bz-T9iZz.js";import"./SearchField-QwXAT1yz.js";import"./index-D9XEmR3s.js";import"./MagnifyingGlass-Bf1420VU.js";import"./XMark-Baw5EL5c.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Label-DtAXMx4b.js";import"./tooltip-CaRi0lSN.js";import"./Input-B-eeYerN.js";import"./Button-B83AdZGF.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function pe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{pe as default};
