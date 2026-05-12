import{j as e,M as s,C as i}from"./iframe-BUZW8AMM.js";import{useMDXComponents as r}from"./index-DBZzDII2.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BPTqjKPu.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DiBOowVE.js";import"./useId-CoMggIDA.js";import"./InformationSquare-D87nn8LZ.js";import"./Eye-DQI7Yw7a.js";import"./Truck-B_Zs42Ce.js";import"./PersonGroup-CYOc_PNc.js";import"./Cog-DfYxJCgk.js";import"./TeddyBear-BGIxJfkZ.js";import"./MenuGrid-gCFTtwbJ.js";import"./Enter-QOjqzb8v.js";import"./InboxFill-CTf7tvg-.js";import"./PersonCircle-Dp7Qthqx.js";import"./Buildings2-B67cXEvc.js";import"./Globe-ghm5oPz9.js";import"./Bell-CInWcKsn.js";import"./Bookmark-BKPiN4UC.js";import"./ClockDashed-D1Qaa07F.js";import"./Archive-BF40uVhW.js";import"./Trash-CBYCI39t.js";import"./EyeClosed-LipupXrJ.js";import"./MenuHamburger-BwbXv_3L.js";import"./SearchField-DOgIBcSC.js";import"./index-DDG5Qp_D.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./XMark-N_5CtkVA.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useHighlightedText-Df1F8nSN.js";import"./Skeleton-2WT-jYKy.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./Checkmark-B1cvuYYq.js";import"./Heading-BBJzhiZm.js";import"./ItemControls-CILw3fe6.js";import"./ChevronRight-Be2F8dIE.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function le(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{le as default};
