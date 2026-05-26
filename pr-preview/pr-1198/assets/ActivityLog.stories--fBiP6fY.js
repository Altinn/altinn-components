import{j as o,r as u}from"./iframe-DU0n7__8.js";import{u as l}from"./useActivityLogToolbar-D5bBKGtr.js";import{A as c}from"./ActivityLogItem-1hbYtdRQ.js";import{S as A}from"./Section-DwU7Gyqo.js";import{T as g}from"./Toolbar-qFeKz95G.js";import{u as j}from"./useProfile-DKtaxMs3.js";import{L as M}from"./Layout-CDrdHTwn.js";import{P as L}from"./PageBase-Dh04bbNa.js";import{H as B}from"./Heading-BrrIdLRc.js";import{B as y}from"./Button-pXyw-iqn.js";import{M as v,a as x,b as f}from"./ModalBody-DelIgQsz.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-4ggIXVeH.js";import"./TimelineBase-DAA1U_vp.js";import"./Flex-C_O_eubX.js";import"./index-sAFX08uI.js";import"./TimelineIcon-BxY7u5AV.js";import"./XMark-DGVnrVrT.js";import"./useId-DCXiBgwp.js";import"./Icon-Dg7nJLrw.js";import"./Skeleton-etbnaSOo.js";import"./Avatar-Bsgd2iIp.js";import"./AvatarGroup-BpsuUsFp.js";import"./CircleFill-BRy5-Kmz.js";import"./Byline-D-DCimye.js";import"./Typography-DOUoXZCv.js";import"./useHighlightedText-Wa_y882s.js";import"./Timeline-BSuOS7nk.js";import"./TimelineActivity-DLK5MAS5.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Plus-BxZePwQm.js";import"./Dropdown-Bvq9VpIR.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Label-DSFEyVbW.js";import"./tooltip-UENHGvJl.js";import"./Input-Cjh3ClWU.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuListHeading-iogtqFYg.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./Checkmark-CCpN8hs9.js";import"./ItemControls-BwQhe1K-.js";import"./ChevronRight-B4fDZY6k.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./ChevronUpDown-DOKppJjP.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonGroupDivider-B64rjX68.js";import"./ToolbarMenu-DIvagWDA.js";import"./ToolbarSearch-DkHlFmo7.js";import"./useProfileLayout-BsvNYqLf.js";import"./HeartFill-CtZjD9gP.js";import"./Bell-BcvPsB0o.js";import"./Bookmark-CKXgK4eW.js";import"./ClockDashed-BJpd6pOc.js";import"./globalMenu-v0OSVy5N.js";import"./PersonCircle-C5Yra1cm.js";import"./Buildings2-BAJoSK4H.js";import"./InboxFill-BY9s4Eha.js";import"./MenuGrid-CH-9RbmU.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BK5DGjhH.js";import"./Trash-MdbyzcW1.js";import"./useLayout-BhWJPcfn.js";import"./useLocale-CXdyMocm.js";import"./useAccountMenu-B1Kjloif.js";import"./header-hSXwTL6l.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DtUBT_fK.js";import"./Banner-B1v-1JYo.js";import"./GlobalHeader-8T2K0YMV.js";import"./useIsDesktop-C2Brmgmw.js";import"./GlobalAccountButton-BhzlUjed.js";import"./ChevronDown-Bfnu4XYc.js";import"./Enter-WxQAMlE7.js";import"./GlobalMenuButton-CkX6sJhh.js";import"./MenuHamburger--Lo7F4E1.js";import"./ChevronUp-B4O89os7.js";import"./AccountSelector-CeYLjN3U.js";import"./AccountMenu-CJHw-x1F.js";import"./Switch-CRWhuB4h.js";import"./GlobalMenu-BDO3Pv-H.js";import"./ArrowUndo-Bx0cXSI_.js";import"./Globe-03FCv489.js";import"./BreadcrumbsLink-DMWRlgdL.js";import"./ArrowRight-DSxX6LAd.js";import"./Footer-CPbR1qGi.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
