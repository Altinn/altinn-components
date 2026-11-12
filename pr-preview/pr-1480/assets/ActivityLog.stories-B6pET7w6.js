var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CrglqwQn.js";import{u as c}from"./useActivityLogToolbar-fvEm4WT6.js";import{M as v,b as x,a as f}from"./ModalBody-ywYcZdTp.js";import{A as d}from"./ActivityLogItem-7m0jEd02.js";import{T as A}from"./Toolbar-9N3580eF.js";import{S as M}from"./Section-DbuH07eX.js";import{u as L}from"./useProfile-BAO3Qe_z.js";import{L as C}from"./Layout-BtmXYADp.js";import{P as B}from"./PageBase-D_DEZEpM.js";import{H as k}from"./Heading-Cue2sNHi.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./Flex-DJ9jSUVh.js";import"./TimelineSegment-Co4UBFWA.js";import"./TimelineBase-BI49ivU3.js";import"./TimelineIcon-BRKPqA6j.js";import"./CircleFill-CCvtm2Ie.js";import"./Byline-DiXajScB.js";import"./Typography-BczTYRHT.js";import"./useHighlightedText-BwDaK6ea.js";import"./Timeline-DQ89691f.js";import"./TimelineActivity-BqsLgVyj.js";import"./useDropdownMenuController-WGsW3heI.js";import"./useIsDesktop-BFXmchO7.js";import"./Dropdown-Bs8XHg5O.js";import"./SearchField-C2qhyCtD.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemMedia-CKHqoxmK.js";import"./ItemLabel-C8AtzUlo.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ChevronRight-DGfPuTVb.js";import"./FieldBase-B81pLsMF.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./useMenu-8J-CXIB0.js";import"./InformationSquare-BOQji3ZT.js";import"./Plus-BsVWtc_l.js";import"./ButtonGroup-DBlS54nG.js";import"./ButtonGroupDivider-Cpa88dGM.js";import"./ChevronUpDown-BOLcNr1O.js";import"./ToolbarMenu-BqL5gXT1.js";import"./ToolbarSearch-_H84Lz4H.js";import"./useProfileLayout-DNu-Ygqx.js";import"./HeartFill-CKM7yr0T.js";import"./Bell-DwndJVS_.js";import"./Bookmark-B71Tg_A4.js";import"./ClockDashed-DPlMd02p.js";import"./globalMenu-BxqPVjRD.js";import"./PersonCircle-2tYZc417.js";import"./Buildings2-uuckHAgd.js";import"./InboxFill-5KCnwHYz.js";import"./MenuGrid-4KLfWHTb.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-QnejR0rZ.js";import"./Trash-D8Yx43MO.js";import"./useLayout-BcexFKpd.js";import"./useLocale-C45L4w_z.js";import"./useAccountMenu-eifD--Pm.js";import"./header-CZewJz0V.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-dW7OoA73.js";import"./CookieBanner-DuM_xTLh.js";import"./Link-Chsrp-ow.js";import"./Banner-CO4ulxs9.js";import"./GlobalHeader-IkXOnXah.js";import"./GlobalAccountButton-DM1YrGJI.js";import"./ChevronDown-qCwX9ScZ.js";import"./Enter-zEk9kRFx.js";import"./GlobalMenuButton-Gdg78j4Y.js";import"./MenuHamburger-Co7zqsTV.js";import"./ChevronUp-fcfSgUs-.js";import"./AccountSelector-BNOyXtGS.js";import"./Switch-CWx3MDUl.js";import"./AccountMenu-BL-n-r0X.js";import"./GlobalMenu-DWjDb7fh.js";import"./Checkmark-D7BkIwSo.js";import"./ArrowUndo-B915tdkI.js";import"./Globe-KdSZmZPM.js";import"./BreadcrumbsLink-Bbwo0LYF.js";import"./ArrowRight-CwRhQGdr.js";import"./Footer-D5l3ArAx.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
