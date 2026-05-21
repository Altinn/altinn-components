import{j as e,M as s,C as i}from"./iframe-BDpWuaMs.js";import{useMDXComponents as r}from"./index-bvgxtA7N.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-B24jA-1v.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-Dm-BZpbK.js";import"./useId-BKmV9YxM.js";import"./InformationSquare-CS8D_BUZ.js";import"./Eye-CswPk-T8.js";import"./Truck-BzWEPcK3.js";import"./PersonGroup-mtgAoMfC.js";import"./Cog-B_nfHba5.js";import"./TeddyBear-UzA7WSmT.js";import"./MenuGrid--Q28e-Ic.js";import"./Enter-feRUQkuK.js";import"./InboxFill-B713teYG.js";import"./PersonCircle-CyxkM5ZM.js";import"./Buildings2-Dvc17tW1.js";import"./Globe-Dvhx0NzZ.js";import"./Bell-BbI9Ivyq.js";import"./Bookmark-Dead0XTp.js";import"./ClockDashed-DDHzcO0b.js";import"./Archive-DFGbX-XR.js";import"./Trash-CUnIoKK5.js";import"./EyeClosed-Bu97Jm2t.js";import"./MenuHamburger-B-lY5jCd.js";import"./SearchField-D16JUOzv.js";import"./index-DVPUayQ0.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./XMark-Cx5Omj8e.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useHighlightedText-B13W4IFy.js";import"./Skeleton-DC_TZb2p.js";import"./Label-7jR2lGh9.js";import"./tooltip-DLcd2lCg.js";import"./Input-BoCHA0_0.js";import"./Button-m_FXpHGO.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
