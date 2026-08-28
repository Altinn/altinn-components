import{aa as u,a7 as t,c as g}from"./iframe-C9sF4CIH.js";import{u as l}from"./useActivityLogToolbar-BltpjyQM.js";import{M as y,b as v,a as x}from"./ModalBody-CtBEkc_A.js";import{A as c}from"./ActivityLogItem-CGW-ArQ9.js";import{T as f}from"./Toolbar-Df7j-zdi.js";import{S as A}from"./Section-Ca3vkTbM.js";import{u as j}from"./useProfile-11zMN1ZH.js";import{L as M}from"./Layout-DbTMO45R.js";import{P as L}from"./PageBase-Bt9ffUVk.js";import{H as C}from"./Heading-CN6nglwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Flex-DnMHh9vb.js";import"./TimelineSegment-BYzBNrdv.js";import"./TimelineBase-CzSIUWst.js";import"./TimelineIcon-C_zkD1KX.js";import"./CircleFill-DD-vrjPX.js";import"./Byline-DAi_lmyl.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./Timeline-DFtPHOcv.js";import"./TimelineActivity-CSpxXXBA.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./FieldBase-BZH1Lr7P.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./useMenu-BFGedA5y.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./ItemMedia-Ck6acBMI.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ChevronRight-BzqVHEpk.js";import"./InformationSquare-BmRwhtkQ.js";import"./Plus-t80sr0p5.js";import"./ButtonGroup-D3X_1KmS.js";import"./ButtonGroupDivider-DlF0tam_.js";import"./ChevronUpDown-DDkBapqN.js";import"./ToolbarMenu-PduLb2J0.js";import"./ToolbarSearch-ChwZbWMZ.js";import"./useProfileLayout-BdbD_5V8.js";import"./HeartFill-Cb3oVF8z.js";import"./Bell-BqVP7lkp.js";import"./Bookmark-D-apoPC5.js";import"./ClockDashed-CPjWxQp2.js";import"./globalMenu-BcCM97tn.js";import"./PersonCircle-CFiA3kT9.js";import"./Buildings2-BVBvVxW2.js";import"./InboxFill-Dzk6CpvO.js";import"./MenuGrid-Bw14f0ue.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C9EZoKY1.js";import"./Trash-DtuzqxyC.js";import"./useLayout-DOSw_16W.js";import"./useLocale-DGlUiOVp.js";import"./useAccountMenu-wzAJjP43.js";import"./header-CrTKR4uu.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-sR8eN8KA.js";import"./CookieBanner-DRbuFaIU.js";import"./Banner-F9jAQmTH.js";import"./GlobalHeader-9TD58EFb.js";import"./useIsDesktop-Bs_0tRsF.js";import"./GlobalAccountButton-DCNO2xux.js";import"./ChevronDown-DNNZgNQx.js";import"./Enter-DjTqwWlq.js";import"./GlobalMenuButton-DzKVMMYx.js";import"./MenuHamburger-DQqXp455.js";import"./ChevronUp-Bw8O-5uv.js";import"./AccountSelector-DPq9TyaQ.js";import"./Switch-DTc2sA6x.js";import"./AccountMenu-KMM-WYh2.js";import"./GlobalMenu-BZdo7Lgm.js";import"./ArrowUndo-BCB2Wpm6.js";import"./Globe-B-4iZdGi.js";import"./BreadcrumbsLink-B_5wbeSS.js";import"./ArrowRight-C_e3H3Ut.js";import"./Footer-D0TOqRi0.js";const ao={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:r}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:r})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:r,onClose:e,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:e}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:r})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const no=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,a as Default,n as ProfileActivityLog,no as __namedExportsOrder,ao as default};
