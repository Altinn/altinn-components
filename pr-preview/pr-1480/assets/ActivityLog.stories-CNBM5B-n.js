var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{aa as g,a7 as o,c as y}from"./iframe-xlSYDLmX.js";import{u as c}from"./useActivityLogToolbar-CkFgQts1.js";import{M as v,b as x,a as f}from"./ModalBody-2B3xwQox.js";import{A as d}from"./ActivityLogItem-Bb8Qv0NW.js";import{T as A}from"./Toolbar-CFX4YYjF.js";import{S as M}from"./Section-Dg4Yy1fe.js";import{u as L}from"./useProfile-Crxiom0p.js";import{L as C}from"./Layout-DLGCtKJK.js";import{P as B}from"./PageBase-COfzMrwb.js";import{H as k}from"./Heading-DK8bpf-l.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Flex-Brl5o9wf.js";import"./TimelineSegment-D0eWJCBN.js";import"./TimelineBase-E6_xiEl_.js";import"./TimelineIcon-Cv0wwOLu.js";import"./CircleFill-BnI_C52F.js";import"./Byline-lo6AH7M_.js";import"./Typography-CBKRdQ-b.js";import"./useHighlightedText-CTgwY4NQ.js";import"./Timeline-5QQY9RQj.js";import"./TimelineActivity-B3SfZveb.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./SearchField-Cm1bebf2.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuListDivider-B_1so_ti.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./ItemLabel-eTSb-Z0L.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronRight-WLOtysjI.js";import"./FieldBase-CKEKDcDW.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./useMenu-C7Dhr05-.js";import"./InformationSquare-DlLj2oH8.js";import"./Plus-B94II9lJ.js";import"./ButtonGroup-CmZy2FTH.js";import"./ButtonGroupDivider-VDvXkf2q.js";import"./ChevronUpDown-BMjPc945.js";import"./ToolbarMenu-DHpy7bGP.js";import"./ToolbarSearch-C7r9vTyz.js";import"./useProfileLayout-Cxck36v-.js";import"./HeartFill-BXqiREJy.js";import"./Bell-1X4Q-x_J.js";import"./Bookmark-CwN43r-K.js";import"./ClockDashed-tCUkFT44.js";import"./globalMenu-DUgS66uh.js";import"./PersonCircle-DbC33sJW.js";import"./Buildings2-B9C4Wpww.js";import"./InboxFill-D1izvkko.js";import"./MenuGrid-C8x75imp.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DNZp7WUs.js";import"./Trash-Dtf6X4Tk.js";import"./useLayout-Cg8VChyL.js";import"./useLocale-DX6DGIz8.js";import"./useAccountMenu-CeKxH1hX.js";import"./header-BbZOjMSG.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DbFcsqGo.js";import"./CookieBanner-Bv33FMRA.js";import"./Link-Dd0FvdCr.js";import"./Banner-Dy_L3DR8.js";import"./GlobalHeader-CPP82mBY.js";import"./GlobalAccountButton-uCDrrwKM.js";import"./ChevronDown-BV4f9W92.js";import"./Enter-BB3yJ8-F.js";import"./GlobalMenuButton-BmrRLFGS.js";import"./MenuHamburger-Di3wOkSc.js";import"./ChevronUp-SNqOJLK8.js";import"./AccountSelector-BEsgKni_.js";import"./Switch-GVxp4VPn.js";import"./AccountMenu-PFjNuNzI.js";import"./GlobalMenu-i-XbP5Gh.js";import"./Checkmark-opEEWy2T.js";import"./ArrowUndo-5Pl34Luc.js";import"./Globe-5mzhGoRG.js";import"./BreadcrumbsLink-CGJPd532.js";import"./ArrowRight-BtJExjIH.js";import"./Footer-oYNbV1h3.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
