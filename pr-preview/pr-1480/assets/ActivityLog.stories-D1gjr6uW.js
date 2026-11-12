var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{aa as g,a7 as o,c as y}from"./iframe-SD2JkkBx.js";import{u as c}from"./useActivityLogToolbar-C798auzu.js";import{M as v,b as x,a as f}from"./ModalBody-CBU8Rivy.js";import{A as d}from"./ActivityLogItem-B7XKs1Sr.js";import{T as A}from"./Toolbar-Wwo6Pjsx.js";import{S as M}from"./Section-CUNFbhwF.js";import{u as L}from"./useProfile-BwBGZDop.js";import{L as C}from"./Layout-BDt8b59D.js";import{P as B}from"./PageBase-DFPyjzx9.js";import{H as h}from"./Heading-Bxu0IPlw.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-ChkBInZc.js";import"./AvatarGroup-DfwMjEOK.js";import"./Flex-BqyCauEo.js";import"./TimelineSegment-Bf6c3Z7E.js";import"./TimelineBase-B33VErTM.js";import"./TimelineIcon-ClwvwM6z.js";import"./CircleFill-C6MAxKHG.js";import"./Byline-U-NonX0W.js";import"./Typography-DYbohGA0.js";import"./useHighlightedText-BOE_uc-4.js";import"./Timeline-BRUAlxe1.js";import"./TimelineActivity-DYOakOPU.js";import"./useDropdownMenuController-NgifY-S3.js";import"./useIsDesktop-Cel6HB35.js";import"./Dropdown-DNvFP9FV.js";import"./SearchField-CtzaZVEy.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-99de9OEC.js";import"./MenuListItem-D9pwYymO.js";import"./MenuListDivider-B9dhr0kB.js";import"./MenuItem-DtEaYpyr.js";import"./CheckboxUncheckedIcon-DpMW6Wp2.js";import"./RadioUncheckedIcon-tgX_k-4X.js";import"./ItemMedia-WgmEjgHK.js";import"./ItemLabel-BHU5o8nH.js";import"./ItemControls-CYQHXshs.js";import"./Badge-BbMhpBgn.js";import"./Tooltip-CTbeRzRw.js";import"./ChevronRight-N_DPzqc2.js";import"./FieldBase-BELwbvmB.js";import"./Field-C50xRSHN.js";import"./Label-BJSodJlT.js";import"./Input-Fr_9ZdVX.js";import"./useMenu-Bkg094iM.js";import"./InformationSquare-CgIS3Fvj.js";import"./Plus-6xBOzmi7.js";import"./ButtonGroup-BGhoB7En.js";import"./ButtonGroupDivider-acuYlkJD.js";import"./ChevronUpDown-WmkHnD0J.js";import"./ToolbarMenu-fAVCpRPg.js";import"./ToolbarSearch-BtjaeHj8.js";import"./useProfileLayout-CirCQt66.js";import"./HeartFill-Bgg5VGzh.js";import"./Bell-Dfcs1Nu9.js";import"./Bookmark-D-9J-S2m.js";import"./ClockDashed-BHNScja1.js";import"./globalMenu-GkPccjNA.js";import"./PersonCircle-CboEv5N6.js";import"./Buildings2-B5kNdPhs.js";import"./InboxFill-B_-j2dv9.js";import"./MenuGrid-Cq_-kqfQ.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-D_jolVYJ.js";import"./Trash-CPezUXOI.js";import"./useLayout-QXw5Ya0g.js";import"./useLocale-CTV-FNfu.js";import"./useAccountMenu-BwmrOLiU.js";import"./header-ID-6NjYt.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Cwn8WHGQ.js";import"./CookieBanner-BkVqc6WW.js";import"./Link-BkAPZJG4.js";import"./Banner-Dk0A6VzB.js";import"./GlobalHeader-Bdc8Rgzj.js";import"./GlobalAccountButton-C-KOrR8o.js";import"./ChevronDown-ComuAOz9.js";import"./Enter-Cq5qF9Z6.js";import"./GlobalMenuButton-mxTpEkZX.js";import"./MenuHamburger-Wy7pQwlx.js";import"./ChevronUp-hnI_g5yp.js";import"./AccountSelector-Cop3lB5s.js";import"./Switch-D5l1sJVB.js";import"./AccountMenu-8QL85dEA.js";import"./GlobalMenu-wKMszXw_.js";import"./Checkmark-ChNJFaj8.js";import"./ArrowUndo-CXChIdxN.js";import"./Globe-B33k006i.js";import"./BreadcrumbsLink-Cu4BC189.js";import"./ArrowRight-DtY135Ug.js";import"./Footer-FuueFcLe.js";const ut={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(h,{size:"xl",as:"h1",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),gt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
        <Heading size="xl" as="h1">
          Aktivitetslogg
        </Heading>
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,gt as __namedExportsOrder,ut as default};
