import{aa as s,a7 as t,c as d}from"./iframe-BbHZTISi.js";import{d as y,a as v,D as l}from"./dialog-CU4RKpSF.js";import{u as h,b as m}from"./useActivityLogFilter-GFuLcpPZ.js";import{T as f}from"./Typography-Ckv3AOJx.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-Bf_4VZq1.js";import"./Section-DsI3lDGv.js";import"./Flex-RSxiLUVh.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./Heading-Bg_B2C5V.js";import"./useHighlightedText-BqQK_DfD.js";import"./ActivityLogItem-B23j3sVU.js";import"./TimelineSegment-DAfWWCCx.js";import"./TimelineBase-CL9ObuJ3.js";import"./TimelineIcon-BfeDAaKx.js";import"./CircleFill-Bv_uc4ex.js";import"./Byline-BcQeWFgN.js";import"./Timeline-BA98xoPD.js";import"./TimelineActivity-CTOUI84b.js";import"./Toolbar-BB0p5G7l.js";import"./useDropdownMenuController-DIgZVBo5.js";import"./Dropdown-awoLZP1t.js";import"./SearchField-DJUCyIg2.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./FieldBase-Di9G28SV.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";import"./useMenu-Bq15wZBe.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./ItemMedia-C2Z0jrya.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./ItemControls-CSWL4roz.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./ChevronRight-BedwSMvr.js";import"./InformationSquare-5U7NjUWT.js";import"./Plus-BcB75ChO.js";import"./ButtonGroup-CDktoaSg.js";import"./ButtonGroupDivider-DMa9JJws.js";import"./ChevronUpDown-DMxjymbp.js";import"./ToolbarMenu-D5dQAGTD.js";import"./ToolbarSearch-QWfoLeEk.js";import"./transmissions-EV_i2V5q.js";import"./TransmissionList-CEuxGPcZ.js";import"./Transmission-C8li9dog.js";import"./ListItem-BYKMPFNC.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";import"./AttachmentList-nWyZ07ZR.js";import"./AttachmentLink-D4VnEf0A.js";import"./File-BqQmYV8X.js";import"./SeenByLog-BTGf3MpZ.js";import"./SeenByLogItem-D_oLTy31.js";import"./SeenByLogButton-DUmiKrrN.js";import"./Divider-MYmbMM0W.js";import"./List-CzNKG4D0.js";import"./dialogBody-DelSwFWm.js";import"./DialogAttachments-9pbU-yem.js";import"./dialogLayout-C3mjMFWh.js";import"./contextMenu-DVbkMA6U.js";import"./ArrowRedo-DFL_UKNO.js";import"./EyeClosed-BymrjMMZ.js";import"./Eye-BFNDKSp8.js";import"./Archive-aUibtt6h.js";import"./Trash-CsnE7fwZ.js";import"./ClockDashed-wDeFYimQ.js";import"./dialogContact-6yBzhZke.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    }
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...e.parameters?.docs?.description}}};const Rt=["Default","WithFilterAndSearch"];export{o as Default,e as WithFilterAndSearch,Rt as __namedExportsOrder,Mt as default};
