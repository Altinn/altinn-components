import{j as e,M as s,C as i}from"./iframe-DDirkHus.js";import{useMDXComponents as r}from"./index-CXZOXrcs.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CPvVH6R1.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CuA2Ouyz.js";import"./useId-CVUrh2ea.js";import"./InformationSquare-D3Ojtweu.js";import"./Eye-BKi6p1Ir.js";import"./Truck-Dsp3fUqd.js";import"./PersonGroup-B_IW0HEV.js";import"./Cog-BxBNXN1p.js";import"./TeddyBear-BlwyndsT.js";import"./MenuGrid-CJxX1hhk.js";import"./Enter-txooyGSq.js";import"./InboxFill-jQHA7TdX.js";import"./PadlockLockedFill-fRPh4t0D.js";import"./Buildings2-CD5n5Krw.js";import"./Globe-qiPXxajI.js";import"./PersonCircle-D3LMTidX.js";import"./Bell-BlVOWxtn.js";import"./Bookmark-DCuIhvEj.js";import"./ClockDashed-5U9eCaWp.js";import"./Archive-CFZVdoBU.js";import"./Trash-D38buOH3.js";import"./EyeClosed-BhD9KlXv.js";import"./MenuHamburger-lKI_Kf6L.js";import"./SearchField-CByF2bQh.js";import"./index-B2YDfdyU.js";import"./MagnifyingGlass-BGbR81wS.js";import"./XMark-DldqIUES.js";import"./FieldBase-BNjKJDB0.js";import"./Typography-Do8CAd45.js";import"./useHighlightedText-CWfqHJQe.js";import"./Skeleton-0VOrezcL.js";import"./Label-9QWpQ8Bw.js";import"./index-F2gU6D0V.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./MenuListItem-DoS1mSfo.js";import"./MenuListHeading-7XRfXaU1.js";import"./MenuItem-BsaYehiV.js";import"./ItemMedia-ZkVlWcbo.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Icon-Cv1R39O2.js";import"./Checkmark-MQqJd3cN.js";import"./Heading-s9P5sHvn.js";import"./ItemControls-CqR56LSR.js";import"./ChevronRight-BUOZMhwy.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DLxXpcV8.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
