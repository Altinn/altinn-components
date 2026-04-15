import{j as e,M as s,C as i}from"./iframe-Bka3lqwZ.js";import{useMDXComponents as r}from"./index-CzEAr-GI.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BxO7yJkX.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-D_7uE9LG.js";import"./useId-BOUKUp4S.js";import"./InformationSquare-BNmERE6I.js";import"./Eye-1G-XdHUO.js";import"./Truck-KEtf6t3f.js";import"./PersonGroup-xEHXFpD-.js";import"./Cog-OkpErU1S.js";import"./TeddyBear-u20hMOpj.js";import"./MenuGrid-BdrFU0Ow.js";import"./Enter-Cf0uIiLz.js";import"./InboxFill-DBW460ZQ.js";import"./PadlockLockedFill-BNbCTt2P.js";import"./Buildings2-vS-shoMU.js";import"./Globe-BjBVeJDm.js";import"./PersonCircle-ZM-KEEIy.js";import"./Bell-JArLTvn4.js";import"./Bookmark-B-uB1Rkc.js";import"./ClockDashed-DTJHTAOb.js";import"./Archive-CG8d1DTP.js";import"./Trash-CKkWVRjk.js";import"./EyeClosed-CUGWQw4B.js";import"./MenuHamburger-Jx8psQzX.js";import"./SearchField-CSZgV0pa.js";import"./index-97QH58ax.js";import"./MagnifyingGlass-ohRS00MN.js";import"./XMark-BopKFElT.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./useHighlightedText-DGjnrdw2.js";import"./Skeleton-ECUY2hPc.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Icon-DoXRGO_6.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./ItemControls-abhSx9yX.js";import"./ChevronRight-1C-HJkAE.js";import"./Badge-Dr-ny6rj.js";import"./useMenu-Cu8ej4cj.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ae as default};
