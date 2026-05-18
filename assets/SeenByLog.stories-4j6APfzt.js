import{r as d,j as e}from"./iframe-Bk_HwK4l.js";import{S as l}from"./SeenByLog-CGJHaTLX.js";import{B as c}from"./Button-DXv-zg1S.js";import{M as u,a as g,b as y}from"./ModalBody-BjB278uQ.js";import{L as b}from"./List-CjSgHfl7.js";import{T as f}from"./Transmission-BO-OVqOM.js";import{s as k}from"./skatt-Eb53q4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./SeenByLogButton-_4e8jo2J.js";import"./AvatarGroup-CkGvw6sL.js";import"./index-Bj80ru-z.js";import"./Avatar-B1R5c004.js";import"./useId-WArpTTRC.js";import"./Skeleton-CZ4GHxMp.js";import"./SeenByLogItem-DcZdDBCt.js";import"./Flex-CqtyDzLK.js";import"./Byline-BO0Xb7Bu.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Section-DaLGW2Wx.js";import"./Divider-CfSSF27g.js";import"./button-DRIhbrAI.js";import"./XMark-BlM7H2uk.js";import"./Icon-BbsTdu7G.js";import"./Heading-D6li-Zgs.js";import"./useHighlightedText-BjD5CEaG.js";import"./ListItem-BC_fsWR_.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./ChevronUp-DmnNnXSw.js";import"./ChevronDown-Butud2ye.js";import"./ChevronRight-BEdxYQXL.js";import"./Typography-9_XA-VKE.js";import"./AttachmentList-CwxuaxTc.js";import"./AttachmentLink-6ZQd146Y.js";const oe={title:"Inbox/Dialog/SeenByLog",component:l,tags:["autodocs","beta"],parameters:{},args:{title:"Sett av deg+4",endUserLabel:"Deg",items:[{id:"5",type:"person",name:"Joachim Soltvedt",seenAt:"2025-05-17 08:15",seenAtLabel:"17. mai kl 08.15"},{id:"4",type:"person",name:"Freyr Alexandersson",seenAt:"2025-04-15 12:25",seenAtLabel:"16. april kl 12.25"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"},{id:"8",type:"system",name:"Regnskap AS",seenAt:"2025-04-11 11:22",seenAtLabel:"15. april kl 11.22"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"}]}},t={},r={args:{collapsible:!0}},o={args:{title:void 0}},s=a=>{const[m,i]=d.useState(!0),p=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{open:m,onClose:p,variant:"content",children:[e.jsx(g,{title:"Hvem har sett dialogen?",onClose:p}),e.jsx(y,{children:e.jsx(l,{items:a.items,size:"md"})})]})]})},n=a=>e.jsx(b,{children:e.jsx(f,{id:"1",seenByLog:{...a,collapsible:!0},sender:k,title:"Forsendelsen er godkjent.",type:{value:"acceptance",label:"Godkjent"},attachments:{items:[{href:"#",label:"Dokument 1.pdf"},{href:"#",label:"Dokument 2.pdf"}]},children:e.jsx("p",{children:"Forsendelsen din er godkjent."})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
