import{r as d,j as e}from"./iframe-BmFIVBn_.js";import{S as p}from"./SeenByLog-CHNiJg-1.js";import{B as c}from"./Button-qEoy6ct0.js";import{M as u}from"./ModalBase-C8uvGW6d.js";import{M as g,a as y}from"./ModalBody-DgmBWAGP.js";import{L as b}from"./List-DKOvmWxK.js";import{T as f}from"./Transmission-BPwuf-2e.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-CCogXZRU.js";import"./AvatarGroup-DqX7R4kJ.js";import"./index-3BUTcXKg.js";import"./Avatar-Zvdkk7EN.js";import"./useId-ClegSKnE.js";import"./Skeleton-DRn19mA6.js";import"./SeenByLogItem-B-BMIyE7.js";import"./Flex-CFezmhlL.js";import"./Byline-BGhU5n_P.js";import"./Badge-DoiHwmxA.js";import"./Section-8wZRyHWu.js";import"./Divider-BzRFkj3B.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./XMark-DPeWQ31a.js";import"./Icon-zZDqlwOf.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ListItem-CaiNUw8w.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";import"./Typography-CMiy0gec.js";import"./AttachmentList-BlWh5Zw8.js";import"./AttachmentLink-CmEzMP-w.js";const re={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:l,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(y,{children:e.jsx(p,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{r as Collapsible,t as Default,o as NoTitle,s as SeenByLogModal,n as TransmissionSeenBy,oe as __namedExportsOrder,re as default};
