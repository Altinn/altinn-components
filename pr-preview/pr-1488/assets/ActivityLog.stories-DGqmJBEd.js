var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-Cb83cNHz.js";import{u as c}from"./useActivityLogToolbar-B0qEbCui.js";import{M as v,b as x,a as f}from"./ModalBody-CL-S6xSQ.js";import{A as d}from"./ActivityLogItem-D9Kj-XNm.js";import{T as A}from"./Toolbar-B_gii49B.js";import{S as M}from"./Section-ClBUDaq7.js";import{u as L}from"./useProfile-BHgkLRc6.js";import{L as C}from"./Layout-Dff3kFcF.js";import{P as B}from"./PageBase-SjhsrAEt.js";import{H as k}from"./Heading-I2bz7uBQ.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Flex-mAUGJKsG.js";import"./TimelineSegment-aUJvRwQg.js";import"./TimelineBase-BtJIaAQp.js";import"./TimelineIcon-nh6PlmMu.js";import"./CircleFill-CbH_oTOk.js";import"./Byline-CgRs6b_9.js";import"./Typography-BPADIB9F.js";import"./useHighlightedText-DXF5vSCe.js";import"./Timeline-CKM3sRPc.js";import"./TimelineActivity-CHtnMOIM.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./ItemLabel-BEqC8Tjb.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";import"./Plus-DTEoGbp7.js";import"./ButtonGroup-BwzWu-pA.js";import"./ButtonGroupDivider-C8hWvas3.js";import"./ChevronUpDown-BJhYzIIl.js";import"./ToolbarMenu-C-UhfqZn.js";import"./ToolbarSearch-z6Bkm9UK.js";import"./useProfileLayout-BjFE2YNL.js";import"./HeartFill-DcdlCvlf.js";import"./Bell-BY_iRMvG.js";import"./Bookmark-CQ14dnwq.js";import"./ClockDashed-CdLFcCzb.js";import"./globalMenu-C_b1A6tx.js";import"./PersonCircle-CtGRXr0J.js";import"./Buildings2-CMW_rwWI.js";import"./InboxFill-C-qRYzn8.js";import"./MenuGrid-BEQ62scm.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DAtzml59.js";import"./Trash-lsGNewil.js";import"./useLayout-ChotBEY2.js";import"./useLocale-B81XpxB2.js";import"./useAccountMenu-BH3K6i1e.js";import"./header-BCF_3qUB.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-6B7b5F_a.js";import"./CookieBanner-jCRU0d03.js";import"./Link-DQQdOR66.js";import"./Banner-B1D4lRTG.js";import"./GlobalHeader-GY_0unjy.js";import"./useIsDesktop-bkDzo4_p.js";import"./GlobalAccountButton-YJVub4dC.js";import"./ChevronDown-CvYcy6of.js";import"./Enter-242fxigb.js";import"./GlobalMenuButton-Dr02kXNp.js";import"./MenuHamburger-CnSpXwtX.js";import"./ChevronUp-BCG2x0JT.js";import"./AccountSelector-C0DI3fm4.js";import"./Switch-DIW_Z6WH.js";import"./AccountMenu-DZR0MJzN.js";import"./GlobalMenu-BMN2Sqk4.js";import"./Checkmark-CNvtSrOy.js";import"./ArrowUndo-B-nYNH6F.js";import"./Globe-DtcnCepT.js";import"./BreadcrumbsLink--x-4fvlt.js";import"./ArrowRight-CQNswdhZ.js";import"./Footer-CT_cgCIN.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
