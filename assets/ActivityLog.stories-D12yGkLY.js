var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-Cf4UALw8.js";import{u as c}from"./useActivityLogToolbar-BIfMeF0K.js";import{M as v,b as x,a as f}from"./ModalBody-D4pYrcnM.js";import{A as d}from"./ActivityLogItem-DataICHz.js";import{T as A}from"./Toolbar-D6KQC90D.js";import{S as M}from"./Section-B-7b4QAp.js";import{u as L}from"./useProfile-B62XTgIS.js";import{L as C}from"./Layout-2Z_4kzXe.js";import{P as B}from"./PageBase-eBY4Pxiv.js";import{H as k}from"./Heading-B2LEqvTq.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Flex-CiSMsFR7.js";import"./TimelineSegment-Du0bBumj.js";import"./TimelineBase-iE2RhIRM.js";import"./TimelineIcon-B_ZK_H1o.js";import"./CircleFill-BIOISkJS.js";import"./Byline-CQqrvp19.js";import"./Typography-CsGx0b_o.js";import"./useHighlightedText-BGOVKO4Q.js";import"./Timeline-CEWarMRP.js";import"./TimelineActivity-C1jmh2km.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./ItemLabel-C9vfNdbz.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";import"./Plus-sEq00D2Y.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonGroupDivider-rSZ8QcFs.js";import"./ChevronUpDown-CYoTR3YM.js";import"./ToolbarMenu-BtMtO618.js";import"./ToolbarSearch-BNcqwGAT.js";import"./useProfileLayout-CW9YzmuS.js";import"./HeartFill-D9h2LAGd.js";import"./Bell-CC6emYwL.js";import"./Bookmark-C10mug1X.js";import"./ClockDashed-BLeXrSnX.js";import"./globalMenu-BIJOliht.js";import"./PersonCircle-BinjxBJZ.js";import"./Buildings2-C5pfq8or.js";import"./InboxFill-DaA5y8zL.js";import"./MenuGrid-Dn9gpcu9.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DbxYD9lF.js";import"./Trash-B_p5hHVd.js";import"./useLayout-JlqS5Fc2.js";import"./useLocale-BPjin0qe.js";import"./useAccountMenu-Df-Uf2IL.js";import"./header-cyCh-hE6.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CgCDDMsC.js";import"./CookieBanner-BQBopbaZ.js";import"./Link-ApESsW5M.js";import"./Banner-CE7cR7yb.js";import"./GlobalHeader-DtmiGd7W.js";import"./useIsDesktop-B8RqtL_d.js";import"./GlobalAccountButton-DxY6wyot.js";import"./ChevronDown-B_UJ6uJ_.js";import"./Enter-KlBUq896.js";import"./GlobalMenuButton-W3knbd65.js";import"./MenuHamburger-DwSFJE3g.js";import"./ChevronUp-BKdDwASh.js";import"./AccountSelector-CSU8nWht.js";import"./Switch-DuCdX2cJ.js";import"./AccountMenu-Ba6_WV3b.js";import"./GlobalMenu-Y6Sa8-oh.js";import"./Checkmark-Dha_gRss.js";import"./ArrowUndo-ucfdJHsw.js";import"./Globe-C1KW9qlQ.js";import"./BreadcrumbsLink-zy9RVUNR.js";import"./ArrowRight-C3hJKAqP.js";import"./Footer-BL-GZqKp.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,ut as __namedExportsOrder,dt as default};
