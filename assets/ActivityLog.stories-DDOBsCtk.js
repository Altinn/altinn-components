import{aa as m,a7 as t,c as j}from"./iframe-Ca4u80-y.js";import{u as f}from"./useActivityLogToolbar-DnRWfvZu.js";import{a as L,t as P,u as T}from"./useActivityLogFilter-CWxa2uO4.js";import{M,b as S,a as k}from"./ModalBody-BlWXQol1.js";import{A as p}from"./ActivityLogItem-8cKupzaE.js";import{T as C}from"./Toolbar-BBERRx06.js";import{S as F}from"./Section-DPESya5-.js";import{u as z}from"./useProfile-C_iVPccb.js";import{L as I}from"./Layout-CHTHE8No.js";import{P as N}from"./PageBase-yaiqOO1n.js";import{H as q}from"./Heading-DWBFau_k.js";import{T as Q}from"./Typography-DWDEZq_R.js";import"./preload-helper-PPVm8Dsz.js";import"./TransmissionList-JnYMDijS.js";import"./Transmission-CKDmZlKa.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ListItem-CSPc22TA.js";import"./Input-BzcsSDVe.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./ChevronRight-eVASrmJg.js";import"./AttachmentList-yf6pRco8.js";import"./AttachmentLink-BpjRJxc3.js";import"./File-KhZftDbX.js";import"./SeenByLog-B99Wjjjl.js";import"./SeenByLogItem-BxoHIfOx.js";import"./Flex-DwGvCXeV.js";import"./Byline-CZsol804.js";import"./SeenByLogButton-Dg0lFSTs.js";import"./Divider-BPwrxXbC.js";import"./List-DNrtm8Gg.js";import"./TimelineSegment-_ddduSMM.js";import"./TimelineBase-BApLbGL3.js";import"./TimelineIcon-B_W8ggdI.js";import"./CircleFill-4l55n0lo.js";import"./Timeline-B4XgYiiX.js";import"./TimelineActivity-BR1yMYHb.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./ItemControls-EuOl9yJJ.js";import"./InformationSquare-C5WU0eyN.js";import"./Plus-Oh3Xr98D.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUpDown-D7s4rO6j.js";import"./ToolbarMenu-NSIS5DTX.js";import"./ToolbarSearch-B76M7lyM.js";import"./useProfileLayout-COKhyAxp.js";import"./HeartFill-BEhM8FIG.js";import"./Bell-DKISlZtB.js";import"./Bookmark-CYSv2imE.js";import"./ClockDashed-C2nFpDvH.js";import"./globalMenu-BIsbXNB7.js";import"./PersonCircle-D3F1kwzM.js";import"./Buildings2-uRmikzTW.js";import"./InboxFill-YyZrihMR.js";import"./MenuGrid-WlYL4NEv.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-JQjADMnA.js";import"./Trash-CQegPx8Y.js";import"./useLayout-Ba6kbJxS.js";import"./useLocale-CzyhiiL4.js";import"./useAccountMenu-CSlkymXu.js";import"./header-Bf-6t7pt.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CBj3210P.js";import"./CookieBanner-C9aSgqV6.js";import"./Banner-Dc9MSI6P.js";import"./GlobalHeader-DlkkAHQ1.js";import"./useIsDesktop-DM4EaZ7O.js";import"./GlobalAccountButton-B2aUt3kB.js";import"./Enter-CDkzTut5.js";import"./GlobalMenuButton-DIR4PI9u.js";import"./MenuHamburger-D2oXTqoK.js";import"./AccountSelector-QiIXaFT4.js";import"./Switch-DdbPUpTN.js";import"./AccountMenu-2Nuk4Gjc.js";import"./GlobalMenu-0Vc719P-.js";import"./ArrowUndo-DOf__dU6.js";import"./Globe-OIrchniO.js";import"./BreadcrumbsLink-DSNygZEc.js";import"./ArrowRight-D2rxZe9t.js";import"./Footer-BIWGl213.js";import"./useHighlightedText-DqjIK10c.js";const Io={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},d=()=>{const{items:o}=f();return t.jsx(p,{items:o})},c=()=>{const{toolbar:o,items:r}=f();return t.jsxs(F,{spacing:6,children:[t.jsx(C,{...o}),t.jsx(p,{items:r})]})},g=()=>{const{layout:o}=z({pageId:"activity-log"});return t.jsx(I,{...o,children:t.jsxs(N,{children:[t.jsx(q,{size:"xl",children:"Aktivitetslogg"}),t.jsx(c,{})]})})},u=()=>{const{items:o}=f(),[r,i]=m.useState(!0),e=()=>{i(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>i(!0),children:"Open Modal"}),t.jsxs(M,{open:r,onClose:e,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:e}),t.jsx(k,{children:t.jsx(p,{items:o})})]})]})},y=()=>{const{toolbar:o,items:r}=f(),[i,e]=m.useState(!0),s=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:s,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:s,sticky:!1}),t.jsxs(k,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(C,{...o})}),t.jsx(p,{items:r})]})]})]})},w="60vh",B=({children:o})=>t.jsx(Q,{variant:"subtle",size:"sm",children:t.jsx("p",{children:o})}),l=({entries:o,defaultQuery:r=""})=>{const[i,e]=m.useState(!0),[s,D]=m.useState(r),h=m.useMemo(()=>o.map(P),[o]),{kind:O,filter:H}=T(h),b=()=>e(!1);return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:b,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:b,sticky:!1}),t.jsxs(k,{children:[h.length>0&&t.jsx(C,{filter:H,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:s,onChange:E=>D(E.target.value),onClear:()=>D("")}}),t.jsx(p,{items:h,kind:O,query:s,emptyState:t.jsx(B,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(B,{children:"Ingen treff"}),style:{maxHeight:w,overflowY:"auto"}})]})]})]})},v=()=>t.jsx(l,{entries:L}),x=()=>t.jsx(l,{entries:L.filter(o=>o.source==="notification"||o.source==="transmission")}),A=()=>t.jsx(l,{entries:L.filter(o=>o.source==="label").slice(0,3)}),a=()=>t.jsx(l,{entries:[]}),n=()=>t.jsx(l,{entries:L,defaultQuery:"sms skatteetaten"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({
    pageId: 'activity-log'
  });
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Aktivitetslogg</Heading>
        <Controlled />
      </PageBase>
    </Layout>;
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} />
        <ModalBody>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>;
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);
  const onClose = () => {
    setOpen(false);
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} sticky={false} />
        <ModalBody>
          <div style={{
          position: 'sticky',
          top: '1.5em',
          zIndex: 2
        }}>
            <Toolbar {...toolbar} />
          </div>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>;
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries} />",...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries.filter(entry => entry.source === 'notification' || entry.source === 'transmission')} />",...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries.filter(entry => entry.source === 'label').slice(0, 3)} />",...A.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={[]} />",...a.parameters?.docs?.source},description:{story:"Empty state 1: the dialog has no activity at all, so there is nothing to filter.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'() => <DialogActivityLogModal entries={activityHistoryEntries} defaultQuery="sms skatteetaten" />',...n.parameters?.docs?.source},description:{story:"Empty state 2: there is activity, but every term has to match and these two never co-occur.",...n.parameters?.docs?.description}}};const No=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced","DialogActivityLogFiltered","DialogActivityLogPartialSources","DialogActivityLogShortLog","DialogActivityLogNoActivity","DialogActivityLogNoMatches"];export{u as ActivityLogModal,y as ActivityLogModalAdvanced,c as Controlled,d as Default,v as DialogActivityLogFiltered,a as DialogActivityLogNoActivity,n as DialogActivityLogNoMatches,x as DialogActivityLogPartialSources,A as DialogActivityLogShortLog,g as ProfileActivityLog,No as __namedExportsOrder,Io as default};
