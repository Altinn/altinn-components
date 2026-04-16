import{j as e,M as s,C as i}from"./iframe-qDHSBZ_X.js";import{useMDXComponents as r}from"./index-Bq_LsmmS.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-COpja_4A.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C3GpGrWg.js";import"./useId-DLE_nI5l.js";import"./InformationSquare-ClYcp41K.js";import"./Eye-krQJbsJx.js";import"./Truck-CJt2ehYy.js";import"./PersonGroup-B8nqOY3U.js";import"./Cog-DvJZgeW6.js";import"./TeddyBear-Dst3-pk-.js";import"./MenuGrid-3DWra2SS.js";import"./Enter-C93e8y6K.js";import"./InboxFill-B6eVCR7Z.js";import"./PadlockLockedFill-BddiA20c.js";import"./Buildings2-C_FVhRBN.js";import"./Globe--kIPlUca.js";import"./PersonCircle-C3nIC3U_.js";import"./Bell-BNe-9C1V.js";import"./Bookmark-DqrqTlox.js";import"./ClockDashed-CCGqbt4n.js";import"./Archive-C71dF3LI.js";import"./Trash-CJ5RcE6N.js";import"./EyeClosed-thqkC0sc.js";import"./MenuHamburger-DzXQ83g6.js";import"./SearchField-owOVnt34.js";import"./index-DTh2bawh.js";import"./MagnifyingGlass-52kli1F6.js";import"./XMark-D8iHP3Cp.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./useHighlightedText-D75SWcvd.js";import"./Skeleton-CJ3n2_6V.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./ItemMedia-p3tZByS2.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./Checkmark-BOxDKZpX.js";import"./Heading-D2BacHeJ.js";import"./ItemControls-Bd_Ry2Op.js";import"./ChevronRight-Dusr5JiS.js";import"./Badge-CmtcZ1do.js";import"./useMenu-5iviLK-9.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
