import{w as r,p as e,c as s,C as i}from"./iframe-BBbEwSaq.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C_54tgZu.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CTYUfIdt.js";import"./useId-DZp72-eX.js";import"./InformationSquare-BNlJiT0G.js";import"./Eye-DjmH3mmf.js";import"./MenuHamburger-CaVnn13l.js";import"./MenuGrid-DirpeLmO.js";import"./Buildings2-BThbif1q.js";import"./PersonGroup-C7K4c204.js";import"./Bell-DBpgaexc.js";import"./ClockDashed-BmClXrVK.js";import"./Truck-Bvv8_EqB.js";import"./Cog-CTJXrtum.js";import"./Enter-DAOjGrxw.js";import"./InboxFill-B1H2j0_d.js";import"./PersonCircle-Bn31GdL7.js";import"./Globe-CnuLYVOj.js";import"./EyeClosed-CqlZ8cC0.js";import"./Archive-D8Y6xMn8.js";import"./Trash-Cq0lfucZ.js";import"./Bookmark-CREc3UJh.js";import"./TeddyBear-CTmxAtE-.js";import"./SearchField-D1R32ak6.js";import"./index-awH0sXcw.js";import"./MagnifyingGlass-B6FIAadU.js";import"./XMark-Dw8JSfSd.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./Label-DdMEJ83A.js";import"./tooltip-D3G3Ewte.js";import"./Input-lqau07kD.js";import"./Button-DpW4Pu6O.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./index-BBId2cwS.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
