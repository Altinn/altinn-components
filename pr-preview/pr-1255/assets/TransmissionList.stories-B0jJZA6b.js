import{t as o}from"./transmissions-1pf-v0D8.js";import{T as m}from"./TransmissionList-BrF-PXM7.js";import"./iframe-DH0sUlof.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DCQ3zBPm.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ListItem-B0cRuGOu.js";import"./Input-CNoKo11u.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";import"./Section-DMcOoGW4.js";import"./Flex-D6bQl7-N.js";import"./Typography-PtbhQdVx.js";import"./AttachmentList-DNuDDRmt.js";import"./AttachmentLink-B2Vg0nQN.js";import"./File-cqMoKmQT.js";import"./SeenByLog-b_1ZK6Kd.js";import"./SeenByLogButton-CtN-F9hb.js";import"./SeenByLogItem-B4lThwDI.js";import"./Byline-DXHjbIjw.js";import"./Divider-vXDeR0m7.js";import"./List-Cm-mvG7i.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
