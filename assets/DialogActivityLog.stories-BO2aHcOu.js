var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-ITS-2hJr.js";import{d as h,a as f,D as c}from"./dialog-OETmJb8R.js";import{u as S,b as n}from"./useActivityLogFilter-Bwy_2zfn.js";import{T as k}from"./Typography-8PAPF6ji.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-Cqe55Y6K.js";import"./Section-b3xCS6xU.js";import"./Flex-D_HsLLCq.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ActivityLogItem-8sJ8g69f.js";import"./TimelineSegment-BGcxBXpW.js";import"./TimelineBase-98V2PBjP.js";import"./TimelineIcon-BlPJzYVS.js";import"./CircleFill-DTSPgWKG.js";import"./Byline-D-FlqTL-.js";import"./Timeline-CMlLMU3I.js";import"./TimelineActivity-C_DG3pvg.js";import"./Toolbar-B4EZvB9l.js";import"./useDropdownMenuController-CM_xdbKo.js";import"./Dropdown-wTA40yAo.js";import"./SearchField-BL8KL877.js";import"./MagnifyingGlass-CFIOBciK.js";import"./FieldBase-CQGaRX-e.js";import"./Field-D1z-R59Q.js";import"./Label-o7Cne8nH.js";import"./Input-eieVqTh_.js";import"./useMenu-Cz88jtED.js";import"./MenuListItem-miDecag1.js";import"./MenuListDivider-BBgMhND-.js";import"./MenuListHeading-9OnaDQ2l.js";import"./MenuItem-D7bepgio.js";import"./ItemMedia-pMPhCUmI.js";import"./Checkmark-BcDZo_1U.js";import"./ItemLabel-CppZedji.js";import"./ItemControls-f_wXUIix.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./ChevronRight-DGdpC6SO.js";import"./InformationSquare-Cv25qdYy.js";import"./Plus-CqSWQ4ND.js";import"./ButtonGroup-B79-xqIF.js";import"./ButtonGroupDivider-Dt9pRo8c.js";import"./ChevronUpDown-B9kTMUXY.js";import"./ToolbarMenu-D_tvtLoq.js";import"./ToolbarSearch-C_nxeNPy.js";import"./transmissions-CTeHPkQh.js";import"./TransmissionList-BIEWZPEa.js";import"./Transmission-yxoSb9aG.js";import"./ListItem-5Rr0WNcR.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./AttachmentList-D-jzX0TA.js";import"./AttachmentLink-C-by3tVe.js";import"./File-BJbWXz_I.js";import"./SeenByLog-C0xUL4m2.js";import"./SeenByLogItem-D1xWHZAK.js";import"./SeenByLogButton-DPP9-S3m.js";import"./Divider-XNCFH8Co.js";import"./List-B0u74Cjz.js";import"./dialogBody-Dq1Y911e.js";import"./DialogAttachments-Ccl8fln0.js";import"./dialogLayout-CVYxf7ug.js";import"./contextMenu-C4GOTa6E.js";import"./ArrowRedo-D2q7Of2H.js";import"./EyeClosed-CiVuKgqQ.js";import"./Eye--2dWXy2Z.js";import"./Archive-BfyIZBrU.js";import"./Trash-Cy_ISLKx.js";import"./ClockDashed-jbIYtePL.js";import"./dialogContact-BrF-mtFs.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
