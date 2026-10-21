import{t as o}from"./transmissions-QGIzRuA-.js";import{T as m}from"./TransmissionList-CdwM_0AS.js";import"./iframe-CW69B4-4.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CBiX_7Rs.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ListItem-CLQ2Xgr8.js";import"./Input-BNHnVUMY.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";import"./ChevronRight-CxFkThxw.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./Typography-CD2WmtRN.js";import"./AttachmentList-BZXM6mjp.js";import"./AttachmentLink-Can7BI-h.js";import"./File--iyq1SAt.js";import"./SeenByLog-CnxIfI3U.js";import"./SeenByLogItem-Cph50qBz.js";import"./Byline-xzuOcDfP.js";import"./SeenByLogButton-Dbg3fCQo.js";import"./Divider-DY5AwWgq.js";import"./List-RfjPrYOy.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
