var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-HroKCH1i.js";import{u as c}from"./useActivityLogToolbar-B4T1RuZ2.js";import{M as v,b as x,a as f}from"./ModalBody-BQv1Fp6f.js";import{A as d}from"./ActivityLogItem-BN8vWc99.js";import{T as A}from"./Toolbar-q2RlUkvL.js";import{S as M}from"./Section-C0qOnBgx.js";import{u as L}from"./useProfile-EYy57Jhl.js";import{L as C}from"./Layout-BJWTle-B.js";import{P as B}from"./PageBase-D_1IJFb-.js";import{H as k}from"./Heading-ButwX4Fz.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./Flex-CL3BtjUZ.js";import"./TimelineSegment-DX8lQFq8.js";import"./TimelineBase-s2AhrGnH.js";import"./TimelineIcon-dAmS0v-M.js";import"./CircleFill-C5zqkfRE.js";import"./Byline-DwpDZTWm.js";import"./Typography-mUXdli5h.js";import"./useHighlightedText-BR2lgM5a.js";import"./Timeline-QGX6pHV_.js";import"./TimelineActivity-92MaXlwi.js";import"./useDropdownMenuController-Ba1nZRew.js";import"./Dropdown-CxvfuUHz.js";import"./SearchField-DdJVtzp5.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./ItemLabel-BExOJJ8K.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronRight-CnU_-vpz.js";import"./FieldBase-Dy7F34xJ.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./useMenu-DLxClmSr.js";import"./InformationSquare-uPdk22J8.js";import"./Plus-CnaATfP4.js";import"./ButtonGroup-Ds7x4PTq.js";import"./ButtonGroupDivider-BvjKoALv.js";import"./ChevronUpDown-CVsm6Wf1.js";import"./ToolbarMenu-BBQDHJW0.js";import"./ToolbarSearch-T6sZw5mR.js";import"./useProfileLayout-CFNYynY-.js";import"./HeartFill-CZHOmC4o.js";import"./Bell-BbNhDS7V.js";import"./Bookmark-DaEaxFpU.js";import"./ClockDashed-CJIP8yr8.js";import"./localeSwitcher-PZoiL7mz.js";import"./InboxFill-Dwv2ZDno.js";import"./PersonGroup-WrhwV8_x.js";import"./MenuGrid-DMFQx4_O.js";import"./Buildings2-Isc-I77e.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CzrN7IRQ.js";import"./Trash-CnguooS_.js";import"./useLayout-C8WgeLqn.js";import"./useLocale-X1Z3kdXY.js";import"./useAccountMenu-DLFye4nI.js";import"./header-BMddiS4F.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BsMHl5Dl.js";import"./CookieBanner-D5zydMJa.js";import"./Link-bcRJX1ul.js";import"./Banner-BECRe8uM.js";import"./GlobalHeader-Bdu0hHXo.js";import"./useIsDesktop-BTCUyq0Y.js";import"./GlobalAccountButton-Ci9Ajpvf.js";import"./ChevronDown-DmtpYDji.js";import"./Enter-BTzvw947.js";import"./GlobalMenuButton-C2xvSLNT.js";import"./MenuHamburger-Ca2SrZOe.js";import"./ChevronUp-CmHElL6S.js";import"./AccountSelector-DFjKkW66.js";import"./Switch-CjSSR8lu.js";import"./AccountMenu-Dghf-kj5.js";import"./GlobalMenu-B2C0Dikk.js";import"./Checkmark-rGl1e__H.js";import"./ArrowUndo-D_aPg2Cn.js";import"./Globe-BdekqIrA.js";import"./BreadcrumbsLink-BWF5RF-c.js";import"./ArrowRight-BJR7CRKc.js";import"./Footer-CWkOOgTl.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
