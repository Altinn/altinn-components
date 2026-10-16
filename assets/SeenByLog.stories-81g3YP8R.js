var c=Object.defineProperty;var t=(s,l)=>c(s,"name",{value:l,configurable:!0});import{aa as u,a7 as e,c as g}from"./iframe-ITS-2hJr.js";import{s as y}from"./skatt-Eb53q4vT.js";import{S as d}from"./SeenByLog-C0xUL4m2.js";import{M as b,b as k,a as f}from"./ModalBody-Cqe55Y6K.js";import{L as B}from"./List-B0u74Cjz.js";import{T as L}from"./Transmission-yxoSb9aG.js";import"./preload-helper-Cc2_yIPf.js";import"./SeenByLogItem-D1xWHZAK.js";import"./Flex-D_HsLLCq.js";import"./Byline-D-FlqTL-.js";import"./AvatarGroup-BWnxkhGl.js";import"./Avatar-BB-8uFGa.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./Section-b3xCS6xU.js";import"./SeenByLogButton-DPP9-S3m.js";import"./Divider-XNCFH8Co.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ListItem-5Rr0WNcR.js";import"./Input-eieVqTh_.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./Typography-8PAPF6ji.js";import"./AttachmentList-D-jzX0TA.js";import"./AttachmentLink-C-by3tVe.js";import"./File-BJbWXz_I.js";const X={title:"Inbox/Dialog/SeenByLog",component:d,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},r={},o={args:{collapsible:!0}},a={args:{title:void 0}},n=t(s=>{const[l,p]=u.useState(!0),m=t(()=>{p(!1)},"onClose");return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:t(()=>p(!0),"onClick"),children:"Open Modal"}),e.jsxs(b,{open:l,onClose:m,variant:"content",children:[e.jsx(k,{title:"Hvem har sett dialogen?",onClose:m}),e.jsx(f,{children:e.jsx(d,{items:s.items,size:"md"})})]})]})},"SeenByLogModal"),i=t(s=>e.jsx(B,{children:e.jsx(L,{id:"1",seenByLog:{...s,collapsible:!0},sender:y,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})}),"TransmissionSeenBy");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: SeenByLogProps) => {
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
}`,...i.parameters?.docs?.source}}};const Y=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{o as Collapsible,r as Default,a as NoTitle,n as SeenByLogModal,i as TransmissionSeenBy,Y as __namedExportsOrder,X as default};
