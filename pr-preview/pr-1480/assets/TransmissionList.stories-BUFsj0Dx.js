import{t as o}from"./transmissions-D9wmYPQA.js";import{T as m}from"./TransmissionList-CDSU6hv6.js";import"./iframe-M-0W2Kc9.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BAzo6gFp.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ListItem-Cy-G_cYd.js";import"./Input-PR-EPUfC.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./Section-BRRFv94H.js";import"./Flex-CvQqYnnc.js";import"./Typography-xHph4zf_.js";import"./AttachmentList-BgxSY5ob.js";import"./File-b6f9An55.js";import"./SeenByLog-WXIj0G2W.js";import"./SeenByLogItem-C4grObKG.js";import"./Byline-Cay2D8Wn.js";import"./SeenByLogButton-Dqii6KAo.js";import"./Divider-Dx4dxp6X.js";import"./List-DiNCcd8p.js";const w={title:"Inbox/TransmissionList",component:m,parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},z=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
