import{t as o}from"./transmissions-DxlARz0r.js";import{T as m}from"./TransmissionList-C2CQm1wH.js";import"./iframe-CId_qj2z.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-7IxwdAi8.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ListItem-UVHT4kno.js";import"./Input-qq9zM3Qu.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./Typography-DeDqtkyf.js";import"./AttachmentList-rs7PYyOw.js";import"./AttachmentLink-BJAHWY7G.js";import"./File-DcQu0ABL.js";import"./SeenByLog-XA0ZCo37.js";import"./SeenByLogItem-CLRPdM7M.js";import"./Byline-DOwBsB16.js";import"./SeenByLogButton-IbBafQwy.js";import"./Divider-B3nRNDbv.js";import"./List-DXvLeeCM.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
