import{aa as u,a7 as t,c as g}from"./iframe-BkdCVhNa.js";import{u as l}from"./useActivityLogToolbar-CIIbJL5w.js";import{M as y,b as v,a as x}from"./ModalBody-DLY4BfUv.js";import{A as c}from"./ActivityLogItem-fOWtjZTQ.js";import{T as f}from"./Toolbar-B10IL9NB.js";import{S as A}from"./Section-CCbnuMor.js";import{u as j}from"./useProfile-DU1B1i7Q.js";import{L as M}from"./Layout-BPsUbmzN.js";import{P as L}from"./PageBase-CoK3-rCW.js";import{H as C}from"./Heading-CYb_rmks.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Flex-0kNayUnl.js";import"./TimelineSegment-BPeD5_RE.js";import"./TimelineBase-DtoFUbab.js";import"./TimelineIcon-DoaUhNAD.js";import"./CircleFill-K8Oex7j7.js";import"./Byline-Dn_Wn8kH.js";import"./Typography-BbYlnfM1.js";import"./useHighlightedText-THgW7xGA.js";import"./Timeline-B3B-UvgB.js";import"./TimelineActivity-CtmoG06B.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./SearchField-ClkEO99z.js";import"./MagnifyingGlass-Dy-txje3.js";import"./FieldBase-DIosJ8GZ.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./useMenu-Dy3YaaUo.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuListHeading-ITzk-OYW.js";import"./MenuItem-DLDMkBQ4.js";import"./ItemMedia-ZGWW7sv6.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./ChevronRight-BWpY3hyQ.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./Plus-1oHAiQB4.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonGroupDivider-DDdfhEZd.js";import"./ChevronUpDown-CBG_zYJo.js";import"./ToolbarMenu-dcLUQQlo.js";import"./ToolbarSearch-DSW05ZOw.js";import"./useProfileLayout-DDk2ff1t.js";import"./HeartFill-CFXxrMYr.js";import"./Bell-CfxtDJqV.js";import"./Bookmark-1OK4oHKr.js";import"./ClockDashed-CL_amKpI.js";import"./globalMenu-b6A2g6LS.js";import"./PersonCircle-CXU4a63k.js";import"./Buildings2-BkRGM6p9.js";import"./InboxFill-DmJ-MR8h.js";import"./MenuGrid-UaLQXTNS.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BiGru9B5.js";import"./Trash-DpXv8-T-.js";import"./useLayout-C53uFV5F.js";import"./useLocale-PGLBmYGV.js";import"./useAccountMenu-DWgMwsyd.js";import"./header-v45MRMCQ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CZNC6AMl.js";import"./Banner-BtkWMuu4.js";import"./GlobalHeader-C0K-hU4h.js";import"./useIsDesktop-NTAS9CUx.js";import"./GlobalAccountButton-B6C1II4k.js";import"./ChevronDown-DHl1_IXJ.js";import"./Enter-DiGWFFtb.js";import"./GlobalMenuButton-CaKOaztv.js";import"./MenuHamburger-C33_VoLZ.js";import"./ChevronUp-5uVavT__.js";import"./AccountSelector-DTLixZrl.js";import"./Switch-C8Xs5NQy.js";import"./AccountMenu-BTU2xb98.js";import"./GlobalMenu-mdYdEyJ4.js";import"./ArrowUndo-BT2qWUsa.js";import"./Globe-DlgMAhhy.js";import"./BreadcrumbsLink-C_aB2WWU.js";import"./ArrowRight-Eyt5oeY3.js";import"./Footer-Dh1VwpR_.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ao=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,a as Default,n as ProfileActivityLog,ao as __namedExportsOrder,so as default};
