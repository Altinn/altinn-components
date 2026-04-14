import{j as e,M as s,C as i}from"./iframe-gnB9S1An.js";import{useMDXComponents as r}from"./index-Cj8L4guz.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-BKpxLY9h.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-YCmG63MU.js";import"./useId-B9nFNwMW.js";import"./InformationSquare-CRWfnij7.js";import"./Eye-CG3xDgEv.js";import"./Truck-Bo1zfKIR.js";import"./PersonGroup-zXG_vuYq.js";import"./Cog-IiGFlA3S.js";import"./TeddyBear-CD0Ai5Pv.js";import"./MenuGrid-Bst7v6rr.js";import"./Enter-C2tqY5HT.js";import"./InboxFill-CWq5Q3Xh.js";import"./PadlockLockedFill-C8Xg7CpD.js";import"./Buildings2-YTNSVx18.js";import"./Globe-CrPWgLEB.js";import"./PersonCircle-DywZaqM3.js";import"./Bell-uxOlVEAd.js";import"./Bookmark-GTwORL86.js";import"./ClockDashed-ZXHkruvq.js";import"./Archive-rt_tWVCY.js";import"./Trash-R2DUJthc.js";import"./EyeClosed-Bb81xmLC.js";import"./MenuHamburger-UwfHPvv0.js";import"./SearchField-CW2AroNW.js";import"./index-C4jL9APw.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./XMark-F0lxfgWB.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./useHighlightedText-BAP0b8E_.js";import"./Skeleton-_K166C5F.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Icon-CL2c9__7.js";import"./Checkmark-D8iTH_Nd.js";import"./Heading-uoQ4E1Gx.js";import"./ItemControls-0hV_6Ao9.js";import"./ChevronRight-CmdeYhPT.js";import"./Badge-D2lHyQ6d.js";import"./useMenu-DEo-iQ-R.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
