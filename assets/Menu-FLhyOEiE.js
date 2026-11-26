var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as s,a6 as e,r as c,C as o}from"./iframe-DKOj4Qmf.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-ZL8qeEfh.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-PIdYsJwZ.js";import"./InformationSquare-CC_FvbA-.js";import"./Eye-B9QeuPZg.js";import"./MenuHamburger-biRJv-in.js";import"./MenuGrid-DtqF4QVd.js";import"./Buildings2-wb5ZIU2b.js";import"./PersonGroup-Cqh1ongJ.js";import"./Bell-D-w-Z2hb.js";import"./ClockDashed-J0wFRlbL.js";import"./Truck-BN2HemW5.js";import"./Cog-BZYgksBg.js";import"./Enter-h7bFRpOG.js";import"./InboxFill-DlN-FcL8.js";import"./PersonCircle-B-YmhkaA.js";import"./Globe-CyCJXh5C.js";import"./EyeClosed-CeTdv3Go.js";import"./Archive-BdzDAVfI.js";import"./Trash-BH2M-vSd.js";import"./Bookmark-DtUUxBWC.js";import"./TeddyBear-BNsEXUif.js";import"./SearchField-TPXYOreq.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ItemLabel-CcblWyxm.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Typography-eLs7BNQP.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
