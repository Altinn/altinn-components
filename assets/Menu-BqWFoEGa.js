import{j as e,M as s,C as i}from"./iframe-DxKlu2kD.js";import{useMDXComponents as r}from"./index-xnwFrkNa.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-DLmr3Vt3.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BykLFP04.js";import"./useId-_YfdAmsW.js";import"./InformationSquare-D9H1eLzz.js";import"./Eye-xoGFvx_M.js";import"./Truck-Dr2LLSPS.js";import"./PersonGroup-DWKY06Lq.js";import"./Cog-Cx2BvUXf.js";import"./TeddyBear-CYrA0JBO.js";import"./MenuGrid-foGtWjAB.js";import"./Enter-AGjjGuPu.js";import"./InboxFill-DNGI5Ip5.js";import"./PadlockLockedFill-ClPKZDTy.js";import"./Buildings2-DDbBdJ6H.js";import"./Globe-eyFWzdKT.js";import"./PersonCircle-BsqwchV5.js";import"./Bell-8LWWtQSU.js";import"./Bookmark-Bwp4zv2C.js";import"./ClockDashed-D0rwVTqN.js";import"./Archive-DOcjXifM.js";import"./Trash-BduIn3aS.js";import"./EyeClosed-DdQAv9pG.js";import"./MenuHamburger-W1FDwBr8.js";import"./SearchField-yItf8ktv.js";import"./index-BWCSYHeO.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./XMark-C1fx_pyo.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./useHighlightedText-DHBtHLKn.js";import"./Skeleton-niSIm0IT.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Icon-CrZKj0Yv.js";import"./Checkmark-C9NR0hmL.js";import"./Heading-m7XVygop.js";import"./ChevronRight-DCeYx28-.js";import"./Badge-4TJDD2P9.js";import"./useMenu-DwMeQcTX.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
