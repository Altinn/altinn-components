import{p as e,b as s,C as i}from"./iframe-WHERbRNQ.js";import{useMDXComponents as r}from"./index-BNsJetBP.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CAkNMNwd.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BEqO3Wfb.js";import"./useId-BfbJ7PbP.js";import"./InformationSquare-DqU7vShm.js";import"./Eye-CdP9e7BO.js";import"./MenuHamburger-bKOv5Y63.js";import"./MenuGrid-xBvM-GYV.js";import"./Buildings2-Cxu8SLwv.js";import"./PersonGroup-DCvVVRKJ.js";import"./Bell-BxMR10SR.js";import"./ClockDashed-C-WhItbV.js";import"./Truck-B0P7vVDn.js";import"./Cog-BYXHBw2j.js";import"./Enter-D5TP3xo0.js";import"./InboxFill-COhlx1Bw.js";import"./PersonCircle-CbGRsB75.js";import"./Globe-BkGe9tXO.js";import"./EyeClosed-DxnwR4nn.js";import"./Archive-PwU0eenA.js";import"./Trash-C1kE2B-c.js";import"./Bookmark-WSvH4AZu.js";import"./TeddyBear-qCMf9Eex.js";import"./SearchField-CjOGKjR9.js";import"./index-CPQpJFkN.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./XMark-5kXogJ_J.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./tooltip-C7TGaz5I.js";import"./Input-D2AEap14.js";import"./Button-DkTjWAj1.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ce(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ce as default};
