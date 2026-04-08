import{n as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-DwqL_Y-t.js";import{t as n}from"./DialogListGroup--vVbngCh.js";import{t as r}from"./inboxSection-DTkdJGPT.js";import{t as i}from"./inboxSearchResults-hZXwd8_3.js";var a=e({AsLink:()=>d,GroupedByDate:()=>c,Loading:()=>m,SearchResults:()=>l,SingleGroup:()=>u,Ungrouped:()=>f,WithExtendedStatus:()=>p,__namedExportsOrder:()=>h,default:()=>s}),o=t(),s={title:`Inbox/DialogList`,component:n,tags:[`beta`],args:{...r}},c={args:{}},l={args:i},u={args:{items:r.items.filter(e=>e.archived).map(e=>({...e,groupId:`archived`})),groups:{archived:{title:`Arkivert`,description:(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`strong`,{children:`Her finner du dialoger du har valgt å arkivere.`}),` Det er ikke et journal- og arkivsystem. Om dialogen blir oppdatert vil du finne den igjen i innboksen.`]})}}}},d={args:{items:r.items.map(e=>({...e,as:`a`,href:`#`}))}},f={args:{groups:void 0}},p={args:{items:r.items.slice(0,5).map((e,t)=>({...e,extendedStatusLabel:t%2==0?`Venter på svar`:void 0}))}},m={args:{items:r.items.slice(0,5).map(e=>({...e,loading:!0}))}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: inboxSearchResults
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.filter(item => item.archived).map(item => ({
      ...item,
      groupId: 'archived'
    })),
    groups: {
      archived: {
        title: 'Arkivert',
        description: <p>
            <strong>Her finner du dialoger du har valgt å arkivere.</strong> Det er ikke et journal- og arkivsystem. Om
            dialogen blir oppdatert vil du finne den igjen i innboksen.
          </p>
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.map(item => ({
      ...item,
      as: 'a',
      href: '#'
    }))
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    groups: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined
    }))
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map(item => ({
      ...item,
      loading: true
    }))
  }
}`,...m.parameters?.docs?.source}}};var h=[`GroupedByDate`,`SearchResults`,`SingleGroup`,`AsLink`,`Ungrouped`,`WithExtendedStatus`,`Loading`];export{d as AsLink,c as GroupedByDate,m as Loading,l as SearchResults,u as SingleGroup,f as Ungrouped,p as WithExtendedStatus,h as __namedExportsOrder,s as default,a as t};