import{aa as m,a7 as t,c as d}from"./iframe-CsUY_6Pm.js";import{d as y,a as v,D as l}from"./dialog-DJH6aexh.js";import{u as h,b as s}from"./useActivityLogFilter-BYz8hOJo.js";import{T as f}from"./Typography-DW6BWOsI.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-CQkVoQZl.js";import"./Section-0fvMUnhD.js";import"./Flex-Cj4qx1cq.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./ActivityLogItem-CfDYN8CS.js";import"./TimelineSegment-D_o8YQfW.js";import"./TimelineBase-8Yg_y-QP.js";import"./TimelineIcon-D2CIScEg.js";import"./CircleFill-BxVv9lbl.js";import"./Byline-DjnpylD5.js";import"./Timeline-DK6bwRwX.js";import"./TimelineActivity-DPH9SWcB.js";import"./Toolbar-Ct24gl9B.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./SearchField-R79aEMhJ.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./useMenu-C86uaFsI.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuListDivider-MGuOTVtf.js";import"./MenuListHeading-Y7mmwOXd.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./ItemLabel-CCNLeNoZ.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ChevronRight-JfwdXccy.js";import"./InformationSquare-DR0XxH_N.js";import"./Plus-BIbNWuxu.js";import"./ButtonGroup-BnfYb0Ol.js";import"./ButtonGroupDivider-B6ldKUoe.js";import"./ChevronUpDown-jcMUlXO8.js";import"./ToolbarMenu-wuIiyaem.js";import"./ToolbarSearch-2A_oz84O.js";import"./transmissions-DavgIEZE.js";import"./TransmissionList-CLeMmuOK.js";import"./Transmission-0YOxS4rH.js";import"./ListItem-ac3I4IHC.js";import"./ChevronUp-Bv6xfL3F.js";import"./ChevronDown-B43wHz9B.js";import"./AttachmentList-C7oKEIyE.js";import"./AttachmentLink-YTy6X7r3.js";import"./File-DXEAOqxp.js";import"./SeenByLog-CBXxosCw.js";import"./SeenByLogItem-B5wfHKNm.js";import"./SeenByLogButton-BQ2hMZPf.js";import"./Divider-DgndApZC.js";import"./List-BfidzhqJ.js";import"./dialogBody-B_Jpfuvd.js";import"./DialogAttachments-8bEJg3ro.js";import"./dialogLayout-qGiv4vnO.js";import"./contextMenu-C0h-34EE.js";import"./Checkmark-CVdJCRST.js";import"./ArrowRedo-DiJqPQ_Z.js";import"./EyeClosed-CYiCR1-R.js";import"./Eye-o_1ZzJ4p.js";import"./Archive-kIb2-4cW.js";import"./Trash-DlYZzTYR.js";import"./ClockDashed-BQ95pKVK.js";import"./dialogContact-BBLqi22w.js";const Wt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=m.useState(!0),[p,a]=m.useState(""),{kind:c,filter:g}=h(s);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:s,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...e.parameters?.docs?.description}}};const Yt=["Default","WithFilterAndSearch"];export{o as Default,e as WithFilterAndSearch,Yt as __namedExportsOrder,Wt as default};
