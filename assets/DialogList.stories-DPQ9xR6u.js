import{j as r}from"./iframe-Bs6hWG43.js";import{i as c}from"./inboxSection-Bi2cupc0.js";import{D as u}from"./DialogList-CZ-Z0zve.js";import{i as l}from"./inboxSearchResults-OjYEKx7F.js";import{B as d}from"./Button-eHvnmE12.js";const g={title:"Inbox/DialogList",component:u,tags:["beta"],args:{...c}},s={args:{}},t={args:{title:"14 treff i innboks",description:r.jsxs("p",{children:["Begrens søket til"," ",r.jsx(d,{variant:"tinted",size:"mini",children:"Innboks"})," ",r.jsx(d,{variant:"tinted",size:"mini",children:"Arkiv"})," eller ",r.jsx(d,{variant:"tinted",size:"mini",children:"Papirkurv"})]}),items:l.items,groups:{}}},i={args:{description:r.jsx("p",{children:"Her finner du dialoger du har valgt å arkivere."}),items:c.items.filter(e=>e.archived).map(e=>({...e,groupId:"archived"}))}},a={args:{items:c.items.map(e=>({...e,as:"a",href:"#"}))}},n={args:{groups:void 0}},o={args:{items:c.items.slice(0,5).map((e,p)=>({...e,extendedStatusLabel:p%2===0?"Venter på svar":void 0}))}},m={args:{items:c.items.slice(0,5).map(e=>({...e,loading:!0}))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '14 treff i innboks',
    description: <p>
        Begrens søket til{' '}
        <Button variant="tinted" size="mini">
          Innboks
        </Button>{' '}
        <Button variant="tinted" size="mini">
          Arkiv
        </Button>
        {' eller '}
        <Button variant="tinted" size="mini">
          Papirkurv
        </Button>
      </p>,
    items: inboxSearchResults.items,
    groups: {}
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    description: <p>Her finner du dialoger du har valgt å arkivere.</p>,
    items: inboxSection.items.filter(item => item.archived).map(item => ({
      ...item,
      groupId: 'archived'
    }))
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.map(item => ({
      ...item,
      as: 'a',
      href: '#'
    }))
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    groups: undefined
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined
    }))
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: inboxSection.items.slice(0, 5).map(item => ({
      ...item,
      loading: true
    }))
  }
}`,...m.parameters?.docs?.source}}};const v=["GroupedByDate","SearchResults","Description","AsLink","Ungrouped","WithExtendedStatus","Loading"],k=Object.freeze(Object.defineProperty({__proto__:null,AsLink:a,Description:i,GroupedByDate:s,Loading:m,SearchResults:t,Ungrouped:n,WithExtendedStatus:o,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{k as D,s as G};
