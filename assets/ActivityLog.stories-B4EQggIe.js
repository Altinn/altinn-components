import{s as u,p as o}from"./iframe-43_RSSTf.js";import{u as l}from"./useActivityLogToolbar-DaUYNN9M.js";import{B as g}from"./Button-B83AdZGF.js";import{M as y,b as v,a as x}from"./ModalBody-RXLH-EOA.js";import{A as c}from"./ActivityLogItem-BfuYG5Xy.js";import{T as f}from"./Toolbar-DnruR9N2.js";import{S as A}from"./Section-i7Bzbjq_.js";import{u as j}from"./useProfile-BAq6jBei.js";import{L as M}from"./Layout-BVNQbp0-.js";import{P as L}from"./PageBase-YwOI6whh.js";import{H as B}from"./Heading-2vQl8tBj.js";import"./preload-helper-PPVm8Dsz.js";import"./tooltip-CaRi0lSN.js";import"./index-D9XEmR3s.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Flex-CbLPS6D2.js";import"./TimelineSegment-DzEh1tOG.js";import"./TimelineBase-Bn2DzLWq.js";import"./TimelineIcon-i9K9CTHw.js";import"./CircleFill-xE7QQFXX.js";import"./Byline-1G4iuBat.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Timeline-SBiJap60.js";import"./TimelineActivity-D71XB6sZ.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./Plus-BQyf1Gxm.js";import"./ButtonGroup-w02pJMP9.js";import"./ButtonGroupDivider-ClE2vyad.js";import"./ChevronUpDown-BESXpFlz.js";import"./ToolbarMenu-C0bIZ2gU.js";import"./ToolbarSearch-BdeQ_kzd.js";import"./useProfileLayout-CTAGgiEq.js";import"./HeartFill-CK5ZP6qh.js";import"./Bell-OuASsAUs.js";import"./Bookmark-Dm5c54YI.js";import"./ClockDashed-BtdrgYQX.js";import"./globalMenu-CYMl9fs2.js";import"./PersonCircle-5C7xLqsV.js";import"./Buildings2-Chbhwy3k.js";import"./InboxFill-LO64aqnK.js";import"./MenuGrid-DpPBmXDm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DejoCF8M.js";import"./Trash-sc3FQnLB.js";import"./useLayout-Nuqq7Pvf.js";import"./useLocale-D2MMdEwB.js";import"./useAccountMenu-C_gEjtMM.js";import"./header-BnA0__0d.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-5Bu7w2kZ.js";import"./Banner-CiIOW2zK.js";import"./GlobalHeader-CBGVi9UL.js";import"./useIsDesktop-CRlQyS-C.js";import"./GlobalAccountButton-l7w_Shmo.js";import"./ChevronDown-DzTSEYyg.js";import"./Enter-DdOnloWp.js";import"./GlobalMenuButton-DBrFEzwi.js";import"./MenuHamburger-aTqKFAcp.js";import"./ChevronUp-DrEXLnbF.js";import"./AccountSelector-CwVIiTFB.js";import"./Switch-YXKvHF1V.js";import"./AccountMenu-DCpMQtOk.js";import"./GlobalMenu-CwqY0ksZ.js";import"./ArrowUndo-B6CsLZ7N.js";import"./Globe-DE_rqwfk.js";import"./BreadcrumbsLink-9DU_cU_H.js";import"./ArrowRight-P2DRNMAa.js";import"./Footer-w3VzYZLG.js";const dt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(f,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(y,{open:r,onClose:e,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(x,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(y,{open:s,onClose:d,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(x,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(f,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,ut as __namedExportsOrder,dt as default};
