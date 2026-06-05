import{t as o}from"./transmissions-BmDn8z6w.js";import{T as m}from"./TransmissionList-CzKK2SwU.js";import"./iframe-DWxW88Wb.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Bfkk_XyP.js";import"./Badge-Dmc2yD_5.js";import"./Tooltip-Cxw5k6PG.js";import"./ListItem-h0zDIFg3.js";import"./Input-CPaqJzda.js";import"./Avatar-C1EBlka3.js";import"./AvatarGroup-BXtad5OG.js";import"./Heading-Dg7_b6ZQ.js";import"./useHighlightedText-Kme-_nwy.js";import"./ChevronUp-CEtfk9lQ.js";import"./ChevronDown-BB-XUZ3B.js";import"./ChevronRight-CaZE672G.js";import"./Section-B1-gfm2g.js";import"./Flex-DNJfc4Fp.js";import"./Typography-Dvuik0pJ.js";import"./AttachmentList-w7F7JAj1.js";import"./AttachmentLink-DtvH0gyb.js";import"./File-Cc3ELiht.js";import"./SeenByLog-Bt5gSRHv.js";import"./SeenByLogButton-BCCK4dRQ.js";import"./SeenByLogItem-CElNM5lt.js";import"./Byline-BVJnKeQI.js";import"./Divider-tW0gGZwQ.js";import"./List-Dkeu-ZWi.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const A=["Default","Outgoing","Incoming"];export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
