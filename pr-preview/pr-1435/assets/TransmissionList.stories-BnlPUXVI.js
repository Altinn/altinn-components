import{t as o}from"./transmissions-vthpPgZK.js";import{T as m}from"./TransmissionList-e_SX2nKg.js";import"./iframe-uBWg0zsp.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CmI6oaLA.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ListItem-DZSp_PZG.js";import"./Input-BX-kD412.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./Typography-nYxE8-3g.js";import"./AttachmentList-AvypWfxY.js";import"./AttachmentLink-06aMqPwJ.js";import"./File-RxoSb9Tf.js";import"./SeenByLog-ByNemD-0.js";import"./SeenByLogItem-Dut_1a95.js";import"./Byline-9oMI9IrU.js";import"./SeenByLogButton-BPkFIVeQ.js";import"./Divider-CsxBHb0r.js";import"./List-CPfTuEIO.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
