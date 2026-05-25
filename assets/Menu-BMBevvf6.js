import{j as e,M as s,C as i}from"./iframe-BFO1Hsm7.js";import{useMDXComponents as r}from"./index-pgO93lf9.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-_nYGgs9C.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-dS4z7Edu.js";import"./useId-Bk4Ffxqs.js";import"./InformationSquare-Csa1evZE.js";import"./Eye-BpkaW8HI.js";import"./Truck-Cu9bqM8M.js";import"./PersonGroup-DcVZwuTx.js";import"./Cog-C5rmcZmO.js";import"./TeddyBear-DOqiCJMi.js";import"./MenuGrid-DN8Jqzbv.js";import"./Enter-BwsZcqun.js";import"./InboxFill-CpT0xyOA.js";import"./PersonCircle-DLojyqEs.js";import"./Buildings2-DhoPF_ay.js";import"./Globe-Bjnfe1Wy.js";import"./Bell-CCJ_rfrc.js";import"./Bookmark-CJbuW2m4.js";import"./ClockDashed-bbJ-SAWp.js";import"./Archive-CTVg4aGD.js";import"./Trash-BNKVyqtr.js";import"./EyeClosed-DvRUeUf3.js";import"./MenuHamburger-rt2ExzIR.js";import"./SearchField-BsaRMZXP.js";import"./index-q4P8UESO.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./XMark-DHT-JiZe.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./useHighlightedText-BBNMb3RU.js";import"./Skeleton-BRac3_14.js";import"./Label-D5tsUrXq.js";import"./tooltip-DUJ67ouq.js";import"./Input-D60Cokb5.js";import"./Button-D67YnkXJ.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./Checkmark-BeWey6nu.js";import"./Heading-BaJonbem.js";import"./ItemControls-Dko-TfIa.js";import"./ChevronRight-CdUbwk3C.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
