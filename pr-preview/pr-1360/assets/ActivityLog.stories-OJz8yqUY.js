import{aa as u,a7 as t,c as g}from"./iframe-BKPYfBaP.js";import{u as l}from"./useActivityLogToolbar-BgvJ145y.js";import{M as y,b as v,a as x}from"./ModalBody-qGK1jZij.js";import{A as c}from"./ActivityLogItem-C7jEXgaT.js";import{T as f}from"./Toolbar-BGxc1toz.js";import{S as A}from"./Section-DIn3fiOi.js";import{u as j}from"./useProfile-CL6gEqI3.js";import{L as M}from"./Layout-CMjm2tJC.js";import{P as L}from"./PageBase-DhDayEgN.js";import{H as C}from"./Heading-BlMy4Ad2.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Flex-Dg9OypdH.js";import"./TimelineSegment-DycxLSzW.js";import"./TimelineBase-AENhl5Co.js";import"./TimelineIcon-DImCAO8G.js";import"./CircleFill-BaHid1vn.js";import"./Byline-CWryxIQc.js";import"./Typography-Cdqx97qL.js";import"./useHighlightedText-BNKt0Eyh.js";import"./Timeline-BnUfpMSZ.js";import"./TimelineActivity-Dksk9cBK.js";import"./useDropdownMenuController-BCeELClC.js";import"./Dropdown-BaK7GwBJ.js";import"./SearchField-BEBaG6GH.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./FieldBase-BZsWcTUs.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./useMenu-BEKNpnot.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronRight-CfHO682k.js";import"./InformationSquare-BcX77Iuf.js";import"./Plus-3k5Jqwe2.js";import"./ButtonGroup-CQeTBn3N.js";import"./ButtonGroupDivider-BMGjWlQi.js";import"./ChevronUpDown-BrFQGHzL.js";import"./ToolbarMenu-CRWcjhoA.js";import"./ToolbarSearch-RJ7X-8dT.js";import"./useProfileLayout-C1m78Ir4.js";import"./HeartFill-ClW5moNW.js";import"./Bell-BMZ0DcwT.js";import"./Bookmark-C7VR73qx.js";import"./ClockDashed-BrEdvt7Z.js";import"./globalMenu-DSOs4F-M.js";import"./PersonCircle-ClfUp13-.js";import"./Buildings2-C-O3AVkE.js";import"./InboxFill-Dim3XRif.js";import"./MenuGrid-CZS2OUqb.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CIUvgHr0.js";import"./Trash-Cnwe6yaS.js";import"./useLayout-BVUGlFtZ.js";import"./useLocale-o4iH5XfL.js";import"./useAccountMenu-DTnieR8A.js";import"./header-CqqbQ1CR.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BCWqN3F4.js";import"./CookieBanner-C99ddqmD.js";import"./Banner-DMEYucF2.js";import"./GlobalHeader-C_THL8xz.js";import"./useIsDesktop-EkiOMZ7A.js";import"./GlobalAccountButton-DjUCe58B.js";import"./ChevronDown-CR6j5uYN.js";import"./Enter-Cp7eRPyv.js";import"./GlobalMenuButton-BKYW8NoQ.js";import"./MenuHamburger-BprZ1BzR.js";import"./ChevronUp-B-ED2Onp.js";import"./AccountSelector-D2m594M4.js";import"./Switch-T1iKx95o.js";import"./AccountMenu-BBS5mw4I.js";import"./GlobalMenu-Bub5e2_m.js";import"./ArrowUndo-CbmIsveB.js";import"./Globe-DzU898X1.js";import"./BreadcrumbsLink-CVY2PFJQ.js";import"./ArrowRight-CJStjUi1.js";import"./Footer-DwEZ0RGQ.js";const ao={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:r}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:r})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:r,onClose:e,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:e}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>e(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:r})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const no=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,a as Default,n as ProfileActivityLog,no as __namedExportsOrder,ao as default};
