import{j as e,M as s,C as i}from"./iframe-B1AqnzaQ.js";import{useMDXComponents as r}from"./index-DTlYiLDq.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-TyT2ZTnG.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BC4CQte1.js";import"./useId-D3sFZbtB.js";import"./InformationSquare-DK3EJIq8.js";import"./Eye-oWBsEYVn.js";import"./Truck-6ocFv1wz.js";import"./PersonGroup-DevNktmG.js";import"./Cog-yauKi9_t.js";import"./TeddyBear-DBnZAiGO.js";import"./MenuGrid-tIpDrGJL.js";import"./Enter-B5mipRj9.js";import"./InboxFill-88oeaOtY.js";import"./PadlockLockedFill-wyntw034.js";import"./Buildings2-Dn31Fin1.js";import"./Globe-Ba6M6rzW.js";import"./PersonCircle-BjQ8-HdB.js";import"./Bell-BhIfx4Q_.js";import"./Bookmark-PCr6gbaY.js";import"./ClockDashed-CC6jchBR.js";import"./Archive-BQ-4sTsA.js";import"./Trash-DvhW7kU1.js";import"./EyeClosed-DvtfuPz_.js";import"./MenuHamburger-lneezgpH.js";import"./SearchField-BEy1JMqM.js";import"./index-Ddi2Dmvi.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./XMark-COJVLPGF.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useHighlightedText-D6JE0bc4.js";import"./Skeleton-6Posg2tf.js";import"./Label-CufZoml2.js";import"./index-DvbpjXY1.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./MenuListItem-D8LYIepd.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Icon-68Gi_xA8.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./ChevronRight-BOPTtlba.js";import"./Badge-DUhzLQsC.js";import"./useMenu-5Lc1jfY6.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
