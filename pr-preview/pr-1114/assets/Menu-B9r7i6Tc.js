import{j as e,M as s,C as i}from"./iframe-BmFIVBn_.js";import{useMDXComponents as r}from"./index-DxKwZgsl.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-D-y6rkFd.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CwWA-SCq.js";import"./useId-ClegSKnE.js";import"./InformationSquare-Ct2wAfNF.js";import"./Eye-Lits53gm.js";import"./Truck-Dg1Ov44o.js";import"./PersonGroup-D_ev-wbt.js";import"./Cog-B6LLrtyj.js";import"./TeddyBear-BFFH_Plg.js";import"./MenuGrid-Cjzb3ZQ-.js";import"./Enter-CrFD7q1W.js";import"./InboxFill-ClSwJPih.js";import"./PadlockLockedFill-5oiKD1pI.js";import"./Buildings2-Bp7D6pSC.js";import"./Globe-CS0vj-xA.js";import"./PersonCircle-C0o0J3NY.js";import"./Bell-DITbeRov.js";import"./Bookmark-Bo5gTdE7.js";import"./ClockDashed-D19_5m9-.js";import"./Archive-kTBarS_a.js";import"./Trash-eorIYi8J.js";import"./EyeClosed-C-kxa-0B.js";import"./MenuHamburger-DON02Xtn.js";import"./SearchField-BQQnPaDG.js";import"./index-3BUTcXKg.js";import"./MagnifyingGlass-B0C_9vni.js";import"./XMark-DPeWQ31a.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Skeleton-DRn19mA6.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Badge-DoiHwmxA.js";import"./useMenu-BRAeQdeQ.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
