import{ag as r,a7 as e,r as s,C as i}from"./iframe-DK-3qaH3.js";import{Default as m,CreatingHiearchy as c,NestingItems as p}from"./Menu.stories-DplImMCW.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-C0W4M5q3.js";import"./InformationSquare-MLoftbJC.js";import"./Eye-BK_dEJ2x.js";import"./MenuHamburger-Cf_ch3tL.js";import"./MenuGrid-CPHcsF2L.js";import"./Buildings2-KVjXbMSL.js";import"./PersonGroup-C6KsYafb.js";import"./Bell-B2De-DAc.js";import"./ClockDashed-D49TlzQC.js";import"./Truck-CXd7bbH4.js";import"./Cog-B4fZnnxe.js";import"./Enter-B9VAMW5w.js";import"./InboxFill-BhLOvJ8J.js";import"./PersonCircle-CvFeQ7Oq.js";import"./Globe-CA-i3fto.js";import"./EyeClosed-D7-fifN1.js";import"./Archive-BmVCa9zu.js";import"./Trash-CT5ztRaN.js";import"./Bookmark-DeXjUqMQ.js";import"./TeddyBear-BpzfsVyh.js";import"./SearchField--OTsh4KX.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./FieldBase-CZ_e8plx.js";import"./Typography-B48kpFr9.js";import"./useHighlightedText-aZdhyhaW.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./Heading-DNUoGPcg.js";import"./ItemControls-CxO-bUey.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ChevronRight-DR_DMSPj.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:p}),`
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
`})})]})}function te(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{te as default};
