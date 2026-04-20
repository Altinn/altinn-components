import{j as e,M as s,C as i}from"./iframe-yBEatwQ0.js";import{useMDXComponents as r}from"./index-CsIRPvpu.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-D-wPUyZf.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BQfOcZQR.js";import"./useId-DyCIbqyR.js";import"./InformationSquare-CID74XMT.js";import"./Eye-RCRP_qEL.js";import"./Truck-ByT8PX4M.js";import"./PersonGroup-VIqmb2OV.js";import"./Cog-DsTXtWb5.js";import"./TeddyBear-hW79S-S2.js";import"./MenuGrid-B3KPctc0.js";import"./Enter-B7qZag5n.js";import"./InboxFill-BAn487aw.js";import"./PadlockLockedFill-Bpq2gcD3.js";import"./Buildings2-iLtDDyRo.js";import"./Globe-CnEsP9Fx.js";import"./PersonCircle-hsf5HIre.js";import"./Bell-bWFM8Kft.js";import"./Bookmark-C-yemQKs.js";import"./ClockDashed-B7qjsId-.js";import"./Archive-BK62d9I_.js";import"./Trash-1ExTWg_2.js";import"./EyeClosed-DYLG4tja.js";import"./MenuHamburger-LWrM74HE.js";import"./SearchField-Dq16b7ar.js";import"./index-B7J_eA84.js";import"./MagnifyingGlass-SlzD67D9.js";import"./XMark-DRdfunCf.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./Badge-Bt5kdhhY.js";import"./useMenu-DUoC-ldr.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
