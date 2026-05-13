import{j as o,r as u}from"./iframe-DkQPO9ro.js";import{u as l}from"./useActivityLogToolbar-CP0IcbSs.js";import{A as c}from"./ActivityLogItem-DDhnRxDG.js";import{S as A}from"./Section-DUH4Cyq_.js";import{T as g}from"./Toolbar-DGgwFwWk.js";import{u as j}from"./useProfile-BXMCfWxq.js";import{L as M}from"./Layout-C9wm3cxr.js";import{P as L}from"./PageBase-PVDRI2R2.js";import{H as B}from"./Heading-Otl-Ib-S.js";import{B as y}from"./Button-OKMeorO5.js";import{M as v,a as x,b as f}from"./ModalBody-GvvO4sGF.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Bo-vKr5w.js";import"./TimelineBase-DuIaExxm.js";import"./Flex-Cy28VffD.js";import"./index-BrTdOUlk.js";import"./TimelineIcon-C-OFruHZ.js";import"./XMark-5G2rqhrX.js";import"./useId-CwF4wxTL.js";import"./Icon-Dao4TSf9.js";import"./Skeleton-8DklmnzK.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./CircleFill-BJV8P97k.js";import"./Byline-DEuCU6Hn.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./Timeline-BMMOOlgS.js";import"./TimelineActivity-EfnssLZI.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Plus-DTlIM-KK.js";import"./Dropdown-DDoGMqNi.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./FieldBase-BPqKon2e.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Checkmark-JWLDNW8H.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./ChevronUpDown-CVYa19Ee.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonGroupDivider-ff9B_AjZ.js";import"./ToolbarMenu-BM3yaZDN.js";import"./ToolbarSearch-6B-Iqxad.js";import"./useProfileLayout-B0wpWrLK.js";import"./HeartFill-B2O-pGHr.js";import"./Bell-CqR_GCXB.js";import"./Bookmark-CKRc-mIU.js";import"./ClockDashed-0qd6mo8-.js";import"./globalMenu-BxtgWRIy.js";import"./PersonCircle-EOFyGUwS.js";import"./Buildings2-TPl-W-Aw.js";import"./InboxFill-CAHNcSmn.js";import"./MenuGrid-DLVVZ2an.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-cVVZTQ-I.js";import"./Trash-C8jSETfh.js";import"./useLayout-DoUfOd_L.js";import"./useLocale-CkSteAqX.js";import"./useAccountMenu-VhGFIA2t.js";import"./header-DGMFgBuH.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-E16yWgeI.js";import"./Banner-Br0WSxiA.js";import"./GlobalHeader-IcwxybF9.js";import"./useIsDesktop-Dz-OMeoK.js";import"./GlobalAccountButton-XS7oC2wJ.js";import"./ChevronDown-CbPk4DLa.js";import"./Enter-YjTQHWom.js";import"./GlobalMenuButton-CSjLcU9z.js";import"./MenuHamburger-CDbgLMEh.js";import"./ChevronUp-1RXiKLsv.js";import"./AccountSelector-CK0TFOGZ.js";import"./button-Byovksc3.js";import"./heading-Dzxt-Xj0.js";import"./AccountMenu-DFEyY2mN.js";import"./Switch-DagNs5eW.js";import"./GlobalMenu-DAnQblRj.js";import"./ArrowUndo-CchR6_Y_.js";import"./Globe-kuwFCIDb.js";import"./BreadcrumbsLink-BAgWVLB6.js";import"./ArrowRight-BoKSjLde.js";import"./Footer-Bh5XJ8H1.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
