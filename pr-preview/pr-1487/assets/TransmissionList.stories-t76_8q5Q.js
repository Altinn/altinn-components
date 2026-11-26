import{t as o}from"./transmissions-VnM_6yDo.js";import{T as m}from"./TransmissionList-BLk97BjE.js";import"./iframe-DwHkmT0f.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-Ckst3fz0.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ListItem-Bk8TBf_Z.js";import"./Input-D6xvIcky.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";import"./ChevronRight-B3vSh-CA.js";import"./Section-BzvI0xQr.js";import"./Flex-DUzkq__j.js";import"./Typography-BKrXxvhH.js";import"./AttachmentList-CXchJiat.js";import"./File-LhKb0kQR.js";import"./SeenByLog-BvIWJTr1.js";import"./SeenByLogItem-C1u_oska.js";import"./Byline-Cj00QcSW.js";import"./SeenByLogButton-CunnkKh2.js";import"./Divider-zq1-fgGC.js";import"./List-DiIBXxb2.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
