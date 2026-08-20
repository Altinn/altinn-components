import{ag as r,a7 as e,r as s,C as i}from"./iframe-DklMp8b9.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-B0Sa23lU.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BYUVZW70.js";import"./InformationSquare-D2eEvTI2.js";import"./Eye-C_iLEKH7.js";import"./MenuHamburger-D1P7yy_p.js";import"./MenuGrid-C5smeF6l.js";import"./Buildings2-DnG6HWVX.js";import"./PersonGroup-C97ODp-Z.js";import"./Bell-BTfiKNvT.js";import"./ClockDashed-D_U4WlsX.js";import"./Truck-CU_b4mUr.js";import"./Cog-BYsG48i_.js";import"./Enter-Di4UbUKP.js";import"./InboxFill-G4nocOae.js";import"./PersonCircle-SDv5HB66.js";import"./Globe-uIsVdgwX.js";import"./EyeClosed-B07FFsS5.js";import"./Archive-OjGOL5jo.js";import"./Trash-BjmzrZmW.js";import"./Bookmark-B0AbdczE.js";import"./TeddyBear-sbHijtK0.js";import"./SearchField-1BQmUb8n.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./useHighlightedText-CQ5194gO.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./Input-DDvcPBDR.js";import"./useMenu-Dcu-XksR.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuListDivider-DdHQwvZL.js";import"./MenuListHeading-vYUhz8ky.js";import"./MenuItem-DGElsCwp.js";import"./ItemMedia-DvKDb3Qz.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./Heading-C5vDV6s5.js";import"./ItemControls-o8s7abF_.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./ChevronRight-D0aoAfw5.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
