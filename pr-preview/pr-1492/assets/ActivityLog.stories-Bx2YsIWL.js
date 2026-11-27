var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DS_59AwM.js";import{u as c}from"./useActivityLogToolbar-J7GH8eS9.js";import{M as v,b as x,a as f}from"./ModalBody-DwWBi8_C.js";import{A as d}from"./ActivityLogItem-BxrZqXy8.js";import{T as A}from"./Toolbar-CBHk8fKa.js";import{S as M}from"./Section-C50awZDU.js";import{u as L}from"./useProfile-vH7ZEmDV.js";import{L as C}from"./Layout-C4w8Gd3e.js";import{P as B}from"./PageBase-YImES81T.js";import{H as k}from"./Heading-BZMLDowx.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./Flex-kHR-J2An.js";import"./TimelineSegment-C-KK0-XA.js";import"./TimelineBase-CL3rB3IS.js";import"./TimelineIcon-B0uVJexO.js";import"./CircleFill-D5F9-GBn.js";import"./Byline-Bh_ck5J2.js";import"./Typography-DXt4lEYU.js";import"./useHighlightedText-Ba9mKwdy.js";import"./Timeline-VxmufJ4L.js";import"./TimelineActivity-C4QjiwVW.js";import"./useDropdownMenuController--fJTxwjL.js";import"./Dropdown-DLABBFh7.js";import"./SearchField-CAjTntqL.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./ItemLabel-DXVwsqWf.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronRight-C7PJPgHr.js";import"./FieldBase-Bv1sQ0dY.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./useMenu-30LDsNSn.js";import"./InformationSquare-DyP2GK92.js";import"./Plus-Wv8vH7eI.js";import"./ButtonGroup-BVrUrJIV.js";import"./ButtonGroupDivider-Czy_Xe9X.js";import"./ChevronUpDown-Da8Bwm0T.js";import"./ToolbarMenu-DMWHt_Zt.js";import"./ToolbarSearch-CwaReUlv.js";import"./useProfileLayout-DBsA1fGB.js";import"./HeartFill-BrIW_AfX.js";import"./Bell-DULJ5NX_.js";import"./Bookmark-C5zK9N2t.js";import"./ClockDashed-CJPcObAR.js";import"./globalMenu-DFBTjtgP.js";import"./PersonCircle-DSk0oNxz.js";import"./Buildings2-csFrmVqP.js";import"./InboxFill-BFZrrmB7.js";import"./MenuGrid-BViEhOfD.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BRmXGBJj.js";import"./Trash-CqvnIlMZ.js";import"./useLayout-xnkjj_-v.js";import"./useLocale-D_2mvdEX.js";import"./useAccountMenu-CiqfZgO1.js";import"./header-cIQVq8Pp.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-B4jp4en8.js";import"./CookieBanner-D62zvcoE.js";import"./Link-DluIdYG0.js";import"./Banner-CrFenHoT.js";import"./GlobalHeader-qSkTlajx.js";import"./useIsDesktop-BLNCbIMG.js";import"./GlobalAccountButton-B87x-cA4.js";import"./ChevronDown-CX1A4zpd.js";import"./Enter-BzYlsRS4.js";import"./GlobalMenuButton-DtJCYos4.js";import"./MenuHamburger-D2t_fJxS.js";import"./ChevronUp-DZ6JxO9u.js";import"./AccountSelector-DeuKRwyu.js";import"./Switch-UOM24JjQ.js";import"./AccountMenu-0gBoOXlr.js";import"./GlobalMenu-B_WcCU9L.js";import"./Checkmark-zqsIpaA_.js";import"./ArrowUndo-D5XHMjLO.js";import"./Globe-CZo01Odx.js";import"./BreadcrumbsLink-DdcZo00M.js";import"./ArrowRight-DdOKe7Au.js";import"./Footer-C6E5xA_w.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
