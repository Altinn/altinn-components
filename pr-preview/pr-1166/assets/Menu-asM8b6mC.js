import{j as e,M as s,C as i}from"./iframe-0B_Yudin.js";import{useMDXComponents as r}from"./index-Mx4bqmK6.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CX4P249v.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-Dm48k2vH.js";import"./useId-BUxMg0Ir.js";import"./InformationSquare-C3Az81Rf.js";import"./Eye-B-XCKYf4.js";import"./Truck-011sao1X.js";import"./PersonGroup-2P1EMsrG.js";import"./Cog-BFeH_yyK.js";import"./TeddyBear-Dj9NiVei.js";import"./MenuGrid-DYbnBtWP.js";import"./Enter-0Yba7b_H.js";import"./InboxFill-W7UakbcK.js";import"./PersonCircle-Cq1dPAel.js";import"./Buildings2-6vsd0VXE.js";import"./Globe-C4inFFJx.js";import"./Bell-I9jdyPhB.js";import"./Bookmark-xUjEkd69.js";import"./ClockDashed-Bz_gcxU0.js";import"./Archive-DM72aU-A.js";import"./Trash-C5AYfDtF.js";import"./EyeClosed-Bp89mSRH.js";import"./MenuHamburger-Dp9iHReE.js";import"./SearchField-aP7iZ-N9.js";import"./index-bzqtFzN_.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./XMark-4vnuAWTz.js";import"./FieldBase-BRRzaSEH.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Skeleton-CCW5QxrE.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Icon-CbCRlB_g.js";import"./Checkmark-BmAdxrUQ.js";import"./Heading-iCNnL7gN.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-G8FOBFFN.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
