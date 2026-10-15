var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-BaqLtPTs.js";import{d as h,a as f,D as c}from"./dialog-CHCDdjS1.js";import{u as S,b as n}from"./useActivityLogFilter-DjpNnq4H.js";import{T as k}from"./Typography-DwSVJfAa.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-n_1CR2eM.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Heading-CDNNIgnR.js";import"./useHighlightedText-sWqW6aCW.js";import"./ActivityLogItem-BytuGMwl.js";import"./TimelineSegment-BtttW4j-.js";import"./TimelineBase-DsV3tWIb.js";import"./TimelineIcon-B7m8U5m0.js";import"./CircleFill-Bu5Ccl_n.js";import"./Byline-BEr8_98B.js";import"./Timeline-BnvTJNOq.js";import"./TimelineActivity-2ui3QfJH.js";import"./Toolbar-Dj7s2NCM.js";import"./useDropdownMenuController-omw4CUeb.js";import"./Dropdown-BUS7xPa_.js";import"./SearchField-BCMYwn2Y.js";import"./MagnifyingGlass-D84zuplr.js";import"./FieldBase-BEQqqs0u.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./useMenu-C1bmwhZm.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuListDivider-iw10_T6H.js";import"./MenuListHeading-Cp83ODWk.js";import"./MenuItem-D9hVuXrM.js";import"./ItemMedia-CLNTwl7K.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronRight-Dg4XRKaD.js";import"./InformationSquare-DB9gl9c1.js";import"./Plus-C5MYAhCf.js";import"./ButtonGroup-BJPVaBTK.js";import"./ButtonGroupDivider-B_4k_KaA.js";import"./ChevronUpDown-BFdCo8HA.js";import"./ToolbarMenu-D6_pLKVW.js";import"./ToolbarSearch-BpBZ8xn1.js";import"./transmissions-Du_sEFEp.js";import"./TransmissionList-CzyaHTch.js";import"./Transmission-gUfEv8e3.js";import"./ListItem-B1zZ41e6.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";import"./AttachmentList-ypsPSy4i.js";import"./AttachmentLink-C0R8AbGj.js";import"./File-BxMvjRkD.js";import"./SeenByLog-BDaELRdW.js";import"./SeenByLogItem-DnMCDfA4.js";import"./SeenByLogButton-BcOHrlFJ.js";import"./Divider-BwGpb8y3.js";import"./List-CSO-iXDD.js";import"./dialogBody-B3RlJJok.js";import"./DialogAttachments-ywmBFHpq.js";import"./dialogLayout-DfBK2zlK.js";import"./contextMenu-C2cXJ3pD.js";import"./ArrowRedo-B1VHFCb0.js";import"./EyeClosed-DuTNNHiS.js";import"./Eye-BRyL4UU8.js";import"./Archive-DIUg_QcS.js";import"./Trash-DdPBT6N6.js";import"./ClockDashed-BYIidY84.js";import"./dialogContact-CLcQzmbV.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
