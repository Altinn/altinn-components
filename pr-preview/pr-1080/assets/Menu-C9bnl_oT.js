import{j as e,M as s,C as i}from"./iframe-CRyMHjBa.js";import{useMDXComponents as r}from"./index-D4sgrM0U.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-3Y08Z2Ao.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C4p5z3e9.js";import"./useId-Gvikg1Q9.js";import"./InformationSquare-BIUK32sG.js";import"./Eye-fG0hzg9_.js";import"./Truck-h3m6I2Go.js";import"./PersonGroup-DF2CA-bY.js";import"./Cog-C_d_p-GA.js";import"./TeddyBear-wFY6Cn4c.js";import"./MenuGrid-CKTBqn5C.js";import"./Enter-NlahA1dS.js";import"./InboxFill-CfQPaBE-.js";import"./PadlockLockedFill-CAhpGFrP.js";import"./Buildings2-D7GR9rXY.js";import"./Globe-BT2C-xlC.js";import"./PersonCircle-DpRnLJ5U.js";import"./Bell-1TIbgpmB.js";import"./Bookmark-BZtiRB5z.js";import"./ClockDashed-CfQvL8vj.js";import"./Archive-DkDv7ZML.js";import"./Trash-DL1Wx2eb.js";import"./EyeClosed-DiqIRm6y.js";import"./MenuHamburger-DmjW5Kyi.js";import"./SearchField-DHI_G06y.js";import"./index-DHHnxdIx.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./XMark-Bzo2iZ4y.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./useMenu-lx2RC1HO.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
