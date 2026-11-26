var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-Dhr5kNpI.js";import{u as c}from"./useActivityLogToolbar-DbV1b-MS.js";import{M as v,b as x,a as f}from"./ModalBody-bj2s7Dy2.js";import{A as d}from"./ActivityLogItem-Cv0c0jQL.js";import{T as A}from"./Toolbar-DHeeC9bw.js";import{S as M}from"./Section-xZgyq4QZ.js";import{u as L}from"./useProfile-43Lu4yPm.js";import{L as C}from"./Layout-b9_DASgO.js";import{P as B}from"./PageBase-Bube1PFK.js";import{H as k}from"./Heading-DmbuxGS8.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Flex-CQB0dbJh.js";import"./TimelineSegment-Doe7ex1B.js";import"./TimelineBase-D4-cfCRY.js";import"./TimelineIcon-Bex8zPUR.js";import"./CircleFill-7-GsBAJ7.js";import"./Byline-BXE4AnwT.js";import"./Typography-CiPthQfi.js";import"./useHighlightedText-D3bt4yNA.js";import"./Timeline-DMJNJpM1.js";import"./TimelineActivity-ei4FBzAD.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./ItemLabel-D7TXcLH5.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./Plus-CJyVTS1m.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonGroupDivider-xXSQP4fw.js";import"./ChevronUpDown-ClFjd4Wf.js";import"./ToolbarMenu-4nusd3Gy.js";import"./ToolbarSearch-Cs9or_Ii.js";import"./useProfileLayout-BiYg4zdg.js";import"./HeartFill-C2b-lyNp.js";import"./Bell-CTnba2Qj.js";import"./Bookmark-Dnx7CoLa.js";import"./ClockDashed-CsZP5RVc.js";import"./globalMenu-YsQW083g.js";import"./PersonCircle-D7PND_VY.js";import"./Buildings2-Zdf-PMQF.js";import"./InboxFill-BQn04Vnh.js";import"./MenuGrid-Dtc87Yds.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CSWjZQYI.js";import"./Trash-DlyJC_yu.js";import"./useLayout-zxKW-DRf.js";import"./useLocale-DmgTjWPu.js";import"./useAccountMenu-BhDYNqzc.js";import"./header-DsG7eok5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-D4aRwPBT.js";import"./CookieBanner-BYmyroC1.js";import"./Link-BcpX_Jbu.js";import"./Banner-B75RCubj.js";import"./GlobalHeader-HRR1BEKf.js";import"./useIsDesktop-9sPcRqaI.js";import"./GlobalAccountButton-CA2fQ84T.js";import"./ChevronDown-CRBE2Pft.js";import"./Enter-B8y0P7tB.js";import"./GlobalMenuButton-CnciQBA6.js";import"./MenuHamburger-CsHjEoZC.js";import"./ChevronUp-CnX9Oj5-.js";import"./AccountSelector-Bgw129to.js";import"./Switch-DrTa1vix.js";import"./AccountMenu-BrVN1SqG.js";import"./GlobalMenu-CrWIFlwZ.js";import"./Checkmark-Dq0lqnYy.js";import"./ArrowUndo-Cco96Qbs.js";import"./Globe-CB-uD3-X.js";import"./BreadcrumbsLink-D3ZvT99q.js";import"./ArrowRight-CNFtkaIJ.js";import"./Footer-y517Vrur.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
