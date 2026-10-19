var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-C7zNVDTT.js";import{d as h,a as f,D as c}from"./dialog-Cw7194Pu.js";import{u as S,b as n}from"./useActivityLogFilter-CnBmaLy7.js";import{T as k}from"./Typography-4gq5i4xU.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-DHblQtRU.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Heading-gv6s55oV.js";import"./useHighlightedText-CLjqXK08.js";import"./ActivityLogItem-njm6gpHL.js";import"./TimelineSegment-DcxWyMtE.js";import"./TimelineBase-oJ0w_E8D.js";import"./TimelineIcon-Ca1USCvA.js";import"./CircleFill-DFxmWNrs.js";import"./Byline-9WqjKM1E.js";import"./Timeline-CyJcYoSZ.js";import"./TimelineActivity-BNZnNEwD.js";import"./Toolbar-D5UOIQbP.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./InformationSquare-BvDWZ3oM.js";import"./Plus-D2iqct3P.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonGroupDivider-CndRbUqR.js";import"./ChevronUpDown-R0HlDPZA.js";import"./ToolbarMenu-WfeXYafB.js";import"./ToolbarSearch-GE1ukijt.js";import"./transmissions-CBfmqBxk.js";import"./TransmissionList-DPo2TXc8.js";import"./Transmission-DDBSCaLG.js";import"./ListItem-taDywDuL.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./AttachmentList-Ds9QYH06.js";import"./AttachmentLink-Dx6bq-jk.js";import"./File-DFpEzsx5.js";import"./SeenByLog-BdhoqJu8.js";import"./SeenByLogItem-BiV_dEcT.js";import"./SeenByLogButton-Jr5X6a2N.js";import"./Divider-B8BEf1fJ.js";import"./List-Eab06pgk.js";import"./dialogBody-s1bSZPem.js";import"./DialogAttachments-BrgL2Akw.js";import"./dialogLayout-C2ECHBu_.js";import"./contextMenu-DCzdrL2f.js";import"./ArrowRedo-BWszVVSB.js";import"./EyeClosed-DPRjRn3y.js";import"./Eye-C9j4iDyb.js";import"./Archive-k3j1nRib.js";import"./Trash-DXsDcsqv.js";import"./ClockDashed-Ni0gvRCY.js";import"./dialogContact-B4ZoLoUw.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
