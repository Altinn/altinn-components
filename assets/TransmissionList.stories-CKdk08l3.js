import{t as o}from"./transmissions-DxtUgZVk.js";import{T as m}from"./TransmissionList-tJdl5nrV.js";import"./iframe-CXqMdlCC.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-JThfUi_S.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ListItem-DMf_mnDA.js";import"./Input-D8RpuIgN.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./Heading-Bc_OkYLY.js";import"./useHighlightedText-DHwhs_hr.js";import"./ChevronUp-NZ-cp3Wt.js";import"./ChevronDown-BjOSGq_A.js";import"./ChevronRight-DltnHqdC.js";import"./Section-CK-XPJWb.js";import"./Flex-C0b8jFL9.js";import"./Typography-B65oo-6B.js";import"./AttachmentList-BlyCL7vl.js";import"./File-D_gvt_TE.js";import"./SeenByLog-CmX4CEsG.js";import"./SeenByLogItem-BFAjK1Hi.js";import"./Byline-BhCTJ5Aa.js";import"./SeenByLogButton-TtmkV-OW.js";import"./Divider-C2JCn3uS.js";import"./List-C3jfbd0B.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...t.parameters?.docs?.source}}};export{s as Default,t as Incoming,r as Outgoing,z as __namedExportsOrder,w as default};
