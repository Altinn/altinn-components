import{j as e,M as s,C as i}from"./iframe-COdTICiz.js";import{useMDXComponents as r}from"./index-BbwgFZAp.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BADZi-b2.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BfNNDqa4.js";import"./useId-lT615UMD.js";import"./InformationSquare-BF6iEl5i.js";import"./Eye-DR8-FhJ1.js";import"./Truck-DuJaMs8y.js";import"./PersonGroup-DuFs3LKI.js";import"./Cog-BR4GdWK8.js";import"./TeddyBear-ocPcN4bf.js";import"./MenuGrid-4dfRFYs1.js";import"./Enter-B-JGtAL9.js";import"./InboxFill-CJVimO5I.js";import"./PadlockLockedFill-Cj3D67jg.js";import"./Buildings2-BH6LkTev.js";import"./Globe-CyJqeJ-s.js";import"./PersonCircle-CAUPX5rd.js";import"./Bell-Bq12r575.js";import"./Bookmark-BwjH6ALD.js";import"./ClockDashed-yQpROOAt.js";import"./Archive-BB9PeNdy.js";import"./Trash-BPlCWJiN.js";import"./EyeClosed-BZCFuwo2.js";import"./MenuHamburger-CqtO9W0U.js";import"./SearchField-DQWZ98wb.js";import"./index-eHSiAaoN.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./XMark-CpgXVK2Q.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useHighlightedText-FFYshbql.js";import"./Skeleton-DCT9M7tY.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./Badge-CTG2EWNm.js";import"./useMenu-C9hrnnrl.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function ae(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ae as default};
