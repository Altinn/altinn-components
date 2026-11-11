var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CXqMdlCC.js";import{u as c}from"./useActivityLogToolbar-Reh6MqP_.js";import{M as v,b as x,a as f}from"./ModalBody-DEbIyzzf.js";import{A as d}from"./ActivityLogItem-vZc0Wsbf.js";import{T as A}from"./Toolbar-B02SdnYJ.js";import{S as M}from"./Section-CK-XPJWb.js";import{u as L}from"./useProfile-CyWKHHvu.js";import{L as C}from"./Layout-B0Kmw8Wv.js";import{P as B}from"./PageBase-LoX2SIy1.js";import{H as k}from"./Heading-Bc_OkYLY.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DmiiS68f.js";import"./AvatarGroup-Chz5d9SY.js";import"./Flex-C0b8jFL9.js";import"./TimelineSegment-Bw77YXl2.js";import"./TimelineBase-tC0qgoKA.js";import"./TimelineIcon-vGlMOq7k.js";import"./CircleFill-CvnFEGFT.js";import"./Byline-BhCTJ5Aa.js";import"./Typography-B65oo-6B.js";import"./useHighlightedText-DHwhs_hr.js";import"./Timeline-DJtlW17M.js";import"./TimelineActivity-CCGqFTee.js";import"./useDropdownMenuController-DJrTGQ-R.js";import"./Dropdown-D-iF0FQf.js";import"./SearchField-BQG9p1mb.js";import"./MagnifyingGlass-C2E3OXTe.js";import"./MenuListItem-upw9R9gQ.js";import"./MenuListDivider-CmJPINW2.js";import"./MenuItem-D2UkRxiZ.js";import"./CheckboxUncheckedIcon-DWMJmCdE.js";import"./RadioUncheckedIcon-DsZbsVcQ.js";import"./ItemMedia-CHMaO1_z.js";import"./ItemLabel-DvzzIYMd.js";import"./ItemControls-CAvLGz5J.js";import"./Badge-DLWRsvj2.js";import"./Tooltip-ra4jscVD.js";import"./ChevronRight-DltnHqdC.js";import"./FieldBase-0KjilGfX.js";import"./Field-BA8wlTFM.js";import"./Label-D7XOgbuq.js";import"./Input-D8RpuIgN.js";import"./useMenu-CqtkU6S6.js";import"./InformationSquare-ZHKJrQSE.js";import"./Plus-BUwnjirz.js";import"./ButtonGroup-ilSUnB_k.js";import"./ButtonGroupDivider-C7a4yusM.js";import"./ChevronUpDown-Yhvc0qNs.js";import"./ToolbarMenu-DH70VUiH.js";import"./ToolbarSearch-BwJEUjel.js";import"./useProfileLayout-WnlbpUoJ.js";import"./HeartFill-BM_ipkyj.js";import"./Bell-Bbe8MVOR.js";import"./Bookmark-Dvtt7kIU.js";import"./ClockDashed-DGlKC4Mz.js";import"./globalMenu-2K-k12nO.js";import"./PersonCircle-BhmCdgxO.js";import"./Buildings2-BerC_M3Z.js";import"./InboxFill-6IEAeIKt.js";import"./MenuGrid-B1wVZlDZ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DLDgEUbl.js";import"./Trash-BZMVy5so.js";import"./useLayout-CYidKplt.js";import"./useLocale-C6lwJHTf.js";import"./useAccountMenu-ZtCuB2vf.js";import"./header-WRAFw5u1.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CbQhhDZZ.js";import"./CookieBanner-Dor9yVbW.js";import"./Link-CjI5sSKG.js";import"./Banner-DKJntqtX.js";import"./GlobalHeader-ByjAguUA.js";import"./useIsDesktop-BnvVJKv_.js";import"./GlobalAccountButton-W5vizdCb.js";import"./ChevronDown-BjOSGq_A.js";import"./Enter-DmDgRP0Q.js";import"./GlobalMenuButton-B9op-Ewu.js";import"./MenuHamburger-BUucDG4Z.js";import"./ChevronUp-NZ-cp3Wt.js";import"./AccountSelector-ueRGc7ms.js";import"./Switch-DAhdVzvS.js";import"./AccountMenu-BTXikZ9S.js";import"./GlobalMenu-BWM2UK14.js";import"./Checkmark-CQaorHYz.js";import"./ArrowUndo-CO4CQkvC.js";import"./Globe-uwU59LH4.js";import"./BreadcrumbsLink-C3lWgJ2I.js";import"./ArrowRight-B7D23jat.js";import"./Footer-CzbjZOfK.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
