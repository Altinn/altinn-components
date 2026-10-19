import{t as o}from"./transmissions-CBfmqBxk.js";import{T as m}from"./TransmissionList-DPo2TXc8.js";import"./iframe-C7zNVDTT.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DDBSCaLG.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ListItem-taDywDuL.js";import"./Input-CFKt0A_s.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./Typography-4gq5i4xU.js";import"./AttachmentList-Ds9QYH06.js";import"./AttachmentLink-Dx6bq-jk.js";import"./File-DFpEzsx5.js";import"./SeenByLog-BdhoqJu8.js";import"./SeenByLogItem-BiV_dEcT.js";import"./Byline-9WqjKM1E.js";import"./SeenByLogButton-Jr5X6a2N.js";import"./Divider-B8BEf1fJ.js";import"./List-Eab06pgk.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
