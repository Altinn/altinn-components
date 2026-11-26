var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DKOj4Qmf.js";import{u as c}from"./useActivityLogToolbar-pDogw7BL.js";import{M as v,b as x,a as f}from"./ModalBody-yuWxiPLa.js";import{A as d}from"./ActivityLogItem-BHEqb_g9.js";import{T as A}from"./Toolbar-Ch5lZRFX.js";import{S as M}from"./Section-DDkkqRz5.js";import{u as L}from"./useProfile-B7R-x8xc.js";import{L as C}from"./Layout-C77_zlI3.js";import{P as B}from"./PageBase-B2Ee9Al7.js";import{H as k}from"./Heading-CZ9YFV1k.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./Flex-DwWkcKON.js";import"./TimelineSegment-BEc3YOrt.js";import"./TimelineBase-D-M20jxA.js";import"./TimelineIcon-C4eKZy78.js";import"./CircleFill-C9yLraD4.js";import"./Byline-DdQrd2Ib.js";import"./Typography-eLs7BNQP.js";import"./useHighlightedText-C5BJuUZa.js";import"./Timeline-cOJiV2Kr.js";import"./TimelineActivity-BJ-vy0ua.js";import"./useDropdownMenuController-CcFtrCc1.js";import"./Dropdown--jVfBx7U.js";import"./SearchField-TPXYOreq.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./ItemLabel-CcblWyxm.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";import"./InformationSquare-CC_FvbA-.js";import"./Plus-CFLLX51l.js";import"./ButtonGroup-tVuhtuMt.js";import"./ButtonGroupDivider-BfAaFqeD.js";import"./ChevronUpDown-B3dWux7v.js";import"./ToolbarMenu-B0rnYwvK.js";import"./ToolbarSearch-C_iN41wW.js";import"./useProfileLayout-0eum3Fs0.js";import"./HeartFill-TMgHEMWw.js";import"./Bell-D-w-Z2hb.js";import"./Bookmark-DtUUxBWC.js";import"./ClockDashed-J0wFRlbL.js";import"./globalMenu-Bgwguyyv.js";import"./PersonCircle-B-YmhkaA.js";import"./Buildings2-wb5ZIU2b.js";import"./InboxFill-DlN-FcL8.js";import"./MenuGrid-DtqF4QVd.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BdzDAVfI.js";import"./Trash-BH2M-vSd.js";import"./useLayout-KPAgcc6H.js";import"./useLocale-Ba1i3mzS.js";import"./useAccountMenu-DkSxoiko.js";import"./header-DFSjGhev.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Dd2TvshO.js";import"./CookieBanner-DQKUtDMx.js";import"./Link-Bf9h-zyq.js";import"./Banner-tfb5tHuB.js";import"./GlobalHeader-Ndrp0S0T.js";import"./useIsDesktop-ButgdWSM.js";import"./GlobalAccountButton-D0WFlV57.js";import"./ChevronDown-E0Mu4V8Q.js";import"./Enter-h7bFRpOG.js";import"./GlobalMenuButton-DGjR9OMW.js";import"./MenuHamburger-biRJv-in.js";import"./ChevronUp-C6mjAtW4.js";import"./AccountSelector-DVWTlh2e.js";import"./Switch-Bkx_nto1.js";import"./AccountMenu-Dihb_EuE.js";import"./GlobalMenu-DJxTXL6b.js";import"./Checkmark-DXw908H5.js";import"./ArrowUndo-Cs7Bhn7X.js";import"./Globe-CyCJXh5C.js";import"./BreadcrumbsLink-W4MU2AZQ.js";import"./ArrowRight-CsC-IM5g.js";import"./Footer-uc4Se_lB.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
