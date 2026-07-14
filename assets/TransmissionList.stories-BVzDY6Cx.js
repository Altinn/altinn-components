import{t as o}from"./transmissions-DFTzwj-A.js";import{T as m}from"./TransmissionList-DZfKd6Mn.js";import"./iframe-DymAqe7-.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CcGmDLNZ.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./ListItem-Bmm1NlzL.js";import"./Input-XXqZV2PD.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Heading-D0_eZ5cX.js";import"./useHighlightedText-CHgJbocK.js";import"./ChevronUp-DmvfmoSK.js";import"./ChevronDown-D0JeQuoP.js";import"./ChevronRight-DBeZxa-Y.js";import"./Section-VcJzw9XS.js";import"./Flex-SVKdN4dv.js";import"./Typography-CpmuPi_2.js";import"./AttachmentList-DE-UAyEp.js";import"./AttachmentLink-D1bo9jx8.js";import"./File-wv0JkgCq.js";import"./SeenByLog-bwglEae5.js";import"./SeenByLogItem-BP20U67H.js";import"./Byline-wvHK-UuT.js";import"./SeenByLogButton-DInHZDR2.js";import"./Divider-5puRdG7X.js";import"./List-BFVNMUvv.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
