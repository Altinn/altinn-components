import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,s as n}from"./blocks-BFztilWw.js";import{c as r,r as i}from"./SettingsList.stories-BZgDec6_.js";import{n as a}from"./lib-BuGdZX6V.js";import{Default as o,Value as s}from"./SettingsItem.stories-CCCE5ahx.js";var c=e();function l(e){let l={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Settings`}),`
`,(0,c.jsx)(l.h1,{id:`settings`,children:`Settings`}),`
`,(0,c.jsx)(l.p,{children:`Settings represents pieces of data that might be changed by the user, typically via a modal or a new page.`}),`
`,(0,c.jsx)(l.h2,{id:`settingsitem`,children:`SettingsItem`}),`
`,(0,c.jsx)(l.p,{children:`Settings without value is identified by a title. Use a text badge to indicate action.`}),`
`,(0,c.jsx)(t,{of:o}),`
`,(0,c.jsx)(l.p,{children:`Adding a value pushes the title up, focusing on the data. Badge can be used to summarize:`}),`
`,(0,c.jsx)(t,{of:s}),`
`,(0,c.jsx)(l.h2,{id:`settingslist`,children:`SettingsList`}),`
`,(0,c.jsxs)(l.p,{children:[`Use `,(0,c.jsx)(l.code,{children:`SettingsList`}),` to create a list of settings panels.`]}),`
`,(0,c.jsx)(t,{of:r}),`
`,(0,c.jsx)(l.h2,{id:`grouped-searchable-settings`,children:`Grouped, searchable settings`}),`
`,(0,c.jsxs)(l.p,{children:[(0,c.jsx)(l.code,{children:`SettingsList`}),` combined with a `,(0,c.jsx)(l.code,{children:`Toolbar`}),` to make it searchable.`]}),`
`,(0,c.jsx)(t,{of:i}),`
`,(0,c.jsx)(l.h2,{id:`composition`,children:`Composition`}),`
`,(0,c.jsxs)(l.p,{children:[`Settings are built using `,(0,c.jsx)(l.code,{children:`SettingsItem`}),`, `,(0,c.jsx)(l.code,{children:`List`}),` and `,(0,c.jsx)(l.code,{children:`Divider`}),`.`]}),`
`,(0,c.jsx)(l.pre,{children:(0,c.jsx)(l.code,{className:`language-tsx`,children:`return (
    <List>
      <SettingsItem />
      <Divider as="li" />
      <SettingsItem />
      <Divider as="li">
      <SettingsItem />
    </List>
);
`})})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}export{u as default};