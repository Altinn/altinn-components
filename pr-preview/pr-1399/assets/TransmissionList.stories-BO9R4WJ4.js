import{t as o}from"./transmissions-CGcXQ_Pv.js";import{T as m}from"./TransmissionList-CRuWN2i0.js";import"./iframe-Bjjt_sJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-k7bDMaXv.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./ListItem-C0qHzDdu.js";import"./Input-PLxdr44a.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./ChevronRight-MBNaUHNp.js";import"./Section-DbOZVIjc.js";import"./Flex-GHRWEM3Q.js";import"./Typography-D6uVUzG3.js";import"./AttachmentList-D85FmEec.js";import"./AttachmentLink-CwGU8Y82.js";import"./File-BifymGtc.js";import"./SeenByLog-BwBAtc2J.js";import"./SeenByLogItem-DOY6v6Xi.js";import"./Byline-BHcnyvRN.js";import"./SeenByLogButton-BXKbU-id.js";import"./Divider-DzalYy47.js";import"./List-DIqwgyys.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
