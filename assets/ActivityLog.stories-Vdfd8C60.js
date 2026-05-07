import{j as o,r as u}from"./iframe-BakMcPB9.js";import{u as l}from"./useActivityLogToolbar-D3c_hhEY.js";import{A as c}from"./ActivityLogItem-CRewSqLC.js";import{S as A}from"./Section-C3ywv7P2.js";import{T as g}from"./Toolbar-B_CGAfU5.js";import{u as j}from"./useProfile-Um3LhuOz.js";import{L as M}from"./Layout-BmmA0eVB.js";import{P as L}from"./PageBase-QrQAiaqc.js";import{H as B}from"./Heading-Dpm-6zaj.js";import{B as y}from"./Button-BJ-P2q8B.js";import{M as v,a as x,b as f}from"./ModalBody-BH-DS5mt.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-dzoMFH7T.js";import"./TimelineBase-CXpItEq8.js";import"./Flex-73Lku4Kd.js";import"./index-DAwqyEdM.js";import"./TimelineIcon-YhWAC-1G.js";import"./XMark-D8cLqedS.js";import"./useId-Btw-Kuqp.js";import"./Icon-D4ysQTre.js";import"./Skeleton-CIZGLt5B.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./CircleFill-BXkADRpi.js";import"./Byline-BaThz4WY.js";import"./Typography-BzplxmiV.js";import"./useHighlightedText-nzhiVGnc.js";import"./Timeline-DpFUMVBp.js";import"./TimelineActivity-BMsi4NFR.js";import"./useDropdownMenuController-CClYSj1T.js";import"./Plus-CsNf283B.js";import"./Dropdown-UmxICHKp.js";import"./SearchField-rHpPiKo0.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./FieldBase-B35pktZu.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Checkmark-Bv6xEUnW.js";import"./ItemControls-BIaUvdXD.js";import"./ChevronRight-C2TalX8u.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";import"./ChevronUpDown-BQWoe1O9.js";import"./ButtonGroup-4RnrqVmD.js";import"./ButtonGroupDivider-BxtMkVsF.js";import"./ToolbarMenu-B3EEzWoM.js";import"./ToolbarSearch-CKv0R1zR.js";import"./useProfileLayout-iM7oE8hN.js";import"./HeartFill-C97JobCu.js";import"./Bell-DBsUPEGE.js";import"./Bookmark-Cm0-2Exr.js";import"./ClockDashed-CWsxc4aJ.js";import"./globalMenu-BcibZR63.js";import"./PersonCircle-ORAuXLOM.js";import"./Buildings2-AdE5hB6g.js";import"./InboxFill-CiG_afGx.js";import"./MenuGrid-lPKzDSTw.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BR--IAyW.js";import"./Trash-C23JfHvO.js";import"./useLayout--b09YgCm.js";import"./useLocale-Df2NxEB4.js";import"./useAccountMenu-B3wqCLAq.js";import"./header-CjZC2_l2.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-tzg0heUh.js";import"./GlobalHeader-D9Rb4Fvy.js";import"./useIsDesktop-DD1-kwof.js";import"./GlobalAccountButton-D1ZtEyDi.js";import"./ChevronDown-DMRBxZop.js";import"./Enter-DtzLbGWD.js";import"./GlobalMenuButton-DaRZu45x.js";import"./MenuHamburger-ChSiVscJ.js";import"./ChevronUp-D-5UFsw8.js";import"./AccountSelector-DNnZOxUy.js";import"./button-Dqq-cscz.js";import"./heading-EL6ZIu79.js";import"./AccountMenu-CQ_VEF0u.js";import"./Switch-xtMa6te7.js";import"./GlobalMenu-CQkoXXqX.js";import"./ArrowUndo-B1TPuteg.js";import"./Globe-DotiYBci.js";import"./BreadcrumbsLink-TKbmZpM7.js";import"./ArrowRight-16ulrcEm.js";import"./Footer-PisAEy7f.js";const yt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const vt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,vt as __namedExportsOrder,yt as default};
