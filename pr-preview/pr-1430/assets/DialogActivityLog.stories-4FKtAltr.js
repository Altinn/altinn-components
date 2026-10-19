var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-Bv9y2YZF.js";import{d as h,a as f,D as c}from"./dialog-CQ1WBlAR.js";import{u as S,b as n}from"./useActivityLogFilter-DcZyC9wu.js";import{T as k}from"./Typography-AZvc429m.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-Bb-z6REP.js";import"./Section-SEwZH98m.js";import"./Flex-k0HwcErc.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./ActivityLogItem-Dpew3aU2.js";import"./TimelineSegment-BXqG3e2Z.js";import"./TimelineBase-CYHjeoqW.js";import"./TimelineIcon-kYhCDeB9.js";import"./CircleFill-B6YVEcix.js";import"./Byline-jEJeyCgg.js";import"./Timeline-DNjviXS9.js";import"./TimelineActivity-C_kKGknl.js";import"./Toolbar-5W-HZqc-.js";import"./useDropdownMenuController-BYwkMXkD.js";import"./Dropdown-DQyu8KYK.js";import"./SearchField-Bk5qe-oT.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronRight-B_ztNHmN.js";import"./InformationSquare-BoyRK6zF.js";import"./Plus-vOPLkYgp.js";import"./ButtonGroup-DFBjPK-b.js";import"./ButtonGroupDivider-ZSZown_M.js";import"./ChevronUpDown-DgipHcom.js";import"./ToolbarMenu-DvYBhnPD.js";import"./ToolbarSearch-BvuzNCnf.js";import"./transmissions-D0vOxrBY.js";import"./TransmissionList-C9E7RnEO.js";import"./Transmission-CrUcxLlm.js";import"./ListItem-C6mw7NGu.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./AttachmentList-Dt35cZvL.js";import"./AttachmentLink-CzXwMzRr.js";import"./File-B_YudXxQ.js";import"./SeenByLog-Ze4oW-2D.js";import"./SeenByLogItem-DCMbH4r-.js";import"./SeenByLogButton-DPS3aksO.js";import"./Divider-CX9Qmd6L.js";import"./List-BC0AOX2B.js";import"./dialogBody-B_4Ea0GV.js";import"./DialogAttachments-CkDRf3up.js";import"./dialogLayout-BLJyIsNJ.js";import"./contextMenu-BYwZhid5.js";import"./ArrowRedo-CzeRLma4.js";import"./EyeClosed-CYM8YpP6.js";import"./Eye-D-Oiz91w.js";import"./Archive-BZe-TlAS.js";import"./Trash-D9cqJvdS.js";import"./ClockDashed-OPx8LfHd.js";import"./dialogContact-qZS9_EnD.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
