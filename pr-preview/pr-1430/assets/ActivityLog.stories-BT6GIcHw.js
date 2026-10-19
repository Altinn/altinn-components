var T=Object.defineProperty;var e=(o,r)=>T(o,"name",{value:r,configurable:!0});import{aa as p,a7 as t,c as M}from"./iframe-C7zNVDTT.js";import{u as L}from"./useActivityLogToolbar-BslmkLn7.js";import{a as h,t as F,u as z}from"./useActivityLogFilter-CnBmaLy7.js";import{M as S,b as k,a as C}from"./ModalBody-DHblQtRU.js";import{A as l}from"./ActivityLogItem-njm6gpHL.js";import{T as D}from"./Toolbar-D5UOIQbP.js";import{S as I}from"./Section-B3YiwHQ7.js";import{u as N}from"./useProfile-DFKX_mua.js";import{L as q}from"./Layout-Bm3GWiKE.js";import{P as Q}from"./PageBase-inkFzTL0.js";import{H as w}from"./Heading-gv6s55oV.js";import{T as R}from"./Typography-4gq5i4xU.js";import"./preload-helper-Cc2_yIPf.js";import"./TransmissionList-DPo2TXc8.js";import"./Transmission-DDBSCaLG.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ListItem-taDywDuL.js";import"./Input-CFKt0A_s.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./AttachmentList-Ds9QYH06.js";import"./AttachmentLink-Dx6bq-jk.js";import"./File-DFpEzsx5.js";import"./SeenByLog-BdhoqJu8.js";import"./SeenByLogItem-BiV_dEcT.js";import"./Flex-CVxm3AId.js";import"./Byline-9WqjKM1E.js";import"./SeenByLogButton-Jr5X6a2N.js";import"./Divider-B8BEf1fJ.js";import"./List-Eab06pgk.js";import"./TimelineSegment-DcxWyMtE.js";import"./TimelineBase-oJ0w_E8D.js";import"./TimelineIcon-Ca1USCvA.js";import"./CircleFill-DFxmWNrs.js";import"./Timeline-CyJcYoSZ.js";import"./TimelineActivity-BNZnNEwD.js";import"./useDropdownMenuController-ClSzWlSO.js";import"./Dropdown-ONE2NNEY.js";import"./SearchField-DGzlCViu.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./ItemControls-CUub_53H.js";import"./InformationSquare-BvDWZ3oM.js";import"./Plus-D2iqct3P.js";import"./ButtonGroup-CoqmCer7.js";import"./ButtonGroupDivider-CndRbUqR.js";import"./ChevronUpDown-R0HlDPZA.js";import"./ToolbarMenu-WfeXYafB.js";import"./ToolbarSearch-GE1ukijt.js";import"./useProfileLayout-CFfiOT6X.js";import"./HeartFill-Be15i5fa.js";import"./Bell-CsPO5nr_.js";import"./Bookmark-DMj8vedD.js";import"./ClockDashed-Ni0gvRCY.js";import"./globalMenu-DZwWJtIL.js";import"./PersonCircle-Dtb1J2KT.js";import"./Buildings2-C52yfc6A.js";import"./InboxFill-C72yjiaX.js";import"./MenuGrid-BCmbKjow.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-k3j1nRib.js";import"./Trash-DXsDcsqv.js";import"./useLayout-lbzwA2xj.js";import"./useLocale-C47f_wVY.js";import"./useAccountMenu-uA8btcNE.js";import"./header-CDpjXX52.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-bYGbYPzo.js";import"./CookieBanner-BmiFJVUa.js";import"./Banner-rY54sJaF.js";import"./GlobalHeader-BtYj7AEn.js";import"./useIsDesktop-DvOzZNPR.js";import"./GlobalAccountButton-DfGs1d0C.js";import"./Enter-D72Fb-f9.js";import"./GlobalMenuButton-CItGckp8.js";import"./MenuHamburger-PG0UCurc.js";import"./AccountSelector-Lplja8Da.js";import"./Switch-BTuJol9o.js";import"./AccountMenu-3SdWfky9.js";import"./GlobalMenu-Cw9Lq0Ju.js";import"./ArrowUndo-nuZh3Ffr.js";import"./Globe-CqKzv9dh.js";import"./BreadcrumbsLink-CLjQgSHD.js";import"./ArrowRight-Bp2_CMNo.js";import"./Footer-BXZRNiiV.js";import"./useHighlightedText-CLjqXK08.js";const Qo={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},g=e(()=>{const{items:o}=L();return t.jsx(l,{items:o})},"Default"),m=e(()=>{const{toolbar:o,items:r}=L();return t.jsxs(I,{spacing:6,children:[t.jsx(D,{...o}),t.jsx(l,{items:r})]})},"Controlled"),u=e(()=>{const{layout:o}=N({pageId:"activity-log"});return t.jsx(q,{...o,children:t.jsxs(Q,{children:[t.jsx(w,{size:"xl",children:"Aktivitetslogg"}),t.jsx(m,{})]})})},"ProfileActivityLog"),y=e(()=>{const{items:o}=L(),[r,s]=p.useState(!0),i=e(()=>{s(!1)},"onClose");return t.jsxs(t.Fragment,{children:[t.jsx(M,{onClick:e(()=>s(!0),"onClick"),children:"Open Modal"}),t.jsxs(S,{open:r,onClose:i,variant:"content",children:[t.jsx(k,{title:"Aktivitetslogg for dialog",onClose:i}),t.jsx(C,{children:t.jsx(l,{items:o})})]})]})},"ActivityLogModal"),v=e(()=>{const{toolbar:o,items:r}=L(),[s,i]=p.useState(!0),a=e(()=>{i(!1)},"onClose");return t.jsxs(t.Fragment,{children:[t.jsx(M,{onClick:e(()=>i(!0),"onClick"),children:"Open Modal"}),t.jsxs(S,{open:s,onClose:a,variant:"content",children:[t.jsx(k,{title:"Aktivitetslogg for dialog",onClose:a,sticky:!1}),t.jsxs(C,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(D,{...o})}),t.jsx(l,{items:r})]})]})]})},"ActivityLogModalAdvanced"),_="60vh",O=e(({children:o})=>t.jsx(R,{variant:"subtle",size:"sm",children:t.jsx("p",{children:o})}),"ActivityLogEmptyState"),d=e(({entries:o,defaultQuery:r=""})=>{const[s,i]=p.useState(!0),[a,b]=p.useState(r),j=p.useMemo(()=>o.map(F),[o]),{kind:H,filter:E}=z(j),B=e(()=>i(!1),"onClose");return t.jsxs(t.Fragment,{children:[t.jsx(M,{onClick:e(()=>i(!0),"onClick"),children:"Open Modal"}),t.jsxs(S,{open:s,onClose:B,variant:"content",children:[t.jsx(k,{title:"Aktivitetslogg for dialog",onClose:B,sticky:!1}),t.jsxs(C,{children:[j.length>0&&t.jsx(D,{filter:E,search:{name:"q",label:"Søk i aktivitetsloggen",placeholder:"Søk ...",value:a,onChange:e(P=>b(P.target.value),"onChange"),onClear:e(()=>b(""),"onClear")}}),t.jsx(l,{items:j,kind:H,query:a,emptyState:t.jsx(O,{children:"Det er ikke registrert noen aktiviteter på denne meldingen."}),noResultsState:t.jsx(O,{children:"Ingen treff"}),style:{maxHeight:_,overflowY:"auto"}})]})]})]})},"DialogActivityLogModal"),x=e(()=>t.jsx(d,{entries:h}),"DialogActivityLogFiltered"),A=e(()=>t.jsx(d,{entries:h.filter(o=>o.source==="notification"||o.source==="transmission")}),"DialogActivityLogPartialSources"),f=e(()=>t.jsx(d,{entries:h.filter(o=>o.source==="label").slice(0,3)}),"DialogActivityLogShortLog"),n=e(()=>t.jsx(d,{entries:[]}),"DialogActivityLogNoActivity"),c=e(()=>t.jsx(d,{entries:h,defaultQuery:"sms skatteetaten"}),"DialogActivityLogNoMatches");g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries} />",...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries.filter(entry => entry.source === 'notification' || entry.source === 'transmission')} />",...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={activityHistoryEntries.filter(entry => entry.source === 'label').slice(0, 3)} />",...f.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"() => <DialogActivityLogModal entries={[]} />",...n.parameters?.docs?.source},description:{story:"Empty state 1: the dialog has no activity at all, so there is nothing to filter.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'() => <DialogActivityLogModal entries={activityHistoryEntries} defaultQuery="sms skatteetaten" />',...c.parameters?.docs?.source},description:{story:"Empty state 2: there is activity, but every term has to match and these two never co-occur.",...c.parameters?.docs?.description}}};const wo=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced","DialogActivityLogFiltered","DialogActivityLogPartialSources","DialogActivityLogShortLog","DialogActivityLogNoActivity","DialogActivityLogNoMatches"];export{y as ActivityLogModal,v as ActivityLogModalAdvanced,m as Controlled,g as Default,x as DialogActivityLogFiltered,n as DialogActivityLogNoActivity,c as DialogActivityLogNoMatches,A as DialogActivityLogPartialSources,f as DialogActivityLogShortLog,u as ProfileActivityLog,wo as __namedExportsOrder,Qo as default};
