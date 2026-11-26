import{t}from"./transmissions-D-FnRNQ-.js";import{T as a}from"./TransmissionList-C1k9xH2K.js";import"./iframe-ucBQ5HcJ.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-BgOTaTB9.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./ListItem-iuz8tySc.js";import"./Input-CVLmoyI4.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ChevronUp-Bnv01usE.js";import"./ChevronDown-CmXAxF6f.js";import"./ChevronRight-Vb4FEV6b.js";import"./Section-BY1hSuM_.js";import"./Flex-obMty-VJ.js";import"./Typography-z9HgrCC2.js";import"./AttachmentList-PS4kzogd.js";import"./File-6z9RDGI7.js";import"./SeenByLog-YgFCCcHn.js";import"./SeenByLogItem-rx1dKnWd.js";import"./Byline-CWiJow4a.js";import"./SeenByLogButton-BGjUjfP-.js";import"./Divider-DQyBSo88.js";import"./List-Yx58osc0.js";const _={title:"Inbox/TransmissionList",component:a,parameters:{},args:{items:t}},r={args:{}},e={args:{items:t.filter(o=>o?.type?.value==="submission")}},i={args:{items:t.filter(o=>o?.type?.value!=="submission")}},s={args:{items:[...t.slice(0,1),{id:"hidden",byline:"4. oktober 2026 kl. 08.17",hiddenLabel:"Forsendelse du ikke har tilgang til å se."}]}},A=["Default","Outgoing","Incoming","WithHiddenTransmission"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value === 'submission') as TransmissionListProps['items']
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: transmissions.filter(item => item?.type?.value !== 'submission') as TransmissionListProps['items']
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...(transmissions.slice(0, 1) as TransmissionListProps['items']), {
      id: 'hidden',
      byline: '4. oktober 2026 kl. 08.17',
      hiddenLabel: 'Forsendelse du ikke har tilgang til å se.'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"A transmission the user isn't allowed to see. It keeps its date, but shows only `hiddenLabel` and can't be expanded.",...s.parameters?.docs?.description}}};export{r as Default,i as Incoming,e as Outgoing,s as WithHiddenTransmission,A as __namedExportsOrder,_ as default};
