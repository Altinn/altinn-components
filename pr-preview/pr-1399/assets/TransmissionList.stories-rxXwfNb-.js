import{t as o}from"./transmissions-Cv_X9bBf.js";import{T as m}from"./TransmissionList-b9tftb8P.js";import"./iframe-DJfn40-D.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BBOB8F8h.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ListItem-BIpR7yvi.js";import"./Input-1D4-_m0T.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./ChevronUp-CDdzZBKT.js";import"./ChevronDown-D_48qJ0I.js";import"./ChevronRight-DB6kCZkt.js";import"./Section-DRGrLW1j.js";import"./Flex-BuCXAFdl.js";import"./Typography-XfwuV3u8.js";import"./AttachmentList-CshSDg8F.js";import"./AttachmentLink-BqVVl8dc.js";import"./File-BmxUoSyd.js";import"./SeenByLog-DMyC3DbY.js";import"./SeenByLogItem-SJAf42rd.js";import"./Byline-BukN8tD1.js";import"./SeenByLogButton-CrJmq17u.js";import"./Divider-lqGtvfjN.js";import"./List-BVuaqhLj.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
