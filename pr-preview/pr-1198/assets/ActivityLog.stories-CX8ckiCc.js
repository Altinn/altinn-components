import{j as o,r as u}from"./iframe-YdRL1NzV.js";import{u as l}from"./useActivityLogToolbar-CUR4dm4P.js";import{A as c}from"./ActivityLogItem-DLKjbjO9.js";import{S as A}from"./Section-Bmd_KobT.js";import{T as g}from"./Toolbar-BxpSoMXr.js";import{u as j}from"./useProfile-CEM6ImBH.js";import{L as M}from"./Layout-Iag71sqT.js";import{P as L}from"./PageBase-BzBPKY6S.js";import{H as B}from"./Heading-56B0sdRG.js";import{B as y}from"./Button-BwQOxknK.js";import{M as v,a as x,b as f}from"./ModalBody-CTEW1e2E.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-j_7VPY92.js";import"./TimelineBase-Bsls1Lbv.js";import"./Flex-8MCCOfGV.js";import"./index-SoIsie1y.js";import"./TimelineIcon-BMftLzEB.js";import"./XMark-1l7ZvP46.js";import"./useId-DxHKrSZ4.js";import"./Icon-B4-srULI.js";import"./Skeleton-C3i9Ug5T.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./CircleFill-o2AfQWVp.js";import"./Byline-CLkrgOLm.js";import"./Typography-CYgzLoEf.js";import"./useHighlightedText-DI-ykGTt.js";import"./Timeline-DKkSo4tv.js";import"./TimelineActivity-Dh5iPI8p.js";import"./useDropdownMenuController-CSEBkRU7.js";import"./Plus-BNGbhyZ6.js";import"./Dropdown-CFQlkMFa.js";import"./SearchField-Cp2PZLrm.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./FieldBase-KNsWphki.js";import"./Label-CoBwam8t.js";import"./tooltip-D0NJwlFT.js";import"./Input-Co3wY2OB.js";import"./MenuListItem-CLQ7WBGF.js";import"./MenuListHeading-DregQKpB.js";import"./MenuItem-DdZPav2y.js";import"./ItemMedia-BNRd-cb6.js";import"./Checkmark-Ple-kG_b.js";import"./ItemControls-CMhfwURs.js";import"./ChevronRight-DrXpgbb_.js";import"./Badge-BSGPq3Hw.js";import"./Tooltip-cmmFu2mD.js";import"./useMenu-Cp2blUti.js";import"./index-zl5T2Fem.js";import"./InformationSquare-C3wG0Qjz.js";import"./ChevronUpDown-DRTYtEui.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonGroupDivider-Ccm8qlnp.js";import"./ToolbarMenu-4mCcshj8.js";import"./ToolbarSearch-BOpnVKBp.js";import"./useProfileLayout-DiXdeyYL.js";import"./HeartFill-xZwyoFnY.js";import"./Bell-CeAGXi_W.js";import"./Bookmark-COWjnrxW.js";import"./ClockDashed-C354w78W.js";import"./globalMenu-Cqcpsk_z.js";import"./PersonCircle-BIq4InXd.js";import"./Buildings2-Bu8VfWPO.js";import"./InboxFill-Dhs0ejSb.js";import"./MenuGrid-TIfk-A40.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-C1GJOqq_.js";import"./Trash-Bas2iEP8.js";import"./useLayout-CGk_uRcX.js";import"./useLocale-fq-ByQjj.js";import"./useAccountMenu-zHaDwVov.js";import"./header-DiEwdwJQ.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-D0iiulSE.js";import"./Banner-tOIBFdrS.js";import"./GlobalHeader-PQkGriiL.js";import"./useIsDesktop-DNaKtoN_.js";import"./GlobalAccountButton-DVQpzDNl.js";import"./ChevronDown-Uy2Tl2KH.js";import"./Enter-BrhwR_zU.js";import"./GlobalMenuButton-C4kt-Hl6.js";import"./MenuHamburger-B0s_IErD.js";import"./ChevronUp-DpeVWcyB.js";import"./AccountSelector-CBZe8-wp.js";import"./AccountMenu-GRew5JA2.js";import"./Switch-D1PNyCrc.js";import"./GlobalMenu-qKqkr7qf.js";import"./ArrowUndo-DdxLKHJA.js";import"./Globe-Bkro2Ij1.js";import"./BreadcrumbsLink-D1bNirUt.js";import"./ArrowRight-BXATOlQ9.js";import"./Footer-D46-qINA.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const dt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,dt as __namedExportsOrder,ct as default};
