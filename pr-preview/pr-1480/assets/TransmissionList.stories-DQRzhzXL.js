import{t as o}from"./transmissions-BvhLXuef.js";import{T as m}from"./TransmissionList-nA6GTX3e.js";import"./iframe-SD2JkkBx.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-ChbhjoUF.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ListItem-CV9xUqsO.js";import"./Input-Fr_9ZdVX.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./Heading-Bxu0IPlw.js";import"./useHighlightedText-BOE_uc-4.js";import"./ChevronUp-hnI_g5yp.js";import"./ChevronDown-ComuAOz9.js";import"./ChevronRight-N_DPzqc2.js";import"./Section-CUNFbhwF.js";import"./Flex-BqyCauEo.js";import"./Typography-DYbohGA0.js";import"./AttachmentList-C--2t-96.js";import"./File-DkK75A56.js";import"./SeenByLog-CqIqCUhW.js";import"./SeenByLogItem-ZV8Zher_.js";import"./Byline-U-NonX0W.js";import"./SeenByLogButton-C3szzft3.js";import"./Divider-DYFwRd_j.js";import"./List-BiUjIitt.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
