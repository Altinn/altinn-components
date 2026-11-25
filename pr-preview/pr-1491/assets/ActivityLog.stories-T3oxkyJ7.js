var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-BYGPhf7N.js";import{u as c}from"./useActivityLogToolbar-0LA7xj5X.js";import{M as v,b as x,a as f}from"./ModalBody-CY91l2Bs.js";import{A as d}from"./ActivityLogItem-Dx3xM27m.js";import{T as A}from"./Toolbar-D2rcCLvV.js";import{S as M}from"./Section-BRaGuhHv.js";import{u as L}from"./useProfile-BlQG7YiG.js";import{L as C}from"./Layout-BPdOd1Rw.js";import{P as B}from"./PageBase-CxZ8FIOJ.js";import{H as k}from"./Heading-C5-vf6se.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./Flex-DJhBIPT8.js";import"./TimelineSegment-vzLiyNQU.js";import"./TimelineBase-CNG0vQbz.js";import"./TimelineIcon-qnm1a-oV.js";import"./CircleFill-DmdIJLpl.js";import"./Byline-BRLzGNKv.js";import"./Typography-BHNcIxxH.js";import"./useHighlightedText-B7c7eBDx.js";import"./Timeline-C-W9YGN0.js";import"./TimelineActivity-DWp5jpaM.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./ItemLabel-KBN1Srj3.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./Plus-ChNYXBRv.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonGroupDivider-DnlyYy1d.js";import"./ChevronUpDown-CsEkO8Vj.js";import"./ToolbarMenu-D39-x6U3.js";import"./ToolbarSearch-DEixWMHC.js";import"./useProfileLayout-kmYTBDbf.js";import"./HeartFill-Djummj3_.js";import"./Bell-BfrH_baH.js";import"./Bookmark-BxGJO_Zp.js";import"./ClockDashed-CuLyg4No.js";import"./localeSwitcher-BCkn9Xx-.js";import"./InboxFill-DWlAI5wH.js";import"./PersonGroup-Bxf-P3OI.js";import"./MenuGrid-CHEbnhS0.js";import"./Buildings2-BkCIy4EX.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-wTNP5JWn.js";import"./Trash-Aw4yKrn_.js";import"./useLayout-CAOUDQsd.js";import"./useLocale-DfM0gWBz.js";import"./useAccountMenu-EtfLqtMZ.js";import"./header-D5drYKkj.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Dgr7vA8p.js";import"./CookieBanner-DJRgFs59.js";import"./Link-9JXhPkMC.js";import"./Banner-2ZRfWoLb.js";import"./GlobalHeader-2-_5kNCX.js";import"./useIsDesktop-D4Aibili.js";import"./GlobalAccountButton-TXUATpCe.js";import"./ChevronDown-DPBIQHio.js";import"./Enter-CidaVE-r.js";import"./GlobalMenuButton-Csrrjbob.js";import"./MenuHamburger-BBEPorEN.js";import"./ChevronUp-C71MAo1t.js";import"./AccountSelector-B_Ngmqwk.js";import"./Switch-c6ueHKpQ.js";import"./AccountMenu-BmkVq2sD.js";import"./GlobalMenu-BV-cJ0dn.js";import"./Checkmark-CWd8wRaj.js";import"./ArrowUndo-BhG5BbM5.js";import"./Globe-MPkG4s1s.js";import"./BreadcrumbsLink-DogAlUIw.js";import"./ArrowRight-DWa5c0tl.js";import"./Footer-DuD_A72t.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
