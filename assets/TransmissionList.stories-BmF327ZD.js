import{t as o}from"./transmissions-ChvDvewq.js";import{T as m}from"./TransmissionList-BnMUKms4.js";import"./iframe-BmEoWqRz.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-wpiyWQFw.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./ListItem-Dqx_OQ9-.js";import"./Input-DDCcqldd.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./Heading-CSNATJ_q.js";import"./useHighlightedText-_GRR2uH-.js";import"./ChevronUp-BklxGwTc.js";import"./ChevronDown-5iss_T7m.js";import"./ChevronRight-CG1CTQrY.js";import"./Section-BwWH83Jj.js";import"./Flex-CErGdajF.js";import"./Typography-BVfh1yLf.js";import"./AttachmentList-AX2tegjt.js";import"./AttachmentLink-CTxY4bQB.js";import"./File-BKN_-yRy.js";import"./SeenByLog-5Xx5T7Qm.js";import"./SeenByLogItem-CWx1UnUI.js";import"./Byline-CmyK_i-T.js";import"./SeenByLogButton-DnoPuC_l.js";import"./Divider-3tC3wFvg.js";import"./List-B_joIc0t.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
