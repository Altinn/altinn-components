import{t as o}from"./transmissions-MECdG5rN.js";import{T as m}from"./TransmissionList-CFJbDiB-.js";import"./iframe-2h8IP8d3.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-iTPk3m8D.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ListItem-Cu2B-552.js";import"./Input-CcSuNkw7.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./ChevronRight-Bz8Cr0I4.js";import"./Section-CJtHgorM.js";import"./Flex-CMEhZHn2.js";import"./Typography-DY06DO0f.js";import"./AttachmentList-DHYQNZ21.js";import"./AttachmentLink-SDRY7jRt.js";import"./File-DYZYA0UQ.js";import"./SeenByLog-AQtmfeZr.js";import"./SeenByLogButton-D2r0feXh.js";import"./SeenByLogItem-uO44ZNgk.js";import"./Byline-CFuFEoPr.js";import"./Divider-aEHEf4IL.js";import"./List-BAuO8R5u.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
