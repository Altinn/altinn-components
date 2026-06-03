import{ag as r,a7 as e,r as s,C as i}from"./iframe-Dmn_-H53.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-D64M8822.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CHL6y2ts.js";import"./InformationSquare-DAE6V11Y.js";import"./Eye-BALC2GXS.js";import"./MenuHamburger-CSkbsTiY.js";import"./MenuGrid-BGYI9ZUm.js";import"./Buildings2-DimBhMnp.js";import"./PersonGroup-BJNkIt2m.js";import"./Bell-5_GtUnTX.js";import"./ClockDashed-DY63JtTq.js";import"./Truck-BYig7alD.js";import"./Cog-BAS0lt3J.js";import"./Enter-DXYuFNDS.js";import"./InboxFill-CYPcUZnp.js";import"./PersonCircle-WloE75L6.js";import"./Globe-BayYtb16.js";import"./EyeClosed-D89juT-z.js";import"./Archive-BHSi9wSQ.js";import"./Trash-DbwGnQTy.js";import"./Bookmark-BlnRkon0.js";import"./TeddyBear-28MRkZBx.js";import"./SearchField-DeTed8Dk.js";import"./MagnifyingGlass-CJgpPnEh.js";import"./FieldBase-BLinraZG.js";import"./Typography-BUxrbwUx.js";import"./useHighlightedText-CD-cx98y.js";import"./Field-1tw-cTWp.js";import"./Label-D7CtZtsQ.js";import"./Input-CiIUlzDr.js";import"./useMenu-B_9AoNot.js";import"./MenuListItem-CwZ16ivE.js";import"./MenuListHeading-BrW5zaeP.js";import"./MenuItem-C30u_q0-.js";import"./ItemMedia-D_bOU9XF.js";import"./Avatar-DRCSmXVk.js";import"./AvatarGroup-D0qXNceQ.js";import"./Checkmark-DzxOHVu0.js";import"./ItemLabel-ejtJzCEp.js";import"./Heading-mFrUmf7m.js";import"./ItemControls-CbvyOb0R.js";import"./Badge-De6DPsXj.js";import"./Tooltip-CdtWGkOh.js";import"./ChevronRight-Wr9L-VUi.js";import"./index-Qm016dy0.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
