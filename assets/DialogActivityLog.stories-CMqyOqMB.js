var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-CHdTRX1S.js";import{d as h,a as f,D as c}from"./dialog-DbZW9FC-.js";import{u as S,b as n}from"./useActivityLogFilter-BbHYYBH3.js";import{T as k}from"./Typography-6g7ttECm.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BiQ99NwW.js";import"./Section-C-qQMjwL.js";import"./Flex-BzRwEaeD.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ActivityLogItem-CtyQSrAs.js";import"./TimelineSegment-DA_9hO6g.js";import"./TimelineBase-BhN5lJ5T.js";import"./TimelineIcon-BY2zAJ8D.js";import"./CircleFill-BwGhtvUg.js";import"./Byline-V3bOcgnk.js";import"./Timeline-PYDc5i7T.js";import"./TimelineActivity-DLZHlEnW.js";import"./Toolbar-DZNzE5PK.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./ItemMedia-BQC5N1RJ.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./ItemControls-D53PO9xK.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./ChevronRight-h2GXZqhR.js";import"./FieldBase-CkHB3870.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./useMenu-erQCXILL.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./Plus-XpG4Dc8n.js";import"./ButtonGroup-DccEHAHc.js";import"./ButtonGroupDivider-CyYVvD6M.js";import"./ChevronUpDown-G-PmcF11.js";import"./ToolbarMenu-QYjqK9ep.js";import"./ToolbarSearch-tLMhFnJ2.js";import"./transmissions-CVrjpBYE.js";import"./TransmissionList-C2FiZoRx.js";import"./Transmission-Vr2U_RZt.js";import"./ListItem-sXsJE6ar.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./AttachmentList-whjCYpqv.js";import"./AttachmentLink-MBFs5MyC.js";import"./File-BQfLMfn-.js";import"./SeenByLog-BF-pJlkb.js";import"./SeenByLogItem-CP1N9Kmr.js";import"./SeenByLogButton-BQxPg5QB.js";import"./Divider-CbBQNDrL.js";import"./List-Cx8iXXL1.js";import"./dialogBody-DSW0LJWE.js";import"./DialogAttachments-B6oTvdiy.js";import"./dialogLayout-BYVOlEG7.js";import"./contextMenu-LSv-5_cX.js";import"./ArrowRedo-B6YCJqkV.js";import"./EyeClosed-B3c-lWRi.js";import"./Eye-It4lbTCH.js";import"./Archive-DTcxNWPK.js";import"./Trash-j20aQRbZ.js";import"./ClockDashed-L3cqwChJ.js";import"./dialogContact-WnO1pb99.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
