import{D as m}from"./DialogMetadata-BuxrJiP1.js";const g={title:"Inbox/Dialog/DialogMetadata",component:m,tags:["autodocsi","beta"],parameters:{},args:{updatedAt:"1999-05-26",updatedAtLabel:"26. mai 1999 kl 22:45"}},e={args:{draftsLabel:"Utkast"}},t={args:{status:{value:"requires-attention",label:"Krever handling"}}},a={args:{status:{value:"requires-attention",label:"Krever handling"},dueAt:"2000-01-01",dueAtLabel:"Frist: 1. januar 2001"}},s={args:{status:{value:"requires-attention",label:"Krever handling"},dueAt:"2000-01-01",dueAtExpired:!0,dueAtLabel:"Frist utgått: 1. januar 2001"}},r={args:{status:{value:"in-progress",label:"Under arbeid"},sentCount:1,attachmentsCount:1}},n={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1}},o={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1,archivedAt:"1999-05-26",archivedAtLabel:"Arkivert"}},u={args:{status:{value:"completed",label:"Avsluttet"},sentCount:1,attachmentsCount:1,receivedCount:1,trashedAt:"1999-05-26",trashedAtLabel:"Slettet"}},l={args:{status:{value:"not-applicable"}}},i={args:{status:{value:"not-applicable"},sentCount:2,receivedCount:4}},d={args:{status:{value:"completed",label:"Avsluttet"},activityLog:{label:"Aktivitetslogg",onClick:()=>alert("Open activity log")}}},c={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,attachmentsCount:2}},p={args:{status:{value:"in-progress",label:"Under arbeid"},extendedStatusLabel:"Venter på svar",sentCount:1,receivedCount:2,attachmentsCount:2,tooltips:{status:"Tjenesteiers status",extendedStatus:"Utvidet status",sent:"Sendte meldinger",received:"Meldinger mottatt",attachments:"Vedlegg",updatedAt:"Sist oppdatert",dueAt:"Frist",trashedAt:"Slettet",archivedAt:"Arkivert",transmissions:"Overførsler",activityLog:"Aktivitetslogg"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    draftsLabel: 'Utkast'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    dueAt: '2000-01-01',
    dueAtLabel: 'Frist: 1. januar 2001'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    dueAt: '2000-01-01',
    dueAtExpired: true,
    dueAtLabel: 'Frist utgått: 1. januar 2001'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    attachmentsCount: 1
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    },
    sentCount: 2,
    receivedCount: 4
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    attachmentsCount: 2
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const v=["Draft","RequiresAttention","DueAt","DueAtExpired","InProgress","Completed","Archived","Trashed","NotApplicable","Transmissions","ActivityLog","WithExtendedStatus","WithTooltips"],b=Object.freeze(Object.defineProperty({__proto__:null,ActivityLog:d,Archived:o,Completed:n,Draft:e,DueAt:a,DueAtExpired:s,InProgress:r,NotApplicable:l,RequiresAttention:t,Transmissions:i,Trashed:u,WithExtendedStatus:c,WithTooltips:p,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{d as A,n as C,b as D,r as I,l as N,t as R,i as T,e as a,a as b,s as c};
