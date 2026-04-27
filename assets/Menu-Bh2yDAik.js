import{j as e,M as s,C as i}from"./iframe-BJEbXdzo.js";import{useMDXComponents as r}from"./index-D02edywB.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CJ_w6sE1.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-Do9FRucA.js";import"./useId-DgrNWXh_.js";import"./InformationSquare-e9K9-Rpn.js";import"./Eye-Bd51zfnO.js";import"./Truck-B3ZvKMBp.js";import"./PersonGroup-C46bwK6o.js";import"./Cog-CnFgCNw5.js";import"./TeddyBear-aaLcFD_D.js";import"./MenuGrid-PacNmwSn.js";import"./Enter-CVX0CGOP.js";import"./InboxFill-Mazck519.js";import"./PadlockLockedFill-D7xVoENA.js";import"./Buildings2-DfLVYGi2.js";import"./Globe-BlFk6HBa.js";import"./PersonCircle-Cul-mrQE.js";import"./Bell-BQk0QcXo.js";import"./Bookmark-DwjqcEwv.js";import"./ClockDashed-DOP-lu-g.js";import"./Archive-dgyTBxhE.js";import"./Trash-C9Nxl2VC.js";import"./EyeClosed-DpAbto1G.js";import"./MenuHamburger-K1BgVp7W.js";import"./SearchField-C43D0Bvg.js";import"./index-ChGHkNNv.js";import"./MagnifyingGlass-Dp61EhHj.js";import"./XMark-sTHnj54s.js";import"./FieldBase-s2kWEUm7.js";import"./Typography-D85R78i7.js";import"./useHighlightedText-Chj_Mw3b.js";import"./Skeleton-DWcIZ1wH.js";import"./Label-DQQXrne0.js";import"./index-THETCITG.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";import"./Input-BI0TJMod.js";import"./input-CnbiDkgl.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./MenuListItem-U3U1VVBg.js";import"./MenuListHeading-BxpAf7GB.js";import"./MenuItem-CIe0tXLI.js";import"./ItemMedia-CiNZWpX-.js";import"./Avatar-CcIuhVy2.js";import"./AvatarGroup-Cpo75nCB.js";import"./Icon-msEkDcFf.js";import"./Checkmark-DLPFtMmB.js";import"./Heading-1LBL0JVO.js";import"./ItemControls-CAq51EMf.js";import"./ChevronRight-CoSPx3Kv.js";import"./Badge-CNae3IUV.js";import"./Tooltip-Ct0E88k_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-9_PPaP-8.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
