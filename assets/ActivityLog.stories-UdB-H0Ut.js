import{aa as u,a7 as t,c as g}from"./iframe-DK-3qaH3.js";import{u as l}from"./useActivityLogToolbar-DsHb8jmX.js";import{M as y,b as v,a as x}from"./ModalBody-DZQNHHny.js";import{A as c}from"./ActivityLogItem-DNAonld2.js";import{T as f}from"./Toolbar-CUmZXEuY.js";import{S as A}from"./Section-DmYaryGo.js";import{u as j}from"./useProfile-gHCJaR2u.js";import{L as M}from"./Layout-za07xPSl.js";import{P as L}from"./PageBase-zF0nqJ2c.js";import{H as C}from"./Heading-DNUoGPcg.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Flex-BBCXBNec.js";import"./TimelineSegment-umL0c5dw.js";import"./TimelineBase-DOmoJ2eJ.js";import"./TimelineIcon-DbJde6Ep.js";import"./CircleFill-z3OzcINA.js";import"./Byline-iVPCQl5-.js";import"./Typography-B48kpFr9.js";import"./useHighlightedText-aZdhyhaW.js";import"./Timeline-Bs8MpbTF.js";import"./TimelineActivity-BwcqeNdX.js";import"./useDropdownMenuController-CvLgPp7R.js";import"./Dropdown-PqayCWXB.js";import"./SearchField--OTsh4KX.js";import"./MagnifyingGlass-DGoMhHAJ.js";import"./FieldBase-CZ_e8plx.js";import"./Field-DU2lFA0F.js";import"./Label-BEcshVOu.js";import"./Input-DJCzCnsD.js";import"./useMenu-Bn-ufHFt.js";import"./MenuListItem-CwhP6zUQ.js";import"./MenuListDivider-gWW_DkP0.js";import"./MenuListHeading-CObV-6CL.js";import"./MenuItem-CrLVrhNO.js";import"./ItemMedia-SL7nkuf2.js";import"./Checkmark-BzKF2oQV.js";import"./ItemLabel-DjAxhpTi.js";import"./ItemControls-CxO-bUey.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./ChevronRight-DR_DMSPj.js";import"./InformationSquare-MLoftbJC.js";import"./Plus-CUtJiv66.js";import"./ButtonGroup-DGe-ZwJP.js";import"./ButtonGroupDivider-DIDGM_5s.js";import"./ChevronUpDown-BbwakfRI.js";import"./ToolbarMenu-o6X6_Fdo.js";import"./ToolbarSearch-DOA0w3r_.js";import"./useProfileLayout-DjlW70ZG.js";import"./HeartFill-1h63XNfU.js";import"./Bell-B2De-DAc.js";import"./Bookmark-DeXjUqMQ.js";import"./ClockDashed-D49TlzQC.js";import"./globalMenu-Ck_iSX4F.js";import"./PersonCircle-CvFeQ7Oq.js";import"./Buildings2-KVjXbMSL.js";import"./InboxFill-BhLOvJ8J.js";import"./MenuGrid-CPHcsF2L.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BmVCa9zu.js";import"./Trash-CT5ztRaN.js";import"./useLayout-CTVxbYti.js";import"./useLocale-U-3CtAWw.js";import"./useAccountMenu-CWmcAL28.js";import"./header-CLH6jJLx.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BvzC-Wpl.js";import"./Banner-CbeZAjMD.js";import"./GlobalHeader-CFDgcWxf.js";import"./useIsDesktop-BSQHhrxG.js";import"./GlobalAccountButton-BU5q9YWA.js";import"./ChevronDown-DHOBL84L.js";import"./Enter-B9VAMW5w.js";import"./GlobalMenuButton-BX7pcybW.js";import"./MenuHamburger-Cf_ch3tL.js";import"./ChevronUp-Clh2aWfB.js";import"./AccountSelector-LRgVrzxj.js";import"./Switch-B1M2WIXB.js";import"./AccountMenu-BNJzO9LN.js";import"./GlobalMenu-CGaNvQmU.js";import"./ArrowUndo-CrYWH9zi.js";import"./Globe-CA-i3fto.js";import"./BreadcrumbsLink-XlKumBTt.js";import"./ArrowRight-tgP-i77C.js";import"./Footer-DjZb6qbB.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
