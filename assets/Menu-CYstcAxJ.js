import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{n as r}from"./lib-BuGdZX6V.js";import{CreatingHiearchy as i,Default as a,NestingItems as o}from"./Menu.stories-43Aph2yu.js";var s=e();function c(e){let c={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{title:`Menu`}),`
`,(0,s.jsx)(c.h1,{id:`using-menus`,children:`Using menus`}),`
`,(0,s.jsxs)(c.p,{children:[`The menu component is the basis of all menus, including the `,(0,s.jsx)(c.code,{children:`GlobalMenu`}),`. It is also part of `,(0,s.jsx)(c.code,{children:`Layout`}),` as an optional local menu.`]}),`
`,(0,s.jsxs)(c.p,{children:[`Use `,(0,s.jsx)(c.code,{children:`Menu`}),` by providing an array of `,(0,s.jsx)(c.code,{children:`items`}),` and an optional `,(0,s.jsx)(c.code,{children:`groups`}),` object. Items can be nested.`]}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`import { Menu } from "@altinn/altinn-components";

return (
  <Menu groups={<MenuItemGroups>} items={<MenuItemProps[]>}>
);
`})}),`
`,(0,s.jsx)(c.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,s.jsxs)(c.p,{children:[`The `,(0,s.jsx)(c.code,{children:`MenuItem`}),` represent a single link. It must include at least a `,(0,s.jsx)(c.code,{children:`title`}),` and an `,(0,s.jsx)(c.code,{children:`id`}),`. Use `,(0,s.jsx)(c.code,{children:`icon`}),` to emphasise meaning.`]}),`
`,(0,s.jsx)(t,{of:a}),`
`,(0,s.jsx)(c.h3,{id:`creating-hiearchy`,children:`Creating hiearchy`}),`
`,(0,s.jsxs)(c.p,{children:[`Use `,(0,s.jsx)(c.code,{children:`groups`}),` to divide the menu into logical parts which will be divided by a border.`]}),`
`,(0,s.jsxs)(c.p,{children:[`Use `,(0,s.jsx)(c.code,{children:`size`}),`, and `,(0,s.jsx)(c.code,{children:`iconTheme`}),` to create hierarchy.`]}),`
`,(0,s.jsxs)(c.p,{children:[`You can set defaults by using `,(0,s.jsx)(c.code,{children:`defaultItemSize`}),`, and `,(0,s.jsx)(c.code,{children:`defaultIconTheme`}),` on menu and groups.`]}),`
`,(0,s.jsx)(t,{of:i}),`
`,(0,s.jsx)(c.h3,{id:`nesting-items`,children:`Nesting items`}),`
`,(0,s.jsx)(c.p,{children:`Items can be nested.`}),`
`,(0,s.jsx)(t,{of:o}),`
`,(0,s.jsx)(c.h2,{id:`menu-composition`,children:`Menu composition`}),`
`,(0,s.jsx)(c.p,{children:`Under the hood, menus are constructed using multiple components.`}),`
`,(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:`language-tsx`,children:`return (
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
`})})]})}function l(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}export{l as default};