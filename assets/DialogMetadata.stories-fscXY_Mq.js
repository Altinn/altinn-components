import{D as u}from"./DialogMetadata-Bm__MPYx.js";const d={title:"Inbox/Dialog/DialogMetadata",component:u,tags:["autodocsi","beta"],parameters:{},args:{updatedAt:"1999-05-26",updatedAtLabel:"26. mai 1999 kl 22:45"}},e={args:{draftsLabel:"Utkast"}},t={args:{status:{value:"requires-attention",label:"Krever handling"},dueAt:"2000-01-01",dueAtLabel:"Frist: 1. januar 2001"}},a={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,attachmentsCount:1}},s={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1}},r={args:{status:{value:"not-applicable"}}},n={args:{status:{value:"not-applicable"},sentCount:2,receivedCount:4}},o={args:{status:{value:"completed",label:"Avsluttet"},activityLog:{label:"Aktivitetslogg",onClick:()=>alert("Open activity log")}}},i={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,attachmentsCount:2}},l={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,receivedCount:2,attachmentsCount:2,tooltips:{status:"Tjenesteiers status",extendedStatus:"Utvidet status",sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",updatedAt:"Sist oppdatert",dueAt:"Frist",trashedAt:"Slettet",archivedAt:"Arkivert",transmissions:"Overførsler",activityLog:"Aktivitetslogg"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      value: 'not-applicable'
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    },
    sentCount: 2,
    receivedCount: 4
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    attachmentsCount: 2
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const c=["Draft","RequiresAttention","InProgress","Completed","NotApplicable","Transmissions","ActivityLog","WithExtendedStatus","WithTooltips"],g=Object.freeze(Object.defineProperty({__proto__:null,ActivityLog:o,Completed:s,Draft:e,InProgress:a,NotApplicable:r,RequiresAttention:t,Transmissions:n,WithExtendedStatus:i,WithTooltips:l,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{o as A,s as C,g as D,a as I,r as N,t as R,n as T,e as a};
