import{ag as r,a7 as e,r as s,C as i}from"./iframe-2h8IP8d3.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-BNc4dxBf.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CxHIuIvc.js";import"./InformationSquare-DAAIm6NS.js";import"./Eye-CIUoiCOO.js";import"./MenuHamburger-t7pO2iZ9.js";import"./MenuGrid-Cp-_AIhY.js";import"./Buildings2-BG0DPNVQ.js";import"./PersonGroup-D7fRckpN.js";import"./Bell-Bthb0c9l.js";import"./ClockDashed-Cv4GmxbJ.js";import"./Truck-D-7H5Bck.js";import"./Cog-B8qGeiMV.js";import"./Enter-DM5C-XCw.js";import"./InboxFill-CIWkkWbP.js";import"./PersonCircle-j2njej4H.js";import"./Globe-BK_-3aK-.js";import"./EyeClosed-DNoBOvJF.js";import"./Archive-CTNGH1CU.js";import"./Trash-DgElRFQM.js";import"./Bookmark-CqFiT2_q.js";import"./TeddyBear-Ce_Xeyq8.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useHighlightedText-CelzCUqF.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ie(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ie as default};
