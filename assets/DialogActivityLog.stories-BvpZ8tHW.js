var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as m,a5 as e,b as v}from"./iframe-CQ8LzMHp.js";import{d as h,a as f,D as c}from"./dialog-CLzBUQNs.js";import{u as S,b as s}from"./useActivityLogFilter-DmXVq563.js";import{T as k}from"./Typography-C0hb-rov.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-CI4rT6G0.js";import"./Section-NN2pd56z.js";import"./Flex-DjPJH1VJ.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./ActivityLogItem-BS7rmsnT.js";import"./TimelineSegment-CCxq1Mc7.js";import"./TimelineBase-BcJq6zX9.js";import"./TimelineIcon-N-Za7lqz.js";import"./CircleFill-6fsSFvYB.js";import"./Byline-DxUiDI_d.js";import"./Timeline-BpsHO6ja.js";import"./TimelineActivity-CS5hmqzT.js";import"./Toolbar-mdn2f44t.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./SearchField-0g3sCasv.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemMedia-BTxysFbk.js";import"./ItemLabel-CgsktDzP.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./ChevronRight-ywpt7Pxk.js";import"./FieldBase-wKpsF2Qr.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./useMenu-CDI-E8wX.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./Plus-DLJWKiOB.js";import"./ButtonGroup-CwiMzic7.js";import"./ButtonGroupDivider-DMMhIRDu.js";import"./ChevronUpDown-7ntYmY5l.js";import"./ToolbarMenu-BRsFP4k1.js";import"./ToolbarSearch-CdJiqLBS.js";import"./transmissions-JRcvBKjD.js";import"./TransmissionList-B4o-BvXf.js";import"./Transmission-R_YqYzqz.js";import"./ListItem-BwJteLX3.js";import"./ChevronUp-C1AG-Aka.js";import"./ChevronDown-BCthsF-h.js";import"./AttachmentList-CGZBmoTp.js";import"./AttachmentLink-D18NohXJ.js";import"./File-BaeUjrCA.js";import"./SeenByLog-DAUyKhlc.js";import"./SeenByLogItem-5rquWb4p.js";import"./SeenByLogButton-Ci-RKhSI.js";import"./Divider-d-9l0yLk.js";import"./List-DOKhwhdW.js";import"./dialogBody-k2MLN5E2.js";import"./DialogAttachments-BeZl9_g_.js";import"./dialogLayout-DSENdonQ.js";import"./contextMenu-CrRe95mk.js";import"./Checkmark-CgKKHBb_.js";import"./ArrowRedo-m5BV143n.js";import"./EyeClosed-CwfSppzL.js";import"./Eye-BbHrpMpQ.js";import"./Archive-D8VT4iDx.js";import"./Trash-CygTswjF.js";import"./ClockDashed-BNcJLMaQ.js";import"./dialogContact-5tCCmmuj.js";const zt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[p,a]=m.useState(""),{kind:g,filter:u}=S(s);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:s,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),Gt=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...r.parameters?.docs?.description}}};export{n as Default,r as WithFilterAndSearch,Gt as __namedExportsOrder,zt as default};
