import{j as e,M as s,C as i}from"./iframe-BqnZkKPi.js";import{useMDXComponents as r}from"./index-Dl7l-Wuh.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C1lWE8qh.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BNaRk59O.js";import"./useId-9kVvsXig.js";import"./InformationSquare-BrOKqXok.js";import"./Eye-BjK7HgG_.js";import"./Truck-BjBvxdxm.js";import"./PersonGroup-BgXRnA9d.js";import"./Cog-DELvHUfQ.js";import"./TeddyBear-Bt5RromD.js";import"./MenuGrid-DoGLOC2Q.js";import"./Enter-Cu4gLX2q.js";import"./InboxFill-nxlzxk7U.js";import"./PadlockLockedFill-DWUZVu94.js";import"./Buildings2-CX0IGr76.js";import"./Globe-C0LXQqCK.js";import"./PersonCircle-De8axjJC.js";import"./Bell-CeY0A2-k.js";import"./Bookmark-CBUJ6BTp.js";import"./ClockDashed-BB8orsTQ.js";import"./Archive-BMrgF3IC.js";import"./Trash-CfRAqYTy.js";import"./EyeClosed-Dn-UIBlH.js";import"./MenuHamburger-CS_46M_p.js";import"./SearchField-ufWryraF.js";import"./index-DAuAfjpD.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./XMark-Y2_85_oc.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useHighlightedText-Clj8nPui.js";import"./Skeleton-1qnYSSLw.js";import"./Label-CWCdrO7p.js";import"./index-wnzGLxld.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./MenuListItem-AlO17G_F.js";import"./MenuListHeading-CYx60jB_.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Icon-CnWjusVH.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./ItemControls-CZQ275uO.js";import"./ChevronRight-DE1wtPln.js";import"./Badge-wAZ__xuM.js";import"./useMenu-b_BS_LFk.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
