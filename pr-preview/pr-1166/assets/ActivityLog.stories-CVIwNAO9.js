import{j as o,r as u}from"./iframe-0B_Yudin.js";import{u as l}from"./useActivityLogToolbar-wbXdKU1a.js";import{A as c}from"./ActivityLogItem-BIaGTSen.js";import{S as A}from"./Section-byNAOZ7t.js";import{T as g}from"./Toolbar-Bi8sxGeY.js";import{u as j}from"./useProfile-CgFebmK8.js";import{L as M}from"./Layout-HHY59kNX.js";import{P as L}from"./PageBase-DKSXK-Hh.js";import{H as B}from"./Heading-iCNnL7gN.js";import{B as y}from"./Button-CFVlP8iN.js";import{M as v,a as x,b as f}from"./ModalBody-lU1YKfiD.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Bhl9bc64.js";import"./TimelineBase-DXZ_VPHt.js";import"./TimelineIcon-CybYWFC4.js";import"./XMark-4vnuAWTz.js";import"./useId-BUxMg0Ir.js";import"./Icon-CbCRlB_g.js";import"./index-bzqtFzN_.js";import"./Skeleton-CCW5QxrE.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Flex-CcsVAtXA.js";import"./CircleFill-Yc-pNlZh.js";import"./Byline-C3mhaQKv.js";import"./Typography-WSorE15D.js";import"./useHighlightedText-1P3axs8E.js";import"./Timeline-BoKfUChD.js";import"./TimelineActivity-CBmcpN5L.js";import"./useDropdownMenuController-B1mLRZqh.js";import"./Plus-BmqtHu8-.js";import"./Dropdown-Ceu59hlm.js";import"./SearchField-aP7iZ-N9.js";import"./MagnifyingGlass-D-_dPVyR.js";import"./FieldBase-BRRzaSEH.js";import"./Label-BawrqgTw.js";import"./index-DeiwrdtL.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./MenuListItem-Dr-AzL0Y.js";import"./MenuListHeading-BRJCvMdb.js";import"./MenuItem-ByHw8468.js";import"./ItemMedia-DPzqoyVf.js";import"./Checkmark-BmAdxrUQ.js";import"./ItemControls-DGPFdAX4.js";import"./ChevronRight-D1gjYegd.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-G8FOBFFN.js";import"./InformationSquare-C3Az81Rf.js";import"./ChevronUpDown-oD2FsggY.js";import"./ButtonGroup-CSUZvsoD.js";import"./ButtonGroupDivider-BIa7C9rx.js";import"./ToolbarMenu-_dyMSq4G.js";import"./ToolbarSearch-DR8Q5FFl.js";import"./useProfileLayout-AQO3JRLE.js";import"./HeartFill-B029Znip.js";import"./Bell-I9jdyPhB.js";import"./Bookmark-xUjEkd69.js";import"./ClockDashed-Bz_gcxU0.js";import"./globalMenu-D7pxO8X4.js";import"./PersonCircle-Cq1dPAel.js";import"./Buildings2-6vsd0VXE.js";import"./InboxFill-W7UakbcK.js";import"./MenuGrid-DYbnBtWP.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DM72aU-A.js";import"./Trash-C5AYfDtF.js";import"./useLayout-DEPJKxwS.js";import"./useLocale-ClBThj-i.js";import"./useAccountMenu-CY3f9UY9.js";import"./header-CDdzMi6G.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BjDVCTYi.js";import"./Banner-DoijLipi.js";import"./GlobalHeader-Bvbzil1j.js";import"./useIsDesktop-BJe-cVtk.js";import"./GlobalAccountButton-BQF_lDUM.js";import"./ChevronDown-DyrNm3cx.js";import"./Enter-0Yba7b_H.js";import"./GlobalMenuButton-Dyh7Q0Q2.js";import"./MenuHamburger-Dp9iHReE.js";import"./ChevronUp-CRY6Xdys.js";import"./AccountSelector-DcCiBW_b.js";import"./button-B4QTcVhB.js";import"./heading-C-Iwie4k.js";import"./AccountMenu-DRORBlif.js";import"./Switch-6FvXDRQ8.js";import"./GlobalMenu-CSJNtQxR.js";import"./ArrowUndo-BrRKnSKJ.js";import"./Globe-C4inFFJx.js";import"./BreadcrumbsLink-A99X6Qdv.js";import"./ArrowRight-8nOEs7Bb.js";import"./Footer-CgkzEYBs.js";const vt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const xt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,xt as __namedExportsOrder,vt as default};
