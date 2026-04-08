import{n as e}from"./chunk-DseTPa7n.js";import{t}from"./DialogMetadata-DaFd4Ww1.js";var n=e({ActivityLog:()=>u,Completed:()=>s,Draft:()=>i,InProgress:()=>o,NotApplicable:()=>c,RequiresAttention:()=>a,Transmissions:()=>l,WithExtendedStatus:()=>d,WithTooltips:()=>f,__namedExportsOrder:()=>p,default:()=>r}),r={title:`Inbox/Dialog/DialogMetadata`,component:t,tags:[`autodocsi`,`beta`],parameters:{},args:{updatedAt:`1999-05-26`,updatedAtLabel:`26. mai 1999 kl 22:45`}},i={args:{draftsLabel:`Utkast`}},a={args:{status:{value:`requires-attention`,label:`Krever handling`},dueAt:`2000-01-01`,dueAtLabel:`Frist: 1. januar 2001`}},o={args:{status:{value:`in-progress`,label:`Under arbeid`},sentCount:1,attachmentsCount:1}},s={args:{status:{value:`completed`,label:`Avsluttet`},sentCount:1,attachmentsCount:1,receivedCount:1}},c={args:{status:{value:`not-applicable`}}},l={args:{status:{value:`not-applicable`},sentCount:2,receivedCount:4}},u={args:{status:{value:`completed`,label:`Avsluttet`},activityLog:{label:`Aktivitetslogg`,onClick:()=>alert(`Open activity log`)}}},d={args:{status:{value:`in-progress`,label:`Under arbeid`},extendedStatusLabel:`Venter på svar`,sentCount:1,attachmentsCount:2}},f={args:{status:{value:`in-progress`,label:`Under arbeid`},extendedStatusLabel:`Venter på svar`,sentCount:1,receivedCount:2,attachmentsCount:2,tooltips:{status:`Tjenesteiers status`,extendedStatus:`Utvidet status`,sent:`Sendte meldinger`,received:`Meldinger mottatt`,attachments:`Vedlegg`,updatedAt:`Sist oppdatert`,dueAt:`Frist`,trashedAt:`Slettet`,archivedAt:`Arkivert`,transmissions:`Overførsler`,activityLog:`Aktivitetslogg`}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    draftsLabel: 'Utkast'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    dueAt: '2000-01-01',
    dueAtLabel: 'Frist: 1. januar 2001'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    sentCount: 1,
    attachmentsCount: 1
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    },
    sentCount: 1,
    attachmentsCount: 1,
    receivedCount: 1
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'not-applicable'
    },
    sentCount: 2,
    receivedCount: 4
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    },
    extendedStatusLabel: 'Venter på svar',
    sentCount: 1,
    attachmentsCount: 2
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Draft`,`RequiresAttention`,`InProgress`,`Completed`,`NotApplicable`,`Transmissions`,`ActivityLog`,`WithExtendedStatus`,`WithTooltips`];export{u as ActivityLog,s as Completed,i as Draft,o as InProgress,c as NotApplicable,a as RequiresAttention,l as Transmissions,d as WithExtendedStatus,f as WithTooltips,p as __namedExportsOrder,r as default,n as t};