import{j as o,r as u}from"./iframe-JDDu8qct.js";import{u as l}from"./useActivityLogToolbar-DxL09Dty.js";import{A as c}from"./ActivityLogItem-Cf1Wvu3e.js";import{S as A}from"./Section-0xRJEQzM.js";import{T as g}from"./Toolbar-CSWi7enA.js";import{u as j}from"./useProfile-MhWxBR8M.js";import{L as M}from"./Layout-CqYv2eDy.js";import{P as L}from"./PageBase-tTIpW9-5.js";import{H as B}from"./Heading-DTbUzRnV.js";import{B as y}from"./Button-DJdKIqrT.js";import{M as v,a as x,b as f}from"./ModalBody-BI0E2lEd.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-dBXR8ZwM.js";import"./TimelineBase-Dve48Vgp.js";import"./TimelineIcon-3FJblfDb.js";import"./XMark-YkWOq4QK.js";import"./useId-BWG34Gxg.js";import"./Icon-DIHT6axv.js";import"./index--LOES4hQ.js";import"./Skeleton-CG77vT0k.js";import"./Avatar-C90IY9ut.js";import"./AvatarGroup-iM9HxeRB.js";import"./Flex-BxwOuuQR.js";import"./CircleFill-BGuPgFLU.js";import"./Byline-D5n1Eazz.js";import"./Typography-yaBddsX3.js";import"./useHighlightedText-CEk7sGm4.js";import"./Timeline-6MuHL-Tu.js";import"./TimelineActivity-DMjVf92q.js";import"./useDropdownMenuController-Dq4qSJid.js";import"./Plus-B0ASUJ6t.js";import"./Dropdown-C4SP0e_D.js";import"./SearchField-CPeUZoGo.js";import"./MagnifyingGlass-DxjT3S7Z.js";import"./FieldBase-D3HPIoAl.js";import"./Label-D5tTdPwy.js";import"./index-BaWoKolw.js";import"./use-merge-refs-Dm0wt9US.js";import"./lite-DaUVFjkg.js";import"./Input-BYdHuux7.js";import"./input-qV3rGBnT.js";import"./MenuListItem-CSWiIfGI.js";import"./MenuListHeading-5MWZ1R2O.js";import"./MenuItem-C4GbvFyO.js";import"./ItemMedia-Xjox6rUV.js";import"./Checkmark-D1rpd2hz.js";import"./ItemControls-_7JFqe2W.js";import"./ChevronRight-CAXd-oaR.js";import"./Badge-mnqqv4hK.js";import"./Tooltip-DdVbMRYJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DwkqWK9f.js";import"./InformationSquare-CibJvFTt.js";import"./ChevronUpDown-BaZBG0n4.js";import"./ButtonGroup-BtRMC3LR.js";import"./ButtonGroupDivider-CHx564QR.js";import"./ToolbarMenu-CCel9zNZ.js";import"./ToolbarSearch-BlqHRjKZ.js";import"./useProfileLayout-shrr4qW1.js";import"./HeartFill-CgHryWGN.js";import"./Bell-C0lmnlht.js";import"./Bookmark-EFTc9iO5.js";import"./ClockDashed-6gH_acLs.js";import"./globalMenu-u_GGySNS.js";import"./PersonCircle-BgjjDNG1.js";import"./Buildings2-Dl2Ym5LJ.js";import"./InboxFill-B44yj-mI.js";import"./MenuGrid-DfUfPYiO.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CIT6mhgS.js";import"./Trash-BUbta1pc.js";import"./useLayout-_4AoI4Zu.js";import"./useLocale-CO7w9bPU.js";import"./useAccountMenu-BHRRUMJ3.js";import"./header-Cb0_5b5d.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DhjzLoLd.js";import"./Banner-CpOWy3kF.js";import"./GlobalHeader-Nyiaiope.js";import"./useIsDesktop-Y2CHoPsm.js";import"./GlobalAccountButton-ShTzW6cT.js";import"./ChevronDown-Bp0cSPFx.js";import"./Enter-8voGXUw8.js";import"./GlobalMenuButton-CQEoGbbI.js";import"./MenuHamburger-D7z-4ipp.js";import"./ChevronUp-Skyl4vcA.js";import"./AccountSelector-BoFcIJVp.js";import"./button-xt_-egYh.js";import"./heading-TPm_AWJd.js";import"./AccountMenu-CFZPJtUH.js";import"./Switch-BV9s5x1n.js";import"./GlobalMenu-CofNryLE.js";import"./ArrowUndo-OD1mDHyP.js";import"./Globe-D8fNhFMN.js";import"./BreadcrumbsLink-CdI_pAsN.js";import"./ArrowRight-G6csqhYC.js";import"./Footer-B-zsBcmx.js";const vt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
