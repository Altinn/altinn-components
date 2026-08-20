import{t as o}from"./transmissions-CMq1mEvj.js";import{T as m}from"./TransmissionList-Dz5mkVA7.js";import"./iframe-CfUrJ-sW.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-DPOybc4W.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ListItem-CUELnJv9.js";import"./Input-CJlrdXWO.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./ChevronUp-rhZxrOkp.js";import"./ChevronDown-BqQbWOs1.js";import"./ChevronRight-BQqjok9o.js";import"./Section-CnfuXcY3.js";import"./Flex-DpzfZDgd.js";import"./Typography-CAlmT_0b.js";import"./AttachmentList-Dhy5e25L.js";import"./AttachmentLink-BgkhZkTE.js";import"./File-CM6Lcq22.js";import"./SeenByLog-DDVBGmNe.js";import"./SeenByLogItem-DcraM9z6.js";import"./Byline-DTKA3ETf.js";import"./SeenByLogButton-CQ2xHM7o.js";import"./Divider-BiOZvEKa.js";import"./List-B6WSzlp9.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
