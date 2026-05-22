import{j as o,r as u}from"./iframe-C6Awlou2.js";import{u as l}from"./useActivityLogToolbar-CrxvyZ0L.js";import{A as c}from"./ActivityLogItem-DggSVmlo.js";import{S as A}from"./Section-Bo2XNiOH.js";import{T as g}from"./Toolbar-BSEJGUYJ.js";import{u as j}from"./useProfile-mS7EBY7L.js";import{L as M}from"./Layout-DkosuPlP.js";import{P as L}from"./PageBase-BXz-Qr9q.js";import{H as B}from"./Heading-CwC0m1gc.js";import{B as y}from"./Button-xDUaTd0f.js";import{M as v,a as x,b as f}from"./ModalBody-B_QH7FJE.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-Dkd5Mku4.js";import"./TimelineBase-CqlHYWaR.js";import"./Flex-CdwLgxBs.js";import"./index-DlBZqmFk.js";import"./TimelineIcon-CZiXZT2P.js";import"./XMark-BEbAfGHw.js";import"./useId-InpKFtFj.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./CircleFill-B-14-mMP.js";import"./Byline-BNoBNYMp.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Timeline-BD5waoeX.js";import"./TimelineActivity-DFQNLJRO.js";import"./useDropdownMenuController-lE7_h4w8.js";import"./Plus-CQfWxjRv.js";import"./Dropdown-A06NMf9H.js";import"./SearchField-BUnYpq_7.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./FieldBase-D62sKxwt.js";import"./Label-C48-SpFn.js";import"./tooltip-wBWP-9p3.js";import"./Input-DYyIZxUH.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Checkmark-dLQcEakJ.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";import"./ChevronUpDown-ge_2OXZE.js";import"./ButtonGroup-wXquxLDR.js";import"./ButtonGroupDivider-o9_G-o4g.js";import"./ToolbarMenu-CPF48JxQ.js";import"./ToolbarSearch-BoGK01XM.js";import"./useProfileLayout-D-mjqNbK.js";import"./HeartFill-Dg_CH6Vp.js";import"./Bell-Di_o_g2Z.js";import"./Bookmark-RIYX3Zxk.js";import"./ClockDashed-BMcmzfJx.js";import"./globalMenu-CybjX0wT.js";import"./PersonCircle-DsM0wDTq.js";import"./Buildings2-w19VRbAZ.js";import"./InboxFill-DVXSHB4U.js";import"./MenuGrid-Dv5t6gnm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Cyt7GbXr.js";import"./Trash-Ccqpg617.js";import"./useLayout-B8PTDzN0.js";import"./useLocale-CIxgB-nI.js";import"./useAccountMenu-BFMEUnig.js";import"./header-08uVwnCK.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-ClJhy9R4.js";import"./Banner-B2-xsWiw.js";import"./GlobalHeader-D9yJCn9E.js";import"./useIsDesktop-D-E7EXZk.js";import"./GlobalAccountButton-DR_MSRuC.js";import"./ChevronDown-BaaUSGet.js";import"./Enter-By-vbuTM.js";import"./GlobalMenuButton-zLuNCWIe.js";import"./MenuHamburger-BcKlYS8F.js";import"./ChevronUp-CFyLtqTc.js";import"./AccountSelector-DOlRr3zX.js";import"./AccountMenu-BizNTwai.js";import"./Switch-gn6KCAh3.js";import"./GlobalMenu-DaKgjP9J.js";import"./ArrowUndo-CHAtcjGp.js";import"./Globe-CwfeybF1.js";import"./BreadcrumbsLink-BMloO8NQ.js";import"./ArrowRight-DqNeR1fr.js";import"./Footer-CBH_g3LI.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
