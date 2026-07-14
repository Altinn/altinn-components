import{a7 as e,aa as f}from"./iframe-DymAqe7-.js";import{d as m}from"./dialogBody-DkGlnOQR.js";import{S as D}from"./SeenByLog-bwglEae5.js";import{M as j,b as x,a as k}from"./ModalBody-B4NkrjfW.js";import{D as h}from"./DialogBody-BXQMd5AN.js";import{D as p}from"./DialogAttachments-BnerkPIJ.js";import{D as g}from"./DialogActions-iiFw16lh.js";const B=({title:c,items:d,endUserLabel:y,open:b,onClose:u})=>e.jsxs(j,{open:b,onClose:u,variant:"content",children:[e.jsx(x,{title:c,onClose:u}),e.jsx(k,{children:e.jsx(D,{items:d,size:"md",endUserLabel:y})})]}),S={title:"Inbox/Dialog/DialogBody",component:h,tags:["beta"],args:{sender:{type:"company",name:"Skatteetaten",imageUrl:"https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96"},recipientLabel:"til",recipient:{type:"person",name:"Recipient name"},children:e.jsx("p",{children:"Dialog summary."}),seenByLog:{collapsible:!0,title:"Sett av deg+3",items:[{id:"1",type:"person",name:"Felix Horn Myhre",seenAt:"2025-01-01 08:30",seenAtLabel:"1. januar kl 08.30"},{id:"2",type:"person",name:"Mathias Dyngeland",isEndUser:!0,seenAt:"2025-02-03 08:45",seenAtLabel:"6. januar kl 08.45"},{id:"3",type:"person",name:"Aune Heggebø",seenAt:"2025-04-15 11:22",seenAtLabel:"15. april kl 11.22"}]}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(p,{title:"1 attachment",items:[{href:"#",label:"Document.pdf"}]}),e.jsx(g,{items:[{id:"1",priority:"primary",label:"Primary"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}},t={args:{loading:!0},tags:["skip-test"]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sander Svendsen"})," er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder."]}),e.jsx("h6",{children:"Ansvarlig lege"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Nærmeste leder"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Mark Medisin + 47 23369090"}),e.jsx("h6",{children:"Header 6"}),e.jsx("p",{children:"Ikke oppgitt."})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(p,{title:"2 attachments",items:[{href:"#",label:"Document 1.pdf"},{href:"#",label:"Document 2.pdf"}]})]})}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(p,{title:"4 attachments",items:[{href:"#",label:"Short document.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker"}},{href:"#",label:"A long document title that it will wrap mulitple lines.pdf",metadata:"PDF, 2.3 MB",badge:{variant:"outline",label:"Utløper om 2 uker",color:"neutral"}},{href:"#",metadata:"PDF, 1.5 MB",label:"Another document with a ridicoulous title that should wrap multiple lines.pdf"},{disabled:!0,href:"#",metadata:"PDF, 1.5 MB",label:"Disabled document.pdf",badge:{variant:"tinted",label:"Utløpt",color:"neutral"}}]})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(g,{items:[{id:"1",priority:"primary",label:"Primary CTA"},{id:"2",priority:"secondary",label:"Secondary"}]})]})}},l=()=>{const[c,d]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{...m,seenByLog:{title:m.seenByLog?.title,items:m.seenByLog?.items??[],onClick:()=>d(!0)},activityLog:{label:"Aktivitetslogg",onClick:()=>console.log("Aktivitetslogg clicked")},accessInfo:{label:"Om fullmakt og tjeneste",onClick:()=>console.log("Om fullmakt og tjeneste clicked")},children:[e.jsx("p",{children:"Dialog summary."}),e.jsx(g,{items:[{id:"1",priority:"primary",label:"Primary"},{id:"2",priority:"secondary",label:"Secondary"}]})]}),e.jsx(B,{title:"Hvem har sett dialogen?",items:m.seenByLog?.items??[],open:c,onClose:()=>d(!1)})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="1 attachment" items={[{
        href: '#',
        label: 'Document.pdf'
      }]} />
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </>
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  tags: ['skip-test']
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>
          <strong>Sander Svendsen</strong> er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder.
        </p>
        <h6>Ansvarlig lege</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Nærmeste leder</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <h6>Header 6</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Header 6</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="2 attachments" items={[{
        href: '#',
        label: 'Document 1.pdf'
      }, {
        href: '#',
        label: 'Document 2.pdf'
      }]} />
      </>
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogAttachments title="4 attachments" items={[{
        href: '#',
        label: 'Short document.pdf',
        metadata: 'PDF, 2.3 MB',
        badge: {
          variant: 'outline',
          label: 'Utløper om 2 uker'
        }
      }, {
        href: '#',
        label: 'A long document title that it will wrap mulitple lines.pdf',
        metadata: 'PDF, 2.3 MB',
        badge: {
          variant: 'outline',
          label: 'Utløper om 2 uker',
          color: 'neutral'
        }
      }, {
        href: '#',
        metadata: 'PDF, 1.5 MB',
        label: 'Another document with a ridicoulous title that should wrap multiple lines.pdf'
      }, {
        disabled: true,
        href: '#',
        metadata: 'PDF, 1.5 MB',
        label: 'Disabled document.pdf',
        badge: {
          variant: 'tinted',
          label: 'Utløpt',
          color: 'neutral'
        }
      }]} />
      </>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary CTA'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </>
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [seenByLogOpen, setSeenByLogOpen] = useState(false);
  return <>
      <DialogBody {...dialogBody} seenByLog={{
      title: dialogBody.seenByLog?.title,
      items: dialogBody.seenByLog?.items ?? [],
      onClick: () => setSeenByLogOpen(true)
    }} activityLog={{
      label: 'Aktivitetslogg',
      onClick: () => console.log('Aktivitetslogg clicked')
    }} accessInfo={{
      label: 'Om fullmakt og tjeneste',
      onClick: () => console.log('Om fullmakt og tjeneste clicked')
    }}>
        <p>Dialog summary.</p>
        <DialogActions items={[{
        id: '1',
        priority: 'primary',
        label: 'Primary'
      }, {
        id: '2',
        priority: 'secondary',
        label: 'Secondary'
      }]} />
      </DialogBody>
      <DialogSeenByLog title="Hvem har sett dialogen?" items={dialogBody.seenByLog?.items ?? []} open={seenByLogOpen} onClose={() => setSeenByLogOpen(false)} />
    </>;
}`,...l.parameters?.docs?.source}}};const A=["Default","Loading","Summary","ExtendedContent","WithAttachments","WithAttachmentsMetadata","WithActions","WithInfoRow"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ExtendedContent:s,Loading:t,Summary:r,WithActions:o,WithAttachments:i,WithAttachmentsMetadata:n,WithInfoRow:l,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,s as E,t as L,o as W,C as a,i as b};
