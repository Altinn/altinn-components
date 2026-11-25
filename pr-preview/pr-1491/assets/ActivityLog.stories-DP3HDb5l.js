var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-Df5nkPs8.js";import{u as c}from"./useActivityLogToolbar-BHOHOcj0.js";import{M as v,b as x,a as f}from"./ModalBody-ESjZKsjK.js";import{A as d}from"./ActivityLogItem-CDebA65W.js";import{T as A}from"./Toolbar-DCmKrXGS.js";import{S as M}from"./Section-CNSG608H.js";import{u as L}from"./useProfile-DXqn7r3r.js";import{L as C}from"./Layout-CTPgBLff.js";import{P as B}from"./PageBase-r-jI-k2I.js";import{H as k}from"./Heading-CPiHedua.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./Flex-CYtO0dFj.js";import"./TimelineSegment-3bFmiPol.js";import"./TimelineBase-BJ84z3gx.js";import"./TimelineIcon-CLGI_yT_.js";import"./CircleFill-DO-qr8NI.js";import"./Byline-B553uJld.js";import"./Typography-W78b6WhV.js";import"./useHighlightedText-BM0MIdsX.js";import"./Timeline-DQiuP9j0.js";import"./TimelineActivity-DE5iYDzV.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./SearchField-C0Yxe_69.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuListDivider-BMCtCld-.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./ItemLabel-DuyLbrJx.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronRight-DJP358BJ.js";import"./FieldBase-C4nTzDS1.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./useMenu-gk-Zv7NC.js";import"./InformationSquare-CXwkU926.js";import"./Plus-BaDdjZ6L.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonGroupDivider-DI05vaV_.js";import"./ChevronUpDown-BtgQLPpc.js";import"./ToolbarMenu-COF1T52x.js";import"./ToolbarSearch-CYkSODkX.js";import"./useProfileLayout-zNgM5aER.js";import"./HeartFill-DT4iXLuo.js";import"./Bell-CssGG3Qs.js";import"./Bookmark-DD9Ln-TJ.js";import"./ClockDashed-ChwTcSEw.js";import"./localeSwitcher-ChhKg0Ck.js";import"./InboxFill-BWNa2-zj.js";import"./PersonGroup--rYaGh6g.js";import"./MenuGrid-jjE0xEq3.js";import"./Buildings2-Byf-KbZl.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BEIKmTLh.js";import"./Trash-_1KE3-4v.js";import"./useLayout-DcMH42AZ.js";import"./useLocale-DHkbaZMt.js";import"./useAccountMenu-wWVmh8ME.js";import"./header-BAWJKgIQ.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BctJCkx5.js";import"./CookieBanner-DBfwuf8y.js";import"./Link-CjVBNz8b.js";import"./Banner-BHR8TN-K.js";import"./GlobalHeader-TYmVKmYX.js";import"./useIsDesktop-CZKmsf4c.js";import"./GlobalAccountButton-CP5a2BWr.js";import"./ChevronDown-DdFcAhZa.js";import"./Enter-n45wvjgT.js";import"./GlobalMenuButton-Dpi4a_VH.js";import"./MenuHamburger-BHNimgxZ.js";import"./ChevronUp-Bz4Vcv4a.js";import"./AccountSelector--eNdOJ7G.js";import"./Switch-BKc4sxE1.js";import"./AccountMenu-BF2GwXJ0.js";import"./GlobalMenu-BQTKpuvH.js";import"./Checkmark-DZ-Lmkux.js";import"./ArrowUndo-BBF4w0in.js";import"./Globe-CJX2uVTf.js";import"./BreadcrumbsLink-C2L4Ui-h.js";import"./ArrowRight-DrBNAp4X.js";import"./Footer-BOc2nD-C.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
