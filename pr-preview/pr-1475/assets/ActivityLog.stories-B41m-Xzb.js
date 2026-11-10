var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CFooeFlc.js";import{u as c}from"./useActivityLogToolbar-CDYUjEKz.js";import{M as v,b as x,a as f}from"./ModalBody-DNdyJsNZ.js";import{A as d}from"./ActivityLogItem-CpcdotVm.js";import{T as A}from"./Toolbar-DAk2GL7Y.js";import{S as M}from"./Section-Dn7ldTEr.js";import{u as L}from"./useProfile-t567Yc-z.js";import{L as C}from"./Layout-BlHJit78.js";import{P as B}from"./PageBase-DlZj6Gt8.js";import{H as k}from"./Heading-BvwzGhlC.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./Flex-DvJJETpK.js";import"./TimelineSegment-CF1_r6o9.js";import"./TimelineBase-f5bKR5ib.js";import"./TimelineIcon-DllcVGce.js";import"./CircleFill-BQQoKh7T.js";import"./Byline-DN2wvwMz.js";import"./Typography-DZMMTX6d.js";import"./useHighlightedText-CSeb_EVo.js";import"./Timeline-BCmnnNPR.js";import"./TimelineActivity-BYxMb1UX.js";import"./useDropdownMenuController-D2ORC09B.js";import"./Dropdown-UxeuVY1V.js";import"./SearchField-vc2j7DYW.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./ItemLabel-uOYlRqGI.js";import"./ItemControls-a2iPy1rh.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ChevronRight-Pp6aFK2W.js";import"./FieldBase--dF0uMSe.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./useMenu-Bq9-gO9j.js";import"./InformationSquare-CkGSwppR.js";import"./Plus-uOOnNtuS.js";import"./ButtonGroup-B1Q8fC_M.js";import"./ButtonGroupDivider-CNEu50cf.js";import"./ChevronUpDown-B5XyDIBr.js";import"./ToolbarMenu-BNIlYdJG.js";import"./ToolbarSearch-D3th_CqE.js";import"./useProfileLayout-TtEfxYTs.js";import"./HeartFill-DdHcHph9.js";import"./Bell-s-5O088M.js";import"./Bookmark-Ddp9wjen.js";import"./ClockDashed-DQ2vcEGV.js";import"./globalMenu-V79Pn2VS.js";import"./PersonCircle-dY6cP1lV.js";import"./Buildings2-BcXb6UsZ.js";import"./InboxFill-C_9JPAbS.js";import"./MenuGrid-2a9RgC_E.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Cn31xRbo.js";import"./Trash-RDp0u5kC.js";import"./useLayout-D30LU4br.js";import"./useLocale-BBBFsIWT.js";import"./useAccountMenu-CHt8fAhr.js";import"./header-DWjctTLs.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-CvhSBmX4.js";import"./CookieBanner-gpoAWfQo.js";import"./Link-CAZN9a6X.js";import"./Banner-veWYbJJ0.js";import"./GlobalHeader-CAxn3FbR.js";import"./useIsDesktop-DMKYuN7Q.js";import"./GlobalAccountButton-CxUertbH.js";import"./ChevronDown-DRjCt-FM.js";import"./Enter-Bl8n-sGa.js";import"./GlobalMenuButton-BefVXzoE.js";import"./MenuHamburger-BBOi02AU.js";import"./ChevronUp-2AABqykr.js";import"./AccountSelector-B4QhyC5f.js";import"./Switch-XnFFT3OB.js";import"./AccountMenu-CyQLONBq.js";import"./GlobalMenu-D8aETKbm.js";import"./Checkmark-CL0UyCZk.js";import"./ArrowUndo-Bq7mvHQO.js";import"./Globe-ASfh3ELd.js";import"./BreadcrumbsLink-DQSRC3y-.js";import"./ArrowRight-CiUYzs3Y.js";import"./Footer-B1HwsH9k.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
