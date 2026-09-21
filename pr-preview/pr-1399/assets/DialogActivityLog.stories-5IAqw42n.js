import{aa as n,a7 as t,c as u}from"./iframe-Bjjt_sJ1.js";import{d as L,a as A,D as S}from"./dialog-CrGVKPEd.js";import{c as y,b as d}from"./activityHistory-n7JwtkYl.js";import{a as x}from"./ActivityLogItem-C-svSCq0.js";import{S as b}from"./Section-DbOZVIjc.js";import{H as C}from"./Heading-BHJvhrmD.js";import{T as j}from"./Typography-D6uVUzG3.js";import"./preload-helper-PPVm8Dsz.js";import"./ModalBody-5UKBpkiI.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Flex-GHRWEM3Q.js";import"./Toolbar-CkN2tF10.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./SearchField-CN96vdWl.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./FieldBase-xSixxw66.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./Input-PLxdr44a.js";import"./useMenu-CfDnO3tS.js";import"./MenuListItem-CebbbonR.js";import"./MenuListDivider-CP2Z2JTV.js";import"./MenuListHeading-NxhgYwSy.js";import"./MenuItem-Cqr4SOJp.js";import"./ItemMedia-cRp9TeR0.js";import"./Checkmark-BJpweToD.js";import"./ItemLabel-C7-OFrDm.js";import"./ItemControls-Cf0gBB0S.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./ChevronRight-MBNaUHNp.js";import"./InformationSquare-BBRKQU3y.js";import"./Plus-Bfa-1JFY.js";import"./ButtonGroup-uHmrofaO.js";import"./ButtonGroupDivider-C-f0tc_z.js";import"./ChevronUpDown-CC8nga9c.js";import"./ToolbarMenu-D5mnaT4o.js";import"./ToolbarSearch-D_Q1dE5-.js";import"./transmissions-CGcXQ_Pv.js";import"./TransmissionList-CRuWN2i0.js";import"./Transmission-k7bDMaXv.js";import"./ListItem-C0qHzDdu.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./AttachmentList-D85FmEec.js";import"./AttachmentLink-CwGU8Y82.js";import"./File-BifymGtc.js";import"./SeenByLog-BwBAtc2J.js";import"./SeenByLogItem-DOY6v6Xi.js";import"./Byline-BHcnyvRN.js";import"./SeenByLogButton-BXKbU-id.js";import"./Divider-DzalYy47.js";import"./List-DIqwgyys.js";import"./dialogBody-BfL35BDu.js";import"./DialogAttachments-60Ck4wTf.js";import"./dialogLayout-BSCNxKZ-.js";import"./contextMenu-DhQhsCOW.js";import"./ArrowRedo-HjRVT5N6.js";import"./EyeClosed-P6MgQW2z.js";import"./Eye-L945VvwS.js";import"./Archive-DGmdwpez.js";import"./Trash-BgkXZGdB.js";import"./ClockDashed-Dou1qfdz.js";import"./dialogContact-Q7R2q3Ug.js";import"./TimelineSegment-D90s31BK.js";import"./TimelineBase-DElaXAf9.js";import"./TimelineIcon-cJxN9m4m.js";import"./CircleFill-D4oUo6uj.js";import"./Timeline-PTafhNKH.js";import"./TimelineActivity-CwO8JGF9.js";import"./useHighlightedText-BPKtv5Uu.js";const _t={title:"Inbox/Dialog/DialogActivityLog",component:S,tags:[],args:{...A,title:L.title}},s={args:{open:!0,onClose:()=>{alert("Close activityLog")}}},l="all",v=({title:p,description:r,children:a})=>t.jsxs(b,{spacing:3,margin:"section",children:[t.jsx(C,{as:"h3",size:"md",children:p}),t.jsxs(j,{size:"sm",children:[t.jsx("p",{children:r}),a]})]}),o=()=>{const[p,r]=n.useState(!0),[a,m]=n.useState(""),[c,g]=n.useState({}),i=String(c.kind?.[0]??l),k=n.useMemo(()=>[{id:"kind",name:"kind",label:"Alle typer",title:"Type ...",groups:{1:{title:"Velg type"}},items:[{id:"all",groupId:"1",name:"kind",role:"radio",value:l,title:"Alle typer"},...x(d).map(e=>({id:e,groupId:"2",name:"kind",role:"radio",value:e,title:y[e]??e,count:d.filter(h=>h.kind===e).length}))]}],[]),f=()=>{m(""),g({})};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:()=>r(!0),children:"Open Modal"}),t.jsx(S,{title:"Aktivitetslogg for dialog",open:p,onClose:()=>r(!1),items:d,kind:i===l?void 0:i,query:a,toolbar:{filter:{filters:k,filterState:c,onFilterStateChange:g,getFilterLabel:()=>i===l?"Alle typer":y[i]??i},search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk i aktivitetsloggen",value:a,onChange:e=>m(e.target.value),onClear:()=>m("")}},emptyState:t.jsx(v,{title:"Ingen aktivitet",description:"Det har ikke skjedd noe i denne dialogen ennå."}),noResultsState:t.jsx(v,{title:"Ingen treff",description:"Ingen aktiviteter passer med søket eller filteret.",children:t.jsx("p",{children:t.jsx(u,{variant:"outline",size:"mini",onClick:f,children:"Nullstill alt"})})}),style:{maxHeight:"60vh",overflowY:"auto"}})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const [q, setQ] = useState<string>('');
  const [filterState, setFilterState] = useState<FilterState>({});
  const selectedKind = String(filterState.kind?.[0] ?? ALL);
  const filters: FilterProps[] = useMemo(() => [{
    id: 'kind',
    name: 'kind',
    label: 'Alle typer',
    title: 'Type ...',
    groups: {
      1: {
        title: 'Velg type'
      }
    },
    items: [{
      id: 'all',
      groupId: '1',
      name: 'kind',
      role: 'radio',
      value: ALL,
      title: 'Alle typer'
    }, ...activityLogKinds(activityHistorySegments).map(kind => ({
      id: kind,
      groupId: '2',
      name: 'kind',
      role: 'radio',
      value: kind,
      title: activitySourceLabels[kind as keyof typeof activitySourceLabels] ?? kind,
      count: activityHistorySegments.filter(segment => segment.kind === kind).length
    }))]
  }], []);
  const onReset = () => {
    setQ('');
    setFilterState({});
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <DialogActivityLog title="Aktivitetslogg for dialog" open={open} onClose={() => setOpen(false)} items={activityHistorySegments} kind={selectedKind === ALL ? undefined : selectedKind} query={q} toolbar={{
      filter: {
        filters,
        filterState,
        onFilterStateChange: setFilterState,
        getFilterLabel: () => selectedKind === ALL ? 'Alle typer' : activitySourceLabels[selectedKind as keyof typeof activitySourceLabels] ?? selectedKind
      },
      search: {
        name: 'q',
        label: 'Søk i aktivitetsloggen',
        placeholder: 'Søk i aktivitetsloggen',
        value: q,
        onChange: (event: ChangeEvent<HTMLInputElement>) => setQ(event.target.value),
        onClear: () => setQ('')
      }
    }} emptyState={<EmptyState title="Ingen aktivitet" description="Det har ikke skjedd noe i denne dialogen ennå." />} noResultsState={<EmptyState title="Ingen treff" description="Ingen aktiviteter passer med søket eller filteret.">
            <p>
              <Button variant="outline" size="mini" onClick={onReset}>
                Nullstill alt
              </Button>
            </p>
          </EmptyState>} style={{
      maxHeight: '60vh',
      overflowY: 'auto'
    }} />
    </>;
}`,...o.parameters?.docs?.source},description:{story:"The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the\nlog, so a filter and a search need no modal of their own.",...o.parameters?.docs?.description}}};const Pt=["Default","WithFilterAndSearch"];export{s as Default,o as WithFilterAndSearch,Pt as __namedExportsOrder,_t as default};
