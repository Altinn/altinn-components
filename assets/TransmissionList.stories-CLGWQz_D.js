import{t as o}from"./transmissions-BASrRNZL.js";import{T as m}from"./TransmissionList-9Dkae83d.js";import"./iframe-Cf4UALw8.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BmtSXzAF.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ListItem-BdmDs4G2.js";import"./Input-OKh8JSaI.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./Typography-CsGx0b_o.js";import"./AttachmentList-B2gdev-5.js";import"./File-BaLosNIu.js";import"./SeenByLog-BwRKuZXW.js";import"./SeenByLogItem-r8KMLusj.js";import"./Byline-CQqrvp19.js";import"./SeenByLogButton-CqYd7EB7.js";import"./Divider-BlUpxxSf.js";import"./List-C8bvHqyv.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
