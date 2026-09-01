import{ag as r,a7 as e,r as s,C as i}from"./iframe-DMrRMxbq.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-CmPx5gL6.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-COVpyOlK.js";import"./InformationSquare-C88VQYSr.js";import"./Eye-CAHGcl5A.js";import"./MenuHamburger-LUIk6x4-.js";import"./MenuGrid-CxnVSjLH.js";import"./Buildings2-reMkWEs_.js";import"./PersonGroup-fDNYdPdO.js";import"./Bell-bAScnVre.js";import"./ClockDashed-BZpig836.js";import"./Truck-7IRwnCVO.js";import"./Cog-DPpSDvo0.js";import"./Enter-BqiFr20G.js";import"./InboxFill-6uq36H51.js";import"./PersonCircle-DyHpIQU5.js";import"./Globe-BfSA-wJy.js";import"./EyeClosed-CBxAFqTS.js";import"./Archive-BwBynVKj.js";import"./Trash-EXN3xZ3n.js";import"./Bookmark-jMqd69vz.js";import"./TeddyBear-C97YordA.js";import"./SearchField-nNatmuZA.js";import"./MagnifyingGlass-DofikZhZ.js";import"./FieldBase-BwVJ7Sfq.js";import"./Typography-z164oB1T.js";import"./useHighlightedText-qcaYlVq2.js";import"./Field-DxDkeKhB.js";import"./Label-CB0_8IHy.js";import"./Input-CZPP85wE.js";import"./useMenu-CNg8vInV.js";import"./MenuListItem-CATFKnlr.js";import"./MenuListDivider-CzVCr-XK.js";import"./MenuListHeading-B9JHXv6C.js";import"./MenuItem-DLpEa2I6.js";import"./ItemMedia-Dx1IKYEg.js";import"./Avatar-C6i6C6T9.js";import"./AvatarGroup-DVS-_6qx.js";import"./Checkmark-BUuDcLZs.js";import"./ItemLabel-DavwL6MJ.js";import"./Heading-BhmjWuIr.js";import"./ItemControls-DNnHu-Ez.js";import"./Badge-CzHyduDR.js";import"./Tooltip-1SJQbRAy.js";import"./ChevronRight-ngEBzgMu.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:p}),`
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
`})})]})}function te(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{te as default};
