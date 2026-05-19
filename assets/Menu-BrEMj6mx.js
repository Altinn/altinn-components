import{j as e,M as s,C as i}from"./iframe-CPVbSj3C.js";import{useMDXComponents as r}from"./index-C-bkg60x.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-Bp7lsZYp.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CBI79N46.js";import"./useId-CeU55pH0.js";import"./InformationSquare-y17ZYOyi.js";import"./Eye-ChvtAiWF.js";import"./Truck-DLyU9Gqq.js";import"./PersonGroup-DJ4S7LrB.js";import"./Cog-IJaZaMLR.js";import"./TeddyBear-0ey-TDkX.js";import"./MenuGrid-Be7605dr.js";import"./Enter-CVOd6v7z.js";import"./InboxFill-BcVdTZOM.js";import"./PersonCircle-D2e_Fk0r.js";import"./Buildings2-DTyd86gG.js";import"./Globe-B9YHqOf_.js";import"./Bell-CqEvBRjS.js";import"./Bookmark-DGWiCv9O.js";import"./ClockDashed-CXAa2KHW.js";import"./Archive-DoTzijFK.js";import"./Trash-CN9HTNng.js";import"./EyeClosed-Ck4VoVkj.js";import"./MenuHamburger-CAdTjq6-.js";import"./SearchField-B-nnAALe.js";import"./index-B-yq3MoC.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./XMark-DWjKCZtX.js";import"./FieldBase-COzHnWja.js";import"./Typography-CiUpHFvi.js";import"./useHighlightedText-cpJ8B6bV.js";import"./Skeleton-O-y9i0gG.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Icon-DFTXBWnL.js";import"./Checkmark-D2vzhSBC.js";import"./Heading-Bxz0tryo.js";import"./ItemControls-DA5Yy7AS.js";import"./ChevronRight-D8cN60Uo.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
