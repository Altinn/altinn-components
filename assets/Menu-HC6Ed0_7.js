import{j as e,M as s,C as i}from"./iframe-DUgQHy5z.js";import{useMDXComponents as r}from"./index-CBbqP8KK.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-A0SQ4Fqy.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-D4bUtdbF.js";import"./useId-BEmmm-9F.js";import"./InformationSquare-C5uyE4ek.js";import"./Eye-BdTVDMAG.js";import"./Truck-Bn2-knO3.js";import"./PersonGroup-DxmPFG_9.js";import"./Cog-BsmYO-HR.js";import"./TeddyBear-BtZph6O9.js";import"./MenuGrid-BFXheAVa.js";import"./Enter-B9HoLh_R.js";import"./InboxFill-DFOQHMM1.js";import"./PadlockLockedFill-TYz325xT.js";import"./Buildings2-DA0PLkI3.js";import"./Globe-lsKPohrg.js";import"./PersonCircle-zi-Qrj_q.js";import"./Bell-BiViY5Iy.js";import"./Bookmark-BAKdMXQt.js";import"./ClockDashed-DdwCFhaK.js";import"./Archive-BPO8NoVo.js";import"./Trash-palqR5xc.js";import"./EyeClosed-D_dx6fYu.js";import"./MenuHamburger-BFRrh2Ww.js";import"./SearchField-DrvAfAqD.js";import"./index-CHKdKrFD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./XMark-CIC6hSAY.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DKqXZTHj.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
