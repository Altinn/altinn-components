import{j as e,M as s,C as i}from"./iframe-GJv3-kpe.js";import{useMDXComponents as r}from"./index-BGOihoxM.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-CXVG0CYq.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BmatJD4L.js";import"./useId-B1GQrjht.js";import"./InformationSquare-Crm3l9Sr.js";import"./Eye-DOWoVlQV.js";import"./Truck-9T-aZ4H8.js";import"./PersonGroup-BIgVkPDc.js";import"./Cog-CPTRNbbJ.js";import"./TeddyBear-DEU1NZyD.js";import"./MenuGrid-B538mca7.js";import"./Enter-BP89yifq.js";import"./InboxFill-Cnv6fcar.js";import"./PersonCircle-9EKdXSyZ.js";import"./Buildings2-Bfg_uNMu.js";import"./Globe-CoSwJzs5.js";import"./Bell-BTom6BN8.js";import"./Bookmark-B5mmMKvT.js";import"./ClockDashed-BA999rwy.js";import"./Archive-CmHW744W.js";import"./Trash-CCKQd2Hf.js";import"./EyeClosed-B5BJPzha.js";import"./MenuHamburger-5Bxt9Ko4.js";import"./SearchField-D4OrqN5V.js";import"./index-D19pPnAw.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./XMark-D7blLnze.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useHighlightedText-ClfYglU-.js";import"./Skeleton-dVNdeapn.js";import"./Label-Bx3ShTJ6.js";import"./index-OoPsm9QB.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./MenuListItem-BuleDevk.js";import"./MenuListHeading-w-EtPB4c.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./ItemControls-3C4JbZ3m.js";import"./ChevronRight-C3wqtQo3.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
