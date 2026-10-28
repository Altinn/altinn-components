var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as s,a5 as e,b as v}from"./iframe-zDfzPjQ-.js";import{d as h,a as f,D as c}from"./dialog-C4Itfq-5.js";import{u as S,b as m}from"./useActivityLogFilter-DpayyysP.js";import{T as k}from"./Typography-D20OWptm.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-BmMBPQXf.js";import"./Section-BxkDhIq7.js";import"./Flex-D4woKuNy.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ActivityLogItem-D5Ezpg7p.js";import"./TimelineSegment-BCxoGCnd.js";import"./TimelineBase-Bh1Gb9Wn.js";import"./TimelineIcon-C5HKWRXM.js";import"./CircleFill-Ce1T75SU.js";import"./Byline-TWFgJpOx.js";import"./Timeline-B5W0Rcu7.js";import"./TimelineActivity-lXOIP3KD.js";import"./Toolbar-BaJCxyi0.js";import"./useDropdownMenuController-DI7euvCu.js";import"./Dropdown-CgXp4lfy.js";import"./SearchField-BRYpM6iz.js";import"./MagnifyingGlass-D8qauCMU.js";import"./MenuListItem-C5YqUBJw.js";import"./MenuListHeading-adQ6tRoH.js";import"./MenuItem-BBg2qC2v.js";import"./ItemMedia-C2cNA_4j.js";import"./Checkmark-BOXV2bQM.js";import"./ItemLabel-CLN34YKw.js";import"./ItemControls-D2gn34WX.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./ChevronRight-NBomJvaL.js";import"./FieldBase-DhhNDbiD.js";import"./Field-DD9eOhx2.js";import"./Label-D889KtIj.js";import"./Input-Cng2zass.js";import"./useMenu-D1ILj_Qw.js";import"./MenuListDivider-DUIlDVWP.js";import"./InformationSquare-DREHqyul.js";import"./Plus-CbNnKwCf.js";import"./ButtonGroup-DS66Ru9T.js";import"./ButtonGroupDivider-DFK8qURn.js";import"./ChevronUpDown-DIWFTlwj.js";import"./ToolbarMenu-COc3PFIR.js";import"./ToolbarSearch-2wX6HJJ-.js";import"./transmissions-BsjnYxyU.js";import"./TransmissionList-DWUikWCR.js";import"./Transmission-DK02xSEB.js";import"./ListItem-Ch60BFaY.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./AttachmentList-CuBDmbgq.js";import"./AttachmentLink-DbuUV9bs.js";import"./File-B3m0V8Cf.js";import"./SeenByLog-Cs0TRicJ.js";import"./SeenByLogItem-C_Z0TIFQ.js";import"./SeenByLogButton-CwyKZdOr.js";import"./Divider-DfF_JaXt.js";import"./List-CN9gT4yl.js";import"./dialogBody-U5pCcRG3.js";import"./DialogAttachments-D8XojFUz.js";import"./dialogLayout-CiR3Z2W4.js";import"./contextMenu-CQzF8LDK.js";import"./ArrowRedo-xupc0HyX.js";import"./EyeClosed-Di5wDHm4.js";import"./Eye-asaRFAyZ.js";import"./Archive-CJqTsyOd.js";import"./Trash-BQPU0aQd.js";import"./ClockDashed-DZjsnkqQ.js";import"./dialogContact-CiBX3vUi.js";const Yt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=s.useState(!0),[p,a]=s.useState(""),{kind:g,filter:u}=S(m);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:m,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),_t=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
