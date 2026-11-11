var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as s,a6 as e,r as c,C as o}from"./iframe-CXqMdlCC.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-ByQyeBrY.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-BBOTeAje.js";import"./InformationSquare-ZHKJrQSE.js";import"./Eye-jabUUKsX.js";import"./MenuHamburger-BUucDG4Z.js";import"./MenuGrid-B1wVZlDZ.js";import"./Buildings2-BerC_M3Z.js";import"./PersonGroup-CawvElQc.js";import"./Bell-Bbe8MVOR.js";import"./ClockDashed-DGlKC4Mz.js";import"./Truck-Ce0VNFHn.js";import"./Cog-B_YHiBUR.js";import"./Enter-DmDgRP0Q.js";import"./InboxFill-6IEAeIKt.js";import"./PersonCircle-BhmCdgxO.js";import"./Globe-uwU59LH4.js";import"./EyeClosed-BCwoFblu.js";import"./Archive-DLDgEUbl.js";import"./Trash-BZMVy5so.js";import"./Bookmark-Dvtt7kIU.js";import"./TeddyBear-Vvj4gypu.js";import"./SearchField-BQG9p1mb.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./ItemLabel-DvzzIYMd.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronRight-DltnHqdC.js";import"./FieldBase-0KjilGfX.js";import"./Typography-B65oo-6B.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./useMenu-CqtkU6S6.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
