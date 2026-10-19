var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-BhbNl8M-.js";import{d as h,a as f,D as c}from"./dialog-C6YTz9OF.js";import{u as S,b as n}from"./useActivityLogFilter-CREi6DDG.js";import{T as k}from"./Typography-DcyIPmTi.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-MK76vZzv.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ActivityLogItem-CLmEaVDh.js";import"./TimelineSegment-KPkomk4v.js";import"./TimelineBase-DxeabxTl.js";import"./TimelineIcon-BUh_8w6I.js";import"./CircleFill-DYAj9qcm.js";import"./Byline-Dz5EAti2.js";import"./Timeline-rmuwjVeV.js";import"./TimelineActivity-7fbn4N5h.js";import"./Toolbar-Cd-nnA0c.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./Plus-BcmDIJkz.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonGroupDivider-DzYj1AlG.js";import"./ChevronUpDown-DD9NYfqC.js";import"./ToolbarMenu-CGZc-SL-.js";import"./ToolbarSearch-Dh0sqSUB.js";import"./transmissions-vBYwo6jF.js";import"./TransmissionList-DOZNYW5F.js";import"./Transmission-BGQuJZz1.js";import"./ListItem-BZwC__IQ.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./AttachmentList-D0ts3BtR.js";import"./AttachmentLink-C9qZJGLd.js";import"./File-CtbY2wj6.js";import"./SeenByLog-jHaMO83N.js";import"./SeenByLogItem-C7e2jWPn.js";import"./SeenByLogButton-BqPCRn1z.js";import"./Divider-DT7uBvpy.js";import"./List-CK1afVUo.js";import"./dialogBody-BXEozRrx.js";import"./DialogAttachments-BFWeaoMi.js";import"./dialogLayout-BNKmNav2.js";import"./contextMenu-DpFh5wXx.js";import"./ArrowRedo-B4ji5whx.js";import"./EyeClosed-BwhjKXuQ.js";import"./Eye-DNiUrCQs.js";import"./Archive-CfOkFSG4.js";import"./Trash-Df4Pkq18.js";import"./ClockDashed-CjBrcx7s.js";import"./dialogContact-CLMSv5Zu.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
