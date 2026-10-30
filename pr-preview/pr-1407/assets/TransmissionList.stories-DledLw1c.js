import{t as o}from"./transmissions-DMnR7AFN.js";import{T as m}from"./TransmissionList-CXdVKtz4.js";import"./iframe-CmcSEjvS.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-D9TF-MkT.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ListItem-CGdPgfN9.js";import"./Input-C0nOO2ZR.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./ChevronRight-B5wtiA4y.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./Typography-sASlV-kd.js";import"./AttachmentList-ChCiKaw4.js";import"./AttachmentLink-mBMk8SOX.js";import"./File-CvtVyjYo.js";import"./SeenByLog-DPyjWWkj.js";import"./SeenByLogItem-CnGUk8dJ.js";import"./Byline-BkEVnoxC.js";import"./SeenByLogButton-CwJlsqs_.js";import"./Divider-BXgmMAUp.js";import"./List-DKoS5qie.js";const z={title:"Inbox/TransmissionList",component:m,tags:["beta"],parameters:{},args:{items:o}},s={args:{}},r={args:{items:o.filter(i=>i?.type?.value==="submission")}},t={args:{items:o.filter(i=>i?.type?.value!=="submission")}},A=["Default","Outgoing","Incoming"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
