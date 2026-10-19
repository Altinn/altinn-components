import{t as o}from"./transmissions-vBYwo6jF.js";import{T as m}from"./TransmissionList-DOZNYW5F.js";import"./iframe-BhbNl8M-.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BGQuJZz1.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ListItem-BZwC__IQ.js";import"./Input-jGspNcB3.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./Typography-DcyIPmTi.js";import"./AttachmentList-D0ts3BtR.js";import"./AttachmentLink-C9qZJGLd.js";import"./File-CtbY2wj6.js";import"./SeenByLog-jHaMO83N.js";import"./SeenByLogItem-C7e2jWPn.js";import"./Byline-Dz5EAti2.js";import"./SeenByLogButton-BqPCRn1z.js";import"./Divider-DT7uBvpy.js";import"./List-CK1afVUo.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
