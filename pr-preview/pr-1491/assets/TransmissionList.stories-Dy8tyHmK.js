import{t as o}from"./transmissions-BqpVK-kk.js";import{T as m}from"./TransmissionList-BjhtKOkM.js";import"./iframe-CmRPDbOf.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DTYazgUw.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./ListItem-DMNi5z0u.js";import"./Input-SsfERmB5.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./Typography-3Ni-pGxm.js";import"./AttachmentList-NJKoKt_s.js";import"./File-k9vroheU.js";import"./SeenByLog-DQiCjdfQ.js";import"./SeenByLogItem-D_2xME7m.js";import"./Byline-Br9s5xmQ.js";import"./SeenByLogButton-BGb_9FrL.js";import"./Divider-jsMRGXy0.js";import"./List-Dcrfn7hV.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
