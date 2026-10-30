var y=Object.defineProperty;var t=(o,i)=>y(o,"name",{value:i,configurable:!0});import{a8 as m,a5 as e,b as v}from"./iframe-k-5ppgch.js";import{d as h,a as f,D as c}from"./dialog-C7QR9rpK.js";import{u as S,b as s}from"./useActivityLogFilter---MXUNIp.js";import{T as k}from"./Typography-CYRWqnkB.js";import"./preload-helper-Cc2_yIPf.js";import"./ModalBody-CIuqRrmc.js";import"./Section-QDM_T_oE.js";import"./Flex-DfG9uaWh.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ActivityLogItem-Ts8cqi53.js";import"./TimelineSegment-Nj2Ue_Ak.js";import"./TimelineBase-ByFqSBYw.js";import"./TimelineIcon-CHcsJcY1.js";import"./CircleFill-DcMa8EWN.js";import"./Byline-CLp65Fpk.js";import"./Timeline-9mnKWMN3.js";import"./TimelineActivity-D2ZnWXJT.js";import"./Toolbar-CKwW_XWH.js";import"./useDropdownMenuController-OiRVKnjj.js";import"./Dropdown-CPtynmaA.js";import"./SearchField-BRPq9oj8.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./ItemLabel-D5iTgQt_.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";import"./Plus-BfzF3o2K.js";import"./ButtonGroup-B2jA2Tqh.js";import"./ButtonGroupDivider-DLj-EhPK.js";import"./ChevronUpDown--im5d_9E.js";import"./ToolbarMenu-DzTNbp1B.js";import"./ToolbarSearch-B8EDoxRH.js";import"./transmissions-DQGBUbyA.js";import"./TransmissionList-CxMtqxwd.js";import"./Transmission-C19_lOLs.js";import"./ListItem-BtyqlbRy.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";import"./AttachmentList-CWVZk_GU.js";import"./AttachmentLink-2KVfGVH_.js";import"./File-Ctzq2ENx.js";import"./SeenByLog-C3cBvf5R.js";import"./SeenByLogItem-HLjw3-dl.js";import"./SeenByLogButton-CcJ_M8xq.js";import"./Divider-BsUeBbrl.js";import"./List-CFuxNT_P.js";import"./dialogBody-DYrAjXJp.js";import"./DialogAttachments-_4Qgi5i4.js";import"./dialogLayout-BsK84nSG.js";import"./contextMenu-J67MON9F.js";import"./Checkmark-F2mBpe6M.js";import"./ArrowRedo-BdVHHvaA.js";import"./EyeClosed-D_OleM4p.js";import"./Eye-BYYh3WW8.js";import"./Archive-mZAeZsrq.js";import"./Trash-D-Jav_7z.js";import"./ClockDashed-KjzK9RZG.js";import"./dialogContact-BUcT9txt.js";const zt={title:"Inbox/Dialog/DialogActivityLog",component:c,tags:[],args:{...f,title:h.title}},n={args:{open:!0,onClose:t(()=>{alert("Close activityLog")},"onClose")}},l=t(({children:o})=>e.jsx(k,{variant:"subtle",size:"sm",children:e.jsx("p",{children:o})}),"EmptyState"),r=t(()=>{const[o,i]=m.useState(!0),[p,a]=m.useState(""),{kind:g,filter:u}=S(s);return e.jsxs(e.Fragment,{children:[e.jsx(v,{onClick:t(()=>i(!0),"onClick"),children:"Open Modal"}),e.jsx(c,{title:"Aktivitetslogg for dialog",open:o,onClose:t(()=>i(!1),"onClose"),items:s,kind:g,query:p,toolbar:{filter:u,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:p,onChange:t(d=>a(d.target.value),"onChange"),onClear:t(()=>a(""),"onClear")}},emptyState:e.jsx(l,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:e.jsx(l,{children:"Ingen treff"}),style:{maxHeight:"60vh",overflowY:"auto"}})]})},"WithFilterAndSearch"),Gt=["Default","WithFilterAndSearch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:'The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog. The type filter is multi-select: check any number of types, and checking\nevery one of them collapses back onto "Alle typer".',...r.parameters?.docs?.description}}};export{n as Default,r as WithFilterAndSearch,Gt as __namedExportsOrder,zt as default};
