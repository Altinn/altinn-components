import{aa as u,a7 as t,c as g}from"./iframe-DWR_BPge.js";import{u as l}from"./useActivityLogToolbar-Bvb3ZskF.js";import{M as y,b as v,a as x}from"./ModalBody-TFV96CG9.js";import{A as c}from"./ActivityLogItem-DoM4KrNF.js";import{T as f}from"./Toolbar-CVDPeYru.js";import{S as A}from"./Section-BCFzX2B1.js";import{u as j}from"./useProfile-DkcpWiFx.js";import{L as M}from"./Layout-DTTJ7Xp4.js";import{P as L}from"./PageBase-DT7QQcgC.js";import{H as C}from"./Heading-DZv3ITVf.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Flex-6ZJb0CGr.js";import"./TimelineSegment-CsKm_n46.js";import"./TimelineBase-DQHfHBCf.js";import"./TimelineIcon-Bb26xLyk.js";import"./CircleFill-D7DDeifI.js";import"./Byline-CHZhg7wc.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./Timeline-4Nzz2Vyg.js";import"./TimelineActivity-DnpEV5Vh.js";import"./useDropdownMenuController-CeHTZ23v.js";import"./Dropdown-DtgTj7aV.js";import"./SearchField-MQHHZ8_3.js";import"./MagnifyingGlass-G_PIqG58.js";import"./FieldBase-BMAVe4Iy.js";import"./Field-Ck35a6Qp.js";import"./Label-BsbeMro6.js";import"./Input-_0Vw9ldu.js";import"./useMenu-D6mVZHWX.js";import"./MenuListItem-fkd7gaum.js";import"./MenuListHeading-CnnWm4Yf.js";import"./MenuItem-hCzlas21.js";import"./ItemMedia-CNbHl28k.js";import"./Checkmark-DJ-994GJ.js";import"./ItemLabel-D6TsLy-F.js";import"./ItemControls-BuEVWR3X.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronRight-Byhvri5k.js";import"./index-Cf984nsL.js";import"./InformationSquare-DScDoZl7.js";import"./Plus-F3v00gKT.js";import"./ButtonGroup-BQ7wgDtN.js";import"./ButtonGroupDivider-D4r8VyyV.js";import"./ChevronUpDown-CEWdRwRE.js";import"./ToolbarMenu-Ba6pimK-.js";import"./ToolbarSearch-D6eldHRT.js";import"./useProfileLayout-CsjetLB9.js";import"./HeartFill-fRtY9Ved.js";import"./Bell-CNwaOF5z.js";import"./Bookmark-CIzhTlww.js";import"./ClockDashed-BuHgNuyH.js";import"./globalMenu-yo8b4zDp.js";import"./PersonCircle-DvPby5ZL.js";import"./Buildings2-Bsk7OURA.js";import"./InboxFill-BSccVKoO.js";import"./MenuGrid-DM9DMxk5.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-t07JtCRk.js";import"./Trash-D3VLDrQo.js";import"./useLayout-CQS2umG3.js";import"./useLocale-DJa2LSIP.js";import"./useAccountMenu-BUhzrhNb.js";import"./header-DAalrbo9.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-D0EPO6S4.js";import"./Banner-CCPjbEN-.js";import"./GlobalHeader-BYtDyOx9.js";import"./useIsDesktop-DdH_mZZT.js";import"./GlobalAccountButton-DUBOmq2b.js";import"./ChevronDown-DyMHpH4k.js";import"./Enter-BY3t1N2F.js";import"./GlobalMenuButton-BTKROSAX.js";import"./MenuHamburger-LlREICSw.js";import"./ChevronUp-B_nN6-rE.js";import"./AccountSelector-BBcM0hG1.js";import"./Switch-Cw7BxWBg.js";import"./AccountMenu-9n885YDY.js";import"./GlobalMenu-DyiBiW-8.js";import"./ArrowUndo-DNQ5VHUr.js";import"./Globe-C2nJg-Wj.js";import"./BreadcrumbsLink-DNn7cUlp.js";import"./ArrowRight-BDGEOzRy.js";import"./Footer-zRZEA-p5.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
