import{aa as s,a7 as t,c as d}from"./iframe-BKcGtkf2.js";import{d as y,a as v,D as l}from"./dialog-BHu05NZV.js";import{u as h,b as m}from"./useActivityLogFilter-efJVBIxl.js";import{T as f}from"./Typography-CpSlwMZW.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-CG2c_jkx.js";import"./Section-DaRR8FNt.js";import"./Flex-xlDXZNwq.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ActivityLogItem-CxkHDqhq.js";import"./TimelineSegment-CLukTPzF.js";import"./TimelineBase-DzebBkst.js";import"./TimelineIcon-qd3q9ZKZ.js";import"./CircleFill-BIc7iwJT.js";import"./Byline-DiiF8671.js";import"./Timeline-DIOygCQ8.js";import"./TimelineActivity-C58iCINy.js";import"./Toolbar-CmbdYE5N.js";import"./useDropdownMenuController-BPyTaE6X.js";import"./Dropdown-CApDEdpz.js";import"./SearchField-c4c7eBD1.js";import"./MagnifyingGlass-CBFBCqg8.js";import"./FieldBase-kOxFDexg.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";import"./Input-C7NN4jQM.js";import"./useMenu-D9Zi9nWU.js";import"./MenuListItem-q_h-S_lZ.js";import"./MenuListDivider-BA6y76AD.js";import"./MenuListHeading-MK0rACd0.js";import"./MenuItem-BPSVutJE.js";import"./ItemMedia-DmxCD2ZI.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./ItemControls-sjDYc_Mm.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./ChevronRight-Bik0Rfts.js";import"./InformationSquare-7aD0sTi5.js";import"./Plus-Rs3Q664C.js";import"./ButtonGroup-Cf_eaZSI.js";import"./ButtonGroupDivider-T3tUyezT.js";import"./ChevronUpDown-D8QQ0L64.js";import"./ToolbarMenu-IJxC4fhW.js";import"./ToolbarSearch-ByP9jwcr.js";import"./transmissions-D13P8nL8.js";import"./TransmissionList-DS4Vn_HT.js";import"./Transmission-BJt3AZGy.js";import"./ListItem-EWMGi19r.js";import"./ChevronUp-DoWxH2Yl.js";import"./ChevronDown-Jc6dKi_G.js";import"./AttachmentList-BQf2lYnj.js";import"./AttachmentLink-C2dV1c7i.js";import"./File-jQTy3sGG.js";import"./SeenByLog-BGyrhGJ2.js";import"./SeenByLogItem-BYq4uA6e.js";import"./SeenByLogButton-u_2yK4_o.js";import"./Divider-Rdje89H_.js";import"./List-B4x8HRGj.js";import"./dialogBody-e856AotD.js";import"./DialogAttachments-Dgrw8oZs.js";import"./dialogLayout-DK6z55qt.js";import"./contextMenu-BlyBnAd4.js";import"./ArrowRedo-DrSZcERC.js";import"./EyeClosed-BcK34JOI.js";import"./Eye-DhzEO1a4.js";import"./Archive-CsURTuDo.js";import"./Trash-Bcnjmr1n.js";import"./ClockDashed-CF5KyX9t.js";import"./dialogContact-EZS9p85n.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
