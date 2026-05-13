import{j as e,M as s,C as i}from"./iframe-aW2Ivac6.js";import{useMDXComponents as r}from"./index-BbO8yAbJ.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-DiILlNRW.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-1Mg-mDDL.js";import"./useId-DH4aqM3h.js";import"./InformationSquare-BtbGMdWt.js";import"./Eye-BTh2sUw7.js";import"./Truck-VeW_W2zQ.js";import"./PersonGroup-660i-dCg.js";import"./Cog-C1GIr6C9.js";import"./TeddyBear-C-hFfJ5r.js";import"./MenuGrid-rA8vibJs.js";import"./Enter-BUtIy1kW.js";import"./InboxFill-qs4ohqzK.js";import"./PersonCircle-DPRH_llS.js";import"./Buildings2-D1hlYQo9.js";import"./Globe-B2KtByVs.js";import"./Bell-DmB39Dyn.js";import"./Bookmark-CFgUuPha.js";import"./ClockDashed-BPscwdUq.js";import"./Archive-aCPoIJqz.js";import"./Trash-C236s4up.js";import"./EyeClosed-D5L_2utW.js";import"./MenuHamburger-5ynA6oKg.js";import"./SearchField-uUwTRA3v.js";import"./index-DWa6FdCb.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./XMark-DUdkEKb2.js";import"./FieldBase-CdSvcvFX.js";import"./Typography-JHHWywcS.js";import"./useHighlightedText-ZQImmj57.js";import"./Skeleton-it7stJ0Q.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./Icon-CD7MnEv7.js";import"./Checkmark-BjMWNebU.js";import"./Heading-D9dg30ti.js";import"./ItemControls-BfAmDR5q.js";import"./ChevronRight-Bcq_DMzy.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
