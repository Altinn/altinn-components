var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-DliZ2j7V.js";import{d as h,a as f,D as c}from"./dialog-CG7zFLLJ.js";import{u as S,b as n}from"./useActivityLogFilter-CgmyrMQ-.js";import{T as k}from"./Typography-Oc42wyxk.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BFFzW0gc.js";import"./Section-DMRyqAwI.js";import"./Flex-BMB99n2z.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Heading-CtKubyco.js";import"./useHighlightedText-D1lssxtb.js";import"./ActivityLogItem-BwIMDFWZ.js";import"./TimelineSegment-CCJ9x3ku.js";import"./TimelineBase-BXnWmhGf.js";import"./TimelineIcon-BDzfKByO.js";import"./CircleFill-DPRckzgP.js";import"./Byline-Dmr5VWky.js";import"./Timeline-ZWFROD0F.js";import"./TimelineActivity-Dl2BHLRv.js";import"./Toolbar-C6MKFKcQ.js";import"./useDropdownMenuController-X1T9D1nQ.js";import"./Dropdown-BbS2MxJj.js";import"./SearchField-CHTtqi8q.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./useMenu-Bhv2948N.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ChevronRight-_BaSemP0.js";import"./InformationSquare-Bli9QzR2.js";import"./Plus-FziPzHrq.js";import"./ButtonGroup-CWxuOyOz.js";import"./ButtonGroupDivider-BLKYTiBF.js";import"./ChevronUpDown-DyAusyIW.js";import"./ToolbarMenu-BU5BBvEN.js";import"./ToolbarSearch-BnZAKpGD.js";import"./transmissions-DoSJ5Vj_.js";import"./TransmissionList-7V2vh8Sg.js";import"./Transmission-CbiWnR5o.js";import"./ListItem-Br4SdUBJ.js";import"./ChevronUp-yDNMXP2e.js";import"./ChevronDown-DO1dBJk1.js";import"./AttachmentList-CPQgkKqF.js";import"./AttachmentLink-CJ-gQ8I4.js";import"./File-CxAzJXU6.js";import"./SeenByLog-DFCrG15X.js";import"./SeenByLogItem-DX4DRpzs.js";import"./SeenByLogButton-CqaGD5mc.js";import"./Divider-DZaxc5v8.js";import"./List-BHc6Lwhq.js";import"./dialogBody-DlSYYi9s.js";import"./DialogAttachments-CvQ33d_s.js";import"./dialogLayout-CyB2dT9r.js";import"./contextMenu-BXr-JoKg.js";import"./ArrowRedo-83MnwZeY.js";import"./EyeClosed-elgVJOvz.js";import"./Eye-B1obPNLR.js";import"./Archive-COw0cazQ.js";import"./Trash-CR_vY-TR.js";import"./ClockDashed-CTPVNtLg.js";import"./dialogContact-C3EmmPvz.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
