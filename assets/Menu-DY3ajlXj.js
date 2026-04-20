import{j as e,M as s,C as i}from"./iframe-Dj7Cj6th.js";import{useMDXComponents as r}from"./index-CkefpYF1.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CUq0lOEq.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DnvKAF-u.js";import"./useId-ByPI58ip.js";import"./InformationSquare-BF5i3vGC.js";import"./Eye-j3RHtwGN.js";import"./Truck-FoAGnEfs.js";import"./PersonGroup-BNQVKXjG.js";import"./Cog-sBbMLK9M.js";import"./TeddyBear-DqZO1MOA.js";import"./MenuGrid-CIIiRQec.js";import"./Enter-sPrpAKYg.js";import"./InboxFill-Bdr_IoBv.js";import"./PadlockLockedFill-DyKEGGIm.js";import"./Buildings2-RbNRYIPS.js";import"./Globe-D9vLtYKA.js";import"./PersonCircle-DGunPqZp.js";import"./Bell-BoGfiElF.js";import"./Bookmark-D8nK4eWy.js";import"./ClockDashed-C4nxmfnv.js";import"./Archive-fCDhiZwM.js";import"./Trash-BWaUzv09.js";import"./EyeClosed-BIhED1ju.js";import"./MenuHamburger-B1BfC5RA.js";import"./SearchField-IAcAy2TF.js";import"./index-CddsnUaU.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./XMark-CFOHUWx0.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./useHighlightedText-BEM-o_8x.js";import"./Skeleton-D2EJPpRT.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Avatar-BthLZDba.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CZ8hjrPb.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
