import{r as d,j as e}from"./iframe-B56t8i7v.js";import{S as l}from"./SeenByLog-CsUXDIFQ.js";import{B as c}from"./Button-x4ugPYkx.js";import{M as u}from"./ModalBase-DAC3P7wf.js";import{M as g,a as y}from"./ModalBody-DZEYNo_5.js";import{L as b}from"./List-Cf0-_oGc.js";import{T as f}from"./Transmission-DjYB2efi.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-D6U2MHOI.js";import"./AvatarGroup-kqIJtB4O.js";import"./index-CHgNdXFp.js";import"./Avatar-_1995Z8x.js";import"./useId-Ce_44NzT.js";import"./Skeleton-Cer98cLN.js";import"./SeenByLogItem-kHesz-4f.js";import"./Flex-BSViFEWJ.js";import"./Byline-BYqSnbZ1.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./Section-DXg-mnVx.js";import"./Divider-BSd8txhR.js";import"./button-BSGP1CSM.js";import"./XMark-CQR84vCO.js";import"./Icon-CgN9F-ql.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ListItem-DXm9Ifb4.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./ChevronRight-VYKVaZtU.js";import"./Typography-C36VcWyw.js";import"./AttachmentList-blzAhauI.js";import"./AttachmentLink-CejqY68I.js";const se={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
