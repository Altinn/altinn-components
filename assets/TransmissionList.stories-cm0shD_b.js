import{t as e}from"./TransmissionList-CPKKEZqi.js";import{t}from"./transmissions-BTYH87Aq.js";var n={title:`Inbox/TransmissionList`,component:e,tags:[`beta`],parameters:{},args:{items:t}},r={args:{}},i={args:{items:t.filter(e=>e?.type?.value===`submission`)}},a={args:{items:t.filter(e=>e?.type?.value!==`submission`)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...a.parameters?.docs?.source}}};var o=[`Default`,`Outgoing`,`Incoming`];export{r as Default,a as Incoming,i as Outgoing,o as __namedExportsOrder,n as default};