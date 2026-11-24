import{t as o}from"./transmissions-D1gM_F7m.js";import{T as m}from"./TransmissionList-D1y8Okr1.js";import"./iframe-Cb83cNHz.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-Cr5kooML.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ListItem-DCX5xInW.js";import"./Input-DdatSh7d.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./Section-ClBUDaq7.js";import"./Flex-mAUGJKsG.js";import"./Typography-BPADIB9F.js";import"./AttachmentList-DDpcC4N-.js";import"./File-BKTqdUDP.js";import"./SeenByLog-CmW0n2M5.js";import"./SeenByLogItem-B9vzeZs3.js";import"./Byline-CgRs6b_9.js";import"./SeenByLogButton-c7Gxey98.js";import"./Divider-79FwmztS.js";import"./List-_fktTtX7.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
