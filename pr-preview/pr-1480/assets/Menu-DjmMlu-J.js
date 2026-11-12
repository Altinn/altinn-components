var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ah as s,a7 as e,r as c,C as o}from"./iframe-xlSYDLmX.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-OMYNbTiY.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-Ys9tITkh.js";import"./InformationSquare-DlLj2oH8.js";import"./Eye-B1O1_9Cv.js";import"./MenuHamburger-Di3wOkSc.js";import"./MenuGrid-C8x75imp.js";import"./Buildings2-B9C4Wpww.js";import"./PersonGroup-CXl-XOJB.js";import"./Bell-1X4Q-x_J.js";import"./ClockDashed-tCUkFT44.js";import"./Truck-DI5T97H9.js";import"./Cog-D3QCdXnz.js";import"./Enter-BB3yJ8-F.js";import"./InboxFill-D1izvkko.js";import"./PersonCircle-DbC33sJW.js";import"./Globe-5mzhGoRG.js";import"./EyeClosed-CeHnqaI7.js";import"./Archive-DNZp7WUs.js";import"./Trash-Dtf6X4Tk.js";import"./Bookmark-CwN43r-K.js";import"./TeddyBear-DqxIYJLl.js";import"./SearchField-Cm1bebf2.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ItemLabel-eTSb-Z0L.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronRight-WLOtysjI.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./useMenu-C7Dhr05-.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(o,{of:a}),`
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
`})})]})}i(r,"_createMdxContent");function re(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}i(re,"MDXContent");export{re as default};
