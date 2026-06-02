import{t as o}from"./transmissions-B4jWu-t9.js";import{T as m}from"./TransmissionList-ysMBFYYD.js";import"./iframe-DzC97elN.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CTMtkYfN.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ListItem-Cp-qX0cT.js";import"./Input-DIyKL79r.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Heading-DiLLFIwR.js";import"./useHighlightedText-w8ugv_c2.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./Section-B7XqZvfR.js";import"./Flex-CXtmXiNa.js";import"./Typography-CtPp6NJn.js";import"./AttachmentList-DtHEHcWS.js";import"./AttachmentLink-n7oXjs9n.js";import"./File-hNgqcgD7.js";import"./SeenByLog-72Ryjfl6.js";import"./SeenByLogButton-By9jg5Ka.js";import"./SeenByLogItem-CX-VKXa6.js";import"./Byline-BOlCNzmJ.js";import"./Divider-DUDd6Ifg.js";import"./List-ReLHH8Pg.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
