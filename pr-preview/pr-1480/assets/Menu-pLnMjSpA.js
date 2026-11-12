var m=Object.defineProperty;var i=(t,n)=>m(t,"name",{value:n,configurable:!0});import{ah as s,a7 as e,r as c,C as o}from"./iframe-SD2JkkBx.js";import{Default as p,CreatingHiearchy as d,NestingItems as a}from"./Menu.stories-CxgwGOxN.js";import"./preload-helper-Cc2_yIPf.js";import"./Paperclip-CB4aml4Q.js";import"./InformationSquare-CgIS3Fvj.js";import"./Eye-B06tDn3r.js";import"./MenuHamburger-Wy7pQwlx.js";import"./MenuGrid-Cq_-kqfQ.js";import"./Buildings2-B5kNdPhs.js";import"./PersonGroup-2mRHjAOb.js";import"./Bell-Dfcs1Nu9.js";import"./ClockDashed-BHNScja1.js";import"./Truck-bh3C70tB.js";import"./Cog-BVLK6ATe.js";import"./Enter-Cq5qF9Z6.js";import"./InboxFill-B_-j2dv9.js";import"./PersonCircle-CboEv5N6.js";import"./Globe-B33k006i.js";import"./EyeClosed-J9U-7g52.js";import"./Archive-D_jolVYJ.js";import"./Trash-CPezUXOI.js";import"./Bookmark-D-9J-S2m.js";import"./TeddyBear-QqKCcwnf.js";import"./SearchField-CtzaZVEy.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-99de9OEC.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemMedia-WgmEjgHK.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./ItemLabel-BHU5o8nH.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./ItemControls-CYQHXshs.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ChevronRight-N_DPzqc2.js";import"./FieldBase-BELwbvmB.js";import"./Typography-DYbohGA0.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./useMenu-Bkg094iM.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Menu"}),`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(o,{of:a}),`
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
`})})]})}i(r,"_createMdxContent");function se(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}i(se,"MDXContent");export{se as default};
