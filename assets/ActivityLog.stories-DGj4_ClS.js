import{aa as u,a7 as t,c as g}from"./iframe-Cj7V21km.js";import{u as l}from"./useActivityLogToolbar-CPXe5A_Q.js";import{M as y,b as v,a as x}from"./ModalBody-Bg14fQJl.js";import{A as c}from"./ActivityLogItem-B-7fETyO.js";import{T as f}from"./Toolbar-DOfma81y.js";import{S as A}from"./Section-fD1somlY.js";import{u as j}from"./useProfile-CLNUD0Lh.js";import{L as M}from"./Layout-CKzA9fKN.js";import{P as L}from"./PageBase-C8kbP67d.js";import{H as C}from"./Heading-BRQOSuW8.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Flex-CMfzrDGq.js";import"./TimelineSegment-Dw_lZxAO.js";import"./TimelineBase-DAZ47kEZ.js";import"./TimelineIcon-D5fqQEls.js";import"./CircleFill-BVFsH_2D.js";import"./Byline-C3WDi-X0.js";import"./Typography-B3pfG5kD.js";import"./useHighlightedText-gdz5u-yJ.js";import"./Timeline-BJ3gQi2c.js";import"./TimelineActivity-ChiPe6B1.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./SearchField-BEMeTu2B.js";import"./MagnifyingGlass-B8zavmyI.js";import"./FieldBase-D_BM9i5X.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./Input-DnU3MXtK.js";import"./useMenu-DM-7OZIV.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./ItemControls-C0hj5koB.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./ChevronRight-DWxpnRfX.js";import"./InformationSquare-NQW98JPt.js";import"./Plus-ubcjdf5p.js";import"./ButtonGroup--sivQYNz.js";import"./ButtonGroupDivider-L0Fo_y8t.js";import"./ChevronUpDown-DfEfO8Hn.js";import"./ToolbarMenu-DB02q_aj.js";import"./ToolbarSearch-kz-nh4xu.js";import"./useProfileLayout-DffceNnS.js";import"./HeartFill-B0fwXfOV.js";import"./Bell-BFQ1zGto.js";import"./Bookmark-Bv_Utm-D.js";import"./ClockDashed-DDbcvs-B.js";import"./globalMenu-DW5ZQeeK.js";import"./PersonCircle-CYbmJpdB.js";import"./Buildings2-56fcZ__k.js";import"./InboxFill-BGibYNWU.js";import"./MenuGrid-DJsZCOkm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CMBlBZQq.js";import"./Trash-tfnqqh8_.js";import"./useLayout-97ljUbj-.js";import"./useLocale-BxIi2exc.js";import"./useAccountMenu-CdZ1XpdU.js";import"./header-fdj7rbPm.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-gx7XgO_W.js";import"./Banner-DQZIlCt5.js";import"./GlobalHeader-CfYlg_Ke.js";import"./useIsDesktop-B_K6d_pz.js";import"./GlobalAccountButton-DIIuy-_h.js";import"./ChevronDown-SIqR4dbe.js";import"./Enter-f6aYZdhd.js";import"./GlobalMenuButton-BYeiSNPC.js";import"./MenuHamburger-DoaqNjt8.js";import"./ChevronUp-d_RO8MoQ.js";import"./AccountSelector-D24D4-CR.js";import"./Switch-B__v8UGS.js";import"./AccountMenu-B-eZH9r6.js";import"./GlobalMenu-CHtFHwyb.js";import"./ArrowUndo-CNZhAEE7.js";import"./Globe-CzN74s1b.js";import"./BreadcrumbsLink-C_IpMOma.js";import"./ArrowRight-mfl-HMNl.js";import"./Footer-BaPK0KMZ.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
