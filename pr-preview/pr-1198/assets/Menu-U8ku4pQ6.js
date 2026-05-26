import{j as e,M as s,C as i}from"./iframe-YdRL1NzV.js";import{useMDXComponents as r}from"./index-BWf8uQ1H.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BY-xLt1t.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DutSd5EV.js";import"./useId-DxHKrSZ4.js";import"./InformationSquare-C3wG0Qjz.js";import"./Eye-aCB71A3t.js";import"./Truck-CUWIzyXu.js";import"./PersonGroup-CdTBR01w.js";import"./Cog-DOft9gVn.js";import"./TeddyBear-BhxtgGLM.js";import"./MenuGrid-TIfk-A40.js";import"./Enter-BrhwR_zU.js";import"./InboxFill-Dhs0ejSb.js";import"./PersonCircle-BIq4InXd.js";import"./Buildings2-Bu8VfWPO.js";import"./Globe-Bkro2Ij1.js";import"./Bell-CeAGXi_W.js";import"./Bookmark-COWjnrxW.js";import"./ClockDashed-C354w78W.js";import"./Archive-C1GJOqq_.js";import"./Trash-Bas2iEP8.js";import"./EyeClosed-qIe9hWNs.js";import"./MenuHamburger-B0s_IErD.js";import"./SearchField-Cp2PZLrm.js";import"./index-SoIsie1y.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./XMark-1l7ZvP46.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./Skeleton-C3i9Ug5T.js";import"./Label-CoBwam8t.js";import"./tooltip-D0NJwlFT.js";import"./Input-Co3wY2OB.js";import"./Button-BwQOxknK.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Icon-B4-srULI.js";import"./Checkmark-Ple-kG_b.js";import"./Heading-56B0sdRG.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
