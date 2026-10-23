var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{aa as m,a7 as e,c as v}from"./iframe-C320xpwq.js";import{d as h,a as f,D as c}from"./dialog-LasLr5Zy.js";import{u as S,b as n}from"./useActivityLogFilter-CS2TOusG.js";import{T as k}from"./Typography-DeOYXGTy.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BULMryTE.js";import"./Section-CQzKKRAw.js";import"./Flex-vd8VAqWN.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ActivityLogItem-J2mygNOo.js";import"./TimelineSegment-BVUIBSf-.js";import"./TimelineBase-C-DDJhua.js";import"./TimelineIcon-BjSmaA3G.js";import"./CircleFill-BgG4yu7c.js";import"./Byline-CzGGy-9N.js";import"./Timeline-NpQQ7X_B.js";import"./TimelineActivity-CtXCpTBZ.js";import"./Toolbar-ENmDMeOW.js";import"./useDropdownMenuController-sAJd3n4N.js";import"./Dropdown-DOQP5U0B.js";import"./SearchField-BvARDiuT.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./ItemControls-PDJ9i9Cv.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ChevronRight-0obYraG7.js";import"./FieldBase-CS4MYGp7.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./useMenu-CNq5BiUb.js";import"./MenuListDivider-DFJO6x9b.js";import"./InformationSquare-BVSTZ5OZ.js";import"./Plus-ZWKQtzTH.js";import"./ButtonGroup-BhnnwPdG.js";import"./ButtonGroupDivider-B_8ggyEP.js";import"./ChevronUpDown-DQPbDjfy.js";import"./ToolbarMenu-DBfahwsA.js";import"./ToolbarSearch-Cv5W9lo-.js";import"./transmissions-sA5gzEGo.js";import"./TransmissionList-BD3ZJOdN.js";import"./Transmission-sazxQfZd.js";import"./ListItem-B0VoyUTz.js";import"./ChevronUp-DyDxvCOy.js";import"./ChevronDown-y1vJePuN.js";import"./AttachmentList-CF4M8kw2.js";import"./AttachmentLink-D0HoUd6X.js";import"./File-Bftrz6jT.js";import"./SeenByLog-DznkK3f7.js";import"./SeenByLogItem-DNUvKAhD.js";import"./SeenByLogButton-CqVh50vq.js";import"./Divider-TV8z1--N.js";import"./List-pJ-3rYx1.js";import"./dialogBody-D8PDkUej.js";import"./DialogAttachments-D4F3J8lR.js";import"./dialogLayout--9gC77-Z.js";import"./contextMenu-B-VCa8o7.js";import"./ArrowRedo-C3dlpZiC.js";import"./EyeClosed-iXxtiemI.js";import"./Eye-CjG8fDMz.js";import"./Archive-Cbch5ryT.js";import"./Trash-CVaRXKAa.js";import"./ClockDashed-CjPHkLkZ.js";import"./dialogContact-CueEf6xg.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},p={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[a,s]=m.useState(""),{kind:g,filter:u}=S(n);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:n,kind:g,query:a,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:t(d=>s(d.target.value),"onChange"),onClear:t(()=>s(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch");p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
