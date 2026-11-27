var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DV7mfmQb.js";import{u as c}from"./useActivityLogToolbar-feFnQ8Vn.js";import{M as v,b as x,a as f}from"./ModalBody-33j9noUT.js";import{A as d}from"./ActivityLogItem-Dw3RJKLh.js";import{T as A}from"./Toolbar-C4kXD3ZP.js";import{S as M}from"./Section-BXLF8mP1.js";import{u as L}from"./useProfile-BRf3AUDS.js";import{L as C}from"./Layout-BK0w3PMD.js";import{P as B}from"./PageBase-Xt83nKDp.js";import{H as k}from"./Heading-qQ_NecB3.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DCtpkPNs.js";import"./AvatarGroup-DkZdjAob.js";import"./Flex-DFf5qQ3F.js";import"./TimelineSegment-wMpqSbFc.js";import"./TimelineBase-DupqI4i9.js";import"./TimelineIcon-B9-ZSSfr.js";import"./CircleFill-BtMi8wCB.js";import"./Byline-OaIm3aGM.js";import"./Typography-DQaNXpVK.js";import"./useHighlightedText-DBlSdXli.js";import"./Timeline-BmzGJzRa.js";import"./TimelineActivity-DfUKZJSZ.js";import"./useDropdownMenuController-D9bRT85Q.js";import"./Dropdown-B1DFc__X.js";import"./SearchField-DyUxixY-.js";import"./MagnifyingGlass-B1ufIXT-.js";import"./MenuListItem-BNAb4_WQ.js";import"./MenuListDivider-uDPIzbn6.js";import"./MenuItem-_arBrpFq.js";import"./CheckboxUncheckedIcon-W9wh7zhg.js";import"./RadioUncheckedIcon-DHe0o4Rd.js";import"./ItemMedia-CxtJxXCZ.js";import"./ItemLabel-DhOVpPar.js";import"./ItemControls-DXTFa1Wt.js";import"./Badge-DzF_wXJq.js";import"./Tooltip-Dnt3MX0-.js";import"./ChevronRight-y8OcgkDI.js";import"./FieldBase-BPbtcuhV.js";import"./Field-xCImHJHX.js";import"./Label-CBFOmf2H.js";import"./Input-C3PsoH0G.js";import"./useMenu-BFlkLZpJ.js";import"./InformationSquare-Z-eNQMTk.js";import"./Plus-sUzSSeT3.js";import"./ButtonGroup-D14KKgW3.js";import"./ButtonGroupDivider-DTJble5I.js";import"./ChevronUpDown-DwYyKbBn.js";import"./ToolbarMenu-pJ0wy_3D.js";import"./ToolbarSearch-DxZ7FheP.js";import"./useProfileLayout-BSkvo_5t.js";import"./HeartFill-DOapQs-H.js";import"./Bell-BATRPhhH.js";import"./Bookmark-DA6gE_Tg.js";import"./ClockDashed-wGGaML0N.js";import"./globalMenu-CpRGNqVy.js";import"./PersonCircle-_T27UUZ-.js";import"./Buildings2-CeZxpCtB.js";import"./InboxFill-BvLcyoSs.js";import"./MenuGrid-DRVrG73C.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-PXBTQ8NB.js";import"./Trash-C1yoK2W5.js";import"./useLayout-DdknUL0l.js";import"./useLocale-BFesZEMO.js";import"./useAccountMenu-BwLt8TWy.js";import"./header-DHMJJ7gv.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DWhpD2JE.js";import"./CookieBanner-DIELrxAP.js";import"./Link-td4tSMf0.js";import"./Banner-BYfqFn6r.js";import"./GlobalHeader-DXyqSPVs.js";import"./useIsDesktop-DCLIk5lP.js";import"./GlobalAccountButton-CxEaXp2V.js";import"./ChevronDown-M6oDtO0s.js";import"./Enter-v_RE-Mu9.js";import"./GlobalMenuButton-BQS4sS8d.js";import"./MenuHamburger-CxPazaXX.js";import"./ChevronUp-DkTvQyLF.js";import"./AccountSelector-BHau9V2C.js";import"./Switch-DNLwrdXr.js";import"./AccountMenu-DM2EBnSH.js";import"./GlobalMenu-Qbd1zlxn.js";import"./Checkmark-B-M1QuTd.js";import"./ArrowUndo-m6YZv1rE.js";import"./Globe-DaOEOAky.js";import"./BreadcrumbsLink-CBwmeyQz.js";import"./ArrowRight-C_osjboa.js";import"./Footer-BiqT7Jqb.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
