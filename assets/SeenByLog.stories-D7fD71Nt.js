import{s as d,p as e}from"./iframe-D7BK96qe.js";import{s as c}from"./skatt-Eb53q4vT.js";import{S as p}from"./SeenByLog-R4J6Zkt3.js";import{B as u}from"./Button-UbmuloFB.js";import{M as g,b as y,a as b}from"./ModalBody-CO_In9L6.js";import{L as f}from"./List-D3gzZVMY.js";import{T as k}from"./Transmission-Bz0nQXAT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-CAjkFzU6.js";import"./AvatarGroup-BXGOcJTt.js";import"./index-CL9j6gFH.js";import"./Avatar-BzaJ_tLr.js";import"./Skeleton-C-TQnNEe.js";import"./useId-B1IjdNvC.js";import"./SeenByLogItem-E8EAjr1D.js";import"./Flex-DKrdkBVD.js";import"./Byline-Q4XhunLC.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./tooltip-B8elfXS-.js";import"./Section-G7MRDbZ9.js";import"./Divider-DoxmSZvL.js";import"./XMark-DKvmykI8.js";import"./Icon-CXOWvudR.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ListItem-BwjNTMuN.js";import"./Input-wwG44gvy.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";import"./Typography-CoOY9SxO.js";import"./AttachmentList-BUtx4gr-.js";import"./AttachmentLink-Cf9u9n4e.js";import"./File-BKQJfDE6.js";const ee={title:"Inbox/Dialog/SeenByLog",component:p,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},s={args:{collapsible:!0}},r={args:{title:void 0}},o=a=>{const[m,i]=d.useState(!0),l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(g,{open:m,onClose:l,variant:"content",children:[e.jsx(y,{title:"Hvem har sett dialogen?",onClose:l}),e.jsx(b,{children:e.jsx(p,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(f,{children:e.jsx(k,{id:"1",seenByLog:{...a,collapsible:!0},sender:c,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{s as Collapsible,t as Default,r as NoTitle,o as SeenByLogModal,n as TransmissionSeenBy,te as __namedExportsOrder,ee as default};
