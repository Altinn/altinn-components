import{s as d,p as e}from"./iframe-a6n42jIx.js";import{s as c}from"./skatt-Eb53q4vT.js";import{S as p}from"./SeenByLog-B5bK2jdJ.js";import{B as u}from"./Button-DYhT04-k.js";import{M as g,b as y,a as b}from"./ModalBody-BJnVO0Kt.js";import{L as f}from"./List-COoWd7bx.js";import{T as k}from"./Transmission-BKyBQbRy.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-J9nO15zf.js";import"./AvatarGroup-BaunAvi6.js";import"./index-D2z1-3lt.js";import"./Avatar-DDS_Cv_Z.js";import"./Skeleton-BMznOa58.js";import"./useId-JsUrCC3L.js";import"./SeenByLogItem-CHVx4TK5.js";import"./Flex-BTGTFkLF.js";import"./Byline-ByWU9zoP.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./tooltip-D8RdZxwd.js";import"./Section-SbJC69tZ.js";import"./Divider-C9QIo7Lb.js";import"./XMark-ENWUN_kz.js";import"./Icon-C2KYL6xM.js";import"./Heading-Dza3pExo.js";import"./useHighlightedText-Bq-Ej33u.js";import"./ListItem-CKB37Xdc.js";import"./Input-BUxVKC9v.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./Typography-K_BS0H0I.js";import"./AttachmentList-BkzTBqSu.js";import"./AttachmentLink-BaVfB-gt.js";const $={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},s={args:{collapsible:!0}},r={args:{title:void 0}},o=a=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(g,{open:m,onClose:l,variant:"content",children:[e.jsx(y,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(b,{children:e.jsx(p,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(f,{children:e.jsx(k,{id:"1",seenByLog:{...a,collapsible:!0},sender:c,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{s as Collapsible,t as Default,r as NoTitle,o as SeenByLogModal,n as TransmissionSeenBy,ee as __namedExportsOrder,$ as default};
