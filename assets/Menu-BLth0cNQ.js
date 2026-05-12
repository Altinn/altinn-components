import{j as e,M as s,C as i}from"./iframe-CU9tIbvZ.js";import{useMDXComponents as r}from"./index-BpriG5mT.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CXI1S_w8.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-ClDtZHFp.js";import"./useId-BEikXtHv.js";import"./InformationSquare-Dq6QQdGV.js";import"./Eye-DXAmrRzZ.js";import"./Truck-BBcL6kJu.js";import"./PersonGroup-9ndPeFoG.js";import"./Cog-DBkkRGxT.js";import"./TeddyBear-BxL-3fjt.js";import"./MenuGrid-DOhn-Lzt.js";import"./Enter-BHytXVt5.js";import"./InboxFill-BuLZHBJP.js";import"./PersonCircle-cYf_rPgC.js";import"./Buildings2-CD4MDmYA.js";import"./Globe-dRDAEiut.js";import"./Bell-d_XnJlp6.js";import"./Bookmark-CwJlB6fo.js";import"./ClockDashed-BPJiTGgl.js";import"./Archive-BDkPE7N1.js";import"./Trash-hYNo9HK3.js";import"./EyeClosed-CkHHSlnP.js";import"./MenuHamburger-Cl0yoDLg.js";import"./SearchField-CWeqUa0W.js";import"./index-Bd_n44R2.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./XMark-DTYd927G.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./Skeleton-WB8_C3gk.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./Checkmark-DOBFSC3X.js";import"./Heading-DKJvmFhb.js";import"./ItemControls-BgF8Asgd.js";import"./ChevronRight-XlyxhDjC.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function le(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{le as default};
