import{j as e,M as s,C as i}from"./iframe-C5YDQF8t.js";import{useMDXComponents as r}from"./index-CNLHU9D9.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BJCpNLol.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-CumVX6Ac.js";import"./useId-D8_RB8wa.js";import"./InformationSquare-BnjsTJI5.js";import"./Eye-C7fKJvBF.js";import"./Truck-BRdCbgth.js";import"./PersonGroup-DZ4G6nmF.js";import"./Cog-CVxM7LV3.js";import"./TeddyBear-A0tWLTtU.js";import"./MenuGrid-BF8Rqd0Y.js";import"./Enter-CBf-22pX.js";import"./InboxFill-BqOp0fif.js";import"./PadlockLockedFill-GHxmhAmq.js";import"./Buildings2-CCtuJzKi.js";import"./Globe-hsiQLHF9.js";import"./PersonCircle-BcOgqqgZ.js";import"./Bell-Ks7Lgkha.js";import"./Bookmark-CibaDFrx.js";import"./ClockDashed-CHE2RCR-.js";import"./Archive-vblwy2cE.js";import"./Trash-D8RBkZPj.js";import"./EyeClosed-DdGfLVZ5.js";import"./MenuHamburger-CzLGV6Fr.js";import"./SearchField-DhRNQpTW.js";import"./index-Wv9BNi45.js";import"./MagnifyingGlass-CEZChhW1.js";import"./XMark-DdTqeOk-.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useHighlightedText-n06FiY88.js";import"./Skeleton-Drx-E9Fo.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BhI6CQre.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
