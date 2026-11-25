var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ag as r,a6 as e,r as c,C as o}from"./iframe-C0_zUbkp.js";import{Default as d,CreatingHiearchy as p,NestingItems as a}from"./Menu.stories-ByBlTAsw.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-C2QTbLXa.js";import"./InformationSquare-CG3sxIst.js";import"./Eye-D-l7J9cH.js";import"./MenuHamburger-I_0J1-VZ.js";import"./MenuGrid-D5USsJgg.js";import"./Buildings2-DwPA8eJN.js";import"./PersonGroup-nhG0hY5y.js";import"./Bell-D_-BbDHJ.js";import"./ClockDashed-DQd1Aj8d.js";import"./Truck-f-2d1UiQ.js";import"./Cog-DhHULR2B.js";import"./Enter-BA5cepcd.js";import"./InboxFill-aFAE7ktP.js";import"./Globe-CaMonKWF.js";import"./EyeClosed-DFH90OVk.js";import"./Archive-C-7hLfu8.js";import"./Trash-1-5ygZCI.js";import"./Bookmark-hn-9YXF8.js";import"./TeddyBear-DScLW8pn.js";import"./SearchField-DNtOxHfE.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemMedia-Dqx0ptul.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./ItemLabel-9fWKgY8j.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ChevronRight-C6nH0agV.js";import"./FieldBase-BHBKFAe2.js";import"./Typography-CXAuaEKv.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./useMenu-DkMnEsls.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:p}),`
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
`})})]})}i(s,"_createMdxContent");function oe(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}i(oe,"MDXContent");export{oe as default};
