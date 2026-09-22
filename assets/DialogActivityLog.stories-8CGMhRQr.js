import{aa as s,a7 as t,c as d}from"./iframe-Ca4u80-y.js";import{d as y,a as v,D as l}from"./dialog-_Db10_4V.js";import{u as h,b as m}from"./useActivityLogFilter-CWxa2uO4.js";import{T as f}from"./Typography-DWDEZq_R.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-BlWXQol1.js";import"./Section-DPESya5-.js";import"./Flex-DwGvCXeV.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./ActivityLogItem-8cKupzaE.js";import"./TimelineSegment-_ddduSMM.js";import"./TimelineBase-BApLbGL3.js";import"./TimelineIcon-B_W8ggdI.js";import"./CircleFill-4l55n0lo.js";import"./Byline-CZsol804.js";import"./Timeline-B4XgYiiX.js";import"./TimelineActivity-BR1yMYHb.js";import"./Toolbar-BBERRx06.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ChevronRight-eVASrmJg.js";import"./InformationSquare-C5WU0eyN.js";import"./Plus-Oh3Xr98D.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUpDown-D7s4rO6j.js";import"./ToolbarMenu-NSIS5DTX.js";import"./ToolbarSearch-B76M7lyM.js";import"./transmissions-BpszGgtm.js";import"./TransmissionList-JnYMDijS.js";import"./Transmission-CKDmZlKa.js";import"./ListItem-CSPc22TA.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./AttachmentList-yf6pRco8.js";import"./AttachmentLink-BpjRJxc3.js";import"./File-KhZftDbX.js";import"./SeenByLog-B99Wjjjl.js";import"./SeenByLogItem-BxoHIfOx.js";import"./SeenByLogButton-Dg0lFSTs.js";import"./Divider-BPwrxXbC.js";import"./List-DNrtm8Gg.js";import"./dialogBody-sXZz1Qpe.js";import"./DialogAttachments-DtMHVMqV.js";import"./dialogLayout-GvWG-H6I.js";import"./contextMenu-DZEqAivX.js";import"./ArrowRedo-DJvmVjMy.js";import"./EyeClosed-Dm4wT9Ip.js";import"./Eye-DePIxeVK.js";import"./Archive-JQjADMnA.js";import"./Trash-CQegPx8Y.js";import"./ClockDashed-C2nFpDvH.js";import"./dialogContact-D-XlrrOI.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
