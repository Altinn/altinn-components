import{t as o}from"./transmissions-3sawGFxf.js";import{T as m}from"./TransmissionList-DmAreexx.js";import"./iframe-BRgClhpr.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-BrQmCkgF.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./ListItem-CPBMHy8j.js";import"./Input-C7r6_Ftd.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ChevronUp-D-x3gjGi.js";import"./ChevronDown-B8Xryl2N.js";import"./ChevronRight-BLIKQh_h.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";import"./Typography-BKJ9hmvo.js";import"./AttachmentList-Brr1hIcP.js";import"./AttachmentLink-C9j1Ncz8.js";import"./File-CxaIoRua.js";import"./SeenByLog-Dkv84S76.js";import"./SeenByLogItem-WZUsi45t.js";import"./Byline-D_KBo-zr.js";import"./SeenByLogButton-DD2GS_-6.js";import"./Divider-CxkA-0zz.js";import"./List-V6__rx0O.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
