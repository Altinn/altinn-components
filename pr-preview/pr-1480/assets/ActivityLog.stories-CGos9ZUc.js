var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{aa as g,a7 as o,c as y}from"./iframe-r-PzxnFG.js";import{u as c}from"./useActivityLogToolbar-DL7MwMMa.js";import{M as v,b as x,a as f}from"./ModalBody-B-L7EXsI.js";import{A as d}from"./ActivityLogItem-CL4Iyp8O.js";import{T as A}from"./Toolbar-Be6Tch-c.js";import{S as M}from"./Section-DH0F_yu4.js";import{u as L}from"./useProfile-BkaEWXJg.js";import{L as C}from"./Layout-DiBl5Ss_.js";import{P as B}from"./PageBase-DxNDcwho.js";import{H as h}from"./Heading-qFKPv3xm.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./Flex-DRLqoZbu.js";import"./TimelineSegment-C8gaYKM4.js";import"./TimelineBase-DDKZ-Qch.js";import"./TimelineIcon-CXyaY8ON.js";import"./CircleFill-CD59uj3d.js";import"./Byline-Cm30yNti.js";import"./Typography-DZA02yZr.js";import"./useHighlightedText-D1CHWYs6.js";import"./Timeline-ydAQpPsc.js";import"./TimelineActivity-Bwp9SpSK.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./ItemLabel-DE7oETkr.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";import"./Plus-C3gc2Iai.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonGroupDivider-B1E5WcaK.js";import"./ChevronUpDown-HPDH3mEH.js";import"./ToolbarMenu-BxyYmvJJ.js";import"./ToolbarSearch-JhKmYWK0.js";import"./useProfileLayout-BgpC_Esd.js";import"./HeartFill-ClnFDlAG.js";import"./Bell-q-HOnHBl.js";import"./Bookmark-D8tcOQIL.js";import"./ClockDashed-wZFtld5l.js";import"./globalMenu-DZrKoONM.js";import"./PersonCircle-DirIdGej.js";import"./Buildings2-BvvammpD.js";import"./InboxFill-DXiS2hpk.js";import"./MenuGrid-CZNJcB7P.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CAWbyIsL.js";import"./Trash-0c2zCAv3.js";import"./useLayout-b8sxLxt5.js";import"./useLocale-ONEEo_UB.js";import"./useAccountMenu-BkEejnLn.js";import"./header-mzwr1EEx.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CxAmd6fp.js";import"./CookieBanner-FV1KTXzV.js";import"./Link-Cir18kU1.js";import"./Banner-BLHl1LXV.js";import"./GlobalHeader-B2yCgO-g.js";import"./GlobalAccountButton-DLB0nold.js";import"./ChevronDown-BD5i-hxE.js";import"./Enter-C5EQ7SBG.js";import"./GlobalMenuButton-CtToZxYI.js";import"./MenuHamburger-BBbrRald.js";import"./ChevronUp-B0s8dawY.js";import"./AccountSelector-7QzxMRVr.js";import"./Switch-BcyiU8sz.js";import"./AccountMenu-4Pvbq0L4.js";import"./GlobalMenu-IlPBKVIs.js";import"./Checkmark-D0ulgpJN.js";import"./ArrowUndo-BHFoGQzk.js";import"./Globe-cKjoRVPR.js";import"./BreadcrumbsLink-C2WcbWT1.js";import"./ArrowRight-iKU0eq0k.js";import"./Footer-DHBjbd5P.js";const ut={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(h,{size:"xl",as:"h1",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),gt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
        <Heading size="xl" as="h1">
          Aktivitetslogg
        </Heading>
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,gt as __namedExportsOrder,ut as default};
