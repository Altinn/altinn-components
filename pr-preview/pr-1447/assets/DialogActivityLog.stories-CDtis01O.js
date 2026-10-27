var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-CtXhLetY.js";import{d as h,a as f,D as c}from"./dialog-CLaidamP.js";import{u as S,b as n}from"./useActivityLogFilter-DquVRXW6.js";import{T as k}from"./Typography-BeyzbKvD.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-Bv_B0VCd.js";import"./Section-BY6ZWS4H.js";import"./Flex-B2jEbRqX.js";import"./Avatar-C_nt_-qv.js";import"./AvatarGroup-BusGV1QQ.js";import"./Heading-B7X6yBjX.js";import"./useHighlightedText-CqB1D3Sj.js";import"./ActivityLogItem-DYv7Aps5.js";import"./TimelineSegment-CuLF3KAg.js";import"./TimelineBase-Dto59j55.js";import"./TimelineIcon-najjdjUT.js";import"./CircleFill-BJXG2JgM.js";import"./Byline-B302tQe6.js";import"./Timeline-D-WXctaq.js";import"./TimelineActivity-DaJC7-0G.js";import"./Toolbar-BBuaQHy6.js";import"./useDropdownMenuController-iiDYFfhV.js";import"./Dropdown-D7OO9hIV.js";import"./SearchField-DGLH3IXX.js";import"./MagnifyingGlass-BW7UTF9K.js";import"./MenuListItem-DIFzVMat.js";import"./MenuListHeading-6_KiCxEb.js";import"./MenuItem-Dg4o38tg.js";import"./ItemMedia-BiJdsWyj.js";import"./Checkmark-Dh1g_xoQ.js";import"./ItemLabel-D2Lcyfj9.js";import"./ItemControls-HM0P9mXN.js";import"./Badge-CvkF3r0_.js";import"./Tooltip-CnrvYiqd.js";import"./ChevronRight-S5R-64jg.js";import"./FieldBase-CnqvqYs3.js";import"./Field-BtWy7god.js";import"./Label-Dko7GLwY.js";import"./Input-QpxxtH2z.js";import"./useMenu-BNTP8R_q.js";import"./MenuListDivider-B0UBxccN.js";import"./InformationSquare-o37slIGL.js";import"./Plus-CaMrdVwa.js";import"./ButtonGroup-BWN2lsHW.js";import"./ButtonGroupDivider-DY6cFDZa.js";import"./ChevronUpDown-dweat57-.js";import"./ToolbarMenu-BN4HJd0Y.js";import"./ToolbarSearch-BD6zThIa.js";import"./transmissions-m4r7ppF1.js";import"./TransmissionList-CHRjLEP6.js";import"./Transmission-joV0LlHm.js";import"./ListItem--hs6nnp1.js";import"./ChevronUp-7x0YByos.js";import"./ChevronDown-ChgXhb0d.js";import"./AttachmentList-COLGXryS.js";import"./AttachmentLink-B0bsNG_4.js";import"./File-DbSnV6Yz.js";import"./SeenByLog-0TWvdDgm.js";import"./SeenByLogItem-Do5zY0dW.js";import"./SeenByLogButton-CwuY1EPj.js";import"./Divider-BbnOYJmg.js";import"./List-DnDiNJx5.js";import"./dialogBody-ClrdfVTb.js";import"./DialogAttachments-CSXSlXTg.js";import"./dialogLayout-CCAv0i_1.js";import"./contextMenu-CXewD_Ek.js";import"./ArrowRedo-BxOqg4rk.js";import"./EyeClosed-TrZKqRIk.js";import"./Eye-CcbJkz05.js";import"./Archive-CMlmkXHW.js";import"./Trash-BBjuHv-u.js";import"./ClockDashed-Bf3NF91U.js";import"./dialogContact-B7lASb6M.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
