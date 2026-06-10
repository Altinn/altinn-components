import{aa as u,a7 as t,c as g}from"./iframe-BBxI6Qoj.js";import{u as l}from"./useActivityLogToolbar-DpE4L2Pi.js";import{M as y,b as v,a as x}from"./ModalBody-p8b8lRFV.js";import{A as c}from"./ActivityLogItem-BpYdN9kM.js";import{T as f}from"./Toolbar-qUq-gTSU.js";import{S as A}from"./Section-2oE2jyh4.js";import{u as j}from"./useProfile-sTBcz5qp.js";import{L as M}from"./Layout-DBSRfOHo.js";import{P as L}from"./PageBase-aATV_569.js";import{H as C}from"./Heading-D61lhVl1.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DrVCUDP7.js";import"./AvatarGroup-D15nbx4o.js";import"./Flex-DehNIx1U.js";import"./TimelineSegment-DPztdea6.js";import"./TimelineBase-DhrW_Nrt.js";import"./TimelineIcon-9LBRIVnx.js";import"./CircleFill-65QyoNhO.js";import"./Byline-Ct3bE_id.js";import"./Typography-DsE98WBK.js";import"./useHighlightedText-CESRz6Ap.js";import"./Timeline-BL3vrtGJ.js";import"./TimelineActivity-DGcdx3X_.js";import"./useDropdownMenuController-BP3UF-Yt.js";import"./Dropdown-BGDRJ2sL.js";import"./SearchField-CTzRwjSn.js";import"./MagnifyingGlass-BMZG2bcC.js";import"./FieldBase-De9CwOeM.js";import"./Field-CklQ3uRY.js";import"./Label-DAepOqrA.js";import"./Input-C6iRvbsc.js";import"./useMenu-B76EeFEP.js";import"./MenuListItem-D68tduCT.js";import"./MenuListHeading-lkQwQf3s.js";import"./MenuItem-B1Q66lNx.js";import"./ItemMedia-vu0P71y8.js";import"./Checkmark-CSwkO33y.js";import"./ItemLabel-2sb7Udx3.js";import"./ItemControls-BooS5V5d.js";import"./Badge-BWCWk7xl.js";import"./Tooltip-DgvofOl5.js";import"./ChevronRight-DVToFFYf.js";import"./index-CrzqWcTU.js";import"./InformationSquare-DpMeWUxz.js";import"./Plus-CVz3L4Fh.js";import"./ButtonGroup-xNpv9tyz.js";import"./ButtonGroupDivider-Cu1p1-tn.js";import"./ChevronUpDown-C605i_Hb.js";import"./ToolbarMenu-B0A53xiZ.js";import"./ToolbarSearch-CTaIjpv4.js";import"./useProfileLayout-3ZHlWIXf.js";import"./HeartFill-BWAAYSbE.js";import"./Bell-d-RrgfeX.js";import"./Bookmark-CH5xuqYr.js";import"./ClockDashed-UgLJnkT3.js";import"./globalMenu-C1bEcUXM.js";import"./PersonCircle-BmcQsfYW.js";import"./Buildings2-Dt5ORsGd.js";import"./InboxFill-B3JdzuAj.js";import"./MenuGrid-BzRH4bzG.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Ck8OpCyR.js";import"./Trash-DJ7iEv1M.js";import"./useLayout-CGjz-qEl.js";import"./useLocale-h2waShv3.js";import"./useAccountMenu-D_HJtTzH.js";import"./header-CovcbPX9.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BzRH_5Wl.js";import"./Banner--gUGmORl.js";import"./GlobalHeader-JbFRhCji.js";import"./useIsDesktop-CbM6cjnW.js";import"./GlobalAccountButton-Bna488uj.js";import"./ChevronDown-BJPfgMjs.js";import"./Enter-BCoOYWSk.js";import"./GlobalMenuButton-D7pL8q1U.js";import"./MenuHamburger-CvD6asOf.js";import"./ChevronUp-3jRKbU-M.js";import"./AccountSelector-C_I36wK8.js";import"./Switch-DUcCtjYA.js";import"./AccountMenu-DQjmE_c6.js";import"./GlobalMenu-DBJZtdXl.js";import"./ArrowUndo-pEhOslZu.js";import"./Globe-CKeX3ou_.js";import"./BreadcrumbsLink-BwC98CjP.js";import"./ArrowRight-uL6zEJ5R.js";import"./Footer-D3FXo1We.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
