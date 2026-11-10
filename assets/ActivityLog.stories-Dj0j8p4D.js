var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CfESZwGq.js";import{u as c}from"./useActivityLogToolbar-DBK7mIgH.js";import{M as v,b as x,a as f}from"./ModalBody-BLp5zyl4.js";import{A as d}from"./ActivityLogItem-DSjVAoBX.js";import{T as A}from"./Toolbar-ClShfmlT.js";import{S as M}from"./Section-CXHovEsj.js";import{u as L}from"./useProfile-CVTLNOMW.js";import{L as C}from"./Layout-DUuE-Ou8.js";import{P as B}from"./PageBase-BFYd2uVP.js";import{H as k}from"./Heading-BMVjBYv7.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./Flex-DCvAlmz5.js";import"./TimelineSegment-PHRuIV8n.js";import"./TimelineBase-BhaQGYjH.js";import"./TimelineIcon-CAbnKYiu.js";import"./CircleFill-pQ52RYsc.js";import"./Byline-D7K69XJQ.js";import"./Typography-DtLS48Hu.js";import"./useHighlightedText-DZWCzlXV.js";import"./Timeline-BSm0DK0i.js";import"./TimelineActivity-9zLjcOUA.js";import"./useDropdownMenuController-COgknKdL.js";import"./Dropdown-BfcDJKeS.js";import"./SearchField-Dzjcb6Jc.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemMedia-av47GhhR.js";import"./ItemLabel-Bf911ckJ.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ChevronRight-B74pzmXz.js";import"./FieldBase-B5R0NBwO.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./useMenu-DCL6y2xK.js";import"./InformationSquare-BWZxY-Ir.js";import"./Plus-C15azGMz.js";import"./ButtonGroup-B_R5r7Ky.js";import"./ButtonGroupDivider-Li1M8dtA.js";import"./ChevronUpDown-D6O2HcLJ.js";import"./ToolbarMenu-Cd0RVmSQ.js";import"./ToolbarSearch-KAv3ICTy.js";import"./useProfileLayout-CVINHnYU.js";import"./HeartFill-Bj_kLhYI.js";import"./Bell-BiXYdmvK.js";import"./Bookmark-B_ThKo_j.js";import"./ClockDashed-CTNpkhjM.js";import"./globalMenu-tXjhSQdN.js";import"./PersonCircle-BTGNYzp8.js";import"./Buildings2-ClRD1E4M.js";import"./InboxFill-CxH-FZoP.js";import"./MenuGrid-CGy7PnqW.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-g44wWaqP.js";import"./Trash-B8iqDuUh.js";import"./useLayout-BbVkyVzJ.js";import"./useLocale-C3Mk-E9B.js";import"./useAccountMenu-CtVcBggF.js";import"./header-Od3SKb1D.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BfYwNiOX.js";import"./CookieBanner-BkOFQ3j0.js";import"./Link-DsvxrKVD.js";import"./Banner-CkxdVSu6.js";import"./GlobalHeader-KtK9X2tS.js";import"./useIsDesktop-DuR8D8_r.js";import"./GlobalAccountButton-D64CL6rx.js";import"./ChevronDown-BeusJatl.js";import"./Enter-B6lOGCKU.js";import"./GlobalMenuButton-G92qHvB4.js";import"./MenuHamburger-Dm7Id1b9.js";import"./ChevronUp-AGjLHyT-.js";import"./AccountSelector-CViGMN2t.js";import"./Switch-BH_KBOBo.js";import"./AccountMenu-BhZcjiKm.js";import"./GlobalMenu-CDjKAhOl.js";import"./Checkmark-B9ugWUTA.js";import"./ArrowUndo-Ds3qFIs3.js";import"./Globe-DQPwD49L.js";import"./BreadcrumbsLink-BfnwJCv0.js";import"./ArrowRight-C5VAtTTo.js";import"./Footer-Csa8fVfX.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
