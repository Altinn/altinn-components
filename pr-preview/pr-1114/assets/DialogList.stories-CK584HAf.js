import{j as c}from"./iframe-COdTICiz.js";import{i as m}from"./inboxSection-fGTUPXPH.js";import{D as p}from"./DialogListGroup-Cl0lDSlh.js";import{i as u}from"./inboxSearchResults-Bq8RkF8x.js";const g={title:"Inbox/DialogList",component:p,tags:["beta"],args:{...m}},r={args:{}},s={args:u},a={args:{items:m.items.filter(e=>e.archived).map(e=>({...e,groupId:"archived"})),groups:{archived:{title:"Arkivert",description:c.jsxs("p",{children:[c.jsx("strong",{children:"Her finner du dialoger du har valgt å arkivere."})," Det er ikke et journal- og arkivsystem. Om dialogen blir oppdatert vil du finne den igjen i innboksen."]})}}}},t={args:{items:m.items.map(e=>({...e,as:"a",href:"#"}))}},n={args:{groups:void 0}},i={args:{items:m.items.slice(0,5).map((e,d)=>({...e,extendedStatusLabel:d%2===0?"Venter på svar":void 0}))}},o={args:{items:m.items.slice(0,5).map(e=>({...e,loading:!0}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: inboxSearchResults
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.map(item => ({
      ...item,
      as: 'a',
      href: '#'
    }))
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    groups: undefined
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined
    }))
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map(item => ({
      ...item,
      loading: true
    }))
  }
}`,...o.parameters?.docs?.source}}};const l=["GroupedByDate","SearchResults","SingleGroup","AsLink","Ungrouped","WithExtendedStatus","Loading"],h=Object.freeze(Object.defineProperty({__proto__:null,AsLink:t,GroupedByDate:r,Loading:o,SearchResults:s,SingleGroup:a,Ungrouped:n,WithExtendedStatus:i,__namedExportsOrder:l,default:g},Symbol.toStringTag,{value:"Module"}));export{h as D,r as G};
