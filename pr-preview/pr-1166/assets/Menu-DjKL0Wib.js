import{j as e,M as s,C as i}from"./iframe-u1jxS1Oq.js";import{useMDXComponents as r}from"./index-CmyfXM46.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CZv3marP.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DWGKTEMb.js";import"./useId-MxiBxM6f.js";import"./InformationSquare-C97_OpNa.js";import"./Eye-CwI-KaLg.js";import"./Truck-kxNcg4PA.js";import"./PersonGroup-DVZBc7ZC.js";import"./Cog-GUEAkaGt.js";import"./TeddyBear-MgPZAEXY.js";import"./MenuGrid-DGfKdqUy.js";import"./Enter-Cwv7FqNn.js";import"./InboxFill-pvFhSAtv.js";import"./PersonCircle-Ven-MPmt.js";import"./Buildings2-IWqBaOWK.js";import"./Globe-CdLBF7ZI.js";import"./Bell-DoNSIb9o.js";import"./Bookmark-BgKyw1UK.js";import"./ClockDashed-DrfyQtNS.js";import"./Archive-D39xL0Dv.js";import"./Trash-DU2X0jmR.js";import"./EyeClosed-BflClnYe.js";import"./MenuHamburger-DqxEpoux.js";import"./SearchField-BwnvpNr2.js";import"./index-CuIYfQx6.js";import"./MagnifyingGlass-5wf6qRdO.js";import"./XMark-Bsujigqn.js";import"./FieldBase-BcXnInHB.js";import"./Typography-DJdlSKXp.js";import"./useHighlightedText-Cgx_Ij05.js";import"./Skeleton-vSjDGrjA.js";import"./Label-D4ujXpAq.js";import"./index-Cx6LUCQB.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";import"./Input-BNqEyP7x.js";import"./input-y4RbUeVJ.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./MenuListItem-BGYFPBt-.js";import"./MenuListHeading-BoIZ0dV_.js";import"./MenuItem-CRFWvbZF.js";import"./ItemMedia-Dn5ydfd9.js";import"./Avatar-DVgGPyAb.js";import"./AvatarGroup-B0Rqd5X-.js";import"./Icon-DjXLk3vD.js";import"./Checkmark-CapblMXW.js";import"./Heading-B6H8IHeT.js";import"./ItemControls-GTSartAy.js";import"./ChevronRight-Dx4m7R44.js";import"./Badge-DEnx77R3.js";import"./Tooltip-DbCog91V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CJJuJq3h.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
