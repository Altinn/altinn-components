var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CmRPDbOf.js";import{u as c}from"./useActivityLogToolbar-DzMAkzPy.js";import{M as v,b as x,a as f}from"./ModalBody-MM25gKZr.js";import{A as d}from"./ActivityLogItem-DLkLcVWR.js";import{T as A}from"./Toolbar-Cxb-jRXx.js";import{S as M}from"./Section-BoLEShm2.js";import{u as L}from"./useProfile-CkA19UgU.js";import{L as C}from"./Layout-iwrXuX5I.js";import{P as B}from"./PageBase-Cf8U6Wq_.js";import{H as k}from"./Heading-Bga8Ehqe.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./Flex-CHIj3aXb.js";import"./TimelineSegment-D8FXAjXw.js";import"./TimelineBase-CGMfshRK.js";import"./TimelineIcon-Ct_2ofxz.js";import"./CircleFill-Dnwm-NJ9.js";import"./Byline-Br9s5xmQ.js";import"./Typography-3Ni-pGxm.js";import"./useHighlightedText-DjvNujh0.js";import"./Timeline-MO1q2eIE.js";import"./TimelineActivity-DhPY30bm.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MagnifyingGlass-CwhdRafK.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./ItemLabel-S9If7Ew0.js";import"./ItemControls-CjzJ0cx0.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./ChevronRight-DUgz5ktQ.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";import"./useMenu-Dthlol8g.js";import"./InformationSquare-CWm2kkCA.js";import"./Plus-BIlgSaK7.js";import"./ButtonGroup-Cg6ykbdg.js";import"./ButtonGroupDivider-hDRnIfTz.js";import"./ChevronUpDown-BbTMADuY.js";import"./ToolbarMenu-CQrpu7F_.js";import"./ToolbarSearch-CQTFtziC.js";import"./useProfileLayout-DhPTJvod.js";import"./HeartFill-BrWfX2ow.js";import"./Bell-CcxSUtBz.js";import"./Bookmark-jlJzyw-m.js";import"./ClockDashed-DoZCcm3C.js";import"./localeSwitcher-C3Jstk8I.js";import"./InboxFill-C-y88DAH.js";import"./PersonGroup-DT6ZT_45.js";import"./MenuGrid-CHOSeooe.js";import"./Buildings2-N07gQ7vJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Czt8xJzv.js";import"./Trash-BLtAnUoG.js";import"./useLayout-C26j3cNh.js";import"./useLocale-BFWthnKR.js";import"./useAccountMenu-BYpZZcV3.js";import"./header-FmwbDT6K.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-B2JVR-Og.js";import"./CookieBanner-DN9oxIAl.js";import"./Link-Di1sS5P3.js";import"./Banner-CHiyD-pJ.js";import"./GlobalHeader-C9_nPyrF.js";import"./useIsDesktop-BnBN7-h6.js";import"./GlobalAccountButton-CkZ1qyuA.js";import"./ChevronDown-DDaXyD9m.js";import"./Enter-D9jMCMkR.js";import"./GlobalMenuButton-BWiZuY5w.js";import"./MenuHamburger-kBHhFvVJ.js";import"./ChevronUp-Du7zJIj-.js";import"./AccountSelector-Bh3LYNJI.js";import"./Switch-ClafsxpZ.js";import"./AccountMenu-CMinoV1y.js";import"./GlobalMenu-CIdPDdza.js";import"./Checkmark-BU8vtpH6.js";import"./ArrowUndo-L8RPPon2.js";import"./Globe-uYgrsE93.js";import"./BreadcrumbsLink-DVQNZRfZ.js";import"./ArrowRight-CLXTujYb.js";import"./Footer-atzPI7p2.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
