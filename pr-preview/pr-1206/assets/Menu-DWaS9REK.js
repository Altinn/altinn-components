import{j as e,M as s,C as i}from"./iframe-CdkbiINU.js";import{useMDXComponents as r}from"./index-D6-AVsu5.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BHbZzX_T.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BlHBNGLa.js";import"./useId-BBNwfwR-.js";import"./InformationSquare-lXhFqiHS.js";import"./Eye-CfgAd0P-.js";import"./Truck-PXZURU-z.js";import"./PersonGroup-Dn2Wct2V.js";import"./Cog-D2TdgDK8.js";import"./TeddyBear-C_Hc3Sug.js";import"./MenuGrid-CY0Q_UsS.js";import"./Enter-DES-VDJ8.js";import"./InboxFill-DVVOb2iZ.js";import"./PersonCircle-LFFErccD.js";import"./Buildings2-B6DX2ZbA.js";import"./Globe-fe3HaoO0.js";import"./Bell-rY58_Vrj.js";import"./Bookmark-DvWCxKLU.js";import"./ClockDashed-Da5zW20o.js";import"./Archive-5hJJ1NJt.js";import"./Trash-D4pY1Rc-.js";import"./EyeClosed-Dt2PSaKq.js";import"./MenuHamburger-CYCqXYse.js";import"./SearchField-D9zkHyRI.js";import"./index-ClUlC5r_.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./XMark-CXTea0I2.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Skeleton-DNrLKFK9.js";import"./Label-DOiiUdXJ.js";import"./tooltip-ClrKYCC2.js";import"./Input-CXgAq3E9.js";import"./Button-DbqBa2Ra.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./Checkmark-B8HStk1Z.js";import"./Heading-pV_B_Yzg.js";import"./ItemControls-2WNlOUKw.js";import"./ChevronRight-WcqCaCSB.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
