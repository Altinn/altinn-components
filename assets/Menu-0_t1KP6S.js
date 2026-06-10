import{ag as r,a7 as e,r as s,C as i}from"./iframe-CENvAP26.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-CSgYqCqr.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C8W8HItg.js";import"./InformationSquare-DfDfuKua.js";import"./Eye-UuKaNYky.js";import"./MenuHamburger-acEhsrwC.js";import"./MenuGrid-D_WOCdA8.js";import"./Buildings2-Cx_FQqS5.js";import"./PersonGroup-CeS_9vHD.js";import"./Bell-zOe7McjR.js";import"./ClockDashed-CNykKsxK.js";import"./Truck-YhZa7gBn.js";import"./Cog-DaJaWoE1.js";import"./Enter-CEXAJ-VY.js";import"./InboxFill-T9OvqkvK.js";import"./PersonCircle-B1WnJpSq.js";import"./Globe-0uZUwFK3.js";import"./EyeClosed-BR7X0y0k.js";import"./Archive-De4Ormwu.js";import"./Trash-Cs7D8kti.js";import"./Bookmark-DuFvDZBJ.js";import"./TeddyBear-tu8MLGRj.js";import"./SearchField-B76VS5jy.js";import"./MagnifyingGlass-DDkWwcsn.js";import"./FieldBase-IIcWSE0k.js";import"./Typography-BK5AylHP.js";import"./useHighlightedText-BwOLK-i3.js";import"./Field-oHEtcERA.js";import"./Label-N53R6xsN.js";import"./Input-CMkEMAO8.js";import"./useMenu-DmwlujsT.js";import"./MenuListItem-BT-iZ3cq.js";import"./MenuListHeading-BD0rgLCP.js";import"./MenuItem-Fa6rC5wV.js";import"./ItemMedia-C5TE1h6m.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Checkmark-D1ifpvt_.js";import"./ItemLabel-CqdC7zrv.js";import"./Heading-mra_L4pQ.js";import"./ItemControls-DaWh-3zk.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./ChevronRight-CqCnB5Zg.js";import"./index-BzTqrnLh.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
