import{j as o,r as u}from"./iframe-CdkbiINU.js";import{u as l}from"./useActivityLogToolbar-DpHPHuDZ.js";import{A as c}from"./ActivityLogItem--ofqzm0m.js";import{S as A}from"./Section-CxpgG4VY.js";import{T as g}from"./Toolbar-FEoFjgSu.js";import{u as j}from"./useProfile-BO1mKfVT.js";import{L as M}from"./Layout-LN12fKls.js";import{P as L}from"./PageBase-Da9eaYxe.js";import{H as B}from"./Heading-pV_B_Yzg.js";import{B as y}from"./Button-DbqBa2Ra.js";import{M as v,a as x,b as f}from"./ModalBody-B1FGT2pR.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BbFWjnZR.js";import"./TimelineBase-mz7myEE8.js";import"./Flex-B60SO79o.js";import"./index-ClUlC5r_.js";import"./TimelineIcon-gsJEDSdR.js";import"./XMark-CXTea0I2.js";import"./useId-BBNwfwR-.js";import"./Icon-Cn1mWE7M.js";import"./Skeleton-DNrLKFK9.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./CircleFill-Bt7MiPip.js";import"./Byline-C6b88TbQ.js";import"./Typography-CbNgqrog.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Timeline-FU2uTl5s.js";import"./TimelineActivity-DXtjwjC4.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Plus-BlZ2V0ro.js";import"./Dropdown-B3ZWUXYU.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./FieldBase-CADFK9ds.js";import"./Label-DOiiUdXJ.js";import"./tooltip-ClrKYCC2.js";import"./Input-CXgAq3E9.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Checkmark-B8HStk1Z.js";import"./ItemControls-2WNlOUKw.js";import"./ChevronRight-WcqCaCSB.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./ChevronUpDown-B4AZ7UWd.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonGroupDivider-Buidn4Ls.js";import"./ToolbarMenu-Bc9cebGQ.js";import"./ToolbarSearch-DGxkCR-N.js";import"./useProfileLayout-y-XjK-nr.js";import"./HeartFill-vVx3GXlt.js";import"./Bell-rY58_Vrj.js";import"./Bookmark-DvWCxKLU.js";import"./ClockDashed-Da5zW20o.js";import"./globalMenu-tgsqT7sD.js";import"./PersonCircle-LFFErccD.js";import"./Buildings2-B6DX2ZbA.js";import"./InboxFill-DVVOb2iZ.js";import"./MenuGrid-CY0Q_UsS.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-5hJJ1NJt.js";import"./Trash-D4pY1Rc-.js";import"./useLayout-DgFkx46j.js";import"./useLocale-D3mY-h9s.js";import"./useAccountMenu-RyIUwxtk.js";import"./header-C6PCT9u1.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CML0sBUI.js";import"./Banner-BBhGqGPx.js";import"./GlobalHeader-Drip1D80.js";import"./useIsDesktop-BeFJPxgu.js";import"./GlobalAccountButton-PpS-HXEW.js";import"./ChevronDown-DqPtLl_G.js";import"./Enter-DES-VDJ8.js";import"./GlobalMenuButton-B1CAeQET.js";import"./MenuHamburger-CYCqXYse.js";import"./ChevronUp-zAhIBGoC.js";import"./AccountSelector-C2kSlN_v.js";import"./AccountMenu-eWReyBQ6.js";import"./Switch-Cw7IuUMn.js";import"./GlobalMenu-C_l3UvsO.js";import"./ArrowUndo-C2yeCY3h.js";import"./Globe-fe3HaoO0.js";import"./BreadcrumbsLink-tOvioorb.js";import"./ArrowRight-D3UAGOAj.js";import"./Footer-CUB00Xkk.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const dt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,dt as __namedExportsOrder,ct as default};
