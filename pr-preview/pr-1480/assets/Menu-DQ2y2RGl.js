var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as s,a6 as e,r as c,C as o}from"./iframe-M-0W2Kc9.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-DtVXlSZb.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-DpctCjls.js";import"./InformationSquare-DDYjH-iE.js";import"./Eye-mvdxRCiO.js";import"./MenuHamburger-C2Da0bEq.js";import"./MenuGrid-BfyJFOaJ.js";import"./Buildings2-YNhXlUod.js";import"./PersonGroup-BQl8N5MU.js";import"./Bell-DWIt3W7G.js";import"./ClockDashed-CE3rKYo4.js";import"./Truck-CAHNQCEf.js";import"./Cog-De_PprxQ.js";import"./Enter-DvPk9pty.js";import"./InboxFill-Chtb-S2w.js";import"./PersonCircle-CBGrcbP_.js";import"./Globe-BsQeD7rm.js";import"./EyeClosed-B6ePw3XW.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./Bookmark-Bjnly7uL.js";import"./TeddyBear-DVxK5Nio.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./useMenu-D1I6Xbj7.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
