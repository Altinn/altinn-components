import{j as e,M as s,C as i}from"./iframe-CbC-fLaY.js";import{useMDXComponents as r}from"./index-DeGm0__e.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-XgtYPAPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BgCIsMPj.js";import"./useId-C2JQsT24.js";import"./InformationSquare-CQq7uvJQ.js";import"./Eye-BQcT7gvw.js";import"./Truck-BgSSwdhE.js";import"./PersonGroup-Dt1XaldM.js";import"./Cog-BBrJiV5i.js";import"./TeddyBear-BggMGtyM.js";import"./MenuGrid-CBHgYnvP.js";import"./Enter-BnEF64HE.js";import"./InboxFill-BGQmVAC5.js";import"./PersonCircle-De3VEI5u.js";import"./Buildings2-BODn5oQY.js";import"./Globe-E90sEq1m.js";import"./Bell-CTzeWleD.js";import"./Bookmark-BnMrkDUU.js";import"./ClockDashed-B4aZfU4M.js";import"./Archive-DZm8Lj52.js";import"./Trash-oVpQevMD.js";import"./EyeClosed-elejBfJD.js";import"./MenuHamburger-CSe5Jiwx.js";import"./SearchField-yE8KzlZV.js";import"./index-Ds9VDGIC.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./XMark-DvUzU3_h.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./useHighlightedText-BssbQrxH.js";import"./Skeleton-D8kEQByH.js";import"./Label-DN-jQPwh.js";import"./tooltip-BtbQ4KG6.js";import"./Input-BNbo7Vjn.js";import"./Button-B0m1rUs2.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./Checkmark-8GuDUS8U.js";import"./Heading-Bl7p7Gle.js";import"./ItemControls-gQT1qCQ5.js";import"./ChevronRight-CThQJEOF.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
