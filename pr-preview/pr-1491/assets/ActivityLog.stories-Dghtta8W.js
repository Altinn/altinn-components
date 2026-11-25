var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CjTVLX0J.js";import{u as c}from"./useActivityLogToolbar-C6uNbY4i.js";import{M as v,b as x,a as f}from"./ModalBody-Bv7CSic6.js";import{A as d}from"./ActivityLogItem-dkROw-YR.js";import{T as A}from"./Toolbar-BmRWpMAQ.js";import{S as M}from"./Section-Srp_Bqeg.js";import{u as L}from"./useProfile-BpoNiZZx.js";import{L as C}from"./Layout-DLSiGAx-.js";import{P as B}from"./PageBase-BUX6THgX.js";import{H as k}from"./Heading-iGdZKzrq.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./Flex-DPGhARfx.js";import"./TimelineSegment-BsBZOQJC.js";import"./TimelineBase-Aos8trTT.js";import"./TimelineIcon-EAo8wJIF.js";import"./CircleFill-D6wcnyaA.js";import"./Byline-DCQwseqO.js";import"./Typography-D5LJyQSI.js";import"./useHighlightedText-DSpkTug-.js";import"./Timeline-C1XhK_rL.js";import"./TimelineActivity-DWycZ91d.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./ItemLabel-QKtbke7Z.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronRight-B7WfXeCo.js";import"./FieldBase-C5zYRo5L.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./Plus-DW7oopwP.js";import"./ButtonGroup-CI4WR3eO.js";import"./ButtonGroupDivider-DmDtKYBM.js";import"./ChevronUpDown-BCSooCPs.js";import"./ToolbarMenu-CSRoeiOS.js";import"./ToolbarSearch-CDK1e_qT.js";import"./useProfileLayout-D-L38U5X.js";import"./HeartFill-Duwqd6aq.js";import"./Bell-BL9bPd5p.js";import"./Bookmark-BDeoFTtd.js";import"./ClockDashed-Btqf8PdS.js";import"./localeSwitcher-BdJo1Izh.js";import"./InboxFill-B1_bEVcP.js";import"./PersonGroup-BwCOL2Gz.js";import"./MenuGrid-F8C2h4Pq.js";import"./Buildings2-DbrN1Cg2.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BBOY_v7Z.js";import"./Trash-f0oxT1Hh.js";import"./useLayout-DT1dRbJp.js";import"./useLocale-DY_Y1RPB.js";import"./useAccountMenu-BvLo-JyS.js";import"./header-CNV4dqbz.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CFVJJW-V.js";import"./CookieBanner-BoBiIGVA.js";import"./Link-CwJzganA.js";import"./Banner-CCUC8ahN.js";import"./GlobalHeader-CYRnFvVR.js";import"./useIsDesktop-CRXCxfgX.js";import"./GlobalAccountButton-CN0jJRTe.js";import"./ChevronDown-mX34rd4T.js";import"./Enter-C-VRq7pc.js";import"./GlobalMenuButton-C4Qn8CNp.js";import"./MenuHamburger-BrSo9lJ8.js";import"./ChevronUp-BaW30cb9.js";import"./AccountSelector-D_UDBNlC.js";import"./Switch-DudTedAR.js";import"./AccountMenu-BAN1_qc4.js";import"./GlobalMenu-Dx6KsJmK.js";import"./Checkmark-MZRBZVNG.js";import"./ArrowUndo-ButKzzqn.js";import"./Globe-xX74n395.js";import"./BreadcrumbsLink-BwoDhCel.js";import"./ArrowRight-DIDpPpC_.js";import"./Footer-BDn4xEy5.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
