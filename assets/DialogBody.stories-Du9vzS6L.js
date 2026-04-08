import{n as e}from"./chunk-DseTPa7n.js";import{t}from"./jsx-runtime-DwqL_Y-t.js";import{t as n}from"./DialogBody-DaNqhdz8.js";import{t as r}from"./DialogActions-CDhRH-YC.js";import{t as i}from"./DialogAttachments-ytyTMLE-.js";var a=e({Default:()=>c,ExtendedContent:()=>d,Loading:()=>l,Summary:()=>u,WithActions:()=>m,WithAttachments:()=>f,WithAttachmentsMetadata:()=>p,__namedExportsOrder:()=>h,default:()=>s}),o=t(),s={title:`Inbox/Dialog/DialogBody`,component:n,tags:[`beta`],args:{sender:{type:`company`,name:`Skatteetaten`,imageUrl:`https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96`},recipientLabel:`til`,recipient:{type:`person`,name:`Recipient name`},children:(0,o.jsx)(`p`,{children:`Dialog summary.`}),seenByLog:{collapsible:!0,title:`Sett av deg+3`,items:[{id:`1`,type:`person`,name:`Felix Horn Myhre`,seenAt:`2025-01-01 08:30`,seenAtLabel:`1. januar kl 08.30`},{id:`2`,type:`person`,name:`Mathias Dyngeland`,isEndUser:!0,seenAt:`2025-02-03 08:45`,seenAtLabel:`6. januar kl 08.45`},{id:`3`,type:`person`,name:`Aune Heggebø`,seenAt:`2025-04-15 11:22`,seenAtLabel:`15. april kl 11.22`}]}}},c={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Dialog summary.`}),(0,o.jsx)(i,{title:`1 attachment`,items:[{href:`#`,label:`Document.pdf`}]}),(0,o.jsx)(r,{items:[{id:`1`,priority:`primary`,label:`Primary`},{id:`2`,priority:`secondary`,label:`Secondary`}]})]})}},l={args:{loading:!0},tags:[`skip-test`]},u={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`p`,{children:[(0,o.jsx)(`strong`,{children:`Sander Svendsen`}),` er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder.`]}),(0,o.jsx)(`h6`,{children:`Ansvarlig lege`}),(0,o.jsx)(`p`,{children:`Mark Medisin + 47 23369090`}),(0,o.jsx)(`h6`,{children:`Nærmeste leder`}),(0,o.jsx)(`p`,{children:`Ikke oppgitt.`})]})}},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Dialog summary.`}),(0,o.jsx)(`h6`,{children:`Header 6`}),(0,o.jsx)(`p`,{children:`Mark Medisin + 47 23369090`}),(0,o.jsx)(`h6`,{children:`Header 6`}),(0,o.jsx)(`p`,{children:`Ikke oppgitt.`})]})}},f={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Dialog summary.`}),(0,o.jsx)(i,{title:`2 attachments`,items:[{href:`#`,label:`Document 1.pdf`},{href:`#`,label:`Document 2.pdf`}]})]})}},p={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Dialog summary.`}),(0,o.jsx)(i,{title:`4 attachments`,items:[{href:`#`,label:`Short document.pdf`,metadata:`PDF, 2.3 MB`,badge:{variant:`outline`,label:`Utløper om 2 uker`}},{href:`#`,label:`A long document title that it will wrap mulitple lines.pdf`,metadata:`PDF, 2.3 MB`,badge:{variant:`outline`,label:`Utløper om 2 uker`,color:`neutral`}},{href:`#`,metadata:`PDF, 1.5 MB`,label:`Another document with a ridicoulous title that should wrap multiple lines.pdf`},{disabled:!0,href:`#`,metadata:`PDF, 1.5 MB`,label:`Disabled document.pdf`,badge:{variant:`tinted`,label:`Utløpt`,color:`neutral`}}]})]})}},m={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{children:`Dialog summary.`}),(0,o.jsx)(r,{items:[{id:`1`,priority:`primary`,label:`Primary CTA`},{id:`2`,priority:`secondary`,label:`Secondary`}]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  tags: ['skip-test']
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Dialog summary.</p>
        <h6>Header 6</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Header 6</h6>
        <p>Ikke oppgitt.</p>
      </>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`Loading`,`Summary`,`ExtendedContent`,`WithAttachments`,`WithAttachmentsMetadata`,`WithActions`];export{c as Default,d as ExtendedContent,l as Loading,u as Summary,m as WithActions,f as WithAttachments,p as WithAttachmentsMetadata,h as __namedExportsOrder,s as default,a as t};