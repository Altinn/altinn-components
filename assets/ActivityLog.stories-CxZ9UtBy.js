import{j as o,r as u}from"./iframe-Bk_HwK4l.js";import{u as l}from"./useActivityLogToolbar-12TS6tar.js";import{A as c}from"./ActivityLogItem-D-mCfTeB.js";import{S as A}from"./Section-DaLGW2Wx.js";import{T as g}from"./Toolbar-DnSydSf5.js";import{u as j}from"./useProfile-ClDLaH36.js";import{L as M}from"./Layout-DMzQhhMc.js";import{P as L}from"./PageBase-GofvOrmd.js";import{H as B}from"./Heading-D6li-Zgs.js";import{B as y}from"./Button-DXv-zg1S.js";import{M as v,a as x,b as f}from"./ModalBody-BjB278uQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Hin6_hqv.js";import"./TimelineBase-DE4j_Rbh.js";import"./Flex-CqtyDzLK.js";import"./index-Bj80ru-z.js";import"./TimelineIcon-D_WEzDu0.js";import"./XMark-BlM7H2uk.js";import"./useId-WArpTTRC.js";import"./Icon-BbsTdu7G.js";import"./Skeleton-CZ4GHxMp.js";import"./Avatar-B1R5c004.js";import"./AvatarGroup-CkGvw6sL.js";import"./CircleFill-DulY4goE.js";import"./Byline-BO0Xb7Bu.js";import"./Typography-9_XA-VKE.js";import"./useHighlightedText-BjD5CEaG.js";import"./Timeline-DzuiVeze.js";import"./TimelineActivity-CBFZULzo.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Plus-Db6y3gEP.js";import"./Dropdown-DDGzAAFH.js";import"./SearchField-CcfOce7B.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./FieldBase-zuKERQJx.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./Checkmark-BwmprQFp.js";import"./ItemControls-DoACt_K_.js";import"./ChevronRight-BEdxYQXL.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./ChevronUpDown-xq3F75kC.js";import"./ButtonGroup-IyhiSPmN.js";import"./ButtonGroupDivider-Cky36suu.js";import"./ToolbarMenu-C9Ek9car.js";import"./ToolbarSearch-D1BZ8Hq2.js";import"./useProfileLayout-BMFpPC5z.js";import"./HeartFill-Bykr2pwN.js";import"./Bell-qYb-2Nld.js";import"./Bookmark-CWSsFSTc.js";import"./ClockDashed-7cETgVqe.js";import"./globalMenu-DuY1idWA.js";import"./PersonCircle-Bug5_KA4.js";import"./Buildings2-COMDnIsr.js";import"./InboxFill-BT0lNQUY.js";import"./MenuGrid-CXZfn0tj.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Cxwz0IDr.js";import"./Trash-D4QcHzdr.js";import"./useLayout-FKYXulYL.js";import"./useLocale-CwyHQUA3.js";import"./useAccountMenu-BCMgnvyr.js";import"./header-4Zq4f7xj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CNDGWICJ.js";import"./Banner-DjaEdV5f.js";import"./GlobalHeader-BvERlZj1.js";import"./useIsDesktop-DtaFkEnB.js";import"./GlobalAccountButton-B48oWHvp.js";import"./ChevronDown-Butud2ye.js";import"./Enter-BTsqsWJv.js";import"./GlobalMenuButton-CwOQpq-X.js";import"./MenuHamburger-CKMlqnsy.js";import"./ChevronUp-DmnNnXSw.js";import"./AccountSelector-D7vSqsSf.js";import"./button-DRIhbrAI.js";import"./heading-D5vp04a9.js";import"./AccountMenu-nqWsIwM6.js";import"./Switch-Dp4vFwT2.js";import"./GlobalMenu-DBRHlNQB.js";import"./ArrowUndo-DFEq1-Ux.js";import"./Globe-bFqWwKDV.js";import"./BreadcrumbsLink-DXiaezw9.js";import"./ArrowRight-CFWaHxT6.js";import"./Footer-D8m_3clk.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ft=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,ft as __namedExportsOrder,xt as default};
