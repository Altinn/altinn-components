import{t as o}from"./transmissions-CoYxfNoj.js";import{T as m}from"./TransmissionList-CuE5gLXy.js";import"./iframe-BfD7syly.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-DgLoev6f.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ListItem-CBQXcdIJ.js";import"./Input-BppbGARe.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./Typography-EJ3Vxj-4.js";import"./AttachmentList-D_bS-nNX.js";import"./AttachmentLink-CmX9CiIE.js";import"./File-BJcaXPQb.js";import"./SeenByLog-CA9VoUSd.js";import"./SeenByLogItem-CcFKq2R0.js";import"./Byline-DIOXwhZW.js";import"./SeenByLogButton-DlSCPHRq.js";import"./Divider-jpHfesNJ.js";import"./List-ED_XuXRq.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,A as __namedExportsOrder,z as default};
