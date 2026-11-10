import{t as o}from"./transmissions-53MSWI_0.js";import{T as m}from"./TransmissionList-ChsagXgu.js";import"./iframe-DV5agHf5.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DiKHAU2_.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./ListItem-C8NpJCoV.js";import"./Input-CfHBGeL6.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./ChevronUp-CkyCCeXo.js";import"./ChevronDown-Brg3C2rz.js";import"./ChevronRight-DdV1IRY7.js";import"./Section-DqVAP5w4.js";import"./Flex-BRxWwGAq.js";import"./Typography-DklD6Rdi.js";import"./AttachmentList-Bs_zS8-R.js";import"./File-Cc85tsio.js";import"./SeenByLog-YMmpNLGR.js";import"./SeenByLogItem-Bokw7puu.js";import"./Byline-DlomEDOo.js";import"./SeenByLogButton-CHIekIbI.js";import"./Divider-C8C6WoRO.js";import"./List-DJ7avJ-_.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
