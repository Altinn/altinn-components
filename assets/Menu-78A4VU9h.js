import{j as e,M as s,C as i}from"./iframe-xsOFb0qB.js";import{useMDXComponents as r}from"./index-Dh3vZ7X5.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C-lFeNoZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-7kfbi6pN.js";import"./useId-BSkX16Wf.js";import"./InformationSquare-DdLgqmyX.js";import"./Eye-DEFvM6nm.js";import"./Truck-CqC-DECR.js";import"./PersonGroup-DCgU0zTZ.js";import"./Cog-VVw0sBjg.js";import"./TeddyBear-kgPBu5M0.js";import"./MenuGrid-B4fGNlZg.js";import"./Enter-BCbm_6pK.js";import"./InboxFill-D-JS-mTH.js";import"./PersonCircle-CQxK2wwo.js";import"./Buildings2-C62e6IVW.js";import"./Globe-Bo46H1tU.js";import"./Bell-lzchwu9E.js";import"./Bookmark-CORWw_ar.js";import"./ClockDashed-B79nfQIW.js";import"./Archive-B1CaQo-V.js";import"./Trash-CZXvsvHs.js";import"./EyeClosed-C2yXCNKM.js";import"./MenuHamburger-C-E3l7C-.js";import"./SearchField-CkGqv4yc.js";import"./index-C2Njje4x.js";import"./MagnifyingGlass--8bC5kd2.js";import"./XMark-CIyVPbna.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useHighlightedText-DlnkJmvJ.js";import"./Skeleton-DBfNAA4T.js";import"./Label-CiIlYW7w.js";import"./index-CZjeF-Ef.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuListHeading-DQRtBG1I.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./Avatar-n4A0Yiev.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./ItemControls-a4lEiOE5.js";import"./ChevronRight-C-KQY4Ee.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
