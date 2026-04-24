import{r as d,j as e}from"./iframe-Dip44woq.js";import{S as l}from"./SeenByLog-BrdGlF89.js";import{B as c}from"./Button-afp2Zwog.js";import{M as u}from"./ModalBase-DLErh85x.js";import{M as g,a as y}from"./ModalBody-CSIMme3q.js";import{L as b}from"./List-oCmeNZU4.js";import{T as f}from"./Transmission-D96vEI0n.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-CJtfH16W.js";import"./AvatarGroup-sgYryoRH.js";import"./index-B24kaf2B.js";import"./Avatar-kiiFl4Mz.js";import"./useId-CMLjH0Fx.js";import"./Skeleton-CxN7sZWy.js";import"./SeenByLogItem-BMkjqrjq.js";import"./Flex-DHvZRHuw.js";import"./Byline-uYDAyWrl.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Section-DCVufQoJ.js";import"./Divider-ds1jujj6.js";import"./button-CZ5tfceY.js";import"./XMark-CynTM0oO.js";import"./Icon-B7B4bUSp.js";import"./Heading-BGLknJpX.js";import"./useHighlightedText-DVvgBsxZ.js";import"./ListItem-BNxxo84x.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./ChevronUp-DojBOeEB.js";import"./ChevronDown-DtUCUzdZ.js";import"./ChevronRight-DRGzZC3s.js";import"./Typography-9n0VU0yu.js";import"./AttachmentList-Ca9XT6Ol.js";import"./AttachmentLink-CAWKGeFw.js";const se={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Hvem har sett dialogen?" onClose={onClose} />
        <ModalBody>
          <SeenByLog items={args.items} size="md" />
        </ModalBody>
      </ModalBase>
    </>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
  return <List>
      <Transmission id="1" seenByLog={{
      ...args,
      collapsible: true
    }} sender={skatt} title="Forsendelsen er godkjent." type={{
      value: 'acceptance',
      label: 'Godkjent'
    }} attachments={{
      items: [{
        href: '#',
        label: 'Dokument 1.pdf'
      }, {
        href: '#',
        label: 'Dokument 2.pdf'
      }]
    }}>
        <p>Forsendelsen din er godkjent.</p>
      </Transmission>
    </List>;
}`,...n.parameters?.docs?.source}}};const ne=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{r as Collapsible,t as Default,o as NoTitle,s as SeenByLogModal,n as TransmissionSeenBy,ne as __namedExportsOrder,se as default};
