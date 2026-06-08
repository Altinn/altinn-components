import{aa as u,a7 as t,c as g}from"./iframe-B0WoJH5H.js";import{u as l}from"./useActivityLogToolbar-9Dagf9hT.js";import{M as y,b as v,a as x}from"./ModalBody-B-In6huT.js";import{A as c}from"./ActivityLogItem-CirTSEyh.js";import{T as f}from"./Toolbar-Dy5c9lMa.js";import{S as A}from"./Section-BK9NUwy5.js";import{u as j}from"./useProfile-ItRDYaeP.js";import{L as M}from"./Layout-DGCVZQKH.js";import{P as L}from"./PageBase-DTvroHuD.js";import{H as C}from"./Heading-DxONre_z.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Flex-DKCofw-s.js";import"./TimelineSegment-PE87pH81.js";import"./TimelineBase-DImwx2A7.js";import"./TimelineIcon-C0hReUO6.js";import"./CircleFill-X4yVyPWs.js";import"./Byline-BoWA2cIz.js";import"./Typography-BsE1w5gb.js";import"./useHighlightedText-BkoAp9J_.js";import"./Timeline-C62QB6de.js";import"./TimelineActivity-Blc6TVc5.js";import"./useDropdownMenuController-CzjMq5Jo.js";import"./Dropdown-trRXYlHt.js";import"./SearchField-B4XHRk25.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./FieldBase-HmzGYXkl.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./useMenu-BEojsPyg.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./ItemControls-AxIj9K4z.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronRight-DJgUHhg2.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./Plus-teIaH_CW.js";import"./ButtonGroup-DflqcQYY.js";import"./ButtonGroupDivider-Dra4Ourz.js";import"./ChevronUpDown-CnUW0Fwm.js";import"./ToolbarMenu-BvyEK670.js";import"./ToolbarSearch-CNaUMIKd.js";import"./useProfileLayout-BZ03JPzP.js";import"./HeartFill-hNWkwNox.js";import"./Bell-CuuU3KzD.js";import"./Bookmark-DO9fKdzq.js";import"./ClockDashed-BYruIMSN.js";import"./globalMenu-CU3Nq1bS.js";import"./PersonCircle-bbVAK5SY.js";import"./Buildings2-CqbLLczn.js";import"./InboxFill-CIDIOQ77.js";import"./MenuGrid-KEKsXkIK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BFiK2iNm.js";import"./Trash-CO6lVbOZ.js";import"./useLayout-DxWRATKo.js";import"./useLocale-D7SS4IEK.js";import"./useAccountMenu-D1gjhGAY.js";import"./header-DMM4WHA9.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-LmebWvIJ.js";import"./Banner-D4f37DfM.js";import"./GlobalHeader-B0T11nh9.js";import"./useIsDesktop-BaLceTDX.js";import"./GlobalAccountButton-Dc0u35gL.js";import"./ChevronDown-BDG9HWsL.js";import"./Enter-BHXFCvcD.js";import"./GlobalMenuButton-BkQpp6do.js";import"./MenuHamburger-B-sBFcFJ.js";import"./ChevronUp-DUEhyOAc.js";import"./AccountSelector-B1Wfa091.js";import"./Switch-C4u2FFt0.js";import"./AccountMenu-CZ5u86yO.js";import"./GlobalMenu-BLzK7Uw6.js";import"./ArrowUndo-CQUYnDVr.js";import"./Globe-CURRM6pv.js";import"./BreadcrumbsLink-DpOnqGiT.js";import"./ArrowRight-D_Xst9rm.js";import"./Footer-CCgWVmVA.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    items
  } = useActivityLog();
  return <ActivityLog items={items} />;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    toolbar,
    items
  } = useActivityLog();
  return <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ao=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,a as Default,n as ProfileActivityLog,ao as __namedExportsOrder,so as default};
