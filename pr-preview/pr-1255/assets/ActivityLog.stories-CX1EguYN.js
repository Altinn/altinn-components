import{aa as u,a7 as t,c as g}from"./iframe-DH0sUlof.js";import{u as l}from"./useActivityLogToolbar-CHVP7vEy.js";import{M as y,b as v,a as x}from"./ModalBody-Bsp1GUDI.js";import{A as c}from"./ActivityLogItem-BIKJqsLa.js";import{T as f}from"./Toolbar-HeHqNSHM.js";import{S as A}from"./Section-DMcOoGW4.js";import{u as j}from"./useProfile-m7jWc6Nj.js";import{L as M}from"./Layout-BM-re6hZ.js";import{P as L}from"./PageBase-BN6jgZFy.js";import{H as C}from"./Heading-CPu50xm5.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Flex-D6bQl7-N.js";import"./TimelineSegment-DojPnFvp.js";import"./TimelineBase-DHnv0uww.js";import"./TimelineIcon-gp-YB2e1.js";import"./CircleFill-ChYMOQdE.js";import"./Byline-DXHjbIjw.js";import"./Typography-PtbhQdVx.js";import"./useHighlightedText-DycG_gS6.js";import"./Timeline-BFCfkwk-.js";import"./TimelineActivity-C_WLmnQX.js";import"./useDropdownMenuController-D_CHcGp2.js";import"./Dropdown-CKpYPgFT.js";import"./SearchField-CPfjDOA9.js";import"./MagnifyingGlass-C4sPwF1v.js";import"./FieldBase-DCz4GC6j.js";import"./Field-CxaznmxG.js";import"./Label-Cf0ApS2G.js";import"./Input-CNoKo11u.js";import"./useMenu-CPWn58Ca.js";import"./MenuListItem-DWDx0q1Y.js";import"./MenuListHeading-DWFD_r7c.js";import"./MenuItem-BT1jodiz.js";import"./ItemMedia-BGZXzift.js";import"./Checkmark-BQvK_vH6.js";import"./ItemLabel-BN4HDeMP.js";import"./ItemControls-BwbZayit.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./ChevronRight-CNDn15vN.js";import"./index-DEktyI50.js";import"./InformationSquare-DDlxGHn9.js";import"./Plus-CKgq15mC.js";import"./ButtonGroup-0Z_3vx9e.js";import"./ButtonGroupDivider-BBL2yGKa.js";import"./ChevronUpDown-B5XSeaUw.js";import"./ToolbarMenu-CcQedFVY.js";import"./ToolbarSearch-kEJOG0uE.js";import"./useProfileLayout-DJrffIMc.js";import"./HeartFill-Bj9iB8KO.js";import"./Bell-DQ1Q2f70.js";import"./Bookmark-B-wsUxiT.js";import"./ClockDashed-ajLram_e.js";import"./globalMenu-coflEEKj.js";import"./PersonCircle-_evWEHvy.js";import"./Buildings2-C60OJ9SJ.js";import"./InboxFill-BSys6kdy.js";import"./MenuGrid-wAguKT1p.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-VkO0gQpm.js";import"./Trash-Du_QY7Ml.js";import"./useLayout-CckZsHEj.js";import"./useLocale-BEOGTxD8.js";import"./useAccountMenu-DRZ9Zzfr.js";import"./header-DbFgHbZY.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DlahxJgc.js";import"./Banner-DtLSknn1.js";import"./GlobalHeader-u5_pIhrt.js";import"./useIsDesktop-DDeSw2nv.js";import"./GlobalAccountButton-iTgezSX2.js";import"./ChevronDown-CrGho0Pn.js";import"./Enter-DbOHbWti.js";import"./GlobalMenuButton-CwjgZ_FE.js";import"./MenuHamburger-Cn3ng886.js";import"./ChevronUp-B3owS6FK.js";import"./AccountSelector-CnqfBXqj.js";import"./Switch-DLlmDxn9.js";import"./AccountMenu-D3rEKCa-.js";import"./GlobalMenu-DMdLNjq8.js";import"./ArrowUndo-CQw5ozEs.js";import"./Globe-CBTwn8IH.js";import"./BreadcrumbsLink-DLp81Nza.js";import"./ArrowRight-CJRbVSUn.js";import"./Footer-BNPP5cgL.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
