import{t}from"./transmissions-BfdzfO70.js";import{T as a}from"./TransmissionList-C-IwQg0n.js";import"./iframe-B3JK86DP.js";import"./preload-helper-Cc2_yIPf.js";import"./Transmission-CLpWKH_J.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ListItem-B6hmde0j.js";import"./Input-Dn912l6M.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./Heading-DhZTTpsP.js";import"./useHighlightedText-DIT5s5Wk.js";import"./ChevronUp-2E8wLm1d.js";import"./ChevronDown-eXgBXwsS.js";import"./ChevronRight-CXXN68ww.js";import"./Section-DBrjPmQz.js";import"./Flex-DTtFl6cz.js";import"./Typography-AZ3lf-vT.js";import"./AttachmentList-CxWoW9Hp.js";import"./File-mL9hGOwB.js";import"./SeenByLog-BWYlhPUP.js";import"./SeenByLogItem-glJ9iie7.js";import"./Byline-Ci-3RfFp.js";import"./SeenByLogButton-DlSNKPv6.js";import"./Divider-C4aAfbp2.js";import"./List-CJlE7g3l.js";const _={title:"Inbox/TransmissionList",component:a,parameters:{},args:{items:t}},r={args:{}},e={args:{items:t.filter(o=>o?.type?.value==="submission")}},i={args:{items:t.filter(o=>o?.type?.value!=="submission")}},s={args:{items:[...t.slice(0,1),{id:"hidden",byline:"4. oktober 2026 kl. 08.17",hiddenLabel:"Forsendelse som er skjult for deg."}]}},A=["Default","Outgoing","Incoming","WithHiddenTransmission"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      hiddenLabel: 'Forsendelse som er skjult for deg.'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"A transmission the user isn't allowed to see. It keeps its date, but shows only `hiddenLabel` and can't be expanded.",...s.parameters?.docs?.description}}};export{r as Default,i as Incoming,e as Outgoing,s as WithHiddenTransmission,A as __namedExportsOrder,_ as default};
