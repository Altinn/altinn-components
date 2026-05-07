import{j as o,r as u}from"./iframe-V8BRfBgT.js";import{u as l}from"./useActivityLogToolbar-Cu1WzPsW.js";import{A as c}from"./ActivityLogItem-BAzJ6Up_.js";import{S as A}from"./Section-BCm3_cLa.js";import{T as g}from"./Toolbar-COw40rPO.js";import{u as j}from"./useProfile-g4q0dBxc.js";import{L as M}from"./Layout-DS8svBca.js";import{P as L}from"./PageBase-ChDmMgb2.js";import{H as B}from"./Heading-CGSCg4GY.js";import{B as y}from"./Button-BlxzDMPI.js";import{M as v,a as x,b as f}from"./ModalBody-6Y6EgB47.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-B7aPz0Q6.js";import"./TimelineBase-hxCstNNn.js";import"./Flex-Cr7oVI5u.js";import"./index-Dg3z2A9f.js";import"./TimelineIcon-CD7rhJAE.js";import"./XMark-C45HvrEl.js";import"./useId-Cpax_hNq.js";import"./Icon-BWOTtVf8.js";import"./Skeleton-BQtaEJM-.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./CircleFill-CvQOAsri.js";import"./Byline-C_Ji-SMs.js";import"./Typography-BiIpQq_S.js";import"./useHighlightedText-DnT87ATC.js";import"./Timeline-kjdlBAUQ.js";import"./TimelineActivity-DykgfPzI.js";import"./useDropdownMenuController-B5tdkj26.js";import"./Plus-DYqQ5ZW1.js";import"./Dropdown-ChJd6AE_.js";import"./SearchField-D2AXVYp0.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./FieldBase-DENJ-wBn.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Checkmark-BKwfqVUb.js";import"./ItemControls-BctCfWNT.js";import"./ChevronRight-Cz_uty1S.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./ChevronUpDown-CFkX2GwM.js";import"./ButtonGroup-GmtwjaC0.js";import"./ButtonGroupDivider-DCIj-SRz.js";import"./ToolbarMenu-D3KQzrUC.js";import"./ToolbarSearch-6Fm-z8Bv.js";import"./useProfileLayout-CjSiQuh6.js";import"./HeartFill-YlZNLLsB.js";import"./Bell-C4Xj-ndx.js";import"./Bookmark-CfrDm0KI.js";import"./ClockDashed-C2nR6RxU.js";import"./globalMenu-Bx5X-jAf.js";import"./PersonCircle-cRtiAMfx.js";import"./Buildings2-jLJeRhKN.js";import"./InboxFill-CLQZBoZX.js";import"./MenuGrid-WBv5f01c.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DYvBW6Wd.js";import"./Trash-BZTx2yoj.js";import"./useLayout-C-iL9URr.js";import"./useLocale-y3YsWHEh.js";import"./useAccountMenu-DhSj_npj.js";import"./header-BehWPj7B.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-XE89HiH5.js";import"./Banner-CdvdYJhx.js";import"./GlobalHeader-W4TQvnUS.js";import"./useIsDesktop-Bl9_iylm.js";import"./GlobalAccountButton-D1niDOz_.js";import"./ChevronDown-Dj082slW.js";import"./Enter-BTLcflkc.js";import"./GlobalMenuButton-JCXthAIP.js";import"./MenuHamburger-BATPuSR-.js";import"./ChevronUp-DYD-_Lcf.js";import"./AccountSelector-K8BxGoPa.js";import"./button-2-meUg78.js";import"./heading-DRHKTNUx.js";import"./AccountMenu-BEGmSxR4.js";import"./Switch-tNambPi0.js";import"./GlobalMenu-6qJ841gB.js";import"./ArrowUndo-ZeGtF0l8.js";import"./Globe-DF7sL7sD.js";import"./BreadcrumbsLink-DcG-L0Vs.js";import"./ArrowRight-tNKEYIfv.js";import"./Footer-Y_g0CgdM.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ft=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,ft as __namedExportsOrder,xt as default};
