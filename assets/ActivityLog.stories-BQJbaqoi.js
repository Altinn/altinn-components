import{aa as u,a7 as t,c as g}from"./iframe-BZiA3Dc9.js";import{u as l}from"./useActivityLogToolbar-eflHwtg_.js";import{M as y,b as v,a as x}from"./ModalBody-CEOKzm3S.js";import{A as c}from"./ActivityLogItem-zDgJyvjo.js";import{T as f}from"./Toolbar-BZOC5y4s.js";import{S as A}from"./Section-B5v4sxTq.js";import{u as j}from"./useProfile-B27qU0qv.js";import{L as M}from"./Layout-Dh_gh_Ce.js";import{P as L}from"./PageBase-ChimEAJA.js";import{H as C}from"./Heading-DduTyBY0.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Flex-DlKNIBbG.js";import"./TimelineSegment-C7ZEle9v.js";import"./TimelineBase-CY7B4Xoc.js";import"./TimelineIcon-5CCoKVta.js";import"./CircleFill-BTqGAwUi.js";import"./Byline-Cqm72Kmq.js";import"./Typography-HNFVi96c.js";import"./useHighlightedText-gnIxErVs.js";import"./Timeline-Daydb7Iq.js";import"./TimelineActivity-BSDGaHxw.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./useMenu-S-ctNtGP.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuListDivider-BVEnRF-b.js";import"./MenuListHeading-BOV_GCdf.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronRight-CRJJFvsY.js";import"./InformationSquare-mZWip9WA.js";import"./Plus-DuB6ksxl.js";import"./ButtonGroup-CQ4JbS4J.js";import"./ButtonGroupDivider-CyCQJaDt.js";import"./ChevronUpDown-DVPIS2tN.js";import"./ToolbarMenu-DvNQ0jha.js";import"./ToolbarSearch-D5I768Wa.js";import"./useProfileLayout-B02MUQLE.js";import"./HeartFill-BEj4Jija.js";import"./Bell-Ca1iHeTq.js";import"./Bookmark-DaeAt-nZ.js";import"./ClockDashed-IS1yr7JH.js";import"./globalMenu-6JyMBhMd.js";import"./PersonCircle-C_-LNb0c.js";import"./Buildings2-BRuUUWGZ.js";import"./InboxFill-BCgBfUTn.js";import"./MenuGrid-DhGk5t1z.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BSbbJQpu.js";import"./Trash-DL-j6TXo.js";import"./useLayout--0xL-XzO.js";import"./useLocale-DGWmGDod.js";import"./useAccountMenu-BtgIASri.js";import"./header-597LU-In.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DWgdd-GE.js";import"./Banner-BtKZ61By.js";import"./GlobalHeader-Cu8SF1ir.js";import"./useIsDesktop-CSl4XLc7.js";import"./GlobalAccountButton-UsxKQVTG.js";import"./ChevronDown-CNxF5VIu.js";import"./Enter-D45C4ZyH.js";import"./GlobalMenuButton-Du8ecgvS.js";import"./MenuHamburger-CH0SCgCh.js";import"./ChevronUp-BGK37JKw.js";import"./AccountSelector-B3eiELKb.js";import"./Switch-BcTJiZEX.js";import"./AccountMenu-C_iFW4C2.js";import"./GlobalMenu-DkcK29pl.js";import"./ArrowUndo-DmjPkDTA.js";import"./Globe-D2JmmsD8.js";import"./BreadcrumbsLink-BfnL9fjg.js";import"./ArrowRight-W2FxJoMq.js";import"./Footer-BELR6Sl2.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
