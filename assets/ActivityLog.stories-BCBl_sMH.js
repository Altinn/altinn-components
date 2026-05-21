import{j as o,r as u}from"./iframe-BDpWuaMs.js";import{u as l}from"./useActivityLogToolbar-C7Ap4zeq.js";import{A as c}from"./ActivityLogItem-DNpxd-2J.js";import{S as A}from"./Section-B9Daowr7.js";import{T as g}from"./Toolbar-pR_aG4Pb.js";import{u as j}from"./useProfile-DnwLO1JW.js";import{L as M}from"./Layout-BOIj_IJj.js";import{P as L}from"./PageBase-kQqk_KJJ.js";import{H as B}from"./Heading-D4nA4ZwT.js";import{B as y}from"./Button-m_FXpHGO.js";import{M as v,a as x,b as f}from"./ModalBody-B45xukPd.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-CWm2AXL1.js";import"./TimelineBase-BlvNROtm.js";import"./Flex-zEgiMRQg.js";import"./index-DVPUayQ0.js";import"./TimelineIcon-Rb0nOfW7.js";import"./XMark-Cx5Omj8e.js";import"./useId-BKmV9YxM.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./CircleFill-D2nRUYDP.js";import"./Byline-BE77fsAg.js";import"./Typography-DZRyPYmV.js";import"./useHighlightedText-B13W4IFy.js";import"./Timeline-bW-h2N9H.js";import"./TimelineActivity-DYdGjb5l.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Plus-CPPR_4GW.js";import"./Dropdown-COTBq4xu.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./FieldBase-CGSHeWph.js";import"./Label-7jR2lGh9.js";import"./tooltip-DLcd2lCg.js";import"./Input-BoCHA0_0.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Checkmark-DDYvLrrH.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./ChevronUpDown-DV5kcrkO.js";import"./ButtonGroup-DdOFFFWL.js";import"./ButtonGroupDivider-koOAE-Up.js";import"./ToolbarMenu-DPri2kgb.js";import"./ToolbarSearch-BoGKCEjI.js";import"./useProfileLayout-BMY6TuKN.js";import"./HeartFill-DH1096LK.js";import"./Bell-BbI9Ivyq.js";import"./Bookmark-Dead0XTp.js";import"./ClockDashed-DDHzcO0b.js";import"./globalMenu-LptG6wAG.js";import"./PersonCircle-CyxkM5ZM.js";import"./Buildings2-Dvc17tW1.js";import"./InboxFill-B713teYG.js";import"./MenuGrid--Q28e-Ic.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DFGbX-XR.js";import"./Trash-CUnIoKK5.js";import"./useLayout-BPQwwzNY.js";import"./useLocale-BNt2n01G.js";import"./useAccountMenu-DMhKPCW-.js";import"./header-BwAaLdK6.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Dg_jsoNf.js";import"./Banner-D1GMLXFU.js";import"./GlobalHeader-2J0_QgLb.js";import"./useIsDesktop-BLdKrDcu.js";import"./GlobalAccountButton-DFxURiCJ.js";import"./ChevronDown-Bc_cVxBY.js";import"./Enter-feRUQkuK.js";import"./GlobalMenuButton-Cfq9yt_Z.js";import"./MenuHamburger-B-lY5jCd.js";import"./ChevronUp-CUbZcbs3.js";import"./AccountSelector-BDaFLEcp.js";import"./AccountMenu-Cw03evOz.js";import"./Switch-BV6144DA.js";import"./GlobalMenu-DTND42M6.js";import"./ArrowUndo-B7yB7xi-.js";import"./Globe-Dvhx0NzZ.js";import"./BreadcrumbsLink-HIqYeQNh.js";import"./ArrowRight-3pwHXK49.js";import"./Footer-Crp62nQm.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const dt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,dt as __namedExportsOrder,ct as default};
