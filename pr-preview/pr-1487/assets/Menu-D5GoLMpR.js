var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as s,a6 as e,r as c,C as o}from"./iframe-DwHkmT0f.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-BcF96E7h.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-DY0uJU8B.js";import"./InformationSquare-CaoePqPY.js";import"./Eye-VigAgyF8.js";import"./MenuHamburger-Cqjxk-FQ.js";import"./MenuGrid-qtVH-PgJ.js";import"./Buildings2-CFScrem9.js";import"./PersonGroup-CIwqLBWn.js";import"./Bell-CT4e3QFA.js";import"./ClockDashed-8pYFR5Pn.js";import"./Truck-uWuwqn1C.js";import"./Cog-BVi_9S8w.js";import"./Enter-DzGA_rgK.js";import"./InboxFill-Cj7OiwCb.js";import"./PersonCircle-C4drci5H.js";import"./Globe-Bx9qVXn3.js";import"./EyeClosed-DtQHSqTa.js";import"./Archive-DDASx2ii.js";import"./Trash-B4bAWeXV.js";import"./Bookmark-D8UAaNDA.js";import"./TeddyBear-Cg0zvzih.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ItemLabel-hjkm06Ot.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./useMenu-D8t-dYWs.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(o,{of:a}),`
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
`})})]})}i(r,"_createMdxContent");function re(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}i(re,"MDXContent");export{re as default};
