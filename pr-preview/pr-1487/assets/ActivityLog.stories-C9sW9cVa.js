var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DwHkmT0f.js";import{u as c}from"./useActivityLogToolbar-C40MOkXZ.js";import{M as v,b as x,a as f}from"./ModalBody-DRCMelZn.js";import{A as d}from"./ActivityLogItem-D_90lFvt.js";import{T as A}from"./Toolbar-BF0fcXVK.js";import{S as M}from"./Section-BzvI0xQr.js";import{u as L}from"./useProfile-BFBF-Kz8.js";import{L as C}from"./Layout-BQsHSQbg.js";import{P as B}from"./PageBase-BdMUoj4R.js";import{H as k}from"./Heading-FTp623yO.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./Flex-DUzkq__j.js";import"./TimelineSegment-CjbJpxPE.js";import"./TimelineBase-AQ0dglAI.js";import"./TimelineIcon-CUJdkqgn.js";import"./CircleFill-IOBF3SBX.js";import"./Byline-Cj00QcSW.js";import"./Typography-BKrXxvhH.js";import"./useHighlightedText-DRj0X6ck.js";import"./Timeline-BWWMFqJk.js";import"./TimelineActivity-DutuTyZ9.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./ItemLabel-hjkm06Ot.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./FieldBase-CpcKIkx4.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";import"./Plus-Ridmc-ni.js";import"./ButtonGroup-DYVDsbWZ.js";import"./ButtonGroupDivider-nx6LDsuT.js";import"./ChevronUpDown-DfuKOSo-.js";import"./ToolbarMenu-BoysZjSy.js";import"./ToolbarSearch-CazkYMmT.js";import"./useProfileLayout-Bthb7t_E.js";import"./HeartFill-Dq4xiIhf.js";import"./Bell-CT4e3QFA.js";import"./Bookmark-D8UAaNDA.js";import"./ClockDashed-8pYFR5Pn.js";import"./globalMenu-C-LBw6U_.js";import"./PersonCircle-C4drci5H.js";import"./Buildings2-CFScrem9.js";import"./InboxFill-Cj7OiwCb.js";import"./MenuGrid-qtVH-PgJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DDASx2ii.js";import"./Trash-B4bAWeXV.js";import"./useLayout-BkQYZ5Su.js";import"./useLocale-DRENSImX.js";import"./useAccountMenu-DCIvS8dV.js";import"./header-DsGF-21g.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BHSNcdDG.js";import"./CookieBanner-BNxN1y6b.js";import"./Link-CBokgU09.js";import"./Banner-Bf1wdY8O.js";import"./GlobalHeader-Bg7Xr32E.js";import"./useIsDesktop-bDdggvni.js";import"./GlobalAccountButton-BCPzrpzR.js";import"./ChevronDown-DRHOaSZs.js";import"./Enter-DzGA_rgK.js";import"./GlobalMenuButton-siMtATqH.js";import"./MenuHamburger-Cqjxk-FQ.js";import"./ChevronUp-CXBen__p.js";import"./AccountSelector-fntBMO38.js";import"./Switch-BbEJ57Wz.js";import"./AccountMenu-COjSW_5W.js";import"./GlobalMenu-CxMd4U83.js";import"./Checkmark-DmU4T3LZ.js";import"./ArrowUndo-COZnsPlQ.js";import"./Globe-Bx9qVXn3.js";import"./BreadcrumbsLink-uezuQMUt.js";import"./ArrowRight-PJmGhzt9.js";import"./Footer-Bz1uqfW8.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
