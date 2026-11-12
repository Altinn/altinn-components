var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ah as s,a7 as e,r as c,C as o}from"./iframe-DdPcKG0O.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-CwaEJjQG.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-B0eOQuKZ.js";import"./InformationSquare-RfPtjfhK.js";import"./Eye-Co1qcO60.js";import"./MenuHamburger-D6OlWMiZ.js";import"./MenuGrid-DWVFfKff.js";import"./Buildings2-DptQBOZ0.js";import"./PersonGroup-BXCLuyX3.js";import"./Bell-B_p1_Gag.js";import"./ClockDashed-BKb7SczD.js";import"./Truck-Cuq2Wz7a.js";import"./Cog-nID5Exvz.js";import"./Enter-HqcRumc5.js";import"./InboxFill-DNUdwCna.js";import"./PersonCircle-D31QT1Vw.js";import"./Globe-BDvt3sjf.js";import"./EyeClosed-CRvw19xS.js";import"./Archive-Ru5RTNZx.js";import"./Trash-CS2QUAEY.js";import"./Bookmark-D4xtpkN-.js";import"./TeddyBear-scUQgXPH.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./ItemLabel-vi7acRQa.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./ItemControls-Bf5MqGaN.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./ChevronRight-Cmdt4Cn7.js";import"./FieldBase-V879Q4R4.js";import"./Typography-D4dRQ14t.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./useMenu-B_zDT5uM.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(o,{of:a}),`
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
`})})]})}i(r,"_createMdxContent");function se(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}i(se,"MDXContent");export{se as default};
