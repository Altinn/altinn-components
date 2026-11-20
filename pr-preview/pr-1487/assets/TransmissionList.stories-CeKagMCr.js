import{t as o}from"./transmissions-CQD3OEx8.js";import{T as m}from"./TransmissionList-BZCni0lk.js";import"./iframe-DvHKorxQ.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-C7LSE7z7.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./ListItem-B8YJla-3.js";import"./Input-Bgd0BScM.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./Heading-Cl1YAvvB.js";import"./useHighlightedText-BTXbLxcU.js";import"./ChevronUp-CNwAnotn.js";import"./ChevronDown-CIQHUQdq.js";import"./ChevronRight-BUHnh-Yw.js";import"./Section-C_0CdUSc.js";import"./Flex-DGnnEuV7.js";import"./Typography-CvxYC9sf.js";import"./AttachmentList-DmQ1A0-l.js";import"./File-CTnx3ctd.js";import"./SeenByLog-BFxG64Oc.js";import"./SeenByLogItem-CzzHTiQq.js";import"./Byline-B9mjeQUZ.js";import"./SeenByLogButton-B-q0hgmR.js";import"./Divider-D-6a6wuG.js";import"./List-CM1tbUBe.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
