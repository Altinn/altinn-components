var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-Ck42qOx1.js";import{d as h,a as f,D as c}from"./dialog-Bel5dAbJ.js";import{u as S,b as n}from"./useActivityLogFilter-YvOLcZ4W.js";import{T as k}from"./Typography-nObbjg0R.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-0O6NY7SM.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ActivityLogItem-qPBc7HxV.js";import"./TimelineSegment-D0S5jDYi.js";import"./TimelineBase-DZw0IuIi.js";import"./TimelineIcon-DP7GewQZ.js";import"./CircleFill-CZuQxzK0.js";import"./Byline-DtMU233V.js";import"./Timeline-BKGY5gth.js";import"./TimelineActivity-BieHmc0M.js";import"./Toolbar-DlQHJZIq.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./SearchField-B8KiDBUc.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./FieldBase-ly-5mtcw.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";import"./Plus-1EeeSaLT.js";import"./ButtonGroup-ChpwNZu9.js";import"./ButtonGroupDivider-CJV6LKqZ.js";import"./ChevronUpDown-DmZkFijA.js";import"./ToolbarMenu-CQihSIrV.js";import"./ToolbarSearch-DTrO7UQI.js";import"./transmissions-bged7fI4.js";import"./TransmissionList-CltZtaml.js";import"./Transmission-C8xxaWGv.js";import"./ListItem-DshHRfE3.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./AttachmentList-BBT8MduF.js";import"./AttachmentLink-DyMYhyn8.js";import"./File-nCWJpnOO.js";import"./SeenByLog-CfNk5cML.js";import"./SeenByLogItem-D-0zi5HW.js";import"./SeenByLogButton-CmVA8_Co.js";import"./Divider-CNMs3h7U.js";import"./List-Cq42YOlE.js";import"./dialogBody-DC96-C7L.js";import"./DialogAttachments-BCTupcKY.js";import"./dialogLayout-C5Xe9fZN.js";import"./contextMenu-DUBGKe_5.js";import"./ArrowRedo-rDOmSv7b.js";import"./EyeClosed-BIbYAJrT.js";import"./Eye-BIcFQGrG.js";import"./Archive-DTVQB6g6.js";import"./Trash-hM9OCzu1.js";import"./ClockDashed-1RQ8UU49.js";import"./dialogContact-Dfr3u5Wb.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
