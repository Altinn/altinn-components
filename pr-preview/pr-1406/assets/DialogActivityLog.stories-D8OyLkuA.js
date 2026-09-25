import{aa as s,a7 as t,c as d}from"./iframe-vkxhbe5D.js";import{d as y,a as v,D as l}from"./dialog-c5MJTmwI.js";import{u as h,b as m}from"./useActivityLogFilter-UBgiRoEs.js";import{T as f}from"./Typography-CiocPTHR.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-DMnwwAr3.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ActivityLogItem-D-TDon-m.js";import"./TimelineSegment-Bn4RHDm3.js";import"./TimelineBase-0U0uDXYW.js";import"./TimelineIcon-dnqz5K97.js";import"./CircleFill-CazcW342.js";import"./Byline-BCI5L_Cr.js";import"./Timeline-CgUbsyGP.js";import"./TimelineActivity-BrPCo8Vq.js";import"./Toolbar-DvOjf0om.js";import"./useDropdownMenuController-Bj71dSIy.js";import"./Dropdown-DT6AevuE.js";import"./SearchField-CsfKU_3v.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./FieldBase-BW43HWjL.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";import"./useMenu-pP3xGIIj.js";import"./MenuListItem-BToT8FwM.js";import"./MenuListDivider-DNPFWOP3.js";import"./MenuListHeading-DcoOXLFk.js";import"./MenuItem-CzOEvYQv.js";import"./ItemMedia-iOETwWXj.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronRight-BjSUzT6t.js";import"./InformationSquare-BqHcnGOZ.js";import"./Plus-DvLwQ2c5.js";import"./ButtonGroup-Bd7c8rmX.js";import"./ButtonGroupDivider-DyDsKVxf.js";import"./ChevronUpDown-BC1Pg9KM.js";import"./ToolbarMenu-DOn-kGHm.js";import"./ToolbarSearch-S1S0N9X0.js";import"./transmissions-ZJmceTsk.js";import"./TransmissionList-Cng750Gz.js";import"./Transmission-CehURWIx.js";import"./ListItem-CZ_cmVNu.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./AttachmentList-D-976xEl.js";import"./AttachmentLink-5jPNJLwk.js";import"./File-la3290yk.js";import"./SeenByLog-Dktt2CnJ.js";import"./SeenByLogItem-hRV_NZOZ.js";import"./SeenByLogButton-9hJ4AWhy.js";import"./Divider-Bumy5We0.js";import"./List-BJAmkQFZ.js";import"./dialogBody-Cixrkzm7.js";import"./DialogAttachments-o3U3TaIv.js";import"./dialogLayout-BzMCs00f.js";import"./contextMenu-DEzqJcTK.js";import"./ArrowRedo-Da3wLF1n.js";import"./EyeClosed-CZ3nI7iO.js";import"./Eye-Ci0jSOpI.js";import"./Archive-CztcWrse.js";import"./Trash-kbnaWOjj.js";import"./ClockDashed-CkaBwI9Z.js";import"./dialogContact-CB7UVMOl.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
