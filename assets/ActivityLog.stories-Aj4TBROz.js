import{j as o,r as u}from"./iframe-CU9tIbvZ.js";import{u as l}from"./useActivityLogToolbar-Dni7ayp2.js";import{A as c}from"./ActivityLogItem-DEW4xWr9.js";import{S as A}from"./Section-BozmV6Om.js";import{T as g}from"./Toolbar-DLn5d2hq.js";import{u as j}from"./useProfile-D_zxptw2.js";import{L as M}from"./Layout-BcITZW7a.js";import{P as L}from"./PageBase-cSTk_19q.js";import{H as B}from"./Heading-DKJvmFhb.js";import{B as y}from"./Button-DwluG-LJ.js";import{M as v,a as x,b as f}from"./ModalBody-c-JjnOdb.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-D7LiuYXX.js";import"./TimelineBase-RFiWYz3U.js";import"./Flex-Aa4xg00u.js";import"./index-Bd_n44R2.js";import"./TimelineIcon-YZb8WyNy.js";import"./XMark-DTYd927G.js";import"./useId-BEikXtHv.js";import"./Icon-BBvHNxu7.js";import"./Skeleton-WB8_C3gk.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./CircleFill-CHbAjpMS.js";import"./Byline-Bqw1wwsS.js";import"./Typography-w6SEqUo0.js";import"./useHighlightedText-okRrJvjD.js";import"./Timeline-Btsz8f91.js";import"./TimelineActivity-b4FxmWiz.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Plus-3VXDUyQo.js";import"./Dropdown-DgULA5TZ.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./FieldBase-Bc5lvX-i.js";import"./Label-BURQuXSo.js";import"./index-ByNurdCO.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuListHeading-kMHXlGu4.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./Checkmark-DOBFSC3X.js";import"./ItemControls-BgF8Asgd.js";import"./ChevronRight-XlyxhDjC.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./ChevronUpDown-BkTcHWzp.js";import"./ButtonGroup-Bc7spR1E.js";import"./ButtonGroupDivider-Dbxz7H96.js";import"./ToolbarMenu-DNG-wyC8.js";import"./ToolbarSearch-DpBsUYzd.js";import"./useProfileLayout-DGofEGRL.js";import"./HeartFill-XWsxyGDr.js";import"./Bell-d_XnJlp6.js";import"./Bookmark-CwJlB6fo.js";import"./ClockDashed-BPJiTGgl.js";import"./globalMenu-YOAoO2do.js";import"./PersonCircle-cYf_rPgC.js";import"./Buildings2-CD4MDmYA.js";import"./InboxFill-BuLZHBJP.js";import"./MenuGrid-DOhn-Lzt.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-BDkPE7N1.js";import"./Trash-hYNo9HK3.js";import"./useLayout-DhkIkB9_.js";import"./useLocale-B5kfBcyL.js";import"./useAccountMenu-C2x3H5o4.js";import"./header-DbWRaiIR.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BPw_y4WX.js";import"./Banner-CR_tqmXk.js";import"./GlobalHeader-DufVtYeK.js";import"./useIsDesktop-CrKRXhnc.js";import"./GlobalAccountButton-BZeph8Sb.js";import"./ChevronDown-D1kreZKO.js";import"./Enter-BHytXVt5.js";import"./GlobalMenuButton-CCe0RjIi.js";import"./MenuHamburger-Cl0yoDLg.js";import"./ChevronUp-C9A9ysE-.js";import"./AccountSelector-DsAWvJxU.js";import"./button-DfPuT9nv.js";import"./heading-HMF_CCjH.js";import"./AccountMenu-BCXmoxcp.js";import"./Switch-BFjqI2KQ.js";import"./GlobalMenu-CYF_KfY_.js";import"./ArrowUndo-C5gTjs_w.js";import"./Globe-dRDAEiut.js";import"./BreadcrumbsLink-C_FTpjJv.js";import"./ArrowRight-CFzj4t3F.js";import"./Footer-DEg1EnyP.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const ft=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,ft as __namedExportsOrder,xt as default};
