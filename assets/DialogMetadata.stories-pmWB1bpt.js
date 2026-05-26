import{D as d}from"./DialogMetadata-C4ugw0DP.js";const p={title:"Inbox/Dialog/DialogMetadata",component:d,tags:["autodocsi","beta"],parameters:{},args:{updatedAt:"1999-05-26",updatedAtLabel:"26. mai 1999 kl 22:45"}},e={args:{draftsLabel:"Utkast"}},t={args:{status:{value:"requires-attention",label:"Krever handling"},dueAt:"2000-01-01",dueAtLabel:"Frist: 1. januar 2001"}},a={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,attachmentsCount:1}},s={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1}},r={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1,archivedAt:"1999-05-26",archivedAtLabel:"Arkivert"}},n={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1,trashedAt:"1999-05-26",trashedAtLabel:"Slettet"}},o={args:{status:{value:"not-applicable"}}},u={args:{status:{value:"not-applicable"},sentCount:2,receivedCount:4}},l={args:{status:{value:"completed",label:"Avsluttet"},activityLog:{label:"Aktivitetslogg",onClick:()=>alert("Open activity log")}}},c={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,attachmentsCount:2}},i={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,receivedCount:2,attachmentsCount:2,tooltips:{status:"Tjenesteiers status",extendedStatus:"Utvidet status",sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",updatedAt:"Sist oppdatert",dueAt:"Frist",trashedAt:"Slettet",archivedAt:"Arkivert",transmissions:"Overførsler",activityLog:"Aktivitetslogg"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    draftsLabel: 'Utkast'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    dueAt: '2000-01-01',
    dueAtLabel: 'Frist: 1. januar 2001'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    attachmentsCount: 1
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1,
    archivedAt: '1999-05-26',
    archivedAtLabel: 'Arkivert'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1,
    trashedAt: '1999-05-26',
    trashedAtLabel: 'Slettet'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    }
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    },
    sentCount: 2,
    receivedCount: 4
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    activityLog: {
      label: 'Aktivitetslogg',
      onClick: () => alert('Open activity log')
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    attachmentsCount: 2
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    receivedCount: 2,
    attachmentsCount: 2,
    tooltips: {
      status: 'Tjenesteiers status',
      extendedStatus: 'Utvidet status',
      sent: 'Sendte meldinger',
      received: 'Meldinger mottatt',
      attachments: 'Vedlegg',
      updatedAt: 'Sist oppdatert',
      dueAt: 'Frist',
      trashedAt: 'Slettet',
      archivedAt: 'Arkivert',
      transmissions: 'Overførsler',
      activityLog: 'Aktivitetslogg'
    }
  }
}`,...i.parameters?.docs?.source}}};const m=["Draft","RequiresAttention","InProgress","Completed","Archived","Trashed","NotApplicable","Transmissions","ActivityLog","WithExtendedStatus","WithTooltips"],v=Object.freeze(Object.defineProperty({__proto__:null,ActivityLog:l,Archived:r,Completed:s,Draft:e,InProgress:a,NotApplicable:o,RequiresAttention:t,Transmissions:u,Trashed:n,WithExtendedStatus:c,WithTooltips:i,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{l as A,s as C,v as D,a as I,o as N,t as R,u as T,e as a};
