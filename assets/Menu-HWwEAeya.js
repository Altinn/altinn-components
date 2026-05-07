import{j as e,M as s,C as i}from"./iframe-Nkxls2w0.js";import{useMDXComponents as r}from"./index-DEhnau5t.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-D5gIPQ3a.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CSwfMlvx.js";import"./useId-C8J5yFeN.js";import"./InformationSquare-zR5D--CT.js";import"./Eye-CfWY8lE0.js";import"./Truck-BptFkPfh.js";import"./PersonGroup-CSuwUDUP.js";import"./Cog-BAnGClkZ.js";import"./TeddyBear-QgZ1p7zz.js";import"./MenuGrid-CQppVPlk.js";import"./Enter-B5kYaJFx.js";import"./InboxFill-o2E1Tsdv.js";import"./PersonCircle-Cn0cICkm.js";import"./Buildings2-Cwc84w3B.js";import"./Globe-0ZUE1Hkm.js";import"./Bell-CEK3Kam3.js";import"./Bookmark-Ae2OhZ5O.js";import"./ClockDashed-BquqWz1S.js";import"./Archive-BdfF2mlS.js";import"./Trash-3ZsUZg5A.js";import"./EyeClosed-CFikRG0u.js";import"./MenuHamburger-RVcJ4Btq.js";import"./SearchField-Bb3Ffka2.js";import"./index-M4TkGQLb.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./XMark-D-ALqV0n.js";import"./FieldBase-Drb41XPf.js";import"./Typography-CZZfCvh6.js";import"./useHighlightedText-BtUjP4Uj.js";import"./Skeleton-DNS4c1Rp.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./Icon-qDX4JAC4.js";import"./Checkmark-DHusaxnp.js";import"./Heading-AZ4WQ_-Y.js";import"./ItemControls-BH6jrH_o.js";import"./ChevronRight-Bcpq3qt2.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-WCeLZ4vF.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ue(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ue as default};
