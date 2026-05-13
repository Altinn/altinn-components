import{j as e,M as s,C as i}from"./iframe-DkQPO9ro.js";import{useMDXComponents as r}from"./index-DdR79Dkh.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C2ZlctWn.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C9Fsh0Rf.js";import"./useId-CwF4wxTL.js";import"./InformationSquare-DS3QJ89x.js";import"./Eye-Dd_FvVr9.js";import"./Truck-BYeocem5.js";import"./PersonGroup-BIudXK7m.js";import"./Cog-G_cKxn-5.js";import"./TeddyBear-R0sOz7tP.js";import"./MenuGrid-DLVVZ2an.js";import"./Enter-YjTQHWom.js";import"./InboxFill-CAHNcSmn.js";import"./PersonCircle-EOFyGUwS.js";import"./Buildings2-TPl-W-Aw.js";import"./Globe-kuwFCIDb.js";import"./Bell-CqR_GCXB.js";import"./Bookmark-CKRc-mIU.js";import"./ClockDashed-0qd6mo8-.js";import"./Archive-cVVZTQ-I.js";import"./Trash-C8jSETfh.js";import"./EyeClosed-C-z0R-HC.js";import"./MenuHamburger-CDbgLMEh.js";import"./SearchField-BFSdJUV0.js";import"./index-BrTdOUlk.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./XMark-5G2rqhrX.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
