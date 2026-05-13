import{j as o,r as u}from"./iframe-CpLxKnDM.js";import{u as l}from"./useActivityLogToolbar-CuSj7J3l.js";import{A as c}from"./ActivityLogItem-IAaze0IF.js";import{S as A}from"./Section-cnHf2d7L.js";import{T as g}from"./Toolbar-CK9c0ysy.js";import{u as j}from"./useProfile-B669DRYS.js";import{L as M}from"./Layout-hF90-psv.js";import{P as L}from"./PageBase-BVqmiexz.js";import{H as B}from"./Heading-Dmt1Hp0l.js";import{B as y}from"./Button-DKJNFoHr.js";import{M as v,a as x,b as f}from"./ModalBody-DeQjF_gb.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-V61GUKCJ.js";import"./TimelineBase-DU-EGiBf.js";import"./Flex-DdRay9SF.js";import"./index-BZrYlxzi.js";import"./TimelineIcon-cVFVpeF9.js";import"./XMark-BkFwP2BW.js";import"./useId-Dk2QO8VQ.js";import"./Icon-xH6stteC.js";import"./Skeleton-B2kLb9z1.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./CircleFill-k2oQIWUl.js";import"./Byline-BCLyuZP2.js";import"./Typography-jv3_dxzw.js";import"./useHighlightedText-De1FlINf.js";import"./Timeline-BIh6oQ1u.js";import"./TimelineActivity-B0ko_t1C.js";import"./useDropdownMenuController-0qeRnWl5.js";import"./Plus-7ibbtH5p.js";import"./Dropdown-gyW_V0cZ.js";import"./SearchField-DF0MNejq.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./FieldBase-zLQdXhmX.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Checkmark-DpqhZdZ_.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";import"./ChevronUpDown-BAZWnllU.js";import"./ButtonGroup-MGSBAJb-.js";import"./ButtonGroupDivider-BLjzTaaF.js";import"./ToolbarMenu-Br84Gbgk.js";import"./ToolbarSearch-DkBEzL5A.js";import"./useProfileLayout-2A1rHelO.js";import"./HeartFill-BQxUxVVL.js";import"./Bell-nocAIVI8.js";import"./Bookmark-BLr2Syot.js";import"./ClockDashed-CK_NRh5l.js";import"./globalMenu-BKQnoocv.js";import"./PersonCircle-CA3B10fa.js";import"./Buildings2-CpGh8O8D.js";import"./InboxFill-DISyPVQO.js";import"./MenuGrid-_azA79nh.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-2zuUqDx-.js";import"./Trash-0aRAlmkw.js";import"./useLayout-B2TQwHwh.js";import"./useLocale-C2WYZW11.js";import"./useAccountMenu-BlPdMQXq.js";import"./header-DjWuerpI.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-DBaD5yd5.js";import"./Banner-BtlLQf4G.js";import"./GlobalHeader-DULc9E0I.js";import"./useIsDesktop-BFm1-w7T.js";import"./GlobalAccountButton-DrDdTFcN.js";import"./ChevronDown-_hDUIJMX.js";import"./Enter-tjtY-HGz.js";import"./GlobalMenuButton-DhwIsNNu.js";import"./MenuHamburger-BOYVbGjH.js";import"./ChevronUp-CGssbGWN.js";import"./AccountSelector-Bibv_1fU.js";import"./button-DZ9B7a50.js";import"./heading-CJ3erF7t.js";import"./AccountMenu-C3jEvLzU.js";import"./Switch-DtDZT1hR.js";import"./GlobalMenu-CypodvRE.js";import"./ArrowUndo-kJzW9ldV.js";import"./Globe-C7BiUSRN.js";import"./BreadcrumbsLink-CINDBRb6.js";import"./ArrowRight-D1EGWhkX.js";import"./Footer-Cx8C_M8i.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
