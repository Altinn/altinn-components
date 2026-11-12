var c=Object.defineProperty;var n=(s,l)=>c(s,"name",{value:l,configurable:!0});import{aa as u,a7 as e,c as g}from"./iframe-xlSYDLmX.js";import{s as y}from"./skatt-Eb53q4vT.js";import{S as d}from"./SeenByLog-CUhO0OQ8.js";import{M as b,b as k,a as f}from"./ModalBody-2B3xwQox.js";import{L as B}from"./List-4DslVlnz.js";import{T as L}from"./Transmission-CdX_OX2b.js";import"./preload-helper-Cc2_yIPf.js";import"./SeenByLogItem-Cy6sqJ9g.js";import"./Flex-Brl5o9wf.js";import"./Byline-lo6AH7M_.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Avatar-DElWOLnF.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./Section-Dg4Yy1fe.js";import"./SeenByLogButton-BSK-CwZM.js";import"./Divider-DywCGJJG.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ListItem-B7QDJ_pJ.js";import"./Input-r4bRN1Qy.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";import"./Typography-CBKRdQ-b.js";import"./AttachmentList-nyR4RzCq.js";import"./File-BRQkQvkt.js";const W={title:"Inbox/Dialog/SeenByLog",component:d,tags:["autodocs"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},a=n(s=>{const[l,p]=u.useState(!0),m=n(()=>{p(!1)},"onClose");return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:n(()=>p(!0),"onClick"),children:"Open Modal"}),e.jsxs(b,{open:l,onClose:m,variant:"content",children:[e.jsx(k,{title:"Hvem har sett dialogen?",onClose:m}),e.jsx(f,{children:e.jsx(d,{items:s.items,size:"md"})})]})]})},"SeenByLogModal"),i=n(s=>e.jsx(B,{children:e.jsx(L,{id:"1",seenByLog:{...s,collapsible:!0},sender:y,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})}),"TransmissionSeenBy"),X=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...i.parameters?.docs?.source}}};export{r as Collapsible,t as Default,o as NoTitle,a as SeenByLogModal,i as TransmissionSeenBy,X as __namedExportsOrder,W as default};
