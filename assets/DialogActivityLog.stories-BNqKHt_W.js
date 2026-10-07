import{aa as s,a7 as t,c as d}from"./iframe-RnExGCnN.js";import{d as y,a as v,D as l}from"./dialog-BEGiGkXf.js";import{u as h,b as m}from"./useActivityLogFilter-2suLG9b_.js";import{T as f}from"./Typography-C0LI4Nld.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-Bso5XhNl.js";import"./Section-BUXZc8-c.js";import"./Flex-BMUSu7OL.js";import"./Avatar-BUNCqCk4.js";import"./AvatarGroup-fOMA9ogc.js";import"./Heading-Ds8TW_p4.js";import"./useHighlightedText-wXuVfUlk.js";import"./ActivityLogItem-Bod-7qtP.js";import"./TimelineSegment-DhAKOmD_.js";import"./TimelineBase-BDAQL3RR.js";import"./TimelineIcon-DsbTrhKZ.js";import"./CircleFill-CwRuW5V6.js";import"./Byline-DsvvFWAw.js";import"./Timeline-Cxvv6GcN.js";import"./TimelineActivity-Bc6yfSmS.js";import"./Toolbar-DT0kqj_Z.js";import"./useDropdownMenuController-BoOePyNF.js";import"./Dropdown-B88VU_C4.js";import"./SearchField-vIwRNxpu.js";import"./MagnifyingGlass-t8Md0lZx.js";import"./FieldBase-DiJ4iC98.js";import"./Field-CSEfWH1k.js";import"./Label-DfG8fS43.js";import"./Input--YjiHlpM.js";import"./useMenu-ZXSzWhmh.js";import"./MenuListItem-Dqpn2neg.js";import"./MenuListDivider-CHRqqpSn.js";import"./MenuListHeading-Cn6qeGor.js";import"./MenuItem-BDAEKbBK.js";import"./ItemMedia-D368mX5y.js";import"./Checkmark-DIw4FkIE.js";import"./ItemLabel-B7AwZTmi.js";import"./ItemControls-g4j5xbWR.js";import"./Badge-DH0HalVo.js";import"./Tooltip-CrL6AlY-.js";import"./ChevronRight-CN6Km5wu.js";import"./InformationSquare-CRikKN32.js";import"./Plus-BRt8-Ub-.js";import"./ButtonGroup-CxEAmlK5.js";import"./ButtonGroupDivider-DH04zCn7.js";import"./ChevronUpDown-D19eKQQj.js";import"./ToolbarMenu-Bxnz5zkf.js";import"./ToolbarSearch-ummq6BtR.js";import"./transmissions-3uiwHthj.js";import"./TransmissionList-tW5KHE8c.js";import"./Transmission-euk1xbGx.js";import"./ListItem-DU4tohCc.js";import"./ChevronUp-B2SXqU3E.js";import"./ChevronDown-CHkfpXTu.js";import"./AttachmentList-cSoa2EXN.js";import"./AttachmentLink-6pu77m_w.js";import"./File-Dcq5H8md.js";import"./SeenByLog-BPXSXLnm.js";import"./SeenByLogItem-CKFNCfc_.js";import"./SeenByLogButton-B3vftTJ4.js";import"./Divider-DV7P9Vl3.js";import"./List-CY0yYtOa.js";import"./dialogBody-BqInWKwK.js";import"./DialogAttachments-2DSRrULI.js";import"./dialogLayout-CGwjhAz3.js";import"./contextMenu-2zj5_NbV.js";import"./ArrowRedo-DFH2-rRE.js";import"./EyeClosed-DohH2g6A.js";import"./Eye-Da5HpfRE.js";import"./Archive-CdtSNR_W.js";import"./Trash-D4qqih4r.js";import"./ClockDashed-B4nuCGxu.js";import"./dialogContact-q16Qe7Rg.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    }
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const [q, setQ] = useState<string>('');
  const {
    kind,
    filter
  } = useActivityLogFilter(activityHistorySegments);
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <DialogActivityLog title="Aktivitetslogg for dialog" open={open} onClose={() => setOpen(false)} items={activityHistorySegments} kind={kind} query={q} toolbar={{
      filter,
      search: {
        name: 'q',
        label: 'Søk i aktivitetsloggen',
        placeholder: 'Søk ...',
        value: q,
        onChange: (event: ChangeEvent<HTMLInputElement>) => setQ(event.target.value),
        onClear: () => setQ('')
      }
    }} emptyState={<EmptyState>Det er ikke registrert noen aktiviteter på denne meldingen.</EmptyState>} noResultsState={<EmptyState>Ingen treff</EmptyState>} style={{
      maxHeight: '60vh',
      overflowY: 'auto'
    }} />
    </>;
}`,...e.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...e.parameters?.docs?.description}}};const Rt=["Default","WithFilterAndSearch"];export{o as Default,e as WithFilterAndSearch,Rt as __namedExportsOrder,Mt as default};
