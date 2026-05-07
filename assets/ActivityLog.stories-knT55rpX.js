import{j as o,r as u}from"./iframe-Cqj3AiBb.js";import{u as l}from"./useActivityLogToolbar-DPHXPo7x.js";import{A as c}from"./ActivityLogItem-Dq-a1-I2.js";import{S as A}from"./Section-BsXiOSXS.js";import{T as g}from"./Toolbar-C1AG3cCG.js";import{u as j}from"./useProfile-Djq0XjZH.js";import{L as M}from"./Layout-f91yRgSY.js";import{P as L}from"./PageBase-D_2wcYMv.js";import{H as B}from"./Heading-CJiOkJPI.js";import{B as y}from"./Button-DYwdzfZG.js";import{M as v,a as x,b as f}from"./ModalBody-jsg5kTGr.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BwKANQsM.js";import"./TimelineBase-C0xga_IK.js";import"./Flex-DFnlILDc.js";import"./index-CHG1hv9Q.js";import"./TimelineIcon-DW7wW4ZU.js";import"./XMark-ReENydG3.js";import"./useId-Bi-DL88I.js";import"./Icon-CHi77IUK.js";import"./Skeleton-B33vAz-c.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./CircleFill-DcQqscIy.js";import"./Byline-BT_6GGpj.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Timeline-C7Jq6nqO.js";import"./TimelineActivity-DDmJFFkV.js";import"./useDropdownMenuController-DF4yQiJ_.js";import"./Plus-U9ILyx0n.js";import"./Dropdown-Cx7yQmcU.js";import"./SearchField-qenOIdRZ.js";import"./MagnifyingGlass-fMCV_alc.js";import"./FieldBase-DDsWnoQi.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Checkmark-BFwQvgMU.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";import"./ChevronUpDown-DokNKEik.js";import"./ButtonGroup-HmC79Nv3.js";import"./ButtonGroupDivider-DRl2_qKh.js";import"./ToolbarMenu-CrdlAyWm.js";import"./ToolbarSearch-C6dAmVLU.js";import"./useProfileLayout-DE5ExXvn.js";import"./HeartFill-DCHu72W2.js";import"./Bell-BFrIV75G.js";import"./Bookmark-ykz9HJCL.js";import"./ClockDashed-2w90gDju.js";import"./globalMenu-CsbiSy3A.js";import"./PersonCircle-sKNvHz4D.js";import"./Buildings2-CW6Ln2Lr.js";import"./InboxFill-B-I70TLd.js";import"./MenuGrid-Dnrx8ipH.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Brm_9A3i.js";import"./Trash-B8H25DCw.js";import"./useLayout-D5_pfhJQ.js";import"./useLocale-BwYOMWnF.js";import"./useAccountMenu-BNVwIEiq.js";import"./header-DyRk7f-v.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BdUDD80F.js";import"./Banner-BSSTB2OU.js";import"./GlobalHeader-1ZMARuNk.js";import"./useIsDesktop-BA5ox44l.js";import"./GlobalAccountButton-DzTdmx8c.js";import"./ChevronDown-g18mW4eX.js";import"./Enter-COG8qags.js";import"./GlobalMenuButton-CYW4jJbb.js";import"./MenuHamburger-Cowy_Pyv.js";import"./ChevronUp-BaSPXXxx.js";import"./AccountSelector-K6AFxsIB.js";import"./button-CcZ_KMhQ.js";import"./heading-BCk6Lw7-.js";import"./AccountMenu-DDR4vCda.js";import"./Switch-Dd7wCyBA.js";import"./GlobalMenu-G61wL3ak.js";import"./ArrowUndo-zDsO2X_3.js";import"./Globe-DBjj0c59.js";import"./BreadcrumbsLink-DyfgdHtn.js";import"./ArrowRight-CtrtZlDi.js";import"./Footer-1w6vwepj.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
