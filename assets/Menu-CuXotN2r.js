import{j as e,M as s,C as i}from"./iframe-BaUVsogD.js";import{useMDXComponents as r}from"./index-DgQlcHSB.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-B2cpvUmm.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CUEVdVsf.js";import"./useId-D8i_et7Z.js";import"./InformationSquare-CDbyjiK5.js";import"./Eye-D9s41kij.js";import"./Truck-C-qp-ez1.js";import"./PersonGroup-CsD7aJ6y.js";import"./Cog-DWpyLIw4.js";import"./TeddyBear-CLlLL1dy.js";import"./MenuGrid-1GlxcERj.js";import"./Enter-BaeKWQZx.js";import"./InboxFill-B7Jq6NB7.js";import"./PadlockLockedFill-DXh-3J43.js";import"./Buildings2-Csty49W7.js";import"./Globe-C6d7JK_Y.js";import"./PersonCircle-MN6H_4n_.js";import"./Bell-ClcOFTiL.js";import"./Bookmark-BHKe7za1.js";import"./ClockDashed-CA_-NbYj.js";import"./Archive-B5PAnHjV.js";import"./Trash-idftN5YP.js";import"./EyeClosed-CsUg1RaV.js";import"./MenuHamburger-Bwvpj7GR.js";import"./SearchField-BG-HK4fX.js";import"./index-lARy5TPT.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./XMark-vPSUBj6u.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./useHighlightedText-C23yE0pM.js";import"./Skeleton-yH6qNAEo.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Icon-7hKeNARf.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./ChevronRight-sVn034m6.js";import"./Badge-DkZxiFUy.js";import"./useMenu-DnkwvAkg.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function de(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{de as default};
