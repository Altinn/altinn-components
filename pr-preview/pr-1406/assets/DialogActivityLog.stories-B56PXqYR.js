import{aa as s,a7 as t,c as d}from"./iframe-CH8mgD3C.js";import{d as y,a as v,D as l}from"./dialog-C66kJlCP.js";import{u as h,b as m}from"./useActivityLogFilter-CP4UoF4z.js";import{T as f}from"./Typography-ClkFzU7o.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-B0R0uENp.js";import"./Section-BXIrXZ89.js";import"./Flex-f5LhVaqN.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./ActivityLogItem-C3Egb2M-.js";import"./TimelineSegment-v_bAqJYl.js";import"./TimelineBase-CFA3aBVw.js";import"./TimelineIcon-BQHFWqVd.js";import"./CircleFill-CaawomY_.js";import"./Byline-Bqt45X13.js";import"./Timeline-Jf1okhbV.js";import"./TimelineActivity-Bn0ZlJg_.js";import"./Toolbar-kNCnB05M.js";import"./useDropdownMenuController-FcQfptKr.js";import"./Dropdown-D9qzdFMY.js";import"./SearchField-UH995Up-.js";import"./MagnifyingGlass-BnEAksKO.js";import"./FieldBase-D9urOdyW.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";import"./useMenu-BlkNFW_W.js";import"./MenuListItem-dmpcOffB.js";import"./MenuListDivider-Dpg_gFHI.js";import"./MenuListHeading-Bwq8QFZh.js";import"./MenuItem-B2UgnfYQ.js";import"./ItemMedia-BK3BNMj0.js";import"./Checkmark-BQdUfCkA.js";import"./ItemLabel-DGIpgk0p.js";import"./ItemControls-dstWsIeL.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./ChevronRight-CQGN_WtL.js";import"./InformationSquare-Dm8hsCNK.js";import"./Plus-OvBsSWIf.js";import"./ButtonGroup-DasozfmK.js";import"./ButtonGroupDivider-osaYeEzB.js";import"./ChevronUpDown-BLmzrraw.js";import"./ToolbarMenu-CfRmQeBW.js";import"./ToolbarSearch-2uPYzhh9.js";import"./transmissions-Bu2QDCjg.js";import"./TransmissionList-CEr-ZGEJ.js";import"./Transmission-CuAI6NvE.js";import"./ListItem-C_SsF7OJ.js";import"./ChevronUp-BTM5yc0u.js";import"./ChevronDown-Cn-stDPP.js";import"./AttachmentList-CSkPTRQm.js";import"./AttachmentLink-4khGfxp9.js";import"./File-CKKVEFi5.js";import"./SeenByLog-C0nYB5tn.js";import"./SeenByLogItem-1__C4MyL.js";import"./SeenByLogButton-B2W2EKAZ.js";import"./Divider-CJnScTdD.js";import"./List-1SoWQccD.js";import"./dialogBody-BGzXPYFw.js";import"./DialogAttachments-E103vz9m.js";import"./dialogLayout-CJwbhkak.js";import"./contextMenu-BnWvB4O8.js";import"./ArrowRedo-BThi9mMq.js";import"./EyeClosed-DfWuFC4s.js";import"./Eye-CxVR_STg.js";import"./Archive-O5mpBRtM.js";import"./Trash-BAAoSTtu.js";import"./ClockDashed-D3VqgHdv.js";import"./dialogContact-uL5GGDbZ.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
