import{j as o,r as u}from"./iframe-DXwGEFZf.js";import{u as l}from"./useActivityLogToolbar-jEKvHy1t.js";import{A as c}from"./ActivityLogItem-BTwDQjKm.js";import{S as A}from"./Section-BSKZ_Frt.js";import{T as g}from"./Toolbar-BV3vLwx2.js";import{u as j}from"./useProfile-BAI__Own.js";import{L as M}from"./Layout-dpikFLST.js";import{P as L}from"./PageBase-BAvWTUxX.js";import{H as B}from"./Heading-D1SypAUR.js";import{B as y}from"./Button-BcOfKjgE.js";import{M as v,a as x,b as f}from"./ModalBody-v2jc6j_q.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-DCEcS6t-.js";import"./TimelineBase-BmZ4KW0V.js";import"./Flex-U6liI5ZR.js";import"./index-DpQTH4Pc.js";import"./TimelineIcon-Hq_SBlsg.js";import"./XMark-BspkucHC.js";import"./useId-Df52yuGg.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./CircleFill-nNDDlDY7.js";import"./Byline-DdT-FOev.js";import"./Typography-CegVoZkA.js";import"./useHighlightedText-NV3gg9HW.js";import"./Timeline-D-cpowsA.js";import"./TimelineActivity-Dje36gDg.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Plus-6DEjvg57.js";import"./Dropdown-BZOF64eO.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./FieldBase-BwCMZAv_.js";import"./Label-ChoE5xRO.js";import"./tooltip-OQNLf2nv.js";import"./Input-CjRvyA41.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuListHeading-G6YR-18r.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./Checkmark-DpC6lRZL.js";import"./ItemControls-DXxKFox6.js";import"./ChevronRight-B7NrC3Rp.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./ChevronUpDown-DoaPnXHw.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonGroupDivider-Cg8WMtdf.js";import"./ToolbarMenu-DYrFr0_m.js";import"./ToolbarSearch-DigZ9geU.js";import"./useProfileLayout-35R5pkTh.js";import"./HeartFill-Bx48nAIh.js";import"./Bell-2m2JrCjb.js";import"./Bookmark-CfJzu2yo.js";import"./ClockDashed-DPDdHUks.js";import"./globalMenu-DlnfHF8i.js";import"./PersonCircle-bHcvGsix.js";import"./Buildings2-QgXuVD1-.js";import"./InboxFill-DWpspjSw.js";import"./MenuGrid-C5oGKC5O.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BSZ1HBnn.js";import"./Trash-Bhi8vMFl.js";import"./useLayout-DHnY1JMV.js";import"./useLocale-iT2UdDxz.js";import"./useAccountMenu-DpWjJla9.js";import"./header-iho8g4ib.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-5RaXEbt6.js";import"./Banner-CmjuEN-t.js";import"./GlobalHeader-BZWdeDsN.js";import"./useIsDesktop-DryvnYFP.js";import"./GlobalAccountButton-CzYHDvba.js";import"./ChevronDown-Cc2tQRQQ.js";import"./Enter-ChEXP26q.js";import"./GlobalMenuButton-DtcMXKiU.js";import"./MenuHamburger-DYibhKnt.js";import"./ChevronUp-CJwhEbs5.js";import"./AccountSelector-CQ_7NSi-.js";import"./AccountMenu-9MAQjkAM.js";import"./Switch-BjC1I4Sd.js";import"./GlobalMenu-Ce9_HjH6.js";import"./ArrowUndo-BcOnJrBl.js";import"./Globe-omLHimzm.js";import"./BreadcrumbsLink-DRHJSkrR.js";import"./ArrowRight-NS2W46Jl.js";import"./Footer-DPYpLt8b.js";const ct={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const dt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,dt as __namedExportsOrder,ct as default};
