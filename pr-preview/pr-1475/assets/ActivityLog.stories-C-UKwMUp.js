var j=Object.defineProperty;var r=(o,e)=>j(o,"name",{value:e,configurable:!0});import{a9 as g,a6 as t,c as y}from"./iframe-Yc5vADWD.js";import{u as c}from"./useActivityLogToolbar-C7l34WFu.js";import{M as v,b as x,a as f}from"./ModalBody-DUEHfhkT.js";import{A as d}from"./ActivityLogItem-DpvBnTHO.js";import{T as A}from"./Toolbar-CPbzrGeB.js";import{S as M}from"./Section-CEOcJou8.js";import{u as L}from"./useProfile-Bm9cMLAn.js";import{L as C}from"./Layout-D0oQT3Dr.js";import{P as B}from"./PageBase-Cn4t58-Y.js";import{H as k}from"./Heading-DEfYMi8I.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-B1293ug9.js";import"./AvatarGroup-b9E5cL-B.js";import"./Flex-B3cYS6HF.js";import"./TimelineSegment-4Wf1Kgay.js";import"./TimelineBase-TsoIuj51.js";import"./TimelineIcon-CXofSnS2.js";import"./CircleFill-BzHgsHbw.js";import"./Byline-CRSkwqC3.js";import"./Typography-BbQNKF3N.js";import"./useHighlightedText-DPM1PtgE.js";import"./Timeline-tMxtNyev.js";import"./TimelineActivity-Bp5WqMiC.js";import"./useDropdownMenuController-CfW-t4Vt.js";import"./Dropdown-ClwEgS76.js";import"./SearchField-DuQI2WUG.js";import"./MagnifyingGlass-D24TEFQh.js";import"./MenuListItem-D_xInwm_.js";import"./MenuListDivider-CBT6dc8U.js";import"./MenuItem-Do_eZo-E.js";import"./CheckboxUncheckedIcon-BTRLnzsL.js";import"./RadioUncheckedIcon-B5Tym566.js";import"./ItemMedia-93ge468N.js";import"./ItemLabel-CEwOeVMD.js";import"./ItemControls-CBx0Fvi9.js";import"./Badge-B7caOYrZ.js";import"./Tooltip-ClWq0FMC.js";import"./ChevronRight-BvgS2wwu.js";import"./FieldBase-Dm91Yu7W.js";import"./Field-CKipP2ZI.js";import"./Label-Coc0T7Cr.js";import"./Input-XB5O9fra.js";import"./useMenu-CxtnSdnP.js";import"./InformationSquare-TRKWejmi.js";import"./Plus-BG9CstYb.js";import"./ButtonGroup-B5kerLtb.js";import"./ButtonGroupDivider-BsvtysKz.js";import"./ChevronUpDown-LFrhbZU_.js";import"./ToolbarMenu-D072efD4.js";import"./ToolbarSearch-CofC1Dg1.js";import"./useProfileLayout-Bj-6eCGQ.js";import"./HeartFill-DHNRDEOI.js";import"./Bell-Be0rtm2u.js";import"./Bookmark-nCgC_NEs.js";import"./ClockDashed-CfxZLWwP.js";import"./globalMenu-gbiJxtTP.js";import"./PersonCircle-DmjSZPTB.js";import"./Buildings2-DfxUKA-x.js";import"./InboxFill-G4XjwwCh.js";import"./MenuGrid-CDep6gRY.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-52BKtGhP.js";import"./Trash-DtaM_GNe.js";import"./useLayout-DX6kMpo8.js";import"./useLocale-BQDegRz8.js";import"./useAccountMenu-CefcaoFX.js";import"./header-BXZtHWs1.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-5s7iHcFe.js";import"./CookieBanner-Bv5jbEtk.js";import"./Link-NvhW_JA3.js";import"./Banner-BR7HfYZ0.js";import"./GlobalHeader-DtD7Bi_o.js";import"./useIsDesktop-BSuHAgib.js";import"./GlobalAccountButton-DOfFwmM4.js";import"./ChevronDown-DOVICByK.js";import"./Enter-33WYXkGQ.js";import"./GlobalMenuButton-DAKf8ey0.js";import"./MenuHamburger-BZO_lHH1.js";import"./ChevronUp-CHIwOCup.js";import"./AccountSelector-BqS9VXnN.js";import"./Switch-D1NN4jqs.js";import"./AccountMenu-CgK3-AZU.js";import"./GlobalMenu-B-GfbJrP.js";import"./Checkmark-Bfjel_6l.js";import"./ArrowUndo-C9sxw3hI.js";import"./Globe-BdpCoWNM.js";import"./BreadcrumbsLink-B7mvbHEj.js";import"./ArrowRight-CfnTjRjZ.js";import"./Footer-BFZED0r-.js";const co={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:o}=c();return t.jsx(d,{items:o})},"Default"),s=r(()=>{const{toolbar:o,items:e}=c();return t.jsxs(M,{spacing:6,children:[t.jsx(A,{...o}),t.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:o}=L({pageId:"activity-log"});return t.jsx(C,{...o,children:t.jsxs(B,{children:[t.jsx(k,{size:"xl",children:"Aktivitetslogg"}),t.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:o}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),t.jsxs(v,{open:e,onClose:i,variant:"content",children:[t.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),t.jsx(f,{children:t.jsx(d,{items:o})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:o,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),t.jsxs(v,{open:n,onClose:u,variant:"content",children:[t.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),t.jsxs(f,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(A,{...o})}),t.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),uo=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,uo as __namedExportsOrder,co as default};
