var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as m,a5 as e,b as v}from"./iframe-CmcSEjvS.js";import{d as h,a as f,D as c}from"./dialog-DWvHI4s3.js";import{u as S,b as s}from"./useActivityLogFilter-BPaKNy_e.js";import{T as k}from"./Typography-sASlV-kd.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-_pzP4G9c.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ActivityLogItem-DXrzbPmQ.js";import"./TimelineSegment-DrvCzU_N.js";import"./TimelineBase-vLHGOzEo.js";import"./TimelineIcon-B0vxP66o.js";import"./CircleFill-CK32KhIE.js";import"./Byline-BkEVnoxC.js";import"./Timeline-B3-MxPus.js";import"./TimelineActivity-C0e7tpFb.js";import"./Toolbar-CvLmVBs-.js";import"./useDropdownMenuController-CjF5utG_.js";import"./Dropdown-BXdn9jDY.js";import"./SearchField-DQeX1ZYV.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./ItemLabel-s_xPF5R8.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";import"./Plus-DVOeMTJ7.js";import"./ButtonGroup-Cpml5GDI.js";import"./ButtonGroupDivider-BTw_i8uf.js";import"./ChevronUpDown-DU_qA88P.js";import"./ToolbarMenu-D_cRkqA5.js";import"./ToolbarSearch-B-k21Sb5.js";import"./transmissions-DMnR7AFN.js";import"./TransmissionList-CXdVKtz4.js";import"./Transmission-D9TF-MkT.js";import"./ListItem-CGdPgfN9.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./AttachmentList-ChCiKaw4.js";import"./AttachmentLink-mBMk8SOX.js";import"./File-CvtVyjYo.js";import"./SeenByLog-DPyjWWkj.js";import"./SeenByLogItem-CnGUk8dJ.js";import"./SeenByLogButton-CwJlsqs_.js";import"./Divider-BXgmMAUp.js";import"./List-DKoS5qie.js";import"./dialogBody-TAS0jnuF.js";import"./DialogAttachments-BAJSVfYh.js";import"./dialogLayout-D32oZJBw.js";import"./contextMenu-ChKdAo5S.js";import"./Checkmark-CgRfi7IM.js";import"./ArrowRedo-CPh1txYq.js";import"./EyeClosed-csj1jCae.js";import"./Eye-BGGU7QHB.js";import"./Archive-B4hgbdr3.js";import"./Trash-BCBK84Mw.js";import"./ClockDashed-DPSB59sO.js";import"./dialogContact-CVvHMLWo.js";const zt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[p,a]=m.useState(""),{kind:g,filter:u}=S(s);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:s,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),Gt=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
