var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-B3JK86DP.js";import{u as c}from"./useActivityLogToolbar-B5LDvu5y.js";import{M as v,b as x,a as f}from"./ModalBody-CwO02btK.js";import{A as d}from"./ActivityLogItem-vj9SgRJQ.js";import{T as A}from"./Toolbar-ChlnkDCe.js";import{S as M}from"./Section-DBrjPmQz.js";import{u as L}from"./useProfile-BnVmQH1D.js";import{L as C}from"./Layout-CIgk6UxX.js";import{P as B}from"./PageBase-CkRy7mD1.js";import{H as k}from"./Heading-DhZTTpsP.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-C5zwgekh.js";import"./AvatarGroup-CljQ4hw7.js";import"./Flex-DTtFl6cz.js";import"./TimelineSegment-rHchVyPB.js";import"./TimelineBase-BKXQQu8c.js";import"./TimelineIcon-B8YqYKWa.js";import"./CircleFill-DtDbDApR.js";import"./Byline-Ci-3RfFp.js";import"./Typography-AZ3lf-vT.js";import"./useHighlightedText-DIT5s5Wk.js";import"./Timeline-suM3utWP.js";import"./TimelineActivity-CoMrb3b6.js";import"./useDropdownMenuController-DrRN5BOH.js";import"./Dropdown-D-XZVyts.js";import"./SearchField-CYbBjrsH.js";import"./MagnifyingGlass-Dar3Cjqj.js";import"./MenuListItem-Dv-zfi5J.js";import"./MenuListDivider-JnPQTBAl.js";import"./MenuItem-DcugXxJu.js";import"./CheckboxUncheckedIcon-DWGQqmR1.js";import"./RadioUncheckedIcon-BENOQjAf.js";import"./ItemMedia-w7Ibrgnv.js";import"./ItemLabel-UJIDw8s4.js";import"./ItemControls-EPopScKo.js";import"./Badge-CHkrsaqO.js";import"./Tooltip-5MJkmhaO.js";import"./ChevronRight-CXXN68ww.js";import"./FieldBase-BOLpoc-t.js";import"./Field-4Patn0Bt.js";import"./Label-0jV2FogB.js";import"./Input-Dn912l6M.js";import"./useMenu-RTLBsPgV.js";import"./InformationSquare-DD61y5yY.js";import"./Plus-UzcieS8Z.js";import"./ButtonGroup-svkpHY7L.js";import"./ButtonGroupDivider-DWsNC7FQ.js";import"./ChevronUpDown-CboAF3zA.js";import"./ToolbarMenu-BD3nheYo.js";import"./ToolbarSearch-DDx5hvDF.js";import"./useProfileLayout-CJylHNOH.js";import"./HeartFill-BCuk1aAg.js";import"./Bell-JxqnLWQM.js";import"./Bookmark-BNWrj_cZ.js";import"./ClockDashed-DDD5Czsn.js";import"./globalMenu-ZlvOBH04.js";import"./PersonCircle-CbyNMypj.js";import"./Buildings2-bc0yLADC.js";import"./InboxFill-ijG3Dsww.js";import"./MenuGrid-DKi9-mwC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-DGM3iS45.js";import"./Trash-XyOTEtSX.js";import"./useLayout-DgZpZST_.js";import"./useLocale-U5LT0tDJ.js";import"./useAccountMenu-B0MPCcV8.js";import"./header-DKY8cYu5.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-RCbbMY4N.js";import"./CookieBanner-DeF8tbcP.js";import"./Link-nyBdqDjQ.js";import"./Banner-EMpRl99Y.js";import"./GlobalHeader-B4i6zyAh.js";import"./useIsDesktop-CV7gQySW.js";import"./GlobalAccountButton-CWuo16M7.js";import"./ChevronDown-eXgBXwsS.js";import"./Enter-Bmsepcvu.js";import"./GlobalMenuButton-DlkSCuXD.js";import"./MenuHamburger-buk28FFl.js";import"./ChevronUp-2E8wLm1d.js";import"./AccountSelector-B9RDvL4R.js";import"./Switch-CIsn3VnQ.js";import"./AccountMenu-DHPdtaaD.js";import"./GlobalMenu-DNbtyV0e.js";import"./Checkmark-BlaG2503.js";import"./ArrowUndo-akLfJpcJ.js";import"./Globe-CITtRZvC.js";import"./BreadcrumbsLink-CVLW5LEg.js";import"./ArrowRight-DDv59QSS.js";import"./Footer-SU54PDkp.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
