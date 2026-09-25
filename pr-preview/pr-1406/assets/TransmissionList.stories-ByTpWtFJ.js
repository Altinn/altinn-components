import{t as o}from"./transmissions-ZJmceTsk.js";import{T as m}from"./TransmissionList-Cng750Gz.js";import"./iframe-vkxhbe5D.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CehURWIx.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ListItem-CZ_cmVNu.js";import"./Input-B9GDLkmV.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./ChevronRight-BjSUzT6t.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./Typography-CiocPTHR.js";import"./AttachmentList-D-976xEl.js";import"./AttachmentLink-5jPNJLwk.js";import"./File-la3290yk.js";import"./SeenByLog-Dktt2CnJ.js";import"./SeenByLogItem-hRV_NZOZ.js";import"./Byline-BCI5L_Cr.js";import"./SeenByLogButton-9hJ4AWhy.js";import"./Divider-Bumy5We0.js";import"./List-BJAmkQFZ.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
