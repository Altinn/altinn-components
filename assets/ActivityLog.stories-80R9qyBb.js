var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-qf9-WDF6.js";import{u as c}from"./useActivityLogToolbar-C5erPPk3.js";import{M as v,b as x,a as f}from"./ModalBody-DN9VxJSA.js";import{A as d}from"./ActivityLogItem-CDyjWRPH.js";import{T as A}from"./Toolbar-DBfE8GuP.js";import{S as M}from"./Section-ChrYIfRO.js";import{u as L}from"./useProfile-CVwEwevv.js";import{L as C}from"./Layout-CSnqG8x3.js";import{P as B}from"./PageBase-BEU5ciLL.js";import{H as k}from"./Heading-BHDuq3TV.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./Flex-CKfD6hy-.js";import"./TimelineSegment-BY-W3b73.js";import"./TimelineBase-Ck3nCwDK.js";import"./TimelineIcon-CYgkyooN.js";import"./CircleFill-Bh7yaJk9.js";import"./Byline-C9lpZQMK.js";import"./Typography-BcM5UJCL.js";import"./useHighlightedText-CpVNHUyQ.js";import"./Timeline-G0k63p5y.js";import"./TimelineActivity-NqjiesJt.js";import"./useDropdownMenuController-CAFbDRJV.js";import"./Dropdown-uPy0PMPK.js";import"./SearchField-_nVMBmov.js";import"./MagnifyingGlass-Cdozzsty.js";import"./MenuListItem-DipxFI8g.js";import"./MenuListDivider-jbpIOTgw.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemMedia-Fak15njE.js";import"./ItemLabel-99ZX_KO1.js";import"./ItemControls-BmhBXfnl.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ChevronRight-NAoaHsS_.js";import"./FieldBase-D7ZJbpSW.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./useMenu-DZRK4ukY.js";import"./InformationSquare-Diuvkxkj.js";import"./Plus-BtfN9nMF.js";import"./ButtonGroup-DXN6Nzfu.js";import"./ButtonGroupDivider-BzbYKi0l.js";import"./ChevronUpDown-C83RLQgx.js";import"./ToolbarMenu-B5A5zOjS.js";import"./ToolbarSearch-DTGKesz7.js";import"./useProfileLayout-BEhbWuN4.js";import"./HeartFill-CdPXTECY.js";import"./Bell-D-EPgGu6.js";import"./Bookmark-BclP6BG9.js";import"./ClockDashed-CvnPC6A_.js";import"./globalMenu-vY7cibjq.js";import"./PersonCircle-CwV4buWC.js";import"./Buildings2-BeNd78fo.js";import"./InboxFill-BH39gt5n.js";import"./MenuGrid-CSQ0FslJ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-u7sh-Eny.js";import"./Trash-BZaaSweo.js";import"./useLayout-CAjur4Yx.js";import"./useLocale-DbVlmmET.js";import"./useAccountMenu-GfsylDPs.js";import"./header-B65mkvEc.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Bg14e_ii.js";import"./CookieBanner-CUQkNZM8.js";import"./Link-CQZsL-OO.js";import"./Banner-DxeQHfsW.js";import"./GlobalHeader-CFG6zT8I.js";import"./useIsDesktop-BRT8QPRE.js";import"./GlobalAccountButton-BqeBlZWz.js";import"./ChevronDown-DGrlTQ0v.js";import"./Enter-BpHTk3PW.js";import"./GlobalMenuButton-DbdbRywD.js";import"./MenuHamburger-BHbrSeUX.js";import"./ChevronUp-eh4muoQm.js";import"./AccountSelector-BFArgWJU.js";import"./Switch--rdxT6CY.js";import"./AccountMenu-DNB1BImf.js";import"./GlobalMenu-CMrJlHCd.js";import"./Checkmark-B3HuJqdN.js";import"./ArrowUndo-DrB_qkGV.js";import"./Globe-DO9_UsMD.js";import"./BreadcrumbsLink-DKa8_fUt.js";import"./ArrowRight-e4eyEntm.js";import"./Footer-TeWfJg9L.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
