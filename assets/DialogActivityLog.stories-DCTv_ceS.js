var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as m,a5 as e,b as v}from"./iframe-BenRi1VF.js";import{d as h,a as f,D as c}from"./dialog-CTnlyq3S.js";import{u as S,b as s}from"./useActivityLogFilter-ji6almbg.js";import{T as k}from"./Typography-CY6bfOBd.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BDISOh7_.js";import"./Section-DdVAzkd7.js";import"./Flex-BtqRQeFd.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ActivityLogItem-Cq5cMUvS.js";import"./TimelineSegment-DC4iebxz.js";import"./TimelineBase-Ca2Wyy6T.js";import"./TimelineIcon-DPcP4S-8.js";import"./CircleFill-0WbwGvWM.js";import"./Byline-BbatCE13.js";import"./Timeline-aTWdnWVy.js";import"./TimelineActivity-BNqMBn7D.js";import"./Toolbar-rm-H9COF.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./SearchField-BPBX14Ku.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuListHeading-BcNWVjjO.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./ItemLabel-lIFyccob.js";import"./ItemControls-C62YDQLR.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ChevronRight-B0Rwz_dW.js";import"./FieldBase-Blf3tEjx.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./useMenu-DrYFOky6.js";import"./MenuListDivider-v6fvRPAn.js";import"./InformationSquare-g2viFsxF.js";import"./Plus-EZwUhJBV.js";import"./ButtonGroup-DfExJwTd.js";import"./ButtonGroupDivider-Dgzv1WfP.js";import"./ChevronUpDown-C0PtXqfc.js";import"./ToolbarMenu-BlQft7A6.js";import"./ToolbarSearch-B5v2bacy.js";import"./transmissions-wx2ta1c0.js";import"./TransmissionList-b7IxEYP1.js";import"./Transmission-BU1V3vhd.js";import"./ListItem-DZ4jGznm.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./AttachmentList-DR2W5BgK.js";import"./AttachmentLink-B11SoVxN.js";import"./File-B8QfmHjG.js";import"./SeenByLog-2aJdRG2Z.js";import"./SeenByLogItem-bUGYvvj1.js";import"./SeenByLogButton-BFs7qVod.js";import"./Divider-DgHIbTcc.js";import"./List-4vc_1Wif.js";import"./dialogBody-DTE_R6CZ.js";import"./DialogAttachments-4qMilPCX.js";import"./dialogLayout-B0M3VXwA.js";import"./contextMenu-DtvCqsFd.js";import"./Checkmark-Dysfm6au.js";import"./ArrowRedo-CM8cT5K_.js";import"./EyeClosed-BxLNsgQg.js";import"./Eye-DVrqDlUx.js";import"./Archive-BQnOimYU.js";import"./Trash-D1ucPBDs.js";import"./ClockDashed-L9d5kKWy.js";import"./dialogContact-DA1cKHsh.js";const zt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[p,a]=m.useState(""),{kind:g,filter:u}=S(s);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:s,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),Gt=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
