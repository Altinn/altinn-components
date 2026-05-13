import{r as d,j as e}from"./iframe-DkQPO9ro.js";import{S as l}from"./SeenByLog-DqaVhv0L.js";import{B as c}from"./Button-OKMeorO5.js";import{M as u,a as g,b as y}from"./ModalBody-GvvO4sGF.js";import{L as b}from"./List-DQSHYer2.js";import{T as f}from"./Transmission-BI-36KLT.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-DVUJ0qqd.js";import"./AvatarGroup-DkXzBnSr.js";import"./index-BrTdOUlk.js";import"./Avatar-DlrsSRUv.js";import"./useId-CwF4wxTL.js";import"./Skeleton-8DklmnzK.js";import"./SeenByLogItem-Bhg4ISrM.js";import"./Flex-Cy28VffD.js";import"./Byline-DEuCU6Hn.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Section-DUH4Cyq_.js";import"./Divider-vTnAPnFd.js";import"./button-Byovksc3.js";import"./XMark-5G2rqhrX.js";import"./Icon-Dao4TSf9.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ListItem-BiMhvfk_.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./Typography-cgJeIGtL.js";import"./AttachmentList-DJBTZtc6.js";import"./AttachmentLink-D_b2UV4A.js";const oe={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const se=["Default","Collapsible","NoTitle","SeenByLogModal","TransmissionSeenBy"];export{r as Collapsible,t as Default,o as NoTitle,s as SeenByLogModal,n as TransmissionSeenBy,se as __namedExportsOrder,oe as default};
