import{j as e,M as s,C as i}from"./iframe-BNDruhPA.js";import{useMDXComponents as r}from"./index-DiVlizmO.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BPPC1Pec.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CE94lwKo.js";import"./useId-28rL4Hsl.js";import"./InformationSquare-BrTKrkbD.js";import"./Eye-BZ0msvGF.js";import"./Truck-CuC5-IeU.js";import"./PersonGroup-D3LFwZvt.js";import"./Cog-BlQbBkZk.js";import"./TeddyBear-BalDShI4.js";import"./MenuGrid-BXQJX2XF.js";import"./Enter-B5ZtRGdD.js";import"./InboxFill-fA1MI7fW.js";import"./PadlockLockedFill-fbKrvijm.js";import"./Buildings2-BreMs8ue.js";import"./Globe-puhqCle3.js";import"./PersonCircle-DVq9OI9o.js";import"./Bell-Dx4YFKBq.js";import"./Bookmark-DzaXZGJ9.js";import"./ClockDashed-DgKNOZHi.js";import"./Archive-2uQCDMcb.js";import"./Trash-dW9GgNZJ.js";import"./EyeClosed-DSEFEc4_.js";import"./MenuHamburger-DxE3fxe3.js";import"./SearchField-BS2BtTJs.js";import"./index-JM42q3xD.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./XMark-vbUnhqfT.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useHighlightedText-Bss46XCz.js";import"./Skeleton-3vFplc_z.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BrVLonhI.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function le(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{le as default};
