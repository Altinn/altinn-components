import{aa as u,a7 as t,c as g}from"./iframe-CeD8DZF_.js";import{u as l}from"./useActivityLogToolbar-32HsytQK.js";import{M as y,b as v,a as x}from"./ModalBody-B4hCRN8z.js";import{A as c}from"./ActivityLogItem-2QXPf_Kh.js";import{T as f}from"./Toolbar-KphS47Kc.js";import{S as A}from"./Section-18Uf7Mat.js";import{u as j}from"./useProfile-j7ybksK2.js";import{L as M}from"./Layout-CIjwcIba.js";import{P as L}from"./PageBase-PRLf88Ps.js";import{H as C}from"./Heading-CqEhdWlY.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Flex-BOkBPJQr.js";import"./TimelineSegment-cEQuO1f4.js";import"./TimelineBase-B4iWuA54.js";import"./TimelineIcon-Db0sPwiP.js";import"./CircleFill-CXiwGPHX.js";import"./Byline-KDNVSBdT.js";import"./Typography-D10BEJyK.js";import"./useHighlightedText-qfj7RnMw.js";import"./Timeline-BOayI1AI.js";import"./TimelineActivity-DAOFav2V.js";import"./useDropdownMenuController-D9gVQRIM.js";import"./Dropdown-gDr2Qds9.js";import"./SearchField-D9P8-rjO.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./FieldBase-BbgmrWIh.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./useMenu-Cr0Tzvrf.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./ItemMedia-CjD5QxWk.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./ItemControls-CphkAdhU.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./ChevronRight-B8wcZ9md.js";import"./InformationSquare-CNpr0xiM.js";import"./Plus-StvQ1Urq.js";import"./ButtonGroup-C3-Lq824.js";import"./ButtonGroupDivider-NSvDX-n9.js";import"./ChevronUpDown-DlSnRGyJ.js";import"./ToolbarMenu-XloUNX45.js";import"./ToolbarSearch-C9iC4-kO.js";import"./useProfileLayout-j-EfMP-L.js";import"./HeartFill-Cs4AGepw.js";import"./Bell-BPsDKzao.js";import"./Bookmark-C69DWwR5.js";import"./ClockDashed-iUB0Wgbc.js";import"./globalMenu-B9dDwuMR.js";import"./PersonCircle-zHDRbj0E.js";import"./Buildings2-BA18tGco.js";import"./InboxFill-CV3pJzk9.js";import"./MenuGrid-CY-CpihY.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BtIL4-pG.js";import"./Trash-YA0mygsZ.js";import"./useLayout-Bgrn8336.js";import"./useLocale-6RmjaUqZ.js";import"./useAccountMenu-O9W1mag3.js";import"./header-Sl1oj08R.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CuhBaYcN.js";import"./Banner-Db1gRFD-.js";import"./GlobalHeader-C9vBsP0x.js";import"./useIsDesktop-ClFmcpth.js";import"./GlobalAccountButton-wEyxwdUc.js";import"./ChevronDown-y5t2TNH2.js";import"./Enter-C_HHSuUn.js";import"./GlobalMenuButton-Bf81O9iC.js";import"./MenuHamburger-5i5jT7Mb.js";import"./ChevronUp-CcrHqtW6.js";import"./AccountSelector-CUefH3va.js";import"./Switch-BPi0Tt-y.js";import"./AccountMenu-BRpxa_gO.js";import"./GlobalMenu-BcMHIVXZ.js";import"./ArrowUndo-CY16ifDv.js";import"./Globe-XElHabot.js";import"./BreadcrumbsLink-J5lk5-3z.js";import"./ArrowRight-BPk6hCSQ.js";import"./Footer-Z2XHXSO9.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
