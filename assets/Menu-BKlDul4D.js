import{j as e,M as s,C as i}from"./iframe-0tjTS8nX.js";import{useMDXComponents as r}from"./index-Do5sMaSl.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-B9WIX43Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DA5GGRz-.js";import"./useId-DNFZveVv.js";import"./InformationSquare-j6Jk7iQg.js";import"./Eye-tfT7yxSX.js";import"./Truck-Bahcbivn.js";import"./PersonGroup-D5mThWIo.js";import"./Cog-Fcu0CSva.js";import"./TeddyBear-BTFAfvmM.js";import"./MenuGrid-Cr6WrSLL.js";import"./Enter-CHSTGyKA.js";import"./InboxFill-B4Y81moB.js";import"./PersonCircle-DX0T6Aou.js";import"./Buildings2-BAEXb0uK.js";import"./Globe-GB118VNm.js";import"./Bell-BGb4n8GH.js";import"./Bookmark-DxOqCGna.js";import"./ClockDashed-Dt4Rg0dq.js";import"./Archive-CxbiNxAX.js";import"./Trash-BerJMn2e.js";import"./EyeClosed-BVlgMx3s.js";import"./MenuHamburger-BCh4cxc2.js";import"./SearchField-AyG5Put8.js";import"./index-BHkRJabC.js";import"./MagnifyingGlass-Djl9xGro.js";import"./XMark-C6HGzv3s.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./Skeleton-CiSYBb75.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Icon-CEoRGh9j.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DGQxaY-L.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ue(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ue as default};
