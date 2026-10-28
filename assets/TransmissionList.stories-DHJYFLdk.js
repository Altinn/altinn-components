import{t as o}from"./transmissions-BsjnYxyU.js";import{T as m}from"./TransmissionList-DWUikWCR.js";import"./iframe-zDfzPjQ-.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DK02xSEB.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ListItem-Ch60BFaY.js";import"./Input-Cng2zass.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./Typography-D20OWptm.js";import"./AttachmentList-CuBDmbgq.js";import"./AttachmentLink-DbuUV9bs.js";import"./File-B3m0V8Cf.js";import"./SeenByLog-Cs0TRicJ.js";import"./SeenByLogItem-C_Z0TIFQ.js";import"./Byline-TWFgJpOx.js";import"./SeenByLogButton-CwyKZdOr.js";import"./Divider-DfF_JaXt.js";import"./List-CN9gT4yl.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
