import{t as o}from"./transmissions-D7cIdOni.js";import{T as m}from"./TransmissionList-B0hSN2ZD.js";import"./iframe-B8reGtNb.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-Wzex1RK2.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ListItem-_2ccN9iY.js";import"./Input-DOKzz0Tj.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./ChevronUp-B4Qw2TyU.js";import"./ChevronDown-Cin8-QCk.js";import"./ChevronRight-BRSkVVAW.js";import"./Section-DovdLmcg.js";import"./Flex-qoZntq9f.js";import"./Typography-Dxv9MSbD.js";import"./AttachmentList-cKgB14im.js";import"./AttachmentLink-BwCJAzwA.js";import"./File-BR5BUNC9.js";import"./SeenByLog-DA9j2joW.js";import"./SeenByLogButton-BasNMSmY.js";import"./SeenByLogItem-aSQJUYu2.js";import"./Byline-Cu5NuYMg.js";import"./Divider-BrWB8z-j.js";import"./List-D3NF8NkT.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
