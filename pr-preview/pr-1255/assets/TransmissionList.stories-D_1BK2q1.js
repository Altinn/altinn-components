import{t as o}from"./transmissions-eV-c4j2_.js";import{T as m}from"./TransmissionList-TEI0mCaR.js";import"./iframe-Dm8TtyEm.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BQk--jd_.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ListItem-BnnY9TO9.js";import"./Input-CDGaFfUN.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Heading-o839anme.js";import"./useHighlightedText-C_daNKpv.js";import"./ChevronUp-Bb-oLMAx.js";import"./ChevronDown-DmzEbvsc.js";import"./ChevronRight-C5Kx_riS.js";import"./Section-BrWI6aLb.js";import"./Flex-Cpk93h3c.js";import"./Typography-DQcL3Ryl.js";import"./AttachmentList-BTWdYO1a.js";import"./AttachmentLink-CkE9KfHa.js";import"./File-YR_MUViC.js";import"./SeenByLog-BaKWZaJq.js";import"./SeenByLogButton-BOGbpw48.js";import"./SeenByLogItem-DDMFj2Cp.js";import"./Byline-BVGszpIB.js";import"./Divider-pCPpdy6V.js";import"./List-Ci6hifXv.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
