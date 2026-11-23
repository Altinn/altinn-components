var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-BW6sNfUG.js";import{u as c}from"./useActivityLogToolbar-BwxJ57ih.js";import{M as v,b as x,a as f}from"./ModalBody-iaAxc7Vl.js";import{A as d}from"./ActivityLogItem-Durdjgqq.js";import{T as A}from"./Toolbar-D6qimzgG.js";import{S as M}from"./Section-C6OUO-lD.js";import{u as L}from"./useProfile-zJIQxVH1.js";import{L as C}from"./Layout-BRGO3Pxh.js";import{P as B}from"./PageBase-DU33z_FT.js";import{H as k}from"./Heading-DZSCY0dD.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./Flex-Ws1WKTNd.js";import"./TimelineSegment-aKdq0lKk.js";import"./TimelineBase-OiNgcCmS.js";import"./TimelineIcon-C7SKp3yU.js";import"./CircleFill-BiuywKgx.js";import"./Byline-BE-T5e6F.js";import"./Typography-DluWU8As.js";import"./useHighlightedText-Dx6jhFuL.js";import"./Timeline-BWlbrvRg.js";import"./TimelineActivity-B36SlpYK.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./SearchField--GRE4W__.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemMedia-C8rbfA3l.js";import"./ItemLabel-Dcm3mA4k.js";import"./ItemControls-Bqaen0yJ.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./ChevronRight-DCXIgdRg.js";import"./FieldBase-CiEo5wf3.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./useMenu-uJdjEIIP.js";import"./InformationSquare-1mOGr1dD.js";import"./Plus-CdPXJ-Lc.js";import"./ButtonGroup-CkPO8wDs.js";import"./ButtonGroupDivider-CS_mNJWU.js";import"./ChevronUpDown-BC_Hbppl.js";import"./ToolbarMenu-B2LBYM88.js";import"./ToolbarSearch-hDsJFPue.js";import"./useProfileLayout-Dl6kzZI0.js";import"./HeartFill-B-yKUcbi.js";import"./Bell-D7qjbS4k.js";import"./Bookmark-Dvpolsml.js";import"./ClockDashed-BfnIbYm5.js";import"./globalMenu-BhfXV69n.js";import"./PersonCircle-BTIkMKiQ.js";import"./Buildings2-1YBn2wwl.js";import"./InboxFill-DB0GMdkZ.js";import"./MenuGrid-Bp-MYz7m.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-B39KtXbP.js";import"./Trash-V_KyvxF_.js";import"./useLayout-CK2DWd9l.js";import"./useLocale-BH5uSXf7.js";import"./useAccountMenu-C4dO-fGe.js";import"./header-D92ziJoR.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Vo-PXquq.js";import"./CookieBanner-CiOG0Kpd.js";import"./Link-Bp8Nw_8-.js";import"./Banner-DHc3Yjej.js";import"./GlobalHeader-Dd8WtTln.js";import"./useIsDesktop-K1BK9pQC.js";import"./GlobalAccountButton-BjtDDNLZ.js";import"./ChevronDown-CGVF_s9R.js";import"./Enter-Dt6b_6kn.js";import"./GlobalMenuButton-C4dWsTVa.js";import"./MenuHamburger-DnvsbnfP.js";import"./ChevronUp-D9Lqz4C3.js";import"./AccountSelector-Dd-cE7hX.js";import"./Switch-BQQXs8vx.js";import"./AccountMenu-eYdaPZUA.js";import"./GlobalMenu-DMhb8QD9.js";import"./Checkmark-Br7Bq_3w.js";import"./ArrowUndo-gaLA-SPG.js";import"./Globe-fpE-1Baj.js";import"./BreadcrumbsLink-XSdj1u1V.js";import"./ArrowRight-JAuvZFV7.js";import"./Footer-GDlyG5dh.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
