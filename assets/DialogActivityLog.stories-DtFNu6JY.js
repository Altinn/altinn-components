var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-CW69B4-4.js";import{d as h,a as f,D as c}from"./dialog-Dq5qxf36.js";import{u as S,b as n}from"./useActivityLogFilter-CU2rlp6K.js";import{T as k}from"./Typography-CD2WmtRN.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-DjVjmbs2.js";import"./Section-DQYipFAJ.js";import"./Flex-CcbgemcX.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ActivityLogItem-D2nxeV4u.js";import"./TimelineSegment-BY4f9P4t.js";import"./TimelineBase-MwIEHNOt.js";import"./TimelineIcon-CWdpUB-_.js";import"./CircleFill-BawqJa2_.js";import"./Byline-xzuOcDfP.js";import"./Timeline-B8CsP392.js";import"./TimelineActivity-8v_-EK0S.js";import"./Toolbar-DYpQGXKR.js";import"./useDropdownMenuController-BBtpGQm9.js";import"./Dropdown-DTxBcaKX.js";import"./SearchField-LDFEPhQv.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ChevronRight-CxFkThxw.js";import"./FieldBase-Cx7I1cae.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";import"./Plus-BD6Fr9o4.js";import"./ButtonGroup-Bd6oXbKy.js";import"./ButtonGroupDivider-Bet5BvnL.js";import"./ChevronUpDown-RCCUwdzA.js";import"./ToolbarMenu-CuVUfLY8.js";import"./ToolbarSearch-L8k6ix7B.js";import"./transmissions-QGIzRuA-.js";import"./TransmissionList-CdwM_0AS.js";import"./Transmission-CBiX_7Rs.js";import"./ListItem-CLQ2Xgr8.js";import"./ChevronUp-BFUaosek.js";import"./ChevronDown-CiTeIiQR.js";import"./AttachmentList-BZXM6mjp.js";import"./AttachmentLink-Can7BI-h.js";import"./File--iyq1SAt.js";import"./SeenByLog-CnxIfI3U.js";import"./SeenByLogItem-Cph50qBz.js";import"./SeenByLogButton-Dbg3fCQo.js";import"./Divider-DY5AwWgq.js";import"./List-RfjPrYOy.js";import"./dialogBody-Cw32fz1A.js";import"./DialogAttachments-Bv3wFbYB.js";import"./dialogLayout-BuzV9v5R.js";import"./contextMenu-CjizS0iC.js";import"./ArrowRedo-Jq1_fqHY.js";import"./EyeClosed-C7AG-Nsq.js";import"./Eye-CWAHgpYC.js";import"./Archive-DYq_SIX9.js";import"./Trash-D4e6x_o2.js";import"./ClockDashed-B9DP6HjC.js";import"./dialogContact-CjyVifoq.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
