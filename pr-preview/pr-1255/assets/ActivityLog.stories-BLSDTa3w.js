import{aa as u,a7 as t,c as g}from"./iframe-Dm8TtyEm.js";import{u as l}from"./useActivityLogToolbar-TEmsLq3W.js";import{M as y,b as v,a as x}from"./ModalBody-BPhOhrPb.js";import{A as c}from"./ActivityLogItem-BZMNSDv5.js";import{T as f}from"./Toolbar-Cr4Ik5xT.js";import{S as A}from"./Section-BrWI6aLb.js";import{u as j}from"./useProfile-BauiFwL-.js";import{L as M}from"./Layout-DCgY1UDH.js";import{P as L}from"./PageBase-Bz1eg51F.js";import{H as C}from"./Heading-o839anme.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-HtfurA5B.js";import"./AvatarGroup-BsqgGW-3.js";import"./Flex-Cpk93h3c.js";import"./TimelineSegment-Dn5DoUWH.js";import"./TimelineBase-BojxmNCA.js";import"./TimelineIcon-DA35Ocua.js";import"./CircleFill-BCABYJiB.js";import"./Byline-BVGszpIB.js";import"./Typography-DQcL3Ryl.js";import"./useHighlightedText-C_daNKpv.js";import"./Timeline-d34rqOsO.js";import"./TimelineActivity-pbAQVApk.js";import"./useDropdownMenuController-CfwueQUn.js";import"./Dropdown-CZ-eIzfb.js";import"./SearchField-BpAQrR42.js";import"./MagnifyingGlass-CNs4qd9f.js";import"./FieldBase-CGX4UQb4.js";import"./Field-C6fjvq8K.js";import"./Label-CNUH_E96.js";import"./Input-CDGaFfUN.js";import"./useMenu-C6oFKHtp.js";import"./MenuListItem-DVBeGhr8.js";import"./MenuListHeading-B94v3TIt.js";import"./MenuItem-BrCYHgzq.js";import"./ItemMedia-Cx5_mc3M.js";import"./Checkmark-BrBHBs34.js";import"./ItemLabel-dygaK8X7.js";import"./ItemControls-DU_1Chfl.js";import"./Badge-BUZLj2O_.js";import"./Tooltip-CnXzuJ5u.js";import"./ChevronRight-C5Kx_riS.js";import"./index-nln3YNzx.js";import"./InformationSquare-DpmHVTHW.js";import"./Plus-C1QsrUU0.js";import"./ButtonGroup-Cvq3R7p4.js";import"./ButtonGroupDivider-DZY-jAP1.js";import"./ChevronUpDown-WNhFs5tk.js";import"./ToolbarMenu-B0ka5Fx1.js";import"./ToolbarSearch-jDeYxRSL.js";import"./useProfileLayout-C2yqKBI6.js";import"./HeartFill-DqmA_Jut.js";import"./Bell-DFZYtnEr.js";import"./Bookmark-Ck_hNx8n.js";import"./ClockDashed-Dr81oEw7.js";import"./globalMenu-Cmadcfyd.js";import"./PersonCircle-BcqezSYc.js";import"./Buildings2-CJolY4P2.js";import"./InboxFill-DE57VLrT.js";import"./MenuGrid-DUKAUXdJ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DmUB7KJ0.js";import"./Trash-RbVwKsoy.js";import"./useLayout-D36dTxj8.js";import"./useLocale-D73XwXoi.js";import"./useAccountMenu-CXC8IvVd.js";import"./header-Dpv3uMvj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-dA1an7OV.js";import"./Banner-7lwLg6nV.js";import"./GlobalHeader-ONe65a5C.js";import"./useIsDesktop-PfKLad4r.js";import"./GlobalAccountButton-CNPdUPYy.js";import"./ChevronDown-DmzEbvsc.js";import"./Enter-Blu4zaop.js";import"./GlobalMenuButton-BK6FRizj.js";import"./MenuHamburger-B-zrC2zx.js";import"./ChevronUp-Bb-oLMAx.js";import"./AccountSelector-_-HMhAyF.js";import"./Switch-DFtj9zqM.js";import"./AccountMenu-DGBBpGC3.js";import"./GlobalMenu-DLmJOPU5.js";import"./ArrowUndo-DB164unm.js";import"./Globe-gYssCq7T.js";import"./BreadcrumbsLink-Cmiur_RN.js";import"./ArrowRight-BSwHEhfL.js";import"./Footer-CjfYJLnz.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
