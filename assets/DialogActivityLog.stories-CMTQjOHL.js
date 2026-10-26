var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-DZEBeon6.js";import{d as h,a as f,D as c}from"./dialog-BYalesiV.js";import{u as S,b as n}from"./useActivityLogFilter-CpKewxKG.js";import{T as k}from"./Typography-4TCMsL9d.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-DIhMkcvy.js";import"./Section-4shCViQn.js";import"./Flex-OuhsGVSH.js";import"./Avatar-D6PHcyLs.js";import"./AvatarGroup-BkVQ_49o.js";import"./Heading-DnxwPqg0.js";import"./useHighlightedText-C02Ewits.js";import"./ActivityLogItem-iFpUE6Ey.js";import"./TimelineSegment-CJUqTQf5.js";import"./TimelineBase-Dp9JG7PE.js";import"./TimelineIcon-Bt1dbE4R.js";import"./CircleFill-BBJoliEI.js";import"./Byline-5JFdG98w.js";import"./Timeline-Deh4MMij.js";import"./TimelineActivity-CK8SIFWk.js";import"./Toolbar-CGN-VVdg.js";import"./useDropdownMenuController-D_jzgNs_.js";import"./Dropdown-CX71Aqrg.js";import"./SearchField-GPsGdyh4.js";import"./MagnifyingGlass-CTxcpUID.js";import"./MenuListItem-DfeXcHT9.js";import"./MenuListHeading-BypPBxNY.js";import"./MenuItem-BGB4ycnF.js";import"./ItemMedia-6pV5l8vT.js";import"./Checkmark-HYeuFO73.js";import"./ItemLabel-DltkMrM4.js";import"./ItemControls-uBubo23m.js";import"./Badge-DyKbmjLd.js";import"./Tooltip-DxZByRjV.js";import"./ChevronRight-USTqc2u1.js";import"./FieldBase-Ba-trh_u.js";import"./Field-C3XB-y4b.js";import"./Label-BuWFr_Nf.js";import"./Input-mPEfjr4P.js";import"./useMenu-BVHVYpiB.js";import"./MenuListDivider-C1mJKicD.js";import"./InformationSquare-YKe2AoWI.js";import"./Plus-CVzkbDMT.js";import"./ButtonGroup-DaIoZCPY.js";import"./ButtonGroupDivider-kCQDydAf.js";import"./ChevronUpDown--WwyvowO.js";import"./ToolbarMenu-aSovORQt.js";import"./ToolbarSearch-7Szf4uiX.js";import"./transmissions-ChwkOHVD.js";import"./TransmissionList-DY-xoiMT.js";import"./Transmission-fGDUv9d2.js";import"./ListItem-DC7_3uyt.js";import"./ChevronUp-Bz_NdsyW.js";import"./ChevronDown-CwSFKLVt.js";import"./AttachmentList-B2jS_XSy.js";import"./AttachmentLink-BsaOL9j5.js";import"./File-nQ5zYkJt.js";import"./SeenByLog-GVk8Wl4X.js";import"./SeenByLogItem-RBeXRW2R.js";import"./SeenByLogButton-CKopiWIm.js";import"./Divider-CQj3YKL0.js";import"./List-BvRijqX6.js";import"./dialogBody-CCnhM0OB.js";import"./DialogAttachments-BYCrRhkS.js";import"./dialogLayout-xNg_AHqJ.js";import"./contextMenu-DashLZNQ.js";import"./ArrowRedo-CdcBsFuR.js";import"./EyeClosed-dG4eO8-r.js";import"./Eye-HX1b22ye.js";import"./Archive-VujtsAHe.js";import"./Trash-E83sjO2G.js";import"./ClockDashed-FN7mMrSt.js";import"./dialogContact-BFQUh8P2.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
