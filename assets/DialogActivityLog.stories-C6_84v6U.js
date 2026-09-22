import{aa as s,a7 as t,c as d}from"./iframe-B1m5YS-z.js";import{d as y,a as v,D as l}from"./dialog-C1V7l6em.js";import{u as h,b as m}from"./useActivityLogFilter-CXkvCTDE.js";import{T as f}from"./Typography-D-hgdwYf.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-ByLHH82k.js";import"./Section-BpRK9CgH.js";import"./Flex-ChmU5Mgr.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Heading-Bdg559v2.js";import"./useHighlightedText-BJ6Snog5.js";import"./ActivityLogItem-IxDva6yc.js";import"./TimelineSegment-FhETUeC0.js";import"./TimelineBase-DgmcSv3a.js";import"./TimelineIcon-CACX99Bf.js";import"./CircleFill-zaLqeIBe.js";import"./Byline-Xz6QApSF.js";import"./Timeline-6NZBzmlM.js";import"./TimelineActivity-BPRMPnb-.js";import"./Toolbar-CuAz5sVZ.js";import"./useDropdownMenuController-C9-W595w.js";import"./Dropdown-cC7dM-DJ.js";import"./SearchField-txQSfSgU.js";import"./MagnifyingGlass-DOC044bk.js";import"./FieldBase-DF02WocK.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";import"./useMenu-Bzazr0mK.js";import"./MenuListItem-ePeSws84.js";import"./MenuListDivider-l5hHlt1S.js";import"./MenuListHeading-BVCzBY5R.js";import"./MenuItem-D8A8Uy-E.js";import"./ItemMedia-CbRgbp9l.js";import"./Checkmark-O1YGJ3w1.js";import"./ItemLabel-CGVzYdTz.js";import"./ItemControls-DSpZnzMx.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./ChevronRight-JufomwYQ.js";import"./InformationSquare-CbKMIE6G.js";import"./Plus-yML150nC.js";import"./ButtonGroup-K8bkOi3q.js";import"./ButtonGroupDivider-D__YWNER.js";import"./ChevronUpDown-DM35aNN9.js";import"./ToolbarMenu-hf7W5wCR.js";import"./ToolbarSearch-B-1oJTYr.js";import"./transmissions-BXs_uG3U.js";import"./TransmissionList-Aeonc6nz.js";import"./Transmission-BbZeuvNX.js";import"./ListItem-B0JtIYRQ.js";import"./ChevronUp-DD0NwdAM.js";import"./ChevronDown-VNvIPDL4.js";import"./AttachmentList-ByVuF-h2.js";import"./AttachmentLink-BMGlLI05.js";import"./File-iAlTyCkq.js";import"./SeenByLog-BpRDZxvO.js";import"./SeenByLogItem-DmiS5bW7.js";import"./SeenByLogButton-BrhUXcY0.js";import"./Divider-VvaIqSSV.js";import"./List-CPTEWjEJ.js";import"./dialogBody-CDTOWYou.js";import"./DialogAttachments-ZC3KBGkN.js";import"./dialogLayout-9r0QSA66.js";import"./contextMenu-BspCKz4a.js";import"./ArrowRedo-ygMEUYN4.js";import"./EyeClosed-COrG8Zuy.js";import"./Eye-DLz3Vi9z.js";import"./Archive-D_fmO7qk.js";import"./Trash-B-BtPZD_.js";import"./ClockDashed-CXLW4ZMs.js";import"./dialogContact-RYm_hRoQ.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
