import{ag as r,a7 as e,r as s,C as i}from"./iframe-DWxW88Wb.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-DPPbfjF2.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-77VzahwE.js";import"./InformationSquare-BIrp2N6S.js";import"./Eye-cMaAT_DO.js";import"./MenuHamburger-DJLRFmM-.js";import"./MenuGrid-DDlbbuJg.js";import"./Buildings2-FcIOdoWf.js";import"./PersonGroup-kEppBHMK.js";import"./Bell-648GVX1G.js";import"./ClockDashed-CcEfkX7I.js";import"./Truck-DDW2wObY.js";import"./Cog-DoRelEAk.js";import"./Enter-Fxl2xNK-.js";import"./InboxFill-DWim87Ku.js";import"./PersonCircle-4342nGFh.js";import"./Globe-BJLo8sVQ.js";import"./EyeClosed-DtUVv1wQ.js";import"./Archive-FtzxqCV-.js";import"./Trash-D9-PBT3O.js";import"./Bookmark-CjRgSvle.js";import"./TeddyBear-Cqpqu50L.js";import"./SearchField-DiX0tG9c.js";import"./MagnifyingGlass-DeszhIH4.js";import"./FieldBase-CIL3pXPs.js";import"./Typography-Dvuik0pJ.js";import"./useHighlightedText-Kme-_nwy.js";import"./Field-nEx1TRai.js";import"./Label-EU_RFMoG.js";import"./Input-CPaqJzda.js";import"./useMenu-DXA38xVt.js";import"./MenuListItem-CaAjdfCo.js";import"./MenuListHeading-COGZjwEu.js";import"./MenuItem-CTR_r1KI.js";import"./ItemMedia-pWda_jSz.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Checkmark-BMNSyflA.js";import"./ItemLabel-CjOWrvlD.js";import"./Heading-Dg7_b6ZQ.js";import"./ItemControls-uvaqS71K.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ChevronRight-CaZE672G.js";import"./index-BBaxa0Qn.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
