var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-C0_zUbkp.js";import{u as c}from"./useActivityLogToolbar-DVinMAmm.js";import{M as v,b as x,a as f}from"./ModalBody-CFE-4c3O.js";import{A as d}from"./ActivityLogItem-B8uZoPDW.js";import{T as A}from"./Toolbar-YAHp1rd8.js";import{S as M}from"./Section-De3iQrxY.js";import{u as L}from"./useProfile-EMwX5o-g.js";import{L as C}from"./Layout-DmBB5N-6.js";import{P as B}from"./PageBase-YUdGSqix.js";import{H as k}from"./Heading-DLwaSr_O.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./Flex-CfJLZ-_w.js";import"./TimelineSegment-DLOcRmHf.js";import"./TimelineBase-CpnSVXnI.js";import"./TimelineIcon-YEcu2kGi.js";import"./CircleFill-y20GU2X0.js";import"./Byline-Wy5O6x8B.js";import"./Typography-CXAuaEKv.js";import"./useHighlightedText-BFDvP_rA.js";import"./Timeline-CuT4Pj4n.js";import"./TimelineActivity-CWFd6U8X.js";import"./useDropdownMenuController-XzV301bD.js";import"./Dropdown-DC94zabz.js";import"./SearchField-DNtOxHfE.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./MenuListItem-CH7aCagC.js";import"./MenuListDivider-BiU_kXeA.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemMedia-Dqx0ptul.js";import"./ItemLabel-9fWKgY8j.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ChevronRight-C6nH0agV.js";import"./FieldBase-BHBKFAe2.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./useMenu-DkMnEsls.js";import"./InformationSquare-CG3sxIst.js";import"./Plus-D_VIpiu1.js";import"./ButtonGroup-Bj12kkXU.js";import"./ButtonGroupDivider-CfkOgorX.js";import"./ChevronUpDown-BOxYI2QB.js";import"./ToolbarMenu-CjNRZyG9.js";import"./ToolbarSearch-PMZG_9sd.js";import"./useProfileLayout-CZcgU6pm.js";import"./HeartFill-BNoN-VYK.js";import"./Bell-D_-BbDHJ.js";import"./Bookmark-hn-9YXF8.js";import"./ClockDashed-DQd1Aj8d.js";import"./localeSwitcher-DQ-czMYR.js";import"./InboxFill-aFAE7ktP.js";import"./PersonGroup-nhG0hY5y.js";import"./MenuGrid-D5USsJgg.js";import"./Buildings2-DwPA8eJN.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-C-7hLfu8.js";import"./Trash-1-5ygZCI.js";import"./useLayout-mKDj9IrR.js";import"./useLocale-C5LBRr1x.js";import"./useAccountMenu-az0_1zHh.js";import"./header-diTf3tgd.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Dm0Ae5xk.js";import"./CookieBanner-DbGDrJdt.js";import"./Link-CGeqcCdg.js";import"./Banner-DVkRGba_.js";import"./GlobalHeader-DHevhZzs.js";import"./useIsDesktop-KF_OKnzc.js";import"./GlobalAccountButton-EC8pNabB.js";import"./ChevronDown-C32tY52G.js";import"./Enter-BA5cepcd.js";import"./GlobalMenuButton--DFb6lqD.js";import"./MenuHamburger-I_0J1-VZ.js";import"./ChevronUp-Co9i1NxZ.js";import"./AccountSelector-DBxkMqVm.js";import"./Switch-BJBwrzYu.js";import"./AccountMenu-B7S2sMdl.js";import"./GlobalMenu-BrdGem6M.js";import"./Checkmark-r_LW2Dwq.js";import"./ArrowUndo-BzebLQMk.js";import"./Globe-CaMonKWF.js";import"./BreadcrumbsLink-B5sXTC7A.js";import"./ArrowRight-CxiqIIv6.js";import"./Footer-CP-UON3r.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
