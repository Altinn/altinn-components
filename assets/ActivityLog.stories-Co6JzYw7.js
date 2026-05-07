import{j as o,r as u}from"./iframe-Nkxls2w0.js";import{u as l}from"./useActivityLogToolbar-D_52sDbw.js";import{A as c}from"./ActivityLogItem-DpQL94eM.js";import{S as A}from"./Section-DtOfuDKh.js";import{T as g}from"./Toolbar-D-GGCzOD.js";import{u as j}from"./useProfile-CaE3SrNB.js";import{L as M}from"./Layout-zkHRE3mb.js";import{P as L}from"./PageBase-DyibXuz6.js";import{H as B}from"./Heading-AZ4WQ_-Y.js";import{B as y}from"./Button-Ds9vuGVD.js";import{M as v,a as x,b as f}from"./ModalBody-BW4Wp4B4.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DX80sA5R.js";import"./TimelineBase-D1t9eUW1.js";import"./Flex-BbiGghB8.js";import"./index-M4TkGQLb.js";import"./TimelineIcon-DcqrHC4w.js";import"./XMark-D-ALqV0n.js";import"./useId-C8J5yFeN.js";import"./Icon-qDX4JAC4.js";import"./Skeleton-DNS4c1Rp.js";import"./Avatar-BDGJojEv.js";import"./AvatarGroup-BM9A-Bel.js";import"./CircleFill-Cq_tecoJ.js";import"./Byline-CpP3L2XY.js";import"./Typography-CZZfCvh6.js";import"./useHighlightedText-BtUjP4Uj.js";import"./Timeline-VjKDHl5z.js";import"./TimelineActivity-C7O4oTX8.js";import"./useDropdownMenuController-BB48Tjgy.js";import"./Plus-DIAMQcGN.js";import"./Dropdown-D5aFsl9a.js";import"./SearchField-Bb3Ffka2.js";import"./MagnifyingGlass-k_g2FxNc.js";import"./FieldBase-Drb41XPf.js";import"./Label-DRBFvXSF.js";import"./index-Bvwkp7W_.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";import"./Input-BDHdvqI3.js";import"./input-MPZybUVd.js";import"./MenuListItem-Cfh5A6HZ.js";import"./MenuListHeading-CEofuJGo.js";import"./MenuItem-edMrv6Qw.js";import"./ItemMedia-CsEr1Zw1.js";import"./Checkmark-DHusaxnp.js";import"./ItemControls-BH6jrH_o.js";import"./ChevronRight-Bcpq3qt2.js";import"./Badge-Ipym1qsE.js";import"./Tooltip-sxtJg_qK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-WCeLZ4vF.js";import"./InformationSquare-zR5D--CT.js";import"./ChevronUpDown-Cc1V6X6m.js";import"./ButtonGroup-HCy2ouFP.js";import"./ButtonGroupDivider-BRcd2kIA.js";import"./ToolbarMenu-D2G4eQ7e.js";import"./ToolbarSearch-Bt1qoil4.js";import"./useProfileLayout-47EAVwfG.js";import"./HeartFill-DW-S_Xm4.js";import"./Bell-CEK3Kam3.js";import"./Bookmark-Ae2OhZ5O.js";import"./ClockDashed-BquqWz1S.js";import"./globalMenu-CR74OuXv.js";import"./PersonCircle-Cn0cICkm.js";import"./Buildings2-Cwc84w3B.js";import"./InboxFill-o2E1Tsdv.js";import"./MenuGrid-CQppVPlk.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BdfF2mlS.js";import"./Trash-3ZsUZg5A.js";import"./useLayout-BUINXsXR.js";import"./useLocale-hXumCrC-.js";import"./useAccountMenu-Bic09Mnl.js";import"./header-B6-vXvqb.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-C3eAUp5R.js";import"./Banner-CR2T8d4d.js";import"./GlobalHeader-C43hCrm7.js";import"./useIsDesktop-B3v56MMA.js";import"./GlobalAccountButton-1LpwA0ez.js";import"./ChevronDown-DGUtPuYx.js";import"./Enter-B5kYaJFx.js";import"./GlobalMenuButton-DgZ1n528.js";import"./MenuHamburger-RVcJ4Btq.js";import"./ChevronUp-UjgZK29V.js";import"./AccountSelector-BgAPchbc.js";import"./button-CK59nDyy.js";import"./heading-DBVrBNvc.js";import"./AccountMenu-BBk-Oh_e.js";import"./Switch-C1jPtUo5.js";import"./GlobalMenu-DJxhhp8Y.js";import"./ArrowUndo-DCCluNxu.js";import"./Globe-0ZUE1Hkm.js";import"./BreadcrumbsLink-BuCc8KvJ.js";import"./ArrowRight-fyKGUXd8.js";import"./Footer-Blb1oOVu.js";const vt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const xt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,xt as __namedExportsOrder,vt as default};
