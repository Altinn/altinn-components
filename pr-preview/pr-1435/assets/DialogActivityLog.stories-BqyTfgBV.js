var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-C_3qWz8U.js";import{d as h,a as f,D as c}from"./dialog-BDFmL_9M.js";import{u as S,b as n}from"./useActivityLogFilter-Br53Dtlg.js";import{T as k}from"./Typography-BcJ8Dd08.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BKf16YWY.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./ActivityLogItem-CFv6tdIg.js";import"./TimelineSegment-3HR5H64p.js";import"./TimelineBase-DlGIQozO.js";import"./TimelineIcon-0L1HW1kq.js";import"./CircleFill-yj9ZGtOR.js";import"./Byline-nDS7FPa_.js";import"./Timeline-D2wq-Ptt.js";import"./TimelineActivity-BEDlbcLV.js";import"./Toolbar-BaN42SjD.js";import"./useDropdownMenuController-B_MLek_v.js";import"./Dropdown-C4WgdX01.js";import"./SearchField-wVxLElBM.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./FieldBase-2HPCGFYx.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./useMenu-DHyqVfH8.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./ItemMedia-Cj3xkQia.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronRight-Cfc1KVT6.js";import"./InformationSquare-BJVzaHsz.js";import"./Plus-DHsDmPUd.js";import"./ButtonGroup-Byo6nBQS.js";import"./ButtonGroupDivider-DCxTBizd.js";import"./ChevronUpDown-bCOc7Q_P.js";import"./ToolbarMenu-DOZ8j3Oa.js";import"./ToolbarSearch-CauYnztQ.js";import"./transmissions-DMLwG9Qd.js";import"./TransmissionList-D6jfm6jQ.js";import"./Transmission-Dcu4PUZl.js";import"./ListItem-CEzqSoAw.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./AttachmentList-C_2lfk0A.js";import"./AttachmentLink-Br5tLhcB.js";import"./File-DA3CSR9o.js";import"./SeenByLog-CX09IyWC.js";import"./SeenByLogItem-BeiGarMS.js";import"./SeenByLogButton-B07ISqNS.js";import"./Divider-DiesIRLe.js";import"./List-DqRWyw1C.js";import"./dialogBody-DIY7DVsL.js";import"./DialogAttachments-Cq0gT-kN.js";import"./dialogLayout-DohVIZPQ.js";import"./contextMenu-D1XzK2Cu.js";import"./ArrowRedo-B-GLWdzb.js";import"./EyeClosed-C2nwDOMx.js";import"./Eye-CE1cd7I2.js";import"./Archive-BEuDz18x.js";import"./Trash-CF3fiEwO.js";import"./ClockDashed-Bi2OBX1v.js";import"./dialogContact-DjrEWTUV.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
