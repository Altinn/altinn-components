import{t as o}from"./transmissions-B2bXiyq_.js";import{T as m}from"./TransmissionList-BR3wEQ1j.js";import"./iframe-DmJr8_aG.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-C9UvWZs4.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./ListItem-8cwJLY10.js";import"./Input-CMjX-VJR.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./Typography-B5vyFnSY.js";import"./AttachmentList-DNGf5o_g.js";import"./AttachmentLink-DROfO50F.js";import"./File-C6IF3Dkn.js";import"./SeenByLog-CO9TZ-zE.js";import"./SeenByLogButton-DWaKlpbn.js";import"./SeenByLogItem-BlO-P44H.js";import"./Byline-DuJyYQ2y.js";import"./Divider-Bp9bwdzN.js";import"./List-BYhLWM8c.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
