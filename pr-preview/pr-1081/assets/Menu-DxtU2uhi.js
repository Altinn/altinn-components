import{j as e,M as s,C as i}from"./iframe-CFpZEpOT.js";import{useMDXComponents as r}from"./index-Dck6vUtY.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-hR7PpyBj.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DlUMDrUD.js";import"./useId-Bpa1--zZ.js";import"./InformationSquare-DvM0m3_a.js";import"./Eye-D5FY-E5s.js";import"./Truck-BxvOzO5Y.js";import"./PersonGroup-DiEbMbP8.js";import"./Cog-8MZN71Ps.js";import"./TeddyBear-qsGV_EEw.js";import"./MenuGrid-ZNnDBKbO.js";import"./Enter-Dqoovvr7.js";import"./InboxFill-DVh7rOkz.js";import"./PadlockLockedFill-D7dAxHFy.js";import"./Buildings2-CHv5owWW.js";import"./Globe-DOomxry_.js";import"./PersonCircle-5AXd7Vkz.js";import"./Bell-adRUhSGF.js";import"./Bookmark-DMRCbUCL.js";import"./ClockDashed-B-vg0pWf.js";import"./Archive-CGP_n4PV.js";import"./Trash-B2QKAP19.js";import"./EyeClosed-Bs3npMwY.js";import"./MenuHamburger-DtdWoRM-.js";import"./SearchField-7ltHAmFU.js";import"./index-CMCH-iYZ.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./XMark-DsxdrTa7.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Skeleton-BxeTCVQ2.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Icon-CcpuJg5J.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Badge-CiO-ESqG.js";import"./useMenu-BHNp1hvr.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
