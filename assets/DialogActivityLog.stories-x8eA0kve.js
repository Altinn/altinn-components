var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as s,a5 as e,b as v}from"./iframe-BEPBrhYh.js";import{d as h,a as f,D as c}from"./dialog-4k9OcoF6.js";import{u as S,b as m}from"./useActivityLogFilter-BvwOksle.js";import{T as k}from"./Typography-_e1X1oy3.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-3_P61XP4.js";import"./Section-Dz1fz0TX.js";import"./Flex-x8IfBbMo.js";import"./Avatar-qDEqb0bI.js";import"./AvatarGroup-Gy14OH0C.js";import"./Heading-BqUC1GBi.js";import"./useHighlightedText-DWAIm2UF.js";import"./ActivityLogItem-LA9qrHQ7.js";import"./TimelineSegment-BSZ7orjC.js";import"./TimelineBase-BDSD9wtl.js";import"./TimelineIcon-BgTQ2-UQ.js";import"./CircleFill-BCxgRKwD.js";import"./Byline-abZ11abw.js";import"./Timeline-gLUc3SNM.js";import"./TimelineActivity-CL41fxOj.js";import"./Toolbar-BcD-eICg.js";import"./useDropdownMenuController-DdlZblN1.js";import"./Dropdown-CldWVtsu.js";import"./SearchField-r0pyJJeA.js";import"./MagnifyingGlass-l6jgUFkE.js";import"./MenuListItem-2YHve_kq.js";import"./MenuListHeading-T5KLvVq-.js";import"./MenuItem-H_qy6f71.js";import"./ItemMedia-CYSGtJhU.js";import"./Checkmark-QQMx0dPf.js";import"./ItemLabel-BAi-NqVp.js";import"./ItemControls-CZ-8cGPW.js";import"./Badge-BmPIjRDc.js";import"./Tooltip-DCBB34Fc.js";import"./ChevronRight-BrDrfe7a.js";import"./FieldBase-BC5T5LJl.js";import"./Field-DhJVWLwL.js";import"./Label-jwx91OTT.js";import"./Input-DvI4J5FV.js";import"./useMenu-B9HVKiow.js";import"./MenuListDivider-DmSDyTka.js";import"./InformationSquare-D8scBrIA.js";import"./Plus-DAOB77qZ.js";import"./ButtonGroup-7udc4H2h.js";import"./ButtonGroupDivider-Dp_aRRrw.js";import"./ChevronUpDown-6LOgRZDa.js";import"./ToolbarMenu-CAQJE6gQ.js";import"./ToolbarSearch-DYEg-7Ri.js";import"./transmissions-B6Tt4fb3.js";import"./TransmissionList-CdqXr4QF.js";import"./Transmission-CWjdju7j.js";import"./ListItem-DeiuC3sl.js";import"./ChevronUp-Bk9rr-UB.js";import"./ChevronDown-BSSTTv90.js";import"./AttachmentList-Bw0yZz8n.js";import"./AttachmentLink-XgHTeNU5.js";import"./File-hLb6t_SF.js";import"./SeenByLog-wRaDe7Ap.js";import"./SeenByLogItem-BnNmIxBz.js";import"./SeenByLogButton-BjdiWPL2.js";import"./Divider-DIFGevZU.js";import"./List-BMyhmX1P.js";import"./dialogBody-BGPAd40G.js";import"./DialogAttachments-Wuz2f_BD.js";import"./dialogLayout-BQzWkgry.js";import"./contextMenu-DbPdZv5p.js";import"./ArrowRedo-8TtHblHy.js";import"./EyeClosed-DvPMyFMX.js";import"./Eye-BXRIohnX.js";import"./Archive-NlH1Z6Dm.js";import"./Trash-C1lJDto_.js";import"./ClockDashed-dNbajp4m.js";import"./dialogContact-Dg3X6YoH.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=s.useState(!0),[p,a]=s.useState(""),{kind:g,filter:u}=S(m);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:m,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),_t=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
