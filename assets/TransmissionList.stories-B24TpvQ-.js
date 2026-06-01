import{t as o}from"./transmissions-kvTpjVkW.js";import{T as m}from"./TransmissionList-DvQ1o0Dw.js";import"./iframe-HmDeAVAp.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DGSAp2vj.js";import"./Badge-DVsrmVw9.js";import"./index-CDtevUxF.js";import"./Tooltip-DFVNjhLt.js";import"./tooltip-DaXe8rKK.js";import"./ListItem-u6nNWWO6.js";import"./Button-SB9AH0kY.js";import"./Input-Dd7kdPyi.js";import"./XMark-DFSmJjac.js";import"./useId-BNhfXdUV.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./Typography-C3y2BBzr.js";import"./AttachmentList-C0we0tyH.js";import"./AttachmentLink-Dqsf_6G1.js";import"./File-CRhlQE9B.js";import"./SeenByLog-rCRiwdIb.js";import"./SeenByLogButton-Cc0VSfrP.js";import"./SeenByLogItem-BgewTT5Y.js";import"./Byline-CbAX77ox.js";import"./Divider-BIbR-R0K.js";import"./List-CZwq9NP_.js";const J={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},r={args:{}},s={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","Outgoing","Incoming"];export{r as Default,t as Incoming,s as Outgoing,K as __namedExportsOrder,J as default};
