var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as s,a5 as e,b as v}from"./iframe-BfD7syly.js";import{d as h,a as f,D as c}from"./dialog-ILe6KRsi.js";import{u as S,b as m}from"./useActivityLogFilter-Ba81ZN6K.js";import{T as k}from"./Typography-EJ3Vxj-4.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BG0TjSSS.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ActivityLogItem-D0q2c_T6.js";import"./TimelineSegment-DgB06Rb6.js";import"./TimelineBase-C_1zcI8d.js";import"./TimelineIcon-ar_TCjgV.js";import"./CircleFill-oICUw9gf.js";import"./Byline-DIOXwhZW.js";import"./Timeline-D-Unr89b.js";import"./TimelineActivity-DdiI-8Rj.js";import"./Toolbar-u7iR49dR.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./Plus-Oie_r0eR.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonGroupDivider-CfD_ruqK.js";import"./ChevronUpDown-CjLJ_1zh.js";import"./ToolbarMenu-JEVAjleV.js";import"./ToolbarSearch-Carzb1Pu.js";import"./transmissions-CoYxfNoj.js";import"./TransmissionList-CuE5gLXy.js";import"./Transmission-DgLoev6f.js";import"./ListItem-CBQXcdIJ.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./AttachmentList-D_bS-nNX.js";import"./AttachmentLink-CmX9CiIE.js";import"./File-BJcaXPQb.js";import"./SeenByLog-CA9VoUSd.js";import"./SeenByLogItem-CcFKq2R0.js";import"./SeenByLogButton-DlSCPHRq.js";import"./Divider-jpHfesNJ.js";import"./List-ED_XuXRq.js";import"./dialogBody-kq_ZMyaH.js";import"./DialogAttachments-7xfN8q3d.js";import"./dialogLayout-CawXxFTA.js";import"./contextMenu-CodRt691.js";import"./ArrowRedo-Gws1by9s.js";import"./EyeClosed-D1w7G9OV.js";import"./Eye-BBRH0E9c.js";import"./Archive-Do2Bo_ug.js";import"./Trash-DKa5Tgj8.js";import"./ClockDashed-BHc3FuEH.js";import"./dialogContact-Bf1Pfvdr.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=s.useState(!0),[p,a]=s.useState(""),{kind:g,filter:u}=S(m);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:m,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),_t=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...r.parameters?.docs?.description}}};export{n as Default,r as WithFilterAndSearch,_t as __namedExportsOrder,Yt as default};
