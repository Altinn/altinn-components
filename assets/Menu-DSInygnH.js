import{j as e,M as s,C as i}from"./iframe-CZMLD2fe.js";import{useMDXComponents as r}from"./index-BuswU1Mt.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-irHaKECz.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-D3K3BZed.js";import"./useId-Dmu9AgSD.js";import"./InformationSquare-BauCIT4L.js";import"./Eye-B_n82EES.js";import"./Truck-CyRaZItf.js";import"./PersonGroup-DCgNIRBx.js";import"./Cog-B6r2Lzik.js";import"./TeddyBear-CFuE5Bdj.js";import"./MenuGrid-GwGTD_sm.js";import"./Enter-B5HAdrS7.js";import"./InboxFill-dmJCO2GG.js";import"./PersonCircle-Cnz-oc73.js";import"./Buildings2-Cd8pIexL.js";import"./Globe-BgtTiwhv.js";import"./Bell-gRSHSOzF.js";import"./Bookmark-BvWd1gs8.js";import"./ClockDashed-RUw66Dcn.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./EyeClosed-CoulRU1w.js";import"./MenuHamburger-CM7Wkn6q.js";import"./SearchField-hPGSgF9W.js";import"./index-iGjPLQV7.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./XMark-BBRiAlI8.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
