var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-DvHKorxQ.js";import{u as c}from"./useActivityLogToolbar-4RGDsH2z.js";import{M as v,b as x,a as f}from"./ModalBody-C1im2bkm.js";import{A as d}from"./ActivityLogItem-CRtiiels.js";import{T as A}from"./Toolbar-xFDEvkSb.js";import{S as M}from"./Section-C_0CdUSc.js";import{u as L}from"./useProfile-BgoXTv4z.js";import{L as C}from"./Layout-BGOJc8X0.js";import{P as B}from"./PageBase-D8rhxc2Z.js";import{H as k}from"./Heading-Cl1YAvvB.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-Cz88DWwK.js";import"./AvatarGroup-DG05vr_h.js";import"./Flex-DGnnEuV7.js";import"./TimelineSegment-C2PiAgOk.js";import"./TimelineBase-8JndtNk0.js";import"./TimelineIcon-CHW2w4-r.js";import"./CircleFill-B6YbpQbN.js";import"./Byline-B9mjeQUZ.js";import"./Typography-CvxYC9sf.js";import"./useHighlightedText-BTXbLxcU.js";import"./Timeline-CD2eg89K.js";import"./TimelineActivity-Dl_2MGtr.js";import"./useDropdownMenuController-IkMO0B8E.js";import"./Dropdown-CZm18rgm.js";import"./SearchField-BU96PyeS.js";import"./MagnifyingGlass-BXEQkXVn.js";import"./MenuListItem-sxF_Fdo2.js";import"./MenuListDivider-CVAdbPBV.js";import"./MenuItem-BKT_WeeP.js";import"./CheckboxUncheckedIcon-DfhKN-kl.js";import"./RadioUncheckedIcon-02hVvrUJ.js";import"./ItemMedia-D3TRsre4.js";import"./ItemLabel-BPqR0X1V.js";import"./ItemControls--z7ByJD8.js";import"./Badge-DzOSp-VL.js";import"./Tooltip-B5VcyW21.js";import"./ChevronRight-BUHnh-Yw.js";import"./FieldBase-BZwhXyPC.js";import"./Field-DZglScdH.js";import"./Label-bDy8LqNB.js";import"./Input-Bgd0BScM.js";import"./useMenu-DmIIMIa0.js";import"./InformationSquare-dQI1I0JD.js";import"./Plus-BlCIA3TM.js";import"./ButtonGroup-HA7R6Ya1.js";import"./ButtonGroupDivider-CnFbpfz5.js";import"./ChevronUpDown-BbMnjmgS.js";import"./ToolbarMenu-EKz1rDZF.js";import"./ToolbarSearch-CcewJSVV.js";import"./useProfileLayout-DimNPKFM.js";import"./HeartFill-DNqsa6JA.js";import"./Bell-CYRmg0LU.js";import"./Bookmark-Du-mldJF.js";import"./ClockDashed-Dy7wo5Dk.js";import"./globalMenu-Dw1qB3hK.js";import"./PersonCircle-C7aNQMvr.js";import"./Buildings2-DChFgHfm.js";import"./InboxFill-BwfO79nt.js";import"./MenuGrid-Dy4yWDeC.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-9iEfNGgD.js";import"./Trash-DVfbPaj0.js";import"./useLayout-CLDfpz0r.js";import"./useLocale-B5jh-Ozh.js";import"./useAccountMenu-C9yBDl5o.js";import"./header-53c7wphf.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-BsrasTA6.js";import"./CookieBanner-C89zACVF.js";import"./Link-f4TZXGvV.js";import"./Banner-CHcz1tE6.js";import"./GlobalHeader-Bm1pjFSp.js";import"./useIsDesktop-D_CwdmZf.js";import"./GlobalAccountButton-Dvkyq19P.js";import"./ChevronDown-CIQHUQdq.js";import"./Enter-CbVInwau.js";import"./GlobalMenuButton-BIiZsZYy.js";import"./MenuHamburger-DBDIkqls.js";import"./ChevronUp-CNwAnotn.js";import"./AccountSelector-CqvFZ-x3.js";import"./Switch-DcMon32a.js";import"./AccountMenu-l_9YcMP5.js";import"./GlobalMenu-BKC0fVrL.js";import"./Checkmark-Cv0i3HMy.js";import"./ArrowUndo-q1AmrM8c.js";import"./Globe-BJ6hoLpR.js";import"./BreadcrumbsLink-BigUfgp2.js";import"./ArrowRight-WkZj4CZG.js";import"./Footer-Da4KN9d7.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
