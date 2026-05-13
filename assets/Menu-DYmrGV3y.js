import{j as e,M as s,C as i}from"./iframe-CpLxKnDM.js";import{useMDXComponents as r}from"./index-BbdVCkqs.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-mfMgXbAW.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DO71C6ra.js";import"./useId-Dk2QO8VQ.js";import"./InformationSquare-xpUpd4lr.js";import"./Eye-CIuKAz7x.js";import"./Truck-CpSx_n1T.js";import"./PersonGroup-DQBP7ziK.js";import"./Cog-Dcy6_jlg.js";import"./TeddyBear--wEPU4hx.js";import"./MenuGrid-_azA79nh.js";import"./Enter-tjtY-HGz.js";import"./InboxFill-DISyPVQO.js";import"./PersonCircle-CA3B10fa.js";import"./Buildings2-CpGh8O8D.js";import"./Globe-C7BiUSRN.js";import"./Bell-nocAIVI8.js";import"./Bookmark-BLr2Syot.js";import"./ClockDashed-CK_NRh5l.js";import"./Archive-2zuUqDx-.js";import"./Trash-0aRAlmkw.js";import"./EyeClosed-Dm0Xe8f_.js";import"./MenuHamburger-BOYVbGjH.js";import"./SearchField-DF0MNejq.js";import"./index-BZrYlxzi.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./XMark-BkFwP2BW.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useHighlightedText-De1FlINf.js";import"./Skeleton-B2kLb9z1.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
