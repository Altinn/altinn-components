var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-BXiLaIo1.js";import{d as h,a as f,D as c}from"./dialog-B2iu-vrZ.js";import{u as S,b as n}from"./useActivityLogFilter-DgovUTJc.js";import{T as k}from"./Typography-DfF7AP8y.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BqZQ8xjv.js";import"./Section-SFy5BcqJ.js";import"./Flex-BVJPbTQ_.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Heading-BSdWQg6G.js";import"./useHighlightedText-K6CHyIcM.js";import"./ActivityLogItem-B0MTojk3.js";import"./TimelineSegment-B4AyTrbX.js";import"./TimelineBase-DAG8dP00.js";import"./TimelineIcon-CcMyRLiq.js";import"./CircleFill-dgrPF3f6.js";import"./Byline-om9Qq1nr.js";import"./Timeline-GJtPCua0.js";import"./TimelineActivity-CCyotycG.js";import"./Toolbar-107oglly.js";import"./useDropdownMenuController-CL8Sjosp.js";import"./Dropdown-By03aGa-.js";import"./SearchField-CdRvOe5p.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./FieldBase-jDY5NJAX.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./useMenu-CtVMoXgj.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./ItemMedia-VY1kKFwh.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./ChevronRight-CsaEnGk6.js";import"./InformationSquare-BMwsKYTB.js";import"./Plus-CrLkghCi.js";import"./ButtonGroup-z8aQXTJr.js";import"./ButtonGroupDivider-BGKQemmv.js";import"./ChevronUpDown-DV6_CqHG.js";import"./ToolbarMenu-DIllebBh.js";import"./ToolbarSearch-TBH6jXP9.js";import"./transmissions-Dsz7iqmk.js";import"./TransmissionList-BMRmPNFo.js";import"./Transmission-BC06aJLv.js";import"./ListItem-CTd9WB7d.js";import"./ChevronUp-yA5Flpqo.js";import"./ChevronDown-DR7pfG2a.js";import"./AttachmentList-Jh9ZEr9P.js";import"./AttachmentLink-dmzqJzM8.js";import"./File-DmNJJwz9.js";import"./SeenByLog-C989vs9d.js";import"./SeenByLogItem-CYyozt3O.js";import"./SeenByLogButton-DjnDmTtK.js";import"./Divider-DPQQ_dI7.js";import"./List-BNBV8ThU.js";import"./dialogBody-BB8w5UXe.js";import"./DialogAttachments-DD7XcPKI.js";import"./dialogLayout-bb5RXi0u.js";import"./contextMenu-BYdTthqj.js";import"./ArrowRedo-CpDYgiNb.js";import"./EyeClosed-C2SMR4Hk.js";import"./Eye-CBC6UTOe.js";import"./Archive-fOl5cdAJ.js";import"./Trash-B6SMwBsT.js";import"./ClockDashed-BJCK-tSb.js";import"./dialogContact-BihFmE7e.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
