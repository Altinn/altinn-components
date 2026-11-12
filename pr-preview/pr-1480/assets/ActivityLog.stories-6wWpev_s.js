var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CqoHfDH7.js";import{u as c}from"./useActivityLogToolbar-BPm4z8ve.js";import{M as v,b as x,a as f}from"./ModalBody-CiSC6mzB.js";import{A as d}from"./ActivityLogItem-CGiYsw6r.js";import{T as A}from"./Toolbar-DqOfbzde.js";import{S as M}from"./Section-DzgRr51L.js";import{u as L}from"./useProfile-D0EQT2l6.js";import{L as C}from"./Layout-CSUzQI7d.js";import{P as B}from"./PageBase-DbvnRoLj.js";import{H as k}from"./Heading-CDVcG6kV.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./Flex-zJBPm08F.js";import"./TimelineSegment-Bep5eXzj.js";import"./TimelineBase-DswDY-hX.js";import"./TimelineIcon-Ch-sgoLX.js";import"./CircleFill-DEwzoAog.js";import"./Byline-DuB4QGtP.js";import"./Typography-rh9OwAWr.js";import"./useHighlightedText-CSyjuktp.js";import"./Timeline-B4QFaXPZ.js";import"./TimelineActivity-suCP5fzF.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./SearchField-D-gn40zc.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./ItemLabel-Bv-toCFX.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";import"./Plus-DQZnEDJR.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonGroupDivider-CW6_6-9r.js";import"./ChevronUpDown-CSOM-jEc.js";import"./ToolbarMenu-nPJI5_t4.js";import"./ToolbarSearch-Co1pCbtk.js";import"./useProfileLayout-D8WBau7t.js";import"./HeartFill-B5r3HVdm.js";import"./Bell-1EBapfKe.js";import"./Bookmark-BOLbbqTe.js";import"./ClockDashed-wmdL0CKS.js";import"./globalMenu-C7MS5dOU.js";import"./PersonCircle-JGJi10OX.js";import"./Buildings2-jiqwiY34.js";import"./InboxFill-CbXG-sfC.js";import"./MenuGrid-CTbcWMRg.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BpmgVQNb.js";import"./Trash-DDnja0xf.js";import"./useLayout-1O80DLaO.js";import"./useLocale-8rWX-jAY.js";import"./useAccountMenu-C9Px9FrJ.js";import"./header-BZI1U5Xj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Ds2RcVLC.js";import"./CookieBanner-CFMBRXMy.js";import"./Link-DR6nrsxT.js";import"./Banner-DQu6A5-G.js";import"./GlobalHeader-DWRMPzkc.js";import"./GlobalAccountButton-BvEMjebp.js";import"./ChevronDown-CPg5ddv-.js";import"./Enter-B9MAPnXr.js";import"./GlobalMenuButton-DiyANMBE.js";import"./MenuHamburger-DSLGNBpT.js";import"./ChevronUp-BraeWy4W.js";import"./AccountSelector-BvBz0nl7.js";import"./Switch-C1zqeT7L.js";import"./AccountMenu-Fh_lK1IK.js";import"./GlobalMenu-CxNL_K9P.js";import"./Checkmark-6oHZmwOe.js";import"./ArrowUndo-CAunjfEO.js";import"./Globe-C2Y4iZjS.js";import"./BreadcrumbsLink-UdHkGk6j.js";import"./ArrowRight-B2OtfF5b.js";import"./Footer-BIpaMByz.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
