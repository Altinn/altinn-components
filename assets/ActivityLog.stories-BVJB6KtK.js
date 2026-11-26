var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-ZrU_khjL.js";import{u as c}from"./useActivityLogToolbar-0S2Uq13y.js";import{M as v,b as x,a as f}from"./ModalBody-CLgzlTKt.js";import{A as d}from"./ActivityLogItem-vayBAWJB.js";import{T as A}from"./Toolbar-CQ34NIIN.js";import{S as M}from"./Section-dsTDEP7F.js";import{u as L}from"./useProfile-YC7i1aTL.js";import{L as C}from"./Layout-BpdryenR.js";import{P as B}from"./PageBase-CHViR1LW.js";import{H as k}from"./Heading-CifG33hf.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./Flex-DJ1B1xxZ.js";import"./TimelineSegment-vZhsTBHq.js";import"./TimelineBase-CbU3ijRS.js";import"./TimelineIcon-BBs20eu8.js";import"./CircleFill-CB9KIat2.js";import"./Byline-DA-9AELx.js";import"./Typography-FbkShcFO.js";import"./useHighlightedText-CDx2rO1x.js";import"./Timeline-DTLH04gI.js";import"./TimelineActivity-CGg7U5fG.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./SearchField-BKf2_wz5.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./MenuListItem-UylFm72-.js";import"./MenuListDivider-Frk75rx_.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./ItemLabel-Dkx3E56O.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ChevronRight-I-BGQZW2.js";import"./FieldBase-Bti6f0lr.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./useMenu-D1AoRPPj.js";import"./InformationSquare-v_Dcjud5.js";import"./Plus-DonfkQJy.js";import"./ButtonGroup-5s3aXo0U.js";import"./ButtonGroupDivider-BU9C7KH5.js";import"./ChevronUpDown-CE-Sc-55.js";import"./ToolbarMenu-CyEZ65ux.js";import"./ToolbarSearch-BeAEDhwm.js";import"./useProfileLayout-BcN1O8EE.js";import"./HeartFill-Cd4P8gX9.js";import"./Bell-TXVB7B0D.js";import"./Bookmark-ChOY-J_L.js";import"./ClockDashed-D-aa8QuT.js";import"./globalMenu-CXbk4zBY.js";import"./PersonCircle-BpkEJcqi.js";import"./Buildings2-D071t-hU.js";import"./InboxFill-DvTncqt1.js";import"./MenuGrid-OFU6OM4f.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BqlJd5xK.js";import"./Trash-D_09wouA.js";import"./useLayout-BWPtWGZs.js";import"./useLocale-bYy0Yvaq.js";import"./useAccountMenu-D3F_sQJW.js";import"./header-CmAt-1UB.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BdmTHMy_.js";import"./CookieBanner-CAcj-FZO.js";import"./Link-BZaMHpGV.js";import"./Banner-CPL97lia.js";import"./GlobalHeader-CYt7SSdw.js";import"./useIsDesktop-v0h-kR2t.js";import"./GlobalAccountButton-C1FVFYdc.js";import"./ChevronDown-BB20zuC9.js";import"./Enter-C2hxxdFf.js";import"./GlobalMenuButton-BzlllpjY.js";import"./MenuHamburger-Bmp7ovD_.js";import"./ChevronUp-CSSlqESb.js";import"./AccountSelector-BMF--fBy.js";import"./Switch-BdFzWZ9v.js";import"./AccountMenu-CzF8GbtV.js";import"./GlobalMenu-DuXi0wGS.js";import"./Checkmark-CeGyim3w.js";import"./ArrowUndo-DApzQjif.js";import"./Globe-FslnJAPK.js";import"./BreadcrumbsLink-C9H93YOO.js";import"./ArrowRight-zE1jOLWI.js";import"./Footer-CalvC98I.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
