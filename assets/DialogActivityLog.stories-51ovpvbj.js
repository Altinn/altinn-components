var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as m,a5 as e,b as v}from"./iframe-C2TXN9Gt.js";import{d as h,a as f,D as c}from"./dialog-DiHZ23cp.js";import{u as S,b as s}from"./useActivityLogFilter-DzuD2XTY.js";import{T as k}from"./Typography-DMeULRXh.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BeoKrKeu.js";import"./Section-SNWVUlRZ.js";import"./Flex-DqWQ_o-P.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ActivityLogItem-Dyy--XS4.js";import"./TimelineSegment-DeW1ZWfE.js";import"./TimelineBase-01B9xXyY.js";import"./TimelineIcon-BMNSluim.js";import"./CircleFill-zAMCsYHy.js";import"./Byline-DK66ofGy.js";import"./Timeline-5DaisPSc.js";import"./TimelineActivity-BBrmfOYZ.js";import"./Toolbar-BrgKDmLN.js";import"./useDropdownMenuController-DrcWKor_.js";import"./Dropdown-ClxCQ_oE.js";import"./SearchField-BhmsKdsU.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./ItemLabel-zq6K58HK.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./FieldBase-RJLhkwbG.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./useMenu-PLj8_L9k.js";import"./MenuListDivider-DUsmtn09.js";import"./InformationSquare-CbcqUQld.js";import"./Plus-B0fUlCfQ.js";import"./ButtonGroup-BxGjQybR.js";import"./ButtonGroupDivider-CvcVcX9T.js";import"./ChevronUpDown-B3bkzlBg.js";import"./ToolbarMenu-PlMmn1Tj.js";import"./ToolbarSearch-Cqu5RvvX.js";import"./transmissions-B1yb5S56.js";import"./TransmissionList-DPnIo4M3.js";import"./Transmission-B8sKjSDm.js";import"./ListItem-GzrLSPBi.js";import"./ChevronUp-JvKfy9Td.js";import"./ChevronDown-5BC-Ndiq.js";import"./AttachmentList-ZkkIYjuA.js";import"./AttachmentLink-HtBXwvSR.js";import"./File-B9o2-Inw.js";import"./SeenByLog-B24XaogK.js";import"./SeenByLogItem-CUiuPmkf.js";import"./SeenByLogButton-CtNC8-iM.js";import"./Divider-Bl4NdbOx.js";import"./List-BlCHXrfZ.js";import"./dialogBody-BPZxAlxA.js";import"./DialogAttachments-BaKtHTWP.js";import"./dialogLayout-CCSUTZA6.js";import"./contextMenu-D7IHIpWH.js";import"./Checkmark-BMKDsWEg.js";import"./ArrowRedo-DQpIwChN.js";import"./EyeClosed-CVpwFb90.js";import"./Eye-J-HTiEIt.js";import"./Archive-DKeMOGZM.js";import"./Trash-DNndesK1.js";import"./ClockDashed-BxyNbPTe.js";import"./dialogContact-CDseglxz.js";const zt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[p,a]=m.useState(""),{kind:g,filter:u}=S(s);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:s,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),Gt=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
