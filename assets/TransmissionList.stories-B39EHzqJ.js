import{t as o}from"./transmissions-JRcvBKjD.js";import{T as m}from"./TransmissionList-B4o-BvXf.js";import"./iframe-CQ8LzMHp.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-R_YqYzqz.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ListItem-BwJteLX3.js";import"./Input-BKSTqttN.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ChevronUp-C1AG-Aka.js";import"./ChevronDown-BCthsF-h.js";import"./ChevronRight-ywpt7Pxk.js";import"./Section-NN2pd56z.js";import"./Flex-DjPJH1VJ.js";import"./Typography-C0hb-rov.js";import"./AttachmentList-CGZBmoTp.js";import"./AttachmentLink-D18NohXJ.js";import"./File-BaeUjrCA.js";import"./SeenByLog-DAUyKhlc.js";import"./SeenByLogItem-5rquWb4p.js";import"./Byline-DxUiDI_d.js";import"./SeenByLogButton-Ci-RKhSI.js";import"./Divider-d-9l0yLk.js";import"./List-DOKhwhdW.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
