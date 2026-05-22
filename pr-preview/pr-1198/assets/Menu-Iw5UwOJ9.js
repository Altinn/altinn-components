import{j as e,M as s,C as i}from"./iframe-DXwGEFZf.js";import{useMDXComponents as r}from"./index-C9t90TPb.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C8T-k5Kd.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DhRJlu28.js";import"./useId-Df52yuGg.js";import"./InformationSquare-CathhXXw.js";import"./Eye-DCromwe3.js";import"./Truck-iIl5ekR1.js";import"./PersonGroup-DeeCB-CR.js";import"./Cog-CbmQenZG.js";import"./TeddyBear-C6xbGXLZ.js";import"./MenuGrid-C5oGKC5O.js";import"./Enter-ChEXP26q.js";import"./InboxFill-DWpspjSw.js";import"./PersonCircle-bHcvGsix.js";import"./Buildings2-QgXuVD1-.js";import"./Globe-omLHimzm.js";import"./Bell-2m2JrCjb.js";import"./Bookmark-CfJzu2yo.js";import"./ClockDashed-DPDdHUks.js";import"./Archive-BSZ1HBnn.js";import"./Trash-Bhi8vMFl.js";import"./EyeClosed-COXp-eg4.js";import"./MenuHamburger-DYibhKnt.js";import"./SearchField-BCjbtpiQ.js";import"./index-DpQTH4Pc.js";import"./MagnifyingGlass-CllD3bzP.js";import"./XMark-BspkucHC.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./useHighlightedText-NV3gg9HW.js";import"./Skeleton-CD7VUCi3.js";import"./Label-ChoE5xRO.js";import"./tooltip-OQNLf2nv.js";import"./Input-CjRvyA41.js";import"./Button-BcOfKjgE.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./Checkmark-DpC6lRZL.js";import"./Heading-D1SypAUR.js";import"./ItemControls-DXxKFox6.js";import"./ChevronRight-B7NrC3Rp.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
