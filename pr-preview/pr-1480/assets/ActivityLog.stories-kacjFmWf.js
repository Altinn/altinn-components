var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{aa as g,a7 as o,c as y}from"./iframe-DdPcKG0O.js";import{u as c}from"./useActivityLogToolbar-DIING8XB.js";import{M as v,b as x,a as f}from"./ModalBody-ClEfishX.js";import{A as d}from"./ActivityLogItem-CUd_NNKN.js";import{T as A}from"./Toolbar-WAXFuVwu.js";import{S as M}from"./Section-C3SZ48VL.js";import{u as L}from"./useProfile-CkwWtVYQ.js";import{L as C}from"./Layout-abpSdaPk.js";import{P as B}from"./PageBase-BA0lD-EE.js";import{H as k}from"./Heading-BJje4zKM.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./Flex-Cxkl80LA.js";import"./TimelineSegment-b_hvOfGN.js";import"./TimelineBase-BxH669sj.js";import"./TimelineIcon-Ca5x371N.js";import"./CircleFill-DwKhLUZ4.js";import"./Byline-4Yminzw9.js";import"./Typography-D4dRQ14t.js";import"./useHighlightedText-BvQbOG8T.js";import"./Timeline-ChmLQCLl.js";import"./TimelineActivity-DKR3Riqz.js";import"./useDropdownMenuController-C4DxR2qZ.js";import"./useIsDesktop-Db5oQl2d.js";import"./Dropdown-COjWQps0.js";import"./SearchField-DZAM9WJB.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-DvG6YRWZ.js";import"./MenuListItem-DT2WooyF.js";import"./MenuListDivider-Dinu7Rw4.js";import"./MenuItem-BOFr4MJg.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./ItemLabel-vi7acRQa.js";import"./ItemControls-Bf5MqGaN.js";import"./Badge-BzZwcsiz.js";import"./Tooltip-wlipxmMb.js";import"./ChevronRight-Cmdt4Cn7.js";import"./FieldBase-V879Q4R4.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";import"./Input-RBXxlYal.js";import"./useMenu-B_zDT5uM.js";import"./InformationSquare-RfPtjfhK.js";import"./Plus-DSTjtDMb.js";import"./ButtonGroup-7J0PZlIk.js";import"./ButtonGroupDivider-LYfK3ofr.js";import"./ChevronUpDown-BnhMaCJz.js";import"./ToolbarMenu-QyugjYIs.js";import"./ToolbarSearch-BFIgyWsS.js";import"./useProfileLayout-CULe7x0R.js";import"./HeartFill-BIqdK5f8.js";import"./Bell-B_p1_Gag.js";import"./Bookmark-D4xtpkN-.js";import"./ClockDashed-BKb7SczD.js";import"./globalMenu-DImnYpf6.js";import"./PersonCircle-D31QT1Vw.js";import"./Buildings2-DptQBOZ0.js";import"./InboxFill-DNUdwCna.js";import"./MenuGrid-DWVFfKff.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Ru5RTNZx.js";import"./Trash-CS2QUAEY.js";import"./useLayout-pYUVznTo.js";import"./useLocale-C5aYDsSd.js";import"./useAccountMenu-BPX8SLoq.js";import"./header-Ce6970so.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-XB2ueEYu.js";import"./CookieBanner-DqZLgQb-.js";import"./Link-BOlpc0iE.js";import"./Banner-CZ375lTk.js";import"./GlobalHeader-AGgSr_4d.js";import"./GlobalAccountButton-YjQ0C6XK.js";import"./ChevronDown-Bg2scdYv.js";import"./Enter-HqcRumc5.js";import"./GlobalMenuButton-sxX9OeGz.js";import"./MenuHamburger-D6OlWMiZ.js";import"./ChevronUp-DhLREmKD.js";import"./AccountSelector-D-sw94Xn.js";import"./Switch-GG9A6A0W.js";import"./AccountMenu-B95Q69sF.js";import"./GlobalMenu-JRG16Ahg.js";import"./Checkmark-CRn1GEhZ.js";import"./ArrowUndo-Bxuz6WKg.js";import"./Globe-BDvt3sjf.js";import"./BreadcrumbsLink-DBNxqeKE.js";import"./ArrowRight-Dgw6wxdS.js";import"./Footer-rqwLtXl1.js";const ut={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),gt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,gt as __namedExportsOrder,ut as default};
