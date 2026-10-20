var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-uBWg0zsp.js";import{d as h,a as f,D as c}from"./dialog-IXtI0G6B.js";import{u as S,b as n}from"./useActivityLogFilter-CvlWqgfi.js";import{T as k}from"./Typography-nYxE8-3g.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BN9ps4gr.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ActivityLogItem-BjTOavqF.js";import"./TimelineSegment-DUqLTki5.js";import"./TimelineBase-BJf3184q.js";import"./TimelineIcon-BRwc9opb.js";import"./CircleFill-DP7VxGpL.js";import"./Byline-9oMI9IrU.js";import"./Timeline-DNifqRra.js";import"./TimelineActivity-9zlGhJbx.js";import"./Toolbar-B2g5Tm7E.js";import"./useDropdownMenuController-Bo6Cy3yx.js";import"./Dropdown-xncsPjss.js";import"./SearchField-CiFTLXk1.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./FieldBase-Bze69qIO.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";import"./useMenu-CXJ-cLkO.js";import"./MenuListItem-CF8uHASG.js";import"./MenuListDivider-Dqpo6I2q.js";import"./MenuListHeading-BKTLR-s3.js";import"./MenuItem-SLuK_1Or.js";import"./ItemMedia-DYHGe3r3.js";import"./Checkmark-BMATBI43.js";import"./ItemLabel-BpKks5h0.js";import"./ItemControls-D7ku9ps1.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./ChevronRight-Ci7fQup2.js";import"./InformationSquare-D-wVMUGu.js";import"./Plus-BMtrBUYo.js";import"./ButtonGroup-C6ZuBQRD.js";import"./ButtonGroupDivider-CGBPGrPK.js";import"./ChevronUpDown-bcIda0WI.js";import"./ToolbarMenu-CKPkRkYr.js";import"./ToolbarSearch-C5ps8JRx.js";import"./transmissions-vthpPgZK.js";import"./TransmissionList-e_SX2nKg.js";import"./Transmission-CmI6oaLA.js";import"./ListItem-DZSp_PZG.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./AttachmentList-AvypWfxY.js";import"./AttachmentLink-06aMqPwJ.js";import"./File-RxoSb9Tf.js";import"./SeenByLog-ByNemD-0.js";import"./SeenByLogItem-Dut_1a95.js";import"./SeenByLogButton-BPkFIVeQ.js";import"./Divider-CsxBHb0r.js";import"./List-CPfTuEIO.js";import"./dialogBody-51216I8R.js";import"./DialogAttachments-C52uL1k8.js";import"./dialogLayout-BtupsmJO.js";import"./contextMenu-C3BKhhid.js";import"./ArrowRedo-B8w7jeid.js";import"./EyeClosed-CNrGAJ_7.js";import"./Eye-DgHVmCA9.js";import"./Archive-CUWUpWB2.js";import"./Trash-C1BuSK8u.js";import"./ClockDashed-DJcBaFOk.js";import"./dialogContact-JBuIkJVq.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    }
  }
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...r.parameters?.docs?.description}}};const _t=["Default","WithFilterAndSearch"];export{p as Default,r as WithFilterAndSearch,_t as __namedExportsOrder,Yt as default};
