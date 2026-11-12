var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-M-0W2Kc9.js";import{u as c}from"./useActivityLogToolbar-B33pDKQO.js";import{M as v,b as x,a as f}from"./ModalBody-D2JzRsow.js";import{A as d}from"./ActivityLogItem-CylW4z1o.js";import{T as A}from"./Toolbar-CvbJikzK.js";import{S as M}from"./Section-BRRFv94H.js";import{u as L}from"./useProfile-BHJJ2Uhv.js";import{L as C}from"./Layout-v6Qt2V8K.js";import{P as B}from"./PageBase-BDisxRkj.js";import{H as k}from"./Heading-BiiiOHzW.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./Flex-CvQqYnnc.js";import"./TimelineSegment-D9j0vQit.js";import"./TimelineBase-Bwk9hpGE.js";import"./TimelineIcon-nvBUnRas.js";import"./CircleFill-DKF9dqV8.js";import"./Byline-Cay2D8Wn.js";import"./Typography-xHph4zf_.js";import"./useHighlightedText-DPRacH3N.js";import"./Timeline-CujAdpf1.js";import"./TimelineActivity-Bv-vpt0x.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./ItemLabel-lDW_MVeZ.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./Plus-DyAe2qPf.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonGroupDivider-BumEVR6W.js";import"./ChevronUpDown-CXgasQ1o.js";import"./ToolbarMenu-CSjJL_Ps.js";import"./ToolbarSearch-thdeVilr.js";import"./useProfileLayout-DhEWxXdS.js";import"./HeartFill-CR39zrNl.js";import"./Bell-DWIt3W7G.js";import"./Bookmark-Bjnly7uL.js";import"./ClockDashed-CE3rKYo4.js";import"./globalMenu-Bte7cBv5.js";import"./PersonCircle-CBGrcbP_.js";import"./Buildings2-YNhXlUod.js";import"./InboxFill-Chtb-S2w.js";import"./MenuGrid-BfyJFOaJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BppFJWLm.js";import"./Trash-DszqcR2r.js";import"./useLayout-BZGgrSK_.js";import"./useLocale-BvsW5Ys3.js";import"./useAccountMenu-_vjgMLUi.js";import"./header-DZ2lWmTS.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DntJm87m.js";import"./CookieBanner-CKoUg9tE.js";import"./Link-DAR5zBg4.js";import"./Banner-Bo7eGbbS.js";import"./GlobalHeader-Be6Dpmtw.js";import"./GlobalAccountButton-By-2tKoX.js";import"./ChevronDown-oFv1HZMB.js";import"./Enter-DvPk9pty.js";import"./GlobalMenuButton-DjmeRY1w.js";import"./MenuHamburger-C2Da0bEq.js";import"./ChevronUp-D7bAfZe9.js";import"./AccountSelector-DjZHSBhK.js";import"./Switch-rSPs52No.js";import"./AccountMenu-GyTJFnAZ.js";import"./GlobalMenu-gxscJUse.js";import"./Checkmark-v-SGYEEX.js";import"./ArrowUndo-BbhWyJt8.js";import"./Globe-BsQeD7rm.js";import"./BreadcrumbsLink-CRb6C2Tw.js";import"./ArrowRight-BaGs8lxe.js";import"./Footer-vBS3rioj.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,ut as __namedExportsOrder,dt as default};
