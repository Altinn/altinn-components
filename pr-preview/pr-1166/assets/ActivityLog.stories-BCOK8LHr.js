import{j as o,r as u}from"./iframe-BLYnYdJi.js";import{u as l}from"./useActivityLogToolbar-emObCnZm.js";import{A as c}from"./ActivityLogItem-BikmOzEY.js";import{S as A}from"./Section-B5XykhYf.js";import{T as g}from"./Toolbar-CewnHVzf.js";import{u as j}from"./useProfile-B79Hhx11.js";import{L as M}from"./Layout-DwpQKWX0.js";import{P as L}from"./PageBase-RnJAzFyN.js";import{H as B}from"./Heading-BbPallRO.js";import{B as y}from"./Button-DA7PTG8V.js";import{M as v,a as x,b as f}from"./ModalBody-BORqoVqO.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-PjwYZ5cE.js";import"./TimelineBase-MfQaxM1M.js";import"./TimelineIcon-DNdHXxKv.js";import"./XMark-Df3dBUtr.js";import"./useId-X7maRfkh.js";import"./Icon-BBgjdpk7.js";import"./index-B87fQ9Ty.js";import"./Skeleton-DVFvYbaO.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Flex-CND7PM33.js";import"./CircleFill-wHm-bUgI.js";import"./Byline-rn6rol_O.js";import"./Typography-CnODk9AP.js";import"./useHighlightedText-omqdYwyr.js";import"./Timeline-qDqIn0jX.js";import"./TimelineActivity-BydJ_EM6.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Plus-BP2D1YPb.js";import"./Dropdown-B_CqShRd.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./FieldBase-CvSJrP7q.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Checkmark-DfNuFQY9.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./ChevronUpDown-Bi5y66ZT.js";import"./ButtonGroup-CEDbAWnm.js";import"./ButtonGroupDivider-CvTb59sy.js";import"./ToolbarMenu-2H_l_H82.js";import"./ToolbarSearch-Cwhqz22J.js";import"./useProfileLayout-BJd8Rf5S.js";import"./HeartFill-H3FcMj78.js";import"./Bell-Cb-YtyNE.js";import"./Bookmark-DwmprL4z.js";import"./ClockDashed-DbsDanPS.js";import"./globalMenu-SyfRWbyA.js";import"./PersonCircle-osD0t2d-.js";import"./Buildings2-DxfjqMPA.js";import"./InboxFill-DJ5M8-wl.js";import"./MenuGrid-DofngXnY.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CQEKpySn.js";import"./Trash-C9XX2244.js";import"./useLayout-B3Y3gbI_.js";import"./useLocale-DZnOEi77.js";import"./useAccountMenu-DLvfrgi6.js";import"./header-C_Gbiqa6.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-xYEyUiMN.js";import"./Banner-S7BmrX51.js";import"./GlobalHeader-DbSCgnog.js";import"./useIsDesktop-Bj1AMvX0.js";import"./GlobalAccountButton-D4kgT2nn.js";import"./ChevronDown-2Zea4dpX.js";import"./Enter-v6RvFZ3i.js";import"./GlobalMenuButton-CMkoCf-z.js";import"./MenuHamburger-C7T2DwIu.js";import"./ChevronUp-B2zncOUr.js";import"./AccountSelector-6_TLy5eI.js";import"./button-B4GPokGl.js";import"./heading-BECUkATt.js";import"./AccountMenu-BDV5Y0Z5.js";import"./Switch-B7L3DRqE.js";import"./GlobalMenu-DDUT5luW.js";import"./ArrowUndo-nSuILEr9.js";import"./Globe-DWIPGG6q.js";import"./BreadcrumbsLink-D9gY_2H_.js";import"./ArrowRight-C7Lk-vhQ.js";import"./Footer-CtxgjrB5.js";const vt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
