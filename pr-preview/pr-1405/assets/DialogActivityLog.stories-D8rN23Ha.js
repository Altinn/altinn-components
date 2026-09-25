import{aa as s,a7 as t,c as d}from"./iframe-C7-WWuUz.js";import{d as y,a as v,D as l}from"./dialog-BPNFbwho.js";import{u as h,b as m}from"./useActivityLogFilter-M3MKEc2b.js";import{T as f}from"./Typography-BeOUX7s0.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-fYRi36Hl.js";import"./Section-D_PXiQbH.js";import"./Flex-C-tyhriT.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./ActivityLogItem-Cnr7O8am.js";import"./TimelineSegment-C_FIQ-uw.js";import"./TimelineBase-BvI3AOGS.js";import"./TimelineIcon-Bq8X9z94.js";import"./CircleFill-3JyPV27J.js";import"./Byline-Bu5GhJ1F.js";import"./Timeline-VjQTHQfT.js";import"./TimelineActivity-CaaJzk2C.js";import"./Toolbar-DageSG6F.js";import"./useDropdownMenuController-CONOWsYf.js";import"./Dropdown-3ZYKEzsd.js";import"./SearchField-B35ZfRWV.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./FieldBase-V8CxIyK2.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";import"./useMenu-pD-uRv9Z.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuListDivider-FRFmhjs8.js";import"./MenuListHeading-BO147Bx-.js";import"./MenuItem-kril0LwU.js";import"./ItemMedia-CBTlpYQC.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./ItemControls-Bq7352tZ.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ChevronRight-C0CFQIi6.js";import"./InformationSquare-B8uck3iJ.js";import"./Plus-0EP1hD2t.js";import"./ButtonGroup-Bf7xvvo6.js";import"./ButtonGroupDivider-BWgufaqK.js";import"./ChevronUpDown-DEQPPOZD.js";import"./ToolbarMenu-BnxiGlFu.js";import"./ToolbarSearch-DFXmwmLe.js";import"./transmissions-Bv7_EmJF.js";import"./TransmissionList-B8VGacp_.js";import"./Transmission-BZArJDHU.js";import"./ListItem-BwvScdgk.js";import"./ChevronUp-DrJugmYh.js";import"./ChevronDown-BuDxjQRv.js";import"./AttachmentList-BLo8UMcB.js";import"./AttachmentLink-Dre5EbqK.js";import"./File-CVs1pNAs.js";import"./SeenByLog-B57Q_frX.js";import"./SeenByLogItem-jP0Y6iEL.js";import"./SeenByLogButton-BZivseWR.js";import"./Divider-DZxigWxI.js";import"./List-BnL4RjGS.js";import"./dialogBody-DuW3IXWe.js";import"./DialogAttachments-CiOCgVZq.js";import"./dialogLayout-CfTTZwpZ.js";import"./contextMenu-DPBtPgub.js";import"./ArrowRedo-AI1Wt2-7.js";import"./EyeClosed-DLwx77jv.js";import"./Eye-Cl-bFUJe.js";import"./Archive-Bk9dVWFf.js";import"./Trash-CI7Eo6ji.js";import"./ClockDashed-byY_jies.js";import"./dialogContact-D3BNhxWL.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
