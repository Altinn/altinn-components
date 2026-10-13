import{aa as m,a7 as t,c as j}from"./iframe-BbHZTISi.js";import{u as f}from"./useActivityLogToolbar-z0oAxfu4.js";import{a as L,t as P,u as T}from"./useActivityLogFilter-GFuLcpPZ.js";import{M,b as S,a as k}from"./ModalBody-Bf_4VZq1.js";import{A as p}from"./ActivityLogItem-B23j3sVU.js";import{T as C}from"./Toolbar-BB0p5G7l.js";import{S as F}from"./Section-DsI3lDGv.js";import{u as z}from"./useProfile-DlTKpjep.js";import{L as I}from"./Layout-DraIl44Y.js";import{P as N}from"./PageBase-DGp6Zx-T.js";import{H as q}from"./Heading-Bg_B2C5V.js";import{T as Q}from"./Typography-Ckv3AOJx.js";import"./preload-helper-PPVm8Dsz.js";import"./TransmissionList-CEuxGPcZ.js";import"./Transmission-C8li9dog.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./ListItem-BYKMPFNC.js";import"./Input-B1Y3KbZD.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";import"./ChevronRight-BedwSMvr.js";import"./AttachmentList-nWyZ07ZR.js";import"./AttachmentLink-D4VnEf0A.js";import"./File-BqQmYV8X.js";import"./SeenByLog-BTGf3MpZ.js";import"./SeenByLogItem-D_oLTy31.js";import"./Flex-RSxiLUVh.js";import"./Byline-BcQeWFgN.js";import"./SeenByLogButton-DUmiKrrN.js";import"./Divider-MYmbMM0W.js";import"./List-CzNKG4D0.js";import"./TimelineSegment-DAfWWCCx.js";import"./TimelineBase-CL9ObuJ3.js";import"./TimelineIcon-BfeDAaKx.js";import"./CircleFill-Bv_uc4ex.js";import"./Timeline-BA98xoPD.js";import"./TimelineActivity-CTOUI84b.js";import"./useDropdownMenuController-DIgZVBo5.js";import"./Dropdown-awoLZP1t.js";import"./SearchField-DJUCyIg2.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./FieldBase-Di9G28SV.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./useMenu-Bq15wZBe.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./ItemMedia-C2Z0jrya.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./ItemControls-CSWL4roz.js";import"./InformationSquare-5U7NjUWT.js";import"./Plus-BcB75ChO.js";import"./ButtonGroup-CDktoaSg.js";import"./ButtonGroupDivider-DMa9JJws.js";import"./ChevronUpDown-DMxjymbp.js";import"./ToolbarMenu-D5dQAGTD.js";import"./ToolbarSearch-QWfoLeEk.js";import"./useProfileLayout-DE6gtKdl.js";import"./HeartFill-DRSvxFWE.js";import"./Bell-8Dz5_7Jj.js";import"./Bookmark-CQuSV28i.js";import"./ClockDashed-wDeFYimQ.js";import"./globalMenu-DByZOQh8.js";import"./PersonCircle-BmyGZKec.js";import"./Buildings2-ZFqwnXej.js";import"./InboxFill-TG9eCz0R.js";import"./MenuGrid-RTXUlCQ0.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-aUibtt6h.js";import"./Trash-CsnE7fwZ.js";import"./useLayout-Ce3UNpu-.js";import"./useLocale-WJJ4F2G9.js";import"./useAccountMenu-K_0K5fak.js";import"./header-CxTdw3OI.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CkyvZCKj.js";import"./CookieBanner-D6viY95h.js";import"./Banner-C3oLFbOC.js";import"./GlobalHeader-CuvKkUaT.js";import"./useIsDesktop-Dk4WE87-.js";import"./GlobalAccountButton-CngMkIKM.js";import"./Enter-COL8hK3_.js";import"./GlobalMenuButton-DE_XSR5z.js";import"./MenuHamburger-kUbaqKWe.js";import"./AccountSelector-L6t1QPoi.js";import"./Switch-CnCXD43g.js";import"./AccountMenu-UeS_zP_s.js";import"./GlobalMenu-B3VOm4-n.js";import"./ArrowUndo-DNzLpryl.js";import"./Globe-DS1ljuLz.js";import"./BreadcrumbsLink-Svau84LP.js";import"./ArrowRight-D9IKmIv2.js";import"./Footer-DfufKz3H.js";import"./useHighlightedText-BqQK_DfD.js";const Io={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},d=()=>{const{items:o}=f();return t.jsx(p,{items:o})},c=()=>{const{toolbar:o,items:r}=f();return t.jsxs(F,{spacing:6,children:[t.jsx(C,{...o}),t.jsx(p,{items:r})]})},g=()=>{const{layout:o}=z({pageId:"activity-log"});return t.jsx(I,{...o,children:t.jsxs(N,{children:[t.jsx(q,{size:"xl",children:"Aktivitetslogg"}),t.jsx(c,{})]})})},u=()=>{const{items:o}=f(),[r,i]=m.useState(!0),e=()=>{i(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>i(!0),children:"Open Modal"}),t.jsxs(M,{open:r,onClose:e,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:e}),t.jsx(k,{children:t.jsx(p,{items:o})})]})]})},y=()=>{const{toolbar:o,items:r}=f(),[i,e]=m.useState(!0),s=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:s,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:s,sticky:!1}),t.jsxs(k,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(C,{...o})}),t.jsx(p,{items:r})]})]})]})},w="60vh",B=({children:o})=>t.jsx(Q,{variant:"subtle",size:"sm",children:t.jsx("p",{children:o})}),l=({entries:o,defaultQuery:r=""})=>{const[i,e]=m.useState(!0),[s,D]=m.useState(r),h=m.useMemo(()=>o.map(P),[o]),{kind:O,filter:H}=T(h),b=()=>e(!1);return t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(M,{open:i,onClose:b,variant:"content",children:[t.jsx(S,{title:"Aktivitetslogg for dialog",onClose:b,sticky:!1}),t.jsxs(k,{children:[h.length>0&&t.jsx(C,{filter:H,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:s,onChange:E=>D(E.target.value),onClear:()=>D("")}}),t.jsx(p,{items:h,kind:O,query:s,emptyState:t.jsx(B,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(B,{children:"Ingen treff"}),style:{maxHeight:w,overflowY:"auto"}})]})]})]})},v=()=>t.jsx(l,{entries:L}),x=()=>t.jsx(l,{entries:L.filter(o=>o.source==="notification"||o.source==="transmission")}),A=()=>t.jsx(l,{entries:L.filter(o=>o.source==="label").slice(0,3)}),a=()=>t.jsx(l,{entries:[]}),n=()=>t.jsx(l,{entries:L,defaultQuery:"sms skatteetaten"});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
