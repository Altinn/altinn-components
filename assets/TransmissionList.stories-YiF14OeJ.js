import{t as o}from"./transmissions-CMFoRNwj.js";import{T as m}from"./TransmissionList-sbOxNS-H.js";import"./iframe-Dvni_u8W.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-bpCDNr99.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./ListItem-Bbbg2QAe.js";import"./Input-B7CJ0KIf.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Heading-CzH7HB6a.js";import"./useHighlightedText-CLLTD9Wh.js";import"./ChevronUp-B-cuVFt7.js";import"./ChevronDown-wy-_efuj.js";import"./ChevronRight-CHz63rRB.js";import"./Section-CvMDXfkz.js";import"./Flex-C0xjv22N.js";import"./Typography-UWzQw34I.js";import"./AttachmentList-Dbu8xaXY.js";import"./AttachmentLink-CKWyuJWk.js";import"./File-DcYi9Dt9.js";import"./SeenByLog-B0Ps7geD.js";import"./SeenByLogItem-DKF7ayI4.js";import"./Byline-nZjd9pzD.js";import"./SeenByLogButton-1fPu8lbH.js";import"./Divider-4VO8Bne5.js";import"./List-Dh2JDjT0.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
