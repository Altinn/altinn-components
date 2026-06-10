import{t as o}from"./transmissions-DYbqd67e.js";import{T as m}from"./TransmissionList-Ca6JfujY.js";import"./iframe-Da53zzTq.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Cf-8kAbs.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./ListItem-y8d5EwTe.js";import"./Input-CoMQYpcI.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./Heading-DscqP9Yc.js";import"./useHighlightedText-CRKmbQjK.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./ChevronRight-R352om1g.js";import"./Section-CfHJUgK6.js";import"./Flex-D2KvdX5w.js";import"./Typography-Dy4MqSc4.js";import"./AttachmentList-D2h3BdC5.js";import"./AttachmentLink-i4u3HzQs.js";import"./File-XsMHpKEw.js";import"./SeenByLog-Do7e92Wb.js";import"./SeenByLogButton-D-mIGfzG.js";import"./SeenByLogItem-B-9AvCIR.js";import"./Byline-CsqAXxYk.js";import"./Divider-Dx5Ajhn-.js";import"./List-CC5ASBuj.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
