import{w as r,p as e,c as s,C as i}from"./iframe-DrMVe4hJ.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BhVXSQ0Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BDBVzmFe.js";import"./useId-CwrI0QJg.js";import"./InformationSquare-J3q8zJp8.js";import"./Eye-BZv16xjr.js";import"./MenuHamburger-DFEV7Ips.js";import"./MenuGrid-FgdNCw-Y.js";import"./Buildings2-Bj6G_QDF.js";import"./PersonGroup-C980Aa0z.js";import"./Bell-b8sn31s3.js";import"./ClockDashed-BtZjq-3Y.js";import"./Truck-Ba249ivH.js";import"./Cog-CA8zUOL7.js";import"./Enter-CSMdGEsW.js";import"./InboxFill-BZ5kfP5P.js";import"./PersonCircle-ChnCnn6V.js";import"./Globe-BHi7RQK5.js";import"./EyeClosed-yetoaSbd.js";import"./Archive-BqJg8DEZ.js";import"./Trash-DgVztnIf.js";import"./Bookmark-CbOgZWyk.js";import"./TeddyBear-0jtcS0PP.js";import"./SearchField-BnuJ-svS.js";import"./index-B2LUQ97G.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./XMark-BXMpu0Gf.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useHighlightedText-BA3QT9FH.js";import"./Skeleton-BKl0bJYN.js";import"./Label-QaOAiYFD.js";import"./tooltip-BY1BnveL.js";import"./Input-kqR7j7M6.js";import"./Button-B40GVZAo.js";import"./useMenu-CrRt-E4f.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./ChevronRight-u16zgCRT.js";import"./index-j3-eoKUd.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
