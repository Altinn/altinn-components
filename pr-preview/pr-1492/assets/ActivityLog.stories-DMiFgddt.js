var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-ucBQ5HcJ.js";import{u as c}from"./useActivityLogToolbar-BR2IUgGT.js";import{M as v,b as x,a as f}from"./ModalBody-BJrMsUN-.js";import{A as d}from"./ActivityLogItem-BZrnC0ow.js";import{T as A}from"./Toolbar-t4aF6vsr.js";import{S as M}from"./Section-BY1hSuM_.js";import{u as L}from"./useProfile-BUiU1fT5.js";import{L as C}from"./Layout-Bi_cyIDV.js";import{P as B}from"./PageBase-BiUB-6U-.js";import{H as k}from"./Heading-B62YbUQ8.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./Flex-obMty-VJ.js";import"./TimelineSegment-F4UBnDDX.js";import"./TimelineBase-BTWELntf.js";import"./TimelineIcon-DUe9wfOm.js";import"./CircleFill-iQf_CwCm.js";import"./Byline-CWiJow4a.js";import"./Typography-z9HgrCC2.js";import"./useHighlightedText-DrXs5ARP.js";import"./Timeline-CNCZfg-1.js";import"./TimelineActivity-BwGMyKNK.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./SearchField-0Y9a3sbc.js";import"./MagnifyingGlass-asWGm_ME.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemMedia-BkaFl7YX.js";import"./ItemLabel-CZZsCEBi.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./ChevronRight-Vb4FEV6b.js";import"./FieldBase-BybGrojy.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./useMenu-zMhFd5Ju.js";import"./InformationSquare-BC6md9kr.js";import"./Plus-DM17n_Wh.js";import"./ButtonGroup-57G882s-.js";import"./ButtonGroupDivider-n1BDx0p9.js";import"./ChevronUpDown-BnwOmR_z.js";import"./ToolbarMenu-D8eVNYGZ.js";import"./ToolbarSearch-DvZbf6bx.js";import"./useProfileLayout-BY2djM8J.js";import"./HeartFill-D4wd6iiy.js";import"./Bell-D0GF_M31.js";import"./Bookmark-5NMGGnkg.js";import"./ClockDashed-Du-UNe8Y.js";import"./globalMenu-C7fvoxsT.js";import"./PersonCircle-Djmo7yeD.js";import"./Buildings2-B9WePdr_.js";import"./InboxFill-BQNYYaWK.js";import"./MenuGrid-CE3Tsu_v.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-Ddg50if0.js";import"./Trash-C9fnn7OA.js";import"./useLayout-D28aNsd5.js";import"./useLocale-CvukjXgc.js";import"./useAccountMenu-CuaCZRb9.js";import"./header-D0AzK36L.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-C9txk-sp.js";import"./CookieBanner-D6pUxKNo.js";import"./Link-DTV1xOLq.js";import"./Banner-DxB99WTc.js";import"./GlobalHeader-ByviVgf0.js";import"./useIsDesktop-CZdAsrqy.js";import"./GlobalAccountButton-CmEoR21v.js";import"./ChevronDown-CmXAxF6f.js";import"./Enter-sVXY8qmI.js";import"./GlobalMenuButton-DNlExkap.js";import"./MenuHamburger-C-aSHA5_.js";import"./ChevronUp-Bnv01usE.js";import"./AccountSelector-BGKY4awQ.js";import"./Switch-CHgN2QZU.js";import"./AccountMenu-gaXytgsv.js";import"./GlobalMenu-DyY00_9O.js";import"./Checkmark-CqXmhnrs.js";import"./ArrowUndo-DNTrsBCI.js";import"./Globe-CHPxy7FF.js";import"./BreadcrumbsLink-OD0nSb2F.js";import"./ArrowRight-DqCWEA7H.js";import"./Footer-8BfLpNjA.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
