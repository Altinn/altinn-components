import{aa as u,a7 as t,c as g}from"./iframe-B2qSCuzl.js";import{u as l}from"./useActivityLogToolbar-pM3NBHEd.js";import{M as y,b as v,a as x}from"./ModalBody-DivKqOfu.js";import{A as c}from"./ActivityLogItem-DA4tcAdV.js";import{T as f}from"./Toolbar-qVZShKCx.js";import{S as A}from"./Section-vcV9OTBL.js";import{u as j}from"./useProfile-CrRRvE49.js";import{L as M}from"./Layout-76ZEl-bN.js";import{P as L}from"./PageBase-BWZlJD1k.js";import{H as C}from"./Heading-BraOiwz9.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Flex-DUbFTLOy.js";import"./TimelineSegment-DWWJ6-Rs.js";import"./TimelineBase-EI2Knr-9.js";import"./TimelineIcon-CXdCcmfg.js";import"./CircleFill-Dhb8ON01.js";import"./Byline-uBpvUPL7.js";import"./Typography-CidHk-ga.js";import"./useHighlightedText-BGZ3rca6.js";import"./Timeline-cPyfwi8L.js";import"./TimelineActivity-CMGHX_85.js";import"./useDropdownMenuController-B1sM5Fkl.js";import"./Dropdown-CXjz9DNR.js";import"./SearchField-M5wz_Je4.js";import"./MagnifyingGlass-BW6TNVS9.js";import"./FieldBase-LsrXuCdT.js";import"./Field-IfN9vhAd.js";import"./Label-qtoi2ZUa.js";import"./Input-BEYjfhLL.js";import"./useMenu-4wlPj4vw.js";import"./MenuListItem-C_Y3s3QU.js";import"./MenuListHeading-Dp2ZOdKs.js";import"./MenuItem-DufE-zMI.js";import"./ItemMedia-C3fquT_8.js";import"./Checkmark-1_ErCtmb.js";import"./ItemLabel-CXwcKPbI.js";import"./ItemControls-i4q63th9.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./ChevronRight-CE-Naqr7.js";import"./index-L4tlORLO.js";import"./InformationSquare-Bz2aeVSU.js";import"./Plus-C423HqNe.js";import"./ButtonGroup-DPqV5ihn.js";import"./ButtonGroupDivider-BoAXm-c3.js";import"./ChevronUpDown-BAJ3g4bz.js";import"./ToolbarMenu-CZouCPtl.js";import"./ToolbarSearch-jl-Levfl.js";import"./useProfileLayout-DUyZcqJU.js";import"./HeartFill-v2yxnjxD.js";import"./Bell-CeBdobVY.js";import"./Bookmark-BnCq2bwL.js";import"./ClockDashed-DuvS0HtT.js";import"./globalMenu-CTO35srA.js";import"./PersonCircle-DkxcEC2H.js";import"./Buildings2-CSa0Fj3k.js";import"./InboxFill-BGlK0kAC.js";import"./MenuGrid-DiWI3u40.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-l9uRDAtU.js";import"./Trash-DxBU9Rfy.js";import"./useLayout-DO3aS3SB.js";import"./useLocale-BcTppNNY.js";import"./useAccountMenu-CLG0BEsy.js";import"./header-D3_ONeFu.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CfzACGl1.js";import"./Banner-C-RrrCPx.js";import"./GlobalHeader-Ddqn6DNs.js";import"./useIsDesktop-DFn6uBJT.js";import"./GlobalAccountButton-CZP785Uy.js";import"./ChevronDown-MLEeMvzz.js";import"./Enter-D2BxqJId.js";import"./GlobalMenuButton-v9hWJoq1.js";import"./MenuHamburger-CgPTbI81.js";import"./ChevronUp-DsaXlzpU.js";import"./AccountSelector-DqwMajub.js";import"./Switch-BaESAcvv.js";import"./AccountMenu-DTvV-i8u.js";import"./GlobalMenu-4TKKPZA1.js";import"./ArrowUndo-CSSrSj6Y.js";import"./Globe-BwntYx03.js";import"./BreadcrumbsLink-FVIP7hU1.js";import"./ArrowRight-DmbHvLhG.js";import"./Footer-ClXdpL_M.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
