import{j as e,M as s,C as i}from"./iframe-CULgtZWU.js";import{useMDXComponents as r}from"./index-bB7Pz0IC.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-B_Jx3uYi.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-Ca_xrm4Q.js";import"./useId-COk2q28h.js";import"./InformationSquare-C8Qq6I-D.js";import"./Eye-Bhn_FNva.js";import"./Truck-Ca6gkT3I.js";import"./PersonGroup-CCsnFONf.js";import"./Cog-iUXZMNL9.js";import"./TeddyBear-Bmsa9gHy.js";import"./MenuGrid-Bg-3-RU6.js";import"./Enter-BQaYlrrr.js";import"./InboxFill-gdW-QKE2.js";import"./PadlockLockedFill-DmjIHQ_j.js";import"./Buildings2-CbfhaunH.js";import"./Globe-3EAnc9RM.js";import"./PersonCircle-BXrVN4F7.js";import"./Bell-DWDnsDOy.js";import"./Bookmark-S-YXJnTw.js";import"./ClockDashed-BlGJT9Vj.js";import"./Archive-C10AizEf.js";import"./Trash-D7-j-WnU.js";import"./EyeClosed-92sc4keQ.js";import"./MenuHamburger-CkaaaQ8r.js";import"./SearchField-D5aR-gNH.js";import"./index-BvBdYXxj.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./XMark-BCb0_aBA.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useHighlightedText-BLw72BO7.js";import"./Skeleton-B_F13Udl.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./Badge-CMQ7i3tF.js";import"./useMenu-Do_nneWd.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ae as default};
