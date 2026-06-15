import{aa as u,a7 as t,c as g}from"./iframe-CH-Rf2AI.js";import{u as l}from"./useActivityLogToolbar-BrGVXjdq.js";import{M as y,b as v,a as x}from"./ModalBody-DWS6WpdW.js";import{A as c}from"./ActivityLogItem-C4O41Z6o.js";import{T as f}from"./Toolbar-B5whV829.js";import{S as A}from"./Section-DzGR-IUh.js";import{u as j}from"./useProfile-BzT03Sgl.js";import{L as M}from"./Layout-5CLSl6Qa.js";import{P as L}from"./PageBase-BcnUpMFY.js";import{H as C}from"./Heading-BVqV7FRe.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Flex-BtYwPl5t.js";import"./TimelineSegment-PrLqOjBG.js";import"./TimelineBase-CyYXyrjl.js";import"./TimelineIcon-QgArZhFh.js";import"./CircleFill-CgcGY5Pp.js";import"./Byline-BShusoze.js";import"./Typography-CqA3kMNv.js";import"./useHighlightedText-DIHcSE2r.js";import"./Timeline-AMSiQ29-.js";import"./TimelineActivity-CuOBmV9z.js";import"./useDropdownMenuController-C7q1T2hK.js";import"./Dropdown-_OswQPQg.js";import"./SearchField-Dm3ERjlY.js";import"./MagnifyingGlass-CcgQ0D7w.js";import"./FieldBase-BRTqs99O.js";import"./Field-D5PSE71G.js";import"./Label-D8E1gFAx.js";import"./Input-CCpKfFu1.js";import"./useMenu-FkcUMU_-.js";import"./MenuListItem-GZMPCGGS.js";import"./MenuListHeading-DRQf-aXW.js";import"./MenuItem-BWxi170U.js";import"./ItemMedia-BczcOirL.js";import"./Checkmark-CzXEx9R6.js";import"./ItemLabel-B29_eOJn.js";import"./ItemControls-loNIR_kd.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./ChevronRight-uifDbL9f.js";import"./index-Bn39eRZ3.js";import"./InformationSquare-D0kDsS_w.js";import"./Plus-BQYmFmTa.js";import"./ButtonGroup-6-1iOFaS.js";import"./ButtonGroupDivider-h_7e4qvH.js";import"./ChevronUpDown-D4KfXAKY.js";import"./ToolbarMenu-BA267ZrV.js";import"./ToolbarSearch-SraTjllo.js";import"./useProfileLayout-BdN1chqp.js";import"./HeartFill-BYSAi8Z7.js";import"./Bell-fcA9xSh9.js";import"./Bookmark-D8GfnLN6.js";import"./ClockDashed-An8qJSBT.js";import"./globalMenu-C99LfLi3.js";import"./PersonCircle-BwpYfq3Y.js";import"./Buildings2-DK48JhGB.js";import"./InboxFill-CjX93Lsg.js";import"./MenuGrid-D-M2D-4J.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-hrfshYGt.js";import"./Trash-BAmIqX5W.js";import"./useLayout-CHzeUI8x.js";import"./useLocale-C_wYC4TW.js";import"./useAccountMenu-D2zJVa-5.js";import"./header-D6LNfdoA.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BCjaOKFl.js";import"./Banner-CnAxrOLU.js";import"./GlobalHeader-sT_AjsbH.js";import"./useIsDesktop-Dgi44TjI.js";import"./GlobalAccountButton-CT8sX0Ns.js";import"./ChevronDown-D_JnpA4f.js";import"./Enter-DkRJwzLX.js";import"./GlobalMenuButton-CnyqvQAO.js";import"./MenuHamburger-DrB2GaRw.js";import"./ChevronUp-COzX9VRs.js";import"./AccountSelector-BbFrD_97.js";import"./Switch-C3S78qS-.js";import"./AccountMenu-NcwbISGC.js";import"./GlobalMenu-BpjEBk4h.js";import"./ArrowUndo-DkUyPEkv.js";import"./Globe-QtnCWb3M.js";import"./BreadcrumbsLink-jByZbqzh.js";import"./ArrowRight-CDNjHBQ0.js";import"./Footer-AF14lKWa.js";const so={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},a=()=>{const{items:o}=l();return t.jsx(c,{items:o})},i=()=>{const{toolbar:o,items:e}=l();return t.jsxs(A,{spacing:6,children:[t.jsx(f,{...o}),t.jsx(c,{items:e})]})},n=()=>{const{layout:o}=j({pageId:"activity-log"});return t.jsx(M,{...o,children:t.jsxs(L,{children:[t.jsx(C,{size:"xl",children:"Aktivitetslogg"}),t.jsx(i,{})]})})},m=()=>{const{items:o}=l(),[e,s]=u.useState(!0),r=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),t.jsxs(y,{open:e,onClose:r,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:r}),t.jsx(x,{children:t.jsx(c,{items:o})})]})]})},p=()=>{const{toolbar:o,items:e}=l(),[s,r]=u.useState(!0),d=()=>{r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r(!0),children:"Open Modal"}),t.jsxs(y,{open:s,onClose:d,variant:"content",children:[t.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),t.jsxs(x,{children:[t.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:t.jsx(f,{...o})}),t.jsx(c,{items:e})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
