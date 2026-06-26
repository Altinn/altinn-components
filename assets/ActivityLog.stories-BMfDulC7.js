import{aa as u,a7 as t,c as g}from"./iframe-BlxKDeRn.js";import{u as l}from"./useActivityLogToolbar-69Qyhyji.js";import{M as y,b as v,a as x}from"./ModalBody-BIhvolNB.js";import{A as c}from"./ActivityLogItem-Dl9KBSiT.js";import{T as f}from"./Toolbar-20ioumdA.js";import{S as A}from"./Section-phQiwh1A.js";import{u as j}from"./useProfile-Bob91xKa.js";import{L as M}from"./Layout-B73xvpB6.js";import{P as L}from"./PageBase-Cmun-k1L.js";import{H as C}from"./Heading-PlHpJzKQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Flex-ETYKhAb5.js";import"./TimelineSegment-DvUhfELh.js";import"./TimelineBase-KuyrxKdH.js";import"./TimelineIcon-YyJgVflY.js";import"./CircleFill-BwANAgII.js";import"./Byline-czkz-Lsc.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./Timeline--S-FODU-.js";import"./TimelineActivity-ODqz6lrp.js";import"./useDropdownMenuController-_els-HSa.js";import"./Dropdown-CwQ5F4MG.js";import"./SearchField-CTOOlDoc.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./FieldBase-_XE-YVEJ.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./useMenu-BkS0Vn46.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./ItemMedia-DfJvZXBe.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ChevronRight-DNG7F-LS.js";import"./InformationSquare-D-Ph66nw.js";import"./Plus-D-AEmb15.js";import"./ButtonGroup-WgKm7hCp.js";import"./ButtonGroupDivider-BFRswpZA.js";import"./ChevronUpDown-Dd58bz3G.js";import"./ToolbarMenu-s_KCcZcj.js";import"./ToolbarSearch-CY6LsfTU.js";import"./useProfileLayout-DPs94DAa.js";import"./HeartFill-BTbB-gAd.js";import"./Bell-ByTLfBQm.js";import"./Bookmark-DUFswlK1.js";import"./ClockDashed-CAqZBcnZ.js";import"./globalMenu-BxKkjLdR.js";import"./PersonCircle-BtsQPujV.js";import"./Buildings2-Jl1T6NB-.js";import"./InboxFill-BUeC5avp.js";import"./MenuGrid-DiUPMqsB.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CMR8k7pg.js";import"./Trash-epouAA_y.js";import"./useLayout-DUiZwVlJ.js";import"./useLocale-265c0gCg.js";import"./useAccountMenu-BsK4pHGo.js";import"./header-DI7AbTrv.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-eav45shA.js";import"./Banner-BtnDPWVi.js";import"./GlobalHeader-C4HRPfH0.js";import"./useIsDesktop--Uj-L73j.js";import"./GlobalAccountButton-1OnJI3Rg.js";import"./ChevronDown-DW-ZLG_4.js";import"./Enter-B2Te9yrh.js";import"./GlobalMenuButton-q8sy_pc7.js";import"./MenuHamburger-BYEHlw1B.js";import"./ChevronUp-BgX0VOdQ.js";import"./AccountSelector-dVt603LR.js";import"./Switch-CR8TgQ3y.js";import"./AccountMenu-DDNzCUWV.js";import"./GlobalMenu-X9SaRmvB.js";import"./ArrowUndo-DQ842Ieg.js";import"./Globe-Bqpcj0j2.js";import"./BreadcrumbsLink-BKmKvpHc.js";import"./ArrowRight-D2xrV8w1.js";import"./Footer-DEuuu4V-.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
