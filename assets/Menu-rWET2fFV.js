import{j as e,M as s,C as i}from"./iframe-D8UVhXtj.js";import{useMDXComponents as r}from"./index-DPSA2vpm.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-YKF9Legc.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-ctSduXzx.js";import"./useId-B_5z_sER.js";import"./InformationSquare-BUh6v1hF.js";import"./Eye-Co5XTG_V.js";import"./Truck-D3p21TI9.js";import"./PersonGroup-Bsvpydvn.js";import"./Cog-j1yqxjks.js";import"./TeddyBear-DR4858uD.js";import"./MenuGrid-CziDD6J5.js";import"./Enter-mHn0qkqX.js";import"./InboxFill-CIHnSU58.js";import"./PadlockLockedFill-BUDlb7K4.js";import"./Buildings2-DUmQJdLd.js";import"./Globe-D2pwTjeG.js";import"./PersonCircle-BNtRxEHU.js";import"./Bell-BGEeysdp.js";import"./Bookmark-BfgjtV9V.js";import"./ClockDashed-BaXKWOyL.js";import"./Archive-yOskI6Ky.js";import"./Trash-CZH-fdX8.js";import"./EyeClosed-BOGH6KDX.js";import"./MenuHamburger-Bl4YfJVQ.js";import"./SearchField-DrqRDMva.js";import"./index-DZ6CWLt4.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./XMark-RzwOtF1Q.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useHighlightedText-CniNcpSk.js";import"./Skeleton-DuOqXwDT.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./useMenu-Bi-E8KDv.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`})})]})}function de(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{de as default};
