import{j as o,r as u}from"./iframe-BM6RZuQM.js";import{u as l}from"./useActivityLogToolbar-BpIZG150.js";import{A as c}from"./ActivityLogItem-Bpl_ugZ2.js";import{S as A}from"./Section-h9TGEdkh.js";import{T as g}from"./Toolbar-jAy78YnB.js";import{u as j}from"./useProfile-4StHEFHi.js";import{L as M}from"./Layout-DZRWYqlP.js";import{P as L}from"./PageBase-Bdd_NXuX.js";import{H as B}from"./Heading-aHWaPGZz.js";import{B as y}from"./Button-DhtPu9_Y.js";import{M as v,a as x,b as f}from"./ModalBody-tg8E7uYI.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment--AJbvfeg.js";import"./TimelineBase-ZyWb_fYt.js";import"./Flex-DCHL4VAz.js";import"./index-DAnedVDn.js";import"./TimelineIcon-BEvtbYEX.js";import"./XMark-EbOSJv8a.js";import"./useId-BYt_OYJh.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./CircleFill-DG0Axe2Z.js";import"./Byline-BTx_wYwG.js";import"./Typography-CXaseqiH.js";import"./useHighlightedText-Ctq_ta7p.js";import"./Timeline-By7NolYO.js";import"./TimelineActivity-CliTNL0-.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Plus-DESzxFez.js";import"./Dropdown-Cm6GAKAK.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./FieldBase-lFVyN1xh.js";import"./Label-C7IFl0uM.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Checkmark-CVccove_.js";import"./ItemControls-DdRx042_.js";import"./ChevronRight-B7KHdEb3.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./ChevronUpDown-DfgLRSTr.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonGroupDivider-BOAkNbb9.js";import"./ToolbarMenu-DB1ESAM1.js";import"./ToolbarSearch-es-DLOxw.js";import"./useProfileLayout-C9ZS9AwX.js";import"./HeartFill-C0v9J4kN.js";import"./Bell-Bdcl3ieI.js";import"./Bookmark-BjY-XLx0.js";import"./ClockDashed-sGix1zSO.js";import"./globalMenu-BGPqSz8E.js";import"./PersonCircle-DN7g7QG1.js";import"./Buildings2-DPJaWJUP.js";import"./InboxFill-CoU3DNM4.js";import"./MenuGrid-B2fy_4CU.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DxmrpUmh.js";import"./Trash-CeRRfZXt.js";import"./useLayout-BHv6aN6B.js";import"./useLocale-Dq8Iiold.js";import"./useAccountMenu-R2DlDLLf.js";import"./header-CiD1VSCk.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CCgTqTA3.js";import"./Banner-D27RNr2p.js";import"./GlobalHeader-BGMvfPuV.js";import"./useIsDesktop-Dm2dj1pd.js";import"./GlobalAccountButton-BbeQojsg.js";import"./ChevronDown-DYIPhVz6.js";import"./Enter-CBXCMPPv.js";import"./GlobalMenuButton-Bji4cO3L.js";import"./MenuHamburger-BcfCqF_o.js";import"./ChevronUp-CLlFINM4.js";import"./AccountSelector-CBvboyq8.js";import"./AccountMenu-8uNzYSA_.js";import"./Switch-D6evj3r2.js";import"./GlobalMenu-DptzF8pC.js";import"./ArrowUndo-Bmn4Nzqn.js";import"./Globe-BWe6SIwi.js";import"./BreadcrumbsLink-C4tHqUQj.js";import"./ArrowRight-gJzEyyh7.js";import"./Footer-HAyJleRa.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
