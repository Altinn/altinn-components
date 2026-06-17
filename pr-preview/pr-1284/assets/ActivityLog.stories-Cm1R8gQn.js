import{aa as u,a7 as t,c as g}from"./iframe-C7E9hFuS.js";import{u as l}from"./useActivityLogToolbar-BLgEXyJS.js";import{M as y,b as v,a as x}from"./ModalBody-DhpjA3GN.js";import{A as c}from"./ActivityLogItem-CFadob5G.js";import{T as f}from"./Toolbar-DyUKive3.js";import{S as A}from"./Section-0LkdBczO.js";import{u as j}from"./useProfile-CcmOwPuQ.js";import{L as M}from"./Layout-QZ03RjEt.js";import{P as L}from"./PageBase-Cve1GjUJ.js";import{H as C}from"./Heading-BjzdT1Qv.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Flex-DW6TlYd6.js";import"./TimelineSegment-BDreje3U.js";import"./TimelineBase-B3O-YF0y.js";import"./TimelineIcon-BLlSelwv.js";import"./CircleFill-P35vQ-Pd.js";import"./Byline-DA9sap8o.js";import"./Typography-BHaJGqRT.js";import"./useHighlightedText-BVZd64N7.js";import"./Timeline-Bh7JtxoG.js";import"./TimelineActivity-Dt2SvAl9.js";import"./useDropdownMenuController-DFRzn_Ll.js";import"./Dropdown-CODOojNF.js";import"./SearchField-B7eNYfaD.js";import"./MagnifyingGlass-K55ud6sH.js";import"./FieldBase-C9YC6jMS.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";import"./useMenu-D_e4EtIh.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuListDivider-cJmmi06P.js";import"./MenuListHeading-anY2tX0X.js";import"./MenuItem-CJIUM84a.js";import"./ItemMedia-CHApnQjH.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./ItemControls-BSxWin7C.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./ChevronRight-BkycUKsy.js";import"./InformationSquare-CD5xLXKd.js";import"./Plus-oNsn4BMp.js";import"./ButtonGroup-CAvVorAa.js";import"./ButtonGroupDivider-DZziluJn.js";import"./ChevronUpDown-BhvVfdq3.js";import"./ToolbarMenu-DHCyWtoQ.js";import"./ToolbarSearch-DvisyZkQ.js";import"./useProfileLayout-EPS_x9Jq.js";import"./HeartFill-1dHApWzA.js";import"./Bell-B5QcSmiH.js";import"./Bookmark-D-XM31IP.js";import"./ClockDashed-DT_STtCz.js";import"./globalMenu-386pF3Zl.js";import"./PersonCircle-B3AxujrT.js";import"./Buildings2-D0BvPqJ7.js";import"./InboxFill-CiSJJIrv.js";import"./MenuGrid-EULCLpq3.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-B-Yuun_M.js";import"./Trash-DXVTUHc5.js";import"./useLayout-NmO1gzHD.js";import"./useLocale-D-PU8xpa.js";import"./useAccountMenu-D3rOqgtu.js";import"./header-B74yEzBj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-9pzYjtrE.js";import"./Banner-CcfMajdr.js";import"./GlobalHeader-BuKswla7.js";import"./useIsDesktop-BDcFo9PR.js";import"./GlobalAccountButton-BiAnCgIT.js";import"./ChevronDown-S6psbACT.js";import"./Enter-sEU0XBf0.js";import"./GlobalMenuButton-CBNrdNQt.js";import"./MenuHamburger-abx8EBUu.js";import"./ChevronUp-COfk5MU7.js";import"./AccountSelector-LTlsWdJD.js";import"./Switch-DgHdWaYE.js";import"./AccountMenu-B5v9nrPH.js";import"./GlobalMenu-D42m9FNT.js";import"./ArrowUndo-DzBP3Rj-.js";import"./Globe-DOmdNZca.js";import"./BreadcrumbsLink-SjSjctN6.js";import"./ArrowRight-DuVCIaDO.js";import"./Footer-ChHv5HPB.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
