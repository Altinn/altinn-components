var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DV5agHf5.js";import{u as c}from"./useActivityLogToolbar-DezPeI7g.js";import{M as v,b as x,a as f}from"./ModalBody-DjOJuTHC.js";import{A as d}from"./ActivityLogItem-CRhOovVx.js";import{T as A}from"./Toolbar-h9eSf8bs.js";import{S as M}from"./Section-DqVAP5w4.js";import{u as L}from"./useProfile-ByEYT5Lm.js";import{L as C}from"./Layout-C3SfnO8o.js";import{P as B}from"./PageBase-CmFL3REi.js";import{H as k}from"./Heading-Ct7f5Viq.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./Flex-BRxWwGAq.js";import"./TimelineSegment-BClzQv6E.js";import"./TimelineBase-BIYIJ5ft.js";import"./TimelineIcon-CmRwm3OZ.js";import"./CircleFill-BWjcSJli.js";import"./Byline-DlomEDOo.js";import"./Typography-DklD6Rdi.js";import"./useHighlightedText-D74GV1fZ.js";import"./Timeline-B1Fn8dx9.js";import"./TimelineActivity-BnJxAPgP.js";import"./useDropdownMenuController-BgPFU9Pq.js";import"./Dropdown-hdLzeqLa.js";import"./SearchField-DZ4t3H4v.js";import"./MagnifyingGlass-tTfHyx-p.js";import"./MenuListItem-CWjGfYeh.js";import"./MenuListDivider-B_yXfz6T.js";import"./MenuItem-0aaQQHkL.js";import"./CheckboxUncheckedIcon-B-IeYfRG.js";import"./RadioUncheckedIcon-DnY8WA8D.js";import"./ItemMedia-K3xyGGVD.js";import"./ItemLabel-DMcOnD30.js";import"./ItemControls-Dpr02RM6.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./ChevronRight-DdV1IRY7.js";import"./FieldBase-D4-LzoRW.js";import"./Field-BelDBEf0.js";import"./Label-DXhZaYP8.js";import"./Input-CfHBGeL6.js";import"./useMenu-BBdwWh--.js";import"./InformationSquare-CpDw8TpS.js";import"./Plus-BR13EOsl.js";import"./ButtonGroup-CmPYcscv.js";import"./ButtonGroupDivider-TThAGLCi.js";import"./ChevronUpDown-BUW1Gmvq.js";import"./ToolbarMenu-HaDCIaqY.js";import"./ToolbarSearch-BYB6g1xg.js";import"./useProfileLayout-BHQrJq0M.js";import"./HeartFill-DVcNV07D.js";import"./Bell-BUBP0KMD.js";import"./Bookmark-Bep4WbZD.js";import"./ClockDashed-CEqAL55y.js";import"./globalMenu-Cmki8EvO.js";import"./PersonCircle-3fvyR-Zs.js";import"./Buildings2-JRf2It2a.js";import"./InboxFill-BuecJ8u6.js";import"./MenuGrid-BRhDAza_.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DszzhGXz.js";import"./Trash-DJnUMrV2.js";import"./useLayout-CxCh7PE4.js";import"./useLocale-BH4R6fqI.js";import"./useAccountMenu-BWeYrxn_.js";import"./header-38T2EOt5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-LyrS11DA.js";import"./CookieBanner-DME2vTqP.js";import"./Link-tw3HlPU6.js";import"./Banner-BY-nOb9Q.js";import"./GlobalHeader-ahSxCkcv.js";import"./useIsDesktop-Dgf_ImB_.js";import"./GlobalAccountButton-BsGWGzNM.js";import"./ChevronDown-Brg3C2rz.js";import"./Enter-CPudqAed.js";import"./GlobalMenuButton-BFSvdCC_.js";import"./MenuHamburger-sep3wvC_.js";import"./ChevronUp-CkyCCeXo.js";import"./AccountSelector-CtVsCXWw.js";import"./Switch-Cdw3bZt4.js";import"./AccountMenu-Zc-XGeGF.js";import"./GlobalMenu-Dzylc3ME.js";import"./Checkmark-B_VJ15Sz.js";import"./ArrowUndo-CRPQURmv.js";import"./Globe-CSSNkPCg.js";import"./BreadcrumbsLink-BrtOGbrU.js";import"./ArrowRight-BgPN7dhI.js";import"./Footer-CE_xU-HV.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
