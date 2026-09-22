import{t as o}from"./transmissions-BpszGgtm.js";import{T as m}from"./TransmissionList-JnYMDijS.js";import"./iframe-Ca4u80-y.js";import"./preload-helper-PPVm8Dsz.js";import"./Transmission-CKDmZlKa.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ListItem-CSPc22TA.js";import"./Input-BzcsSDVe.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./ChevronRight-eVASrmJg.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./Typography-DWDEZq_R.js";import"./AttachmentList-yf6pRco8.js";import"./AttachmentLink-BpjRJxc3.js";import"./File-KhZftDbX.js";import"./SeenByLog-B99Wjjjl.js";import"./SeenByLogItem-BxoHIfOx.js";import"./Byline-CZsol804.js";import"./SeenByLogButton-Dg0lFSTs.js";import"./Divider-BPwrxXbC.js";import"./List-DNrtm8Gg.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
