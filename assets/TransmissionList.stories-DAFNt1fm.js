import{t as o}from"./transmissions-bged7fI4.js";import{T as m}from"./TransmissionList-CltZtaml.js";import"./iframe-Ck42qOx1.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-C8xxaWGv.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ListItem-DshHRfE3.js";import"./Input-DGLuCKOz.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./ChevronRight-DWZnEevf.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./Typography-nObbjg0R.js";import"./AttachmentList-BBT8MduF.js";import"./AttachmentLink-DyMYhyn8.js";import"./File-nCWJpnOO.js";import"./SeenByLog-CfNk5cML.js";import"./SeenByLogItem-D-0zi5HW.js";import"./Byline-DtMU233V.js";import"./SeenByLogButton-CmVA8_Co.js";import"./Divider-CNMs3h7U.js";import"./List-Cq42YOlE.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
