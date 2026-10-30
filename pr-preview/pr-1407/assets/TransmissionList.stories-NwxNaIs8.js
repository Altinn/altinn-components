import{t as o}from"./transmissions-DQGBUbyA.js";import{T as m}from"./TransmissionList-CxMtqxwd.js";import"./iframe-k-5ppgch.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-C19_lOLs.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ListItem-BtyqlbRy.js";import"./Input-fDrubqKv.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";import"./ChevronRight-CDNE03o8.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./Typography-CYRWqnkB.js";import"./AttachmentList-CWVZk_GU.js";import"./AttachmentLink-2KVfGVH_.js";import"./File-Ctzq2ENx.js";import"./SeenByLog-C3cBvf5R.js";import"./SeenByLogItem-HLjw3-dl.js";import"./Byline-CLp65Fpk.js";import"./SeenByLogButton-CcJ_M8xq.js";import"./Divider-BsUeBbrl.js";import"./List-CFuxNT_P.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
