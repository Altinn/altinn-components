import{aa as u,a7 as t,c as g}from"./iframe-DzC97elN.js";import{u as l}from"./useActivityLogToolbar-D6qD1y4D.js";import{M as y,b as v,a as x}from"./ModalBody-CsfaIftq.js";import{A as c}from"./ActivityLogItem-CasRwGKl.js";import{T as f}from"./Toolbar-DS85p_4H.js";import{S as A}from"./Section-B7XqZvfR.js";import{u as j}from"./useProfile-BNe5DwCt.js";import{L as M}from"./Layout-LwIb5n_S.js";import{P as L}from"./PageBase-UDp-lgoO.js";import{H as C}from"./Heading-DiLLFIwR.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Flex-CXtmXiNa.js";import"./TimelineSegment-Dg1veusG.js";import"./TimelineBase-BwxgFSQJ.js";import"./TimelineIcon-4aP1e9Tc.js";import"./CircleFill-Y7dzQlBn.js";import"./Byline-BOlCNzmJ.js";import"./Typography-CtPp6NJn.js";import"./useHighlightedText-w8ugv_c2.js";import"./Timeline-BWuXUwUW.js";import"./TimelineActivity-DgFcXD9Z.js";import"./useDropdownMenuController-w-DqwR3B.js";import"./Dropdown-BeW3qmVa.js";import"./SearchField-D-nsUeta.js";import"./MagnifyingGlass-BRwTAYgV.js";import"./FieldBase-CCQqXbf-.js";import"./Field-B6KkaL6q.js";import"./Label-CsRR5HcT.js";import"./Input-DIyKL79r.js";import"./useMenu-BjgtGKwv.js";import"./MenuListItem-CXsNShPW.js";import"./MenuListHeading-BozM-APn.js";import"./MenuItem-D6uXh7L1.js";import"./ItemMedia-BZutnkw1.js";import"./Checkmark-FE2XL59D.js";import"./ItemLabel-DpV5tQzf.js";import"./ItemControls-zCivkuXf.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ChevronRight-DVYABLGR.js";import"./index-lcqP_0Eh.js";import"./InformationSquare-B8cGLTDj.js";import"./Plus-CcwlUJc-.js";import"./ButtonGroup-BbJZX9rk.js";import"./ButtonGroupDivider-pKbXYIZI.js";import"./ChevronUpDown-COFy5lK_.js";import"./ToolbarMenu-quz7XEjO.js";import"./ToolbarSearch-D5CBxluS.js";import"./useProfileLayout-Ya3hN0R-.js";import"./HeartFill-Da683xUR.js";import"./Bell-jNl_hai2.js";import"./Bookmark-BA4EhbnL.js";import"./ClockDashed-6ci_YaU6.js";import"./globalMenu-MDzG8fA_.js";import"./PersonCircle-CRIoDXsu.js";import"./Buildings2-1XYI9-k1.js";import"./InboxFill-DbXvtP7e.js";import"./MenuGrid-D_UEv0HQ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Dumd_ZmV.js";import"./Trash-CQFpGbne.js";import"./useLayout-BKZq0zEe.js";import"./useLocale-Cgx6U3dX.js";import"./useAccountMenu-CVVAP7II.js";import"./header-BCbrDOiX.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-y88aaf3q.js";import"./Banner-C2Inp0At.js";import"./GlobalHeader-DKxsGyRA.js";import"./useIsDesktop-CeAKLIl5.js";import"./GlobalAccountButton-BbhWzELj.js";import"./ChevronDown-B5Pjgi_A.js";import"./Enter-C8NWLzit.js";import"./GlobalMenuButton-CDedrrkY.js";import"./MenuHamburger-BRGi738L.js";import"./ChevronUp-EqU0sT0I.js";import"./AccountSelector-SPH3qZZ4.js";import"./Switch-JfrAs-Bf.js";import"./AccountMenu-DqYEsx_-.js";import"./GlobalMenu-BRnykkmv.js";import"./ArrowUndo-8H_Vm8H2.js";import"./Globe-XbmWHGjJ.js";import"./BreadcrumbsLink-Dz7paneK.js";import"./ArrowRight-DoT43tsN.js";import"./Footer-A52M92Dj.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
