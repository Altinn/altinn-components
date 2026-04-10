import{j as e,M as s,C as i}from"./iframe-DpqvNfuX.js";import{useMDXComponents as r}from"./index-DMMzqXxg.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-DyNiuEqB.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C-wMqTaU.js";import"./useId-BXmkKvJa.js";import"./InformationSquare-x_nyg8Lo.js";import"./Eye-ztLu6AXR.js";import"./Truck-INnMlweG.js";import"./PersonGroup-BvBsNDFx.js";import"./Cog-CAv7R9JI.js";import"./TeddyBear-Cgcmqtuv.js";import"./MenuGrid-ElyM8JPy.js";import"./Enter-eZQ7yeb1.js";import"./InboxFill-CoyW8k8l.js";import"./PadlockLockedFill-DpOgEbfk.js";import"./Buildings2-Bo101WQb.js";import"./Globe-BeMaPubG.js";import"./PersonCircle-DmSvr1dP.js";import"./Bell-M-i7eh-W.js";import"./Bookmark-BVfXtb8z.js";import"./ClockDashed-CuVHX12c.js";import"./Archive-DCRHCjAj.js";import"./Trash-BiqPoHTU.js";import"./EyeClosed-Dtoxl22j.js";import"./MenuHamburger-CdFk3dXA.js";import"./SearchField-B4PsSxTf.js";import"./index-Ct2h27FF.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./XMark-D5GqdRxj.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./useHighlightedText-CsoqNVCh.js";import"./Skeleton-CUXlhXSK.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Icon-DaddCVMS.js";import"./Checkmark-B0EPfKD4.js";import"./Heading-CsYSWfhV.js";import"./ChevronRight-l4sUB0S3.js";import"./Badge-DH_aKElc.js";import"./useMenu-CL8JxMzd.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
