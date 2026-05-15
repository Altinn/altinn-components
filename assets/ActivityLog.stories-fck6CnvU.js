import{j as o,r as u}from"./iframe-CZMLD2fe.js";import{u as l}from"./useActivityLogToolbar-gD5m5GNh.js";import{A as c}from"./ActivityLogItem-Cr3xcDRb.js";import{S as A}from"./Section-B1dSFwPq.js";import{T as g}from"./Toolbar-BFeDuU1G.js";import{u as j}from"./useProfile-yuj-e10F.js";import{L as M}from"./Layout-DQnnzWtu.js";import{P as L}from"./PageBase-DHcq2BZc.js";import{H as B}from"./Heading-5rlhad8Q.js";import{B as y}from"./Button-z0ZioQWK.js";import{M as v,a as x,b as f}from"./ModalBody-COFFml6R.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-D-MVyGHL.js";import"./TimelineBase-CF191-gr.js";import"./Flex-oWhCvzqt.js";import"./index-iGjPLQV7.js";import"./TimelineIcon-DCG74r1h.js";import"./XMark-BBRiAlI8.js";import"./useId-Dmu9AgSD.js";import"./Icon-CbE8dCFV.js";import"./Skeleton-D52MvI5U.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./CircleFill-BKtrue1o.js";import"./Byline-CqO2f5dT.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Timeline-CO_8ks9U.js";import"./TimelineActivity-BII5Uqyw.js";import"./useDropdownMenuController-Dm3dzHc4.js";import"./Plus-2Q0T7s3R.js";import"./Dropdown-Bx0d8Qo_.js";import"./SearchField-hPGSgF9W.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./FieldBase-bsYRos9m.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Checkmark-CgCD7cxb.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";import"./ChevronUpDown-CYrJfMm2.js";import"./ButtonGroup-lppFG0T2.js";import"./ButtonGroupDivider-Bg56f6eB.js";import"./ToolbarMenu-Dtr-9pM9.js";import"./ToolbarSearch-Bxg4abWw.js";import"./useProfileLayout-CcamlspR.js";import"./HeartFill-Bo9xq64m.js";import"./Bell-gRSHSOzF.js";import"./Bookmark-BvWd1gs8.js";import"./ClockDashed-RUw66Dcn.js";import"./globalMenu-CThTZovX.js";import"./PersonCircle-Cnz-oc73.js";import"./Buildings2-Cd8pIexL.js";import"./InboxFill-dmJCO2GG.js";import"./MenuGrid-GwGTD_sm.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DXvpD1-K.js";import"./Trash-CFAM7fxG.js";import"./useLayout-_ltsB0Y1.js";import"./useLocale-CbEV2YSF.js";import"./useAccountMenu-BUPU4Djz.js";import"./header-DP5aZFPj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Bfb9RqDO.js";import"./Banner-DbuB4eJf.js";import"./GlobalHeader-Bdoxbjrg.js";import"./useIsDesktop-DX1vl52f.js";import"./GlobalAccountButton-DltMrGPB.js";import"./ChevronDown-Bjx7qU4A.js";import"./Enter-B5HAdrS7.js";import"./GlobalMenuButton-BbcRNqJQ.js";import"./MenuHamburger-CM7Wkn6q.js";import"./ChevronUp-C_Nv0CUA.js";import"./AccountSelector-ScZw3yb8.js";import"./button-CZknkFMR.js";import"./heading-BH75kNw6.js";import"./AccountMenu-CfO1iyk0.js";import"./Switch-k_GymHg0.js";import"./GlobalMenu-DqWSpTc_.js";import"./ArrowUndo-CgL76AqI.js";import"./Globe-BgtTiwhv.js";import"./BreadcrumbsLink-UczRN22v.js";import"./ArrowRight-DPzNdnaJ.js";import"./Footer-DNF3SlSL.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
