import{ag as r,a7 as e,r as s,C as i}from"./iframe-DJnynaCo.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-Bw7dDu33.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BABKEy81.js";import"./InformationSquare-Bwpxsw1g.js";import"./Eye-B1BdvE2W.js";import"./MenuHamburger-C7HX5DPN.js";import"./MenuGrid-DSZi7UmW.js";import"./Buildings2-pksubvZz.js";import"./PersonGroup-CPmOMj0c.js";import"./Bell-VT38pNXd.js";import"./ClockDashed-BbIL2d3l.js";import"./Truck-B8YL-bcy.js";import"./Cog-Cfx6WGH8.js";import"./Enter-Cnl_XCis.js";import"./InboxFill-BZ4Trjm9.js";import"./PersonCircle-fXmonhWi.js";import"./Globe-ws9jjJHv.js";import"./EyeClosed-CacEZlwe.js";import"./Archive-Dx_-h2dD.js";import"./Trash-CbXj-0_h.js";import"./Bookmark-CIv5zAUE.js";import"./TeddyBear-Dlsk-NzG.js";import"./SearchField-DQ5LjUme.js";import"./MagnifyingGlass-D5ryHey3.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./useHighlightedText-CYNOolzk.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./Heading-DlyjjAZZ.js";import"./ItemControls-CHuQfTIH.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ChevronRight-C7aaNXCF.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
