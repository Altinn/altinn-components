import{aa as u,a7 as t,c as g}from"./iframe-DxDA2A5n.js";import{u as l}from"./useActivityLogToolbar-DPzlVqzz.js";import{M as y,b as v,a as x}from"./ModalBody-D3jXQH23.js";import{A as c}from"./ActivityLogItem-Ba9C4XMT.js";import{T as f}from"./Toolbar-D6hwWtls.js";import{S as A}from"./Section-BxDgugwi.js";import{u as j}from"./useProfile-D9FXqPcZ.js";import{L as M}from"./Layout-BAI3eunZ.js";import{P as L}from"./PageBase-D9YJoHv6.js";import{H as C}from"./Heading-CDQRp2wK.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CZW-u89b.js";import"./AvatarGroup-nVAkNLkO.js";import"./Flex-CfINokNW.js";import"./TimelineSegment-DRZH3wpM.js";import"./TimelineBase-VTeOHFJe.js";import"./TimelineIcon-Cyznpg5v.js";import"./CircleFill-Di2MDHRp.js";import"./Byline-CkX8RVoL.js";import"./Typography-BpmyNFuo.js";import"./useHighlightedText-CKLIlaha.js";import"./Timeline-BQ_BJj8f.js";import"./TimelineActivity-DZF0F_RO.js";import"./useDropdownMenuController-CF0cOpjK.js";import"./Dropdown-BtLUP2GJ.js";import"./SearchField-m29TWzvo.js";import"./MagnifyingGlass-CEr-rPcN.js";import"./FieldBase-D6edMMqi.js";import"./Field-DCiIS6vX.js";import"./Label-Du-ZQ2TI.js";import"./Input-DR3-2m3e.js";import"./useMenu-CesabFz-.js";import"./MenuListItem-CLXsOloJ.js";import"./MenuListHeading-JM3VtJKJ.js";import"./MenuItem-DvVfNxyY.js";import"./ItemMedia-CnqN7ZMq.js";import"./Checkmark-NOoe9XBa.js";import"./ItemLabel-pZuDHhkH.js";import"./ItemControls-BB5vmDik.js";import"./Badge-DAAwIuMb.js";import"./Tooltip-ClLj-W4n.js";import"./ChevronRight-B7TpiReR.js";import"./index-BrQU956K.js";import"./InformationSquare-D_k5oT3G.js";import"./Plus-BRpGG8-t.js";import"./ButtonGroup-BwP7xmaH.js";import"./ButtonGroupDivider-HP7rml0w.js";import"./ChevronUpDown-stIG4MLK.js";import"./ToolbarMenu-Dx4QRTRT.js";import"./ToolbarSearch-CQHsR4lb.js";import"./useProfileLayout-DNLpQhja.js";import"./HeartFill-D6SH56Jk.js";import"./Bell-Bl_Cp7ct.js";import"./Bookmark-DPqwRFOB.js";import"./ClockDashed-B7pSLbPh.js";import"./globalMenu-DA45JJBH.js";import"./PersonCircle-Cl8qDIya.js";import"./Buildings2-BHAYTXA3.js";import"./InboxFill-DcUbEHeg.js";import"./MenuGrid-BnnvUGyZ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BP8GRpZJ.js";import"./Trash-Cq15ZLAx.js";import"./useLayout-C1wJccUe.js";import"./useLocale-CjscI9ov.js";import"./useAccountMenu-CLz_Znrm.js";import"./header-DtzApzwV.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CR6gNYnp.js";import"./Banner-BoWc2ajf.js";import"./GlobalHeader-nX9Hnel7.js";import"./useIsDesktop-RJ_PrM3C.js";import"./GlobalAccountButton-BxZcOP3U.js";import"./ChevronDown-Cl8SGDa2.js";import"./Enter-BtGZyTuG.js";import"./GlobalMenuButton-BEhXHvT6.js";import"./MenuHamburger-SuiAu3Wg.js";import"./ChevronUp-ChUSKAgV.js";import"./AccountSelector-C-M1O6Hc.js";import"./Switch-yAEuxwZz.js";import"./AccountMenu-Rflthn1L.js";import"./GlobalMenu-DAsJ4E4k.js";import"./ArrowUndo-kdrF5Cj9.js";import"./Globe-Cj3PifZU.js";import"./BreadcrumbsLink-Dll_MhVD.js";import"./ArrowRight-BGnV3_uY.js";import"./Footer-xUhwf7dH.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
