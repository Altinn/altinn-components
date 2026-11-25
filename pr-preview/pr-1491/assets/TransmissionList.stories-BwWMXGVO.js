import{t as o}from"./transmissions-Dpu87t2y.js";import{T as m}from"./TransmissionList-fWsmQDHt.js";import"./iframe-Df5nkPs8.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DnvRasP9.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ListItem-CKAIQUXg.js";import"./Input-B9TaRlMe.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./ChevronUp-Bz4Vcv4a.js";import"./ChevronDown-DdFcAhZa.js";import"./ChevronRight-DJP358BJ.js";import"./Section-CNSG608H.js";import"./Flex-CYtO0dFj.js";import"./Typography-W78b6WhV.js";import"./AttachmentList-7ACD9eZ-.js";import"./File-B33TLJFO.js";import"./SeenByLog-Dc4d3s12.js";import"./SeenByLogItem-Cq_QBPBr.js";import"./Byline-B553uJld.js";import"./SeenByLogButton-C1KNupAO.js";import"./Divider-CRFwcBoK.js";import"./List-is81LYk6.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
