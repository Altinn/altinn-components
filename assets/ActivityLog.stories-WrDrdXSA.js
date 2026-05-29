import{s as u,p as o}from"./iframe-D7BK96qe.js";import{u as l}from"./useActivityLogToolbar-2ZSEeJap.js";import{B as g}from"./Button-UbmuloFB.js";import{M as y,b as v,a as x}from"./ModalBody-CO_In9L6.js";import{A as c}from"./ActivityLogItem-CkRGt3G2.js";import{T as f}from"./Toolbar-BOGkIlzT.js";import{S as A}from"./Section-G7MRDbZ9.js";import{u as j}from"./useProfile-Cz-MfHw4.js";import{L as M}from"./Layout-D7xrS6Ks.js";import{P as L}from"./PageBase-HcfgyaWR.js";import{H as B}from"./Heading-Q-ep_pj6.js";import"./preload-helper-PPVm8Dsz.js";import"./tooltip-B8elfXS-.js";import"./index-CL9j6gFH.js";import"./XMark-DKvmykI8.js";import"./useId-B1IjdNvC.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Flex-DKrdkBVD.js";import"./TimelineSegment-CjOF6etu.js";import"./TimelineBase-BqE-Ki6u.js";import"./TimelineIcon-DsPGG0HM.js";import"./CircleFill-Btk7EFGY.js";import"./Byline-Q4XhunLC.js";import"./Typography-CoOY9SxO.js";import"./useHighlightedText-C3262gRX.js";import"./Timeline-DpmRM599.js";import"./TimelineActivity-BqtxGF2O.js";import"./useDropdownMenuController-D8oAtfoQ.js";import"./Dropdown-CHIS9Scb.js";import"./SearchField-D67W67ub.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./FieldBase-DmZ-AQhF.js";import"./Label-DW0yr3EV.js";import"./Input-wwG44gvy.js";import"./useMenu-CRon1bQ1.js";import"./MenuListItem-CLhEP-2O.js";import"./MenuListHeading-U2jvLcu6.js";import"./MenuItem-BkvPF8Fg.js";import"./ItemMedia-BmnjDO8T.js";import"./Checkmark-BPQmQq7A.js";import"./ItemLabel-CTolDWEe.js";import"./ItemControls-BZAZaWU9.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./ChevronRight-B2Fr_XJI.js";import"./index-P9j8YxHr.js";import"./InformationSquare-BFNj1lbk.js";import"./Plus-C-8iSYwG.js";import"./ButtonGroup-DiPjg2lm.js";import"./ButtonGroupDivider-CgeFqPtI.js";import"./ChevronUpDown-BANlVG6s.js";import"./ToolbarMenu-D4V0JlAe.js";import"./ToolbarSearch-DjyhuTHy.js";import"./useProfileLayout-BdxKiWsE.js";import"./HeartFill-BglTcypd.js";import"./Bell-C4qxT1ql.js";import"./Bookmark-CcynwizE.js";import"./ClockDashed-BbDHzBaM.js";import"./globalMenu-oxCVDVZW.js";import"./PersonCircle-CzGMptDK.js";import"./Buildings2-De8pexF1.js";import"./InboxFill-kAZ11OFJ.js";import"./MenuGrid-BRqUiwsl.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CZ8Zskdn.js";import"./Trash-CmRN9Bc1.js";import"./useLayout-P8sIdQQz.js";import"./useLocale-BJvoajDt.js";import"./useAccountMenu-BFANgFKU.js";import"./header-k5qb7O3o.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Bg8vaqMH.js";import"./Banner-YynZTVZC.js";import"./GlobalHeader-CvXHZKKu.js";import"./useIsDesktop-PMHXXYUc.js";import"./GlobalAccountButton-BSlA4uPB.js";import"./ChevronDown-RBr9MJP5.js";import"./Enter-DaYQWjuH.js";import"./GlobalMenuButton-D1XqvnHT.js";import"./MenuHamburger-Bs0s8Y7O.js";import"./ChevronUp-CmwigBl7.js";import"./AccountSelector-C8v5N-Us.js";import"./Switch-qdZlSErG.js";import"./AccountMenu-19aQyamh.js";import"./GlobalMenu-C8GOo16D.js";import"./ArrowUndo-DBwwr2s1.js";import"./Globe-Cpr4Y4_L.js";import"./BreadcrumbsLink-DIUVIcMw.js";import"./ArrowRight-C46TxStQ.js";import"./Footer-C_NfrQSv.js";const dt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(f,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(y,{open:r,onClose:e,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(x,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(y,{open:s,onClose:d,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(x,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(f,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
