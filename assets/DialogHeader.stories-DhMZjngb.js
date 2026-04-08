import{n as e}from"./chunk-DseTPa7n.js";import{t}from"./DialogHeader-CsSw1Lk8.js";var n=e({Completed:()=>o,Default:()=>i,InProgress:()=>a,Loading:()=>s,WithBadge:()=>c,WithExtendedStatus:()=>l,WithTooltips:()=>u,__namedExportsOrder:()=>d,default:()=>r}),r={title:`Inbox/Dialog/DialogHeader`,component:t,tags:[`beta`],parameters:{},args:{title:`Title`,updatedAt:`1999-05-26`,updatedAtLabel:`26. mai 1999`,status:{value:`requires-attention`,label:`Krever handling`}}},i={args:{dueAt:`2025-04-01`,dueAtLabel:`Frist: 1. april 2025`}},a={args:{status:{value:`in-progress`,label:`Under arbeid`}}},o={args:{status:{value:`completed`,label:`Avsluttet`}}},s={args:{loading:!0}},c={args:{status:{value:`requires-attention`,label:`Krever handling`},badge:{color:`neutral`,label:`Arkiv`},title:`Kvittering for mottatt mva-melding som gjelder alminnelig næring for november – desember 2025`}},l={args:{status:{value:`requires-attention`,label:`Krever handling`},extendedStatusLabel:`Utvidet status`}},u={args:{status:{value:`in-progress`,label:`Under arbeid`},sentCount:1,receivedCount:2,activityLog:{label:`Aktivitetslogg`,onClick:()=>alert(`Open activity log`)},tooltips:{sent:`Sendte meldinger`,received:`Meldinger mottatt`,attachments:`Vedlegg`,activityLog:`Åpne aktivitetslogg`}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    dueAt: '2025-04-01',
    dueAtLabel: 'Frist: 1. april 2025'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid'
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet'
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      value: 'requires-attention',
      label: 'Krever handling'
    },
    extendedStatusLabel: 'Utvidet status'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`InProgress`,`Completed`,`Loading`,`WithBadge`,`WithExtendedStatus`,`WithTooltips`];export{o as Completed,i as Default,a as InProgress,s as Loading,c as WithBadge,l as WithExtendedStatus,u as WithTooltips,d as __namedExportsOrder,r as default,n as t};