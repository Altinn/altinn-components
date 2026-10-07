import{aa as m,a7 as t,c as j}from"./iframe-CSiNS2_t.js";import{u as f}from"./useActivityLogToolbar-r4ehbZ3o.js";import{a as L,t as P,u as T}from"./useActivityLogFilter-Ckl9Ob-t.js";import{M,b as S,a as k}from"./ModalBody-DOzVYGFR.js";import{A as p}from"./ActivityLogItem-B6H4wYhB.js";import{T as C}from"./Toolbar-Dbt9jT0e.js";import{S as F}from"./Section-iGjVnzYd.js";import{u as z}from"./useProfile-DN71DvhJ.js";import{L as I}from"./Layout-4MupU4k4.js";import{P as N}from"./PageBase-DdDfbJyq.js";import{H as q}from"./Heading-BPvQUGVy.js";import{T as Q}from"./Typography-tfUHPeKu.js";import"./preload-helper-PPVm8Dsz.js";import"./TransmissionList-8dKPl3VC.js";import"./Transmission-hY9HQQwK.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./ListItem-B3moosZM.js";import"./Input-BUqwhKEV.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./ChevronRight-dChxZgZA.js";import"./AttachmentList-lF1lcWPt.js";import"./AttachmentLink-DAVIbwh_.js";import"./File-DmG3ZrjZ.js";import"./SeenByLog-IAWNEpLw.js";import"./SeenByLogItem-Ch1h3JaY.js";import"./Flex-DavaSday.js";import"./Byline-Ofgpqf54.js";import"./SeenByLogButton-CYzWkEwH.js";import"./Divider-y9qHaSmE.js";import"./List-DUVcdDRk.js";import"./TimelineSegment-BxoxEgX5.js";import"./TimelineBase-CriF9b3T.js";import"./TimelineIcon-BVaQl3Zw.js";import"./CircleFill-x1kv-teP.js";import"./Timeline-B0RVXsZV.js";import"./TimelineActivity-GvulO0AG.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./MagnifyingGlass-L16wMwR7.js";import"./FieldBase-rPqTSW37.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./useMenu-DQhM8YBj.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./ItemMedia-DGv-wSpo.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./ItemControls-Cqj4-f4C.js";import"./InformationSquare-BVqQ7zdO.js";import"./Plus-BIfsBTTp.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonGroupDivider-DfTuAjlw.js";import"./ChevronUpDown-C_MVpDOS.js";import"./ToolbarMenu-Dh3kZ0-W.js";import"./ToolbarSearch-DJCiNHBT.js";import"./useProfileLayout-CxenmACJ.js";import"./HeartFill-l42OMgCw.js";import"./Bell-Dh9-aHAj.js";import"./Bookmark-C2oWAO5H.js";import"./ClockDashed-oEpq6VsW.js";import"./globalMenu-DqJvrWgo.js";import"./PersonCircle-Cvr_mKYq.js";import"./Buildings2-Bb2Esj9m.js";import"./InboxFill-B8orx56-.js";import"./MenuGrid-DWQDEhAW.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Mf-Uju2B.js";import"./Trash-BcSvu00l.js";import"./useLayout-YlZbobqw.js";import"./useLocale-RVVlzlne.js";import"./useAccountMenu-CNsB7N2U.js";import"./header-6gG4Ffg7.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-D3iJ7k61.js";import"./CookieBanner-CKWZWaYc.js";import"./Banner-C2EalFdP.js";import"./GlobalHeader-Y06F2DwT.js";import"./useIsDesktop-BcvSdZS0.js";import"./GlobalAccountButton-DmQDN0wu.js";import"./Enter-BYyrWS8h.js";import"./GlobalMenuButton-QBNdcfTe.js";import"./MenuHamburger-BIDisRNk.js";import"./AccountSelector-BGy-SGuD.js";import"./Switch-DY1HilNX.js";import"./AccountMenu-BhWC5WRF.js";import"./GlobalMenu-BRJU6Z52.js";import"./ArrowUndo-BadzpM_H.js";import"./Globe-i9VwEU5k.js";import"./BreadcrumbsLink-Cu-H3rN3.js";import"./ArrowRight-Dz8Z6Xxm.js";import"./Footer-CLRP89pe.js";import"./useHighlightedText-Cb4_TuQn.js";const Io={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},d=()=>{const{items:o}=f();return t.jsx(p,{items:o})},c=()=>{const{toolbar:o,items:r}=f();return t.jsxs(F,{spacing:6,children:[t.jsx(C,{...o}),t.jsx(p,{items:r})]})},g=()=>{const{layout:o}=z({pageId:"activity-log"});return t.jsx(I,{...o,children:t.jsxs(N,{children:[t.jsx(q,{size:"xl",children:"Aktivitetslogg"}),t.jsx(c,{})]})})},u=()=>{const{items:o}=f(),[r,i]=m.useState(!0),e=()=>{i(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>i(!0),children:"Open Modal"}),t.jsxs(M,{open:r,onClose:e,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:e}),t.jsx(k,{children:t.jsx(p,{items:o})})]})]})},y=()=>{const{toolbar:o,items:r}=f(),[i,e]=m.useState(!0),s=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:s,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:s,sticky:!1}),t.jsxs(k,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(C,{...o})}),t.jsx(p,{items:r})]})]})]})},w="60vh",B=({children:o})=>t.jsx(Q,{variant:"subtle",size:"sm",children:t.jsx("p",{children:o})}),l=({entries:o,defaultQuery:r=""})=>{const[i,e]=m.useState(!0),[s,D]=m.useState(r),h=m.useMemo(()=>o.map(P),[o]),{kind:O,filter:H}=T(h),b=()=>e(!1);return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:b,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:b,sticky:!1}),t.jsxs(k,{children:[h.length>0&&t.jsx(C,{filter:H,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:s,onChange:E=>D(E.target.value),onClear:()=>D("")}}),t.jsx(p,{items:h,kind:O,query:s,emptyState:t.jsx(B,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(B,{children:"Ingen treff"}),style:{maxHeight:w,overflowY:"auto"}})]})]})]})},v=()=>t.jsx(l,{entries:L}),x=()=>t.jsx(l,{entries:L.filter(o=>o.source==="notification"||o.source==="transmission")}),A=()=>t.jsx(l,{entries:L.filter(o=>o.source==="label").slice(0,3)}),a=()=>t.jsx(l,{entries:[]}),n=()=>t.jsx(l,{entries:L,defaultQuery:"sms skatteetaten"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
