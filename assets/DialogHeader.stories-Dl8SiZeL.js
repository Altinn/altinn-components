import{D as l}from"./DialogHeader-BUj1C5Yi.js";const i={title:"Inbox/Dialog/DialogHeader",component:l,tags:["beta"],parameters:{},args:{title:"Title",updatedAt:"1999-05-26",updatedAtLabel:"26. mai 1999",status:{value:"requires-attention",label:"Krever handling"}}},e={args:{dueAt:"2025-04-01",dueAtLabel:"Frist: 1. april 2025"}},t={args:{status:{value:"in-progress",label:"Under arbeid"}}},a={args:{status:{value:"completed",label:"Avsluttet"}}},r={args:{loading:!0}},s={args:{status:{value:"requires-attention",label:"Krever handling"},badge:{color:"neutral",label:"Arkiv"},title:"Kvittering for mottatt mva-melding som gjelder alminnelig næring for november – desember 2025"}},n={args:{status:{value:"requires-attention",label:"Krever handling"},extendedStatusLabel:"Utvidet status"}},o={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,receivedCount:2,activityLog:{label:"Aktivitetslogg",onClick:()=>alert("Open activity log")},tooltips:{sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",activityLog:"Åpne aktivitetslogg"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    dueAt: '2025-04-01',
    dueAtLabel: 'Frist: 1. april 2025'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    badge: {
      color: 'neutral',
      label: 'Arkiv'
    },
    title: 'Kvittering for mottatt mva-melding som gjelder alminnelig næring for november – desember 2025'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    extendedStatusLabel: 'Utvidet status'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    receivedCount: 2,
    activityLog: {
      label: 'Aktivitetslogg',
      onClick: () => alert('Open activity log')
    },
    tooltips: {
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      activityLog: 'Åpne aktivitetslogg'
    }
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","InProgress","Completed","Loading","WithBadge","WithExtendedStatus","WithTooltips"],u=Object.freeze(Object.defineProperty({__proto__:null,Completed:a,Default:e,InProgress:t,Loading:r,WithBadge:s,WithExtendedStatus:n,WithTooltips:o,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{a as C,e as D,t as I,r as L,u as a};
