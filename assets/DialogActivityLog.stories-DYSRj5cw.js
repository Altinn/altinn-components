var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as s,a5 as e,b as v}from"./iframe-CplFPuE2.js";import{d as h,a as f,D as c}from"./dialog-DRC6E8Oe.js";import{u as S,b as m}from"./useActivityLogFilter-DK4IhiZ6.js";import{T as k}from"./Typography-pPFkmvZJ.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BJDu01Be.js";import"./Section-CaXjLAlu.js";import"./Flex-CoXKQauA.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ActivityLogItem-DiBChws-.js";import"./TimelineSegment-D_Bk5Wuk.js";import"./TimelineBase-Cxs3MFsP.js";import"./TimelineIcon-lKRx6Nn3.js";import"./CircleFill-BuUHP5lV.js";import"./Byline-7e44F15m.js";import"./Timeline-C7PFtRlm.js";import"./TimelineActivity-BrtY6VCI.js";import"./Toolbar-DU79cBAf.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./SearchField-4LhcGogw.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ChevronRight-44eUUhYn.js";import"./FieldBase-BHrQkTmp.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./useMenu-Ct0wDmor.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";import"./Plus-Cjvj3mBz.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonGroupDivider-CKEVKxff.js";import"./ChevronUpDown-6RtyQlti.js";import"./ToolbarMenu-C1bI1EOA.js";import"./ToolbarSearch-BJxiTUIW.js";import"./transmissions-DxF1ajs0.js";import"./TransmissionList-BdfjFm1j.js";import"./Transmission-P_2RcU4z.js";import"./ListItem-BTgrhjIM.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./AttachmentList-C5vWoJ3-.js";import"./AttachmentLink-CtfwYzh4.js";import"./File-Y3ekZfhU.js";import"./SeenByLog-DIYiRhfO.js";import"./SeenByLogItem-Bzni_D93.js";import"./SeenByLogButton-DTDZExWe.js";import"./Divider-cR4CUUoH.js";import"./List-DjlZKLgR.js";import"./dialogBody-zv7wox_J.js";import"./DialogAttachments-DjZTtSJH.js";import"./dialogLayout-CBGc1HRt.js";import"./contextMenu-BDTdpKQM.js";import"./ArrowRedo-DPonm4gU.js";import"./EyeClosed-B70KKQMK.js";import"./Eye-CXIk-29c.js";import"./Archive-YBefTHiT.js";import"./Trash-DVLYtG5v.js";import"./ClockDashed-Cu0lpOdc.js";import"./dialogContact-3N55DR7B.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=s.useState(!0),[p,a]=s.useState(""),{kind:g,filter:u}=S(m);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:m,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),_t=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...r.parameters?.docs?.description}}};export{n as Default,r as WithFilterAndSearch,_t as __namedExportsOrder,Yt as default};
