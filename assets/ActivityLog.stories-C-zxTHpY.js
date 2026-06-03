import{aa as u,a7 as t,c as g}from"./iframe-pmb13xcr.js";import{u as l}from"./useActivityLogToolbar-DDjTdAKn.js";import{M as y,b as v,a as x}from"./ModalBody-CU8fQCap.js";import{A as c}from"./ActivityLogItem-EP-R4r1k.js";import{T as f}from"./Toolbar-Cd7qBdTs.js";import{S as A}from"./Section-0UMzqVbn.js";import{u as j}from"./useProfile-NwcGcXHj.js";import{L as M}from"./Layout-Cf87m6aM.js";import{P as L}from"./PageBase-kqtYjDzM.js";import{H as C}from"./Heading-sU40TroH.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Flex-Bo48iBpz.js";import"./TimelineSegment-D0sV34n8.js";import"./TimelineBase-CRvuFI91.js";import"./TimelineIcon-CqISKrN7.js";import"./CircleFill-iJS407x2.js";import"./Byline-BOyDTWco.js";import"./Typography-BgUhg-DC.js";import"./useHighlightedText-By0gZF-u.js";import"./Timeline-Ce4h41k1.js";import"./TimelineActivity-DwEQqDTN.js";import"./useDropdownMenuController-CLuQSoQG.js";import"./Dropdown-BPuWmM11.js";import"./SearchField-xzT30cQx.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./useMenu-PFiIjJ-b.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";import"./Plus-CpF1S0sT.js";import"./ButtonGroup-DvNffpdA.js";import"./ButtonGroupDivider-rjyiDHvV.js";import"./ChevronUpDown-DIsXonMg.js";import"./ToolbarMenu-BEbkzDEI.js";import"./ToolbarSearch-D9wqlmos.js";import"./useProfileLayout-D3OXd5KV.js";import"./HeartFill-Ddbc5KTD.js";import"./Bell-Cm123EEK.js";import"./Bookmark-aVSt--9Q.js";import"./ClockDashed-BY8sOjQH.js";import"./globalMenu-CkhnMgrT.js";import"./PersonCircle-BqGvUuVi.js";import"./Buildings2-C_uw4LoK.js";import"./InboxFill-DCRMqifj.js";import"./MenuGrid-X5OsbpOM.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D80U9MMR.js";import"./Trash-IxXQM3-V.js";import"./useLayout-Ph1wi52a.js";import"./useLocale-D_e-UmPn.js";import"./useAccountMenu-DTYzum3k.js";import"./header--be-KCq3.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DvefXCie.js";import"./Banner-BJ2BYs7L.js";import"./GlobalHeader-CHMfbD3_.js";import"./useIsDesktop-BFGrVHfV.js";import"./GlobalAccountButton-Bcpd1x2v.js";import"./ChevronDown-7NsihGJj.js";import"./Enter-byG7rnTn.js";import"./GlobalMenuButton-gGV7lWR6.js";import"./MenuHamburger-Ml3xcBiW.js";import"./ChevronUp-DD3z1ZBF.js";import"./AccountSelector-BkvgFso3.js";import"./Switch-DZAPBem0.js";import"./AccountMenu-BVT6wVM-.js";import"./GlobalMenu-Da_BwT8Y.js";import"./ArrowUndo-CIAjkSEj.js";import"./Globe-U-yptcFZ.js";import"./BreadcrumbsLink-D0SNoY51.js";import"./ArrowRight-BKN4Y0lc.js";import"./Footer-BjpVdnf9.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ao=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,a as Default,n as ProfileActivityLog,ao as __namedExportsOrder,so as default};
