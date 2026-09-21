import{ag as r,a7 as e,r as s,C as i}from"./iframe-DJfn40-D.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-uACy8n3u.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-OMBVgScI.js";import"./InformationSquare-TILYX_Pd.js";import"./Eye-4UKD6XFj.js";import"./MenuHamburger-C0Qf3lmv.js";import"./MenuGrid-CMTOGRfX.js";import"./Buildings2-DVUhB4_t.js";import"./PersonGroup-BeehjThZ.js";import"./Bell-CbTQdXEK.js";import"./ClockDashed-B53QxFKY.js";import"./Truck-rmKeCueq.js";import"./Cog-ClqVZPtm.js";import"./Enter-D3OUH4Bc.js";import"./InboxFill-C_cYdorl.js";import"./PersonCircle-Bje06n3M.js";import"./Globe-DFC7DByl.js";import"./EyeClosed-B15_RZV2.js";import"./Archive-DIb6mTzI.js";import"./Trash-QlCQ_OLM.js";import"./Bookmark-itB_FKUn.js";import"./TeddyBear-CXQlC1w5.js";import"./SearchField-BCijVFY-.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./useHighlightedText-Bup2uSoT.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./useMenu-CxHWIKXS.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuListDivider-D98MnUWk.js";import"./MenuListHeading-DOsHnXss.js";import"./MenuItem-BcYTRISI.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./Heading-DGmFcP6K.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ChevronRight-DB6kCZkt.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:p}),`
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
`})})]})}function te(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{te as default};
