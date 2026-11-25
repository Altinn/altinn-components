var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CZm9Z2L_.js";import{u as c}from"./useActivityLogToolbar-CcefoNxd.js";import{M as v,b as x,a as f}from"./ModalBody-B6uDomnX.js";import{A as d}from"./ActivityLogItem-C7MVkBFS.js";import{T as A}from"./Toolbar-BUJIP-l4.js";import{S as M}from"./Section-z-IVKGiV.js";import{u as L}from"./useProfile-N64M1tZE.js";import{L as C}from"./Layout-CvCO9vht.js";import{P as B}from"./PageBase-CjMlIxmj.js";import{H as k}from"./Heading-CGvkj5VV.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Flex-piEowcmm.js";import"./TimelineSegment-CQu3XiEf.js";import"./TimelineBase-BmVDuuys.js";import"./TimelineIcon-tjuK7OlG.js";import"./CircleFill-q9wRmH0_.js";import"./Byline-BnpbJ8kJ.js";import"./Typography-99BUGcV3.js";import"./useHighlightedText-0BBntNc4.js";import"./Timeline-CVSym5C2.js";import"./TimelineActivity-DA1Q2n4T.js";import"./useDropdownMenuController-B7YFssqT.js";import"./Dropdown-CjN8UIhd.js";import"./SearchField-Cj8KK4lS.js";import"./MagnifyingGlass-DwPErScE.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./ItemLabel-B3mLAUUV.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";import"./FieldBase-BiQdP4ez.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./Input-BcwXpX3S.js";import"./useMenu-czaSJY_k.js";import"./InformationSquare-C62nR7w8.js";import"./Plus-B_1tuTHV.js";import"./ButtonGroup-7aJoGw6J.js";import"./ButtonGroupDivider-DVzJfOu7.js";import"./ChevronUpDown-BaBnT4FQ.js";import"./ToolbarMenu-CwvAUbaN.js";import"./ToolbarSearch-DqvVItjt.js";import"./useProfileLayout-Dj51G8WT.js";import"./HeartFill-DoCB_GBg.js";import"./Bell-DUB8E5rY.js";import"./Bookmark-DKHIVL-x.js";import"./ClockDashed-Dc2AKOfu.js";import"./localeSwitcher-CHBrcsab.js";import"./InboxFill-BUC9Wdwi.js";import"./PersonGroup-B8m6JoNP.js";import"./MenuGrid-lFBl4Ujw.js";import"./Buildings2-BTINRXJL.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BdlwK_O4.js";import"./Trash-D-r-J8J3.js";import"./useLayout-DYUXqeS5.js";import"./useLocale-lD8VxMFm.js";import"./useAccountMenu-DC0KMFHI.js";import"./header-uFVA6_mv.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Ccg6Z0HW.js";import"./CookieBanner-CJtaCpSr.js";import"./Link-C11OOuTG.js";import"./Banner-DSEj4-yB.js";import"./GlobalHeader-BfW7ctuA.js";import"./useIsDesktop-IAQovNa1.js";import"./GlobalAccountButton-B5kGcy7l.js";import"./ChevronDown-Bb4C_BOJ.js";import"./Enter-Bs0dFK5F.js";import"./GlobalMenuButton-PWA8yxnN.js";import"./MenuHamburger-DLVH7hi6.js";import"./ChevronUp-CIHpYQBC.js";import"./AccountSelector-KuPoNuS1.js";import"./Switch-Cf-4wIba.js";import"./AccountMenu-Xa7DSnYy.js";import"./GlobalMenu-KE6BDCkE.js";import"./Checkmark-CAMmZDSe.js";import"./ArrowUndo-Hp57fThJ.js";import"./Globe-CpZCrs52.js";import"./BreadcrumbsLink-BAkwvg6x.js";import"./ArrowRight-Bp4cspyp.js";import"./Footer-D97rfyOA.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,ut as __namedExportsOrder,dt as default};
