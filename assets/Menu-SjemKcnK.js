import{j as e,M as s,C as i}from"./iframe-BM6RZuQM.js";import{useMDXComponents as r}from"./index-DP3NQFcB.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-Br2lSZQb.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-x0PjbURb.js";import"./useId-BYt_OYJh.js";import"./InformationSquare-sR-zXHjU.js";import"./Eye-D4DJj3ga.js";import"./Truck-ClEJLcx4.js";import"./PersonGroup-CQhE5LWM.js";import"./Cog-ZcPMYDbZ.js";import"./TeddyBear-DBHlmWOt.js";import"./MenuGrid-B2fy_4CU.js";import"./Enter-CBXCMPPv.js";import"./InboxFill-CoU3DNM4.js";import"./PersonCircle-DN7g7QG1.js";import"./Buildings2-DPJaWJUP.js";import"./Globe-BWe6SIwi.js";import"./Bell-Bdcl3ieI.js";import"./Bookmark-BjY-XLx0.js";import"./ClockDashed-sGix1zSO.js";import"./Archive-DxmrpUmh.js";import"./Trash-CeRRfZXt.js";import"./EyeClosed-BRv5jtAC.js";import"./MenuHamburger-BcfCqF_o.js";import"./SearchField-BgkLBjBi.js";import"./index-DAnedVDn.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./XMark-EbOSJv8a.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Skeleton-DWzjK3h6.js";import"./Label-C7IFl0uM.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";import"./Button-DhtPu9_Y.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function pe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{pe as default};
