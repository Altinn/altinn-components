import{j as e,M as s,C as i}from"./iframe-CEV_bE_y.js";import{useMDXComponents as r}from"./index-DxVmWYuQ.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CRZUvex1.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CeF6R1tA.js";import"./useId-BHfJgDBc.js";import"./InformationSquare-C-romZo4.js";import"./Eye-CKo_iGje.js";import"./Truck-BzCeoAPs.js";import"./PersonGroup-DHRlSOvS.js";import"./Cog-7i8Rl4k0.js";import"./TeddyBear-CannDpUO.js";import"./MenuGrid-D-AQupNN.js";import"./Enter-C1WxztuE.js";import"./InboxFill-DTZLIyGz.js";import"./PadlockLockedFill-Dg6xF2gV.js";import"./Buildings2-DLWHFsKX.js";import"./Globe-BPeGlch2.js";import"./PersonCircle-DkfM7_Ed.js";import"./Bell-BVqqd58n.js";import"./Bookmark-CFo8DrTV.js";import"./ClockDashed-DSofIfrb.js";import"./Archive-DWBVULf9.js";import"./Trash-DL6cPj-R.js";import"./EyeClosed-DKasryyK.js";import"./MenuHamburger-DBcPb8fU.js";import"./SearchField-C9XAkfHX.js";import"./index-CGpVDQnA.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./XMark-ByuttVGc.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./ItemMedia-DIGN_0r9.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./Checkmark-D-WBqViW.js";import"./Heading-CjHEKkoD.js";import"./ItemControls-Dsxd0fj6.js";import"./ChevronRight-Dck0Zh1j.js";import"./Badge-BVMw9Rw0.js";import"./useMenu-EIG5MfCS.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ae as default};
