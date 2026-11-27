import{t as o}from"./transmissions-D_Me0fFD.js";import{T as m}from"./TransmissionList-B68b_O8y.js";import"./iframe-qf9-WDF6.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-D3l47N4V.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ListItem-B1-OkTGq.js";import"./Input-tPq75GZ4.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ChevronUp-eh4muoQm.js";import"./ChevronDown-DGrlTQ0v.js";import"./ChevronRight-NAoaHsS_.js";import"./Section-ChrYIfRO.js";import"./Flex-CKfD6hy-.js";import"./Typography-BcM5UJCL.js";import"./AttachmentList-CajxCye7.js";import"./File-BSBOsVMB.js";import"./SeenByLog-DtPc8n-c.js";import"./SeenByLogItem-l0ae3HQt.js";import"./Byline-C9lpZQMK.js";import"./SeenByLogButton-CX4QSLJq.js";import"./Divider-R1x-egVD.js";import"./List-lwY1Olei.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
