import{aa as s,a7 as t,c as d}from"./iframe-BidFzEoe.js";import{d as y,a as v,D as l}from"./dialog-NLubQck0.js";import{u as h,b as m}from"./useActivityLogFilter-BMYD9DGk.js";import{T as f}from"./Typography-BKRo6hXJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-BGmAjdb1.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ActivityLogItem-eL9Bivez.js";import"./TimelineSegment-ChU-SfQn.js";import"./TimelineBase-DArMU1O7.js";import"./TimelineIcon-DG54WToK.js";import"./CircleFill-GSwvhsHK.js";import"./Byline-BxuosFas.js";import"./Timeline-DzFixijU.js";import"./TimelineActivity-4MQ2Gflv.js";import"./Toolbar-BlCY5v7I.js";import"./useDropdownMenuController-Bpv270d-.js";import"./Dropdown-BZ5Wwg_Y.js";import"./SearchField-CPTH-dMf.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./FieldBase-q2Ok1lDz.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";import"./useMenu-BgtGmMWX.js";import"./MenuListItem-DeTWeA9p.js";import"./MenuListDivider-2FWQFBqh.js";import"./MenuListHeading-C3S-0AcD.js";import"./MenuItem-YZR9Jx1u.js";import"./ItemMedia-DzAOMVpV.js";import"./Checkmark-DMx9NJHb.js";import"./ItemLabel-NxjhrgwT.js";import"./ItemControls-5057Wt3J.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./ChevronRight-B3flyXKQ.js";import"./InformationSquare-B1R5HfkF.js";import"./Plus-CSCOqkzm.js";import"./ButtonGroup-BDN4dAIH.js";import"./ButtonGroupDivider-C72zn4Mf.js";import"./ChevronUpDown-g9jyYsW3.js";import"./ToolbarMenu-iJHxXbHY.js";import"./ToolbarSearch-DSQ8BUNU.js";import"./transmissions-BVbbMWuD.js";import"./TransmissionList-B1m0XYzl.js";import"./Transmission-DozBCAYL.js";import"./ListItem-CBUxCLcG.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./AttachmentList-R_8TW_FB.js";import"./AttachmentLink-DNddeI4B.js";import"./File-CopwnJ90.js";import"./SeenByLog-w3iRqWUU.js";import"./SeenByLogItem-RudfOR56.js";import"./SeenByLogButton-B4INdJOD.js";import"./Divider-Ckx4bjrf.js";import"./List-Ct336t9y.js";import"./dialogBody-DI5JBzQL.js";import"./DialogAttachments-D6T0b_Di.js";import"./dialogLayout-CQrj2mRG.js";import"./contextMenu-BPq9st_3.js";import"./ArrowRedo-Bm5zfxjo.js";import"./EyeClosed-DvYGRt8Y.js";import"./Eye-CMjHzZTm.js";import"./Archive-C8P_Y27w.js";import"./Trash-C23skxme.js";import"./ClockDashed-DycEaa7b.js";import"./dialogContact-CJJQG-Zk.js";const Mt={title:"Inbox/Dialog/DialogActivityLog",component:l,tags:[],args:{...v,title:y.title}},o={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},n=({children:r})=>t.jsx(f,{variant:"subtle",size:"sm",children:t.jsx("p",{children:r})}),e=()=>{const[r,i]=s.useState(!0),[p,a]=s.useState(""),{kind:c,filter:g}=h(m);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>i(!0),children:"Open Modal"}),t.jsx(l,{title:"Aktivitetslogg for dialog",open:r,onClose:()=>i(!1),items:m,kind:c,query:p,toolbar:{filter:g,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:u=>a(u.target.value),onClear:()=>a("")}},emptyState:t.jsx(n,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(n,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
