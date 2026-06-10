import{aa as u,a7 as t,c as g}from"./iframe-B8reGtNb.js";import{u as l}from"./useActivityLogToolbar-Cp9OPhyh.js";import{M as y,b as v,a as x}from"./ModalBody-BAO_heQB.js";import{A as c}from"./ActivityLogItem-ZJxtl38R.js";import{T as f}from"./Toolbar-D2RYFt88.js";import{S as A}from"./Section-DovdLmcg.js";import{u as j}from"./useProfile-Dnjk6F5S.js";import{L as M}from"./Layout-BtIVNKSD.js";import{P as L}from"./PageBase-BxTPhJa3.js";import{H as C}from"./Heading-Cybus3jr.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Flex-qoZntq9f.js";import"./TimelineSegment-AeFKhBSN.js";import"./TimelineBase-BOaWzkBw.js";import"./TimelineIcon-LTVX4tHa.js";import"./CircleFill-BVhjmzUv.js";import"./Byline-Cu5NuYMg.js";import"./Typography-Dxv9MSbD.js";import"./useHighlightedText-ZBcygk0-.js";import"./Timeline-C1kmDtHR.js";import"./TimelineActivity-B_7lWdPn.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./SearchField-CW2nl4m_.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./FieldBase-DDJWfLpA.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./useMenu-G7RJHCVr.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuListHeading-BEkIHHSP.js";import"./MenuItem-b6Fzjl6t.js";import"./ItemMedia-B3mE-krC.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ChevronRight-BRSkVVAW.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./Plus-Ck-NVedy.js";import"./ButtonGroup-LpI9N8Q_.js";import"./ButtonGroupDivider-U6otbiA_.js";import"./ChevronUpDown-DMiF3376.js";import"./ToolbarMenu-Byul9EYL.js";import"./ToolbarSearch-BwAYIpys.js";import"./useProfileLayout-COFaWQ0h.js";import"./HeartFill-Cd3MetJy.js";import"./Bell-jZVV-fm0.js";import"./Bookmark-BkYwOVnq.js";import"./ClockDashed-Bck2BPa9.js";import"./globalMenu-CAHdZk2u.js";import"./PersonCircle-8zq8UCe7.js";import"./Buildings2-yXpbPS2f.js";import"./InboxFill-DZO1RCYN.js";import"./MenuGrid-DUOkUJ_e.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DhWzN6pb.js";import"./Trash-BwJUxhUJ.js";import"./useLayout-DyDpIziV.js";import"./useLocale-DuxjwPpw.js";import"./useAccountMenu-RI6BdrHE.js";import"./header-CT-kzGQY.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DFS3DuOU.js";import"./Banner-r-U3Cb6i.js";import"./GlobalHeader-pkP8gSeA.js";import"./useIsDesktop-8-GHnyaN.js";import"./GlobalAccountButton-DuBGo6fg.js";import"./ChevronDown-Cin8-QCk.js";import"./Enter-CLqIKE_3.js";import"./GlobalMenuButton-BiVkXz99.js";import"./MenuHamburger-CHdAjUqn.js";import"./ChevronUp-B4Qw2TyU.js";import"./AccountSelector-B35oC7Oo.js";import"./Switch-BkDsJFfA.js";import"./AccountMenu-CsigFq3b.js";import"./GlobalMenu-ClOo-T6M.js";import"./ArrowUndo-CqT7_P72.js";import"./Globe-DPkwBtVA.js";import"./BreadcrumbsLink-CBiRFfdZ.js";import"./ArrowRight-BiaOeh9q.js";import"./Footer-BDdV_XIi.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
