import{t as o}from"./transmissions-B1yb5S56.js";import{T as m}from"./TransmissionList-DPnIo4M3.js";import"./iframe-C2TXN9Gt.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-B8sKjSDm.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ListItem-GzrLSPBi.js";import"./Input-DCxTW5af.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ChevronUp-JvKfy9Td.js";import"./ChevronDown-5BC-Ndiq.js";import"./ChevronRight-B3qMZH3P.js";import"./Section-SNWVUlRZ.js";import"./Flex-DqWQ_o-P.js";import"./Typography-DMeULRXh.js";import"./AttachmentList-ZkkIYjuA.js";import"./AttachmentLink-HtBXwvSR.js";import"./File-B9o2-Inw.js";import"./SeenByLog-B24XaogK.js";import"./SeenByLogItem-CUiuPmkf.js";import"./Byline-DK66ofGy.js";import"./SeenByLogButton-CtNC8-iM.js";import"./Divider-Bl4NdbOx.js";import"./List-BlCHXrfZ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
