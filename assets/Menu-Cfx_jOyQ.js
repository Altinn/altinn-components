import{ag as r,a7 as e,r as s,C as i}from"./iframe-Bg-ykIGY.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-gFMUOS5O.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-YOxJTAo-.js";import"./InformationSquare-CVG9J0Nh.js";import"./Eye-BTh7LQgu.js";import"./MenuHamburger-CVmRJGX8.js";import"./MenuGrid-BPfAt4Cz.js";import"./Buildings2-B9RAII3-.js";import"./PersonGroup-DVQW0eNT.js";import"./Bell-CzNMe-B8.js";import"./ClockDashed-Bghefrp6.js";import"./Truck-C09dqmcG.js";import"./Cog-DuwC9mcT.js";import"./Enter-Bp_EcGzr.js";import"./InboxFill-DTqh6vc6.js";import"./PersonCircle-HQYrmpfh.js";import"./Globe-Dutz8jhq.js";import"./EyeClosed-CLbRV27R.js";import"./Archive-65IAQloY.js";import"./Trash-D0nu_cWD.js";import"./Bookmark-BZCRMINk.js";import"./TeddyBear-DRGK-53R.js";import"./SearchField-BC3zApJG.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./useHighlightedText-pfd0QjZv.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./useMenu-TQu19WT_.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./ItemMedia-CbKN8wGb.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./Heading-BKVhZ0mC.js";import"./ItemControls-ChQuM1Jl.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ChevronRight-BubW3AYp.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
