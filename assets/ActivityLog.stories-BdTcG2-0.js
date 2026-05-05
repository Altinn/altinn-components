import{j as o,r as u}from"./iframe-0tjTS8nX.js";import{u as l}from"./useActivityLogToolbar-5a270362.js";import{A as c}from"./ActivityLogItem-Cawiowsn.js";import{S as A}from"./Section-CVxfq1Zs.js";import{T as g}from"./Toolbar-BJdW15AL.js";import{u as j}from"./useProfile-qTTZbD03.js";import{L as M}from"./Layout-B4WB1J4B.js";import{P as L}from"./PageBase-BuED-U4V.js";import{H as B}from"./Heading-KoSbgrW3.js";import{B as y}from"./Button-CyTdDQsP.js";import{M as v,a as x,b as f}from"./ModalBody-C_UFaejr.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-D-eHO46D.js";import"./TimelineBase-BpJCN_4p.js";import"./TimelineIcon-fgKMTIX6.js";import"./XMark-C6HGzv3s.js";import"./useId-DNFZveVv.js";import"./Icon-CEoRGh9j.js";import"./index-BHkRJabC.js";import"./Skeleton-CiSYBb75.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Flex-BjLBa1JB.js";import"./CircleFill-CwH7lTIs.js";import"./Byline-B7hF81ln.js";import"./Typography-dEwOKrOW.js";import"./useHighlightedText-D9Q4aeek.js";import"./Timeline-PyQoCEHU.js";import"./TimelineActivity-Cm9Clf04.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Plus-pc4KN7SW.js";import"./Dropdown-Cwwtm8XG.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Checkmark-DcFVdWi8.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./ChevronUpDown-CwtBEqFM.js";import"./ButtonGroup-Rh1_zGFF.js";import"./ButtonGroupDivider-D8a_Wdd9.js";import"./ToolbarMenu-Dn1sARGg.js";import"./ToolbarSearch-CRnAJZip.js";import"./useProfileLayout-C4d4vnHH.js";import"./HeartFill-DxduMAeN.js";import"./Bell-BGb4n8GH.js";import"./Bookmark-DxOqCGna.js";import"./ClockDashed-Dt4Rg0dq.js";import"./globalMenu-CJTU8m43.js";import"./PersonCircle-DX0T6Aou.js";import"./Buildings2-BAEXb0uK.js";import"./InboxFill-B4Y81moB.js";import"./MenuGrid-Cr6WrSLL.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CxbiNxAX.js";import"./Trash-BerJMn2e.js";import"./useLayout-D9mtUJxw.js";import"./useLocale-Csr42hgy.js";import"./useAccountMenu-B1Vb5obT.js";import"./header-C8ch5s8L.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BY2Hz4nr.js";import"./GlobalHeader-CVC8ADKh.js";import"./useIsDesktop-BVM8UbJd.js";import"./GlobalAccountButton-DO3Rbjzf.js";import"./ChevronDown-OiQKbBEs.js";import"./Enter-CHSTGyKA.js";import"./GlobalMenuButton-P2GqDve8.js";import"./MenuHamburger-BCh4cxc2.js";import"./ChevronUp-DEUjkNQ0.js";import"./AccountSelector-COKc5X0B.js";import"./button-Cld0y5Q3.js";import"./heading-Cqt39cfA.js";import"./AccountMenu-XAQIjOHS.js";import"./Switch-B0wE7TCS.js";import"./GlobalMenu-C3cbm-xF.js";import"./ArrowUndo-CIy3NdIH.js";import"./Globe-GB118VNm.js";import"./BreadcrumbsLink-Bztu94MA.js";import"./ArrowRight-9wDMuPBl.js";import"./Footer-DNpsRgsY.js";const yt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const vt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,vt as __namedExportsOrder,yt as default};
