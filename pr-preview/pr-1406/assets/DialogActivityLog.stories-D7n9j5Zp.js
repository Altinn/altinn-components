import{aa as s,a7 as t,c as d}from"./iframe-CSiNS2_t.js";import{d as y,a as v,D as l}from"./dialog-0yAJSIk6.js";import{u as h,b as m}from"./useActivityLogFilter-Ckl9Ob-t.js";import{T as f}from"./Typography-tfUHPeKu.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-DOzVYGFR.js";import"./Section-iGjVnzYd.js";import"./Flex-DavaSday.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ActivityLogItem-B6H4wYhB.js";import"./TimelineSegment-BxoxEgX5.js";import"./TimelineBase-CriF9b3T.js";import"./TimelineIcon-BVaQl3Zw.js";import"./CircleFill-x1kv-teP.js";import"./Byline-Ofgpqf54.js";import"./Timeline-B0RVXsZV.js";import"./TimelineActivity-GvulO0AG.js";import"./Toolbar-Dbt9jT0e.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./MagnifyingGlass-L16wMwR7.js";import"./FieldBase-rPqTSW37.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./useMenu-DQhM8YBj.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ChevronRight-dChxZgZA.js";import"./InformationSquare-BVqQ7zdO.js";import"./Plus-BIfsBTTp.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonGroupDivider-DfTuAjlw.js";import"./ChevronUpDown-C_MVpDOS.js";import"./ToolbarMenu-Dh3kZ0-W.js";import"./ToolbarSearch-DJCiNHBT.js";import"./transmissions-sMu-wYE9.js";import"./TransmissionList-8dKPl3VC.js";import"./Transmission-hY9HQQwK.js";import"./ListItem-B3moosZM.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./AttachmentList-lF1lcWPt.js";import"./AttachmentLink-DAVIbwh_.js";import"./File-DmG3ZrjZ.js";import"./SeenByLog-IAWNEpLw.js";import"./SeenByLogItem-Ch1h3JaY.js";import"./SeenByLogButton-CYzWkEwH.js";import"./Divider-y9qHaSmE.js";import"./List-DUVcdDRk.js";import"./dialogBody-Cse8p7b3.js";import"./DialogAttachments-RC3Yz3VY.js";import"./dialogLayout-B1aEnUyK.js";import"./contextMenu-BX5CyJ3-.js";import"./ArrowRedo-mCVhBdC4.js";import"./EyeClosed-CG9RcIYj.js";import"./Eye-DPyOhO7V.js";import"./Archive-Mf-Uju2B.js";import"./Trash-BcSvu00l.js";import"./ClockDashed-oEpq6VsW.js";import"./dialogContact-4zCUNG6w.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
