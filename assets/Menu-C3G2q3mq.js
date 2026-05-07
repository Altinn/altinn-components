import{j as e,M as s,C as i}from"./iframe-Cqj3AiBb.js";import{useMDXComponents as r}from"./index-D112xVoV.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-nlkR0Gzz.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-DhIyBwic.js";import"./useId-Bi-DL88I.js";import"./InformationSquare-DK31GEUT.js";import"./Eye-B2jzUGYg.js";import"./Truck-BuDY0vR0.js";import"./PersonGroup-Cy3uNri3.js";import"./Cog-DE_LP7WS.js";import"./TeddyBear-DUVEhGuY.js";import"./MenuGrid-Dnrx8ipH.js";import"./Enter-COG8qags.js";import"./InboxFill-B-I70TLd.js";import"./PersonCircle-sKNvHz4D.js";import"./Buildings2-CW6Ln2Lr.js";import"./Globe-DBjj0c59.js";import"./Bell-BFrIV75G.js";import"./Bookmark-ykz9HJCL.js";import"./ClockDashed-2w90gDju.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./EyeClosed-BpNISngF.js";import"./MenuHamburger-Cowy_Pyv.js";import"./SearchField-qenOIdRZ.js";import"./index-CHG1hv9Q.js";import"./MagnifyingGlass-fMCV_alc.js";import"./XMark-ReENydG3.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
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
