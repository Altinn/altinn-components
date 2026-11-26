import{t as o}from"./transmissions-BJPu2iGJ.js";import{T as m}from"./TransmissionList-DONwyeOX.js";import"./iframe-ZrU_khjL.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CZjvf081.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ListItem-CX7K8M2d.js";import"./Input-pcnWwkdM.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ChevronUp-CSSlqESb.js";import"./ChevronDown-BB20zuC9.js";import"./ChevronRight-I-BGQZW2.js";import"./Section-dsTDEP7F.js";import"./Flex-DJ1B1xxZ.js";import"./Typography-FbkShcFO.js";import"./AttachmentList-geZaBfZl.js";import"./File-5uXifJQ_.js";import"./SeenByLog-BwfC2Fa9.js";import"./SeenByLogItem-BWbG1AH_.js";import"./Byline-DA-9AELx.js";import"./SeenByLogButton-B4-KxJHa.js";import"./Divider-CXHk2q9s.js";import"./List-YiG15duf.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
