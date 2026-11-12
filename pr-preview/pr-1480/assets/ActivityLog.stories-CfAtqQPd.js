var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{aa as g,a7 as o,c as y}from"./iframe-D6r7-MD4.js";import{u as c}from"./useActivityLogToolbar-CBJU2kkx.js";import{M as v,b as x,a as f}from"./ModalBody-d0UpXorR.js";import{A as d}from"./ActivityLogItem-CFtrz5fP.js";import{T as A}from"./Toolbar-DUjTvOeg.js";import{S as M}from"./Section-CZyWrzO9.js";import{u as L}from"./useProfile-B9McGdjf.js";import{L as C}from"./Layout-BRmwP_5T.js";import{P as B}from"./PageBase-BAUzD4k0.js";import{H as k}from"./Heading-BBX9eyEy.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./Flex-BbelGz4F.js";import"./TimelineSegment-CrpZFLGv.js";import"./TimelineBase-BK9DXstX.js";import"./TimelineIcon-CH2JYOHX.js";import"./CircleFill-Bf4mAgBO.js";import"./Byline-U85WJkat.js";import"./Typography-CHbDBJK8.js";import"./useHighlightedText-ByiYciR_.js";import"./Timeline-DeI_jw2h.js";import"./TimelineActivity-fl9ebUWv.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./ItemLabel-CjCW6exE.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ChevronRight-B-ItEsH6.js";import"./FieldBase-BsGJArhX.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";import"./Plus-1rnJG1Or.js";import"./ButtonGroup-Br96c_T4.js";import"./ButtonGroupDivider-CN5V9cNU.js";import"./ChevronUpDown-ug0nSkB7.js";import"./ToolbarMenu-DhXLXKZr.js";import"./ToolbarSearch-3txfwJns.js";import"./useProfileLayout-SpzWwlvr.js";import"./HeartFill-6Q0CsPxj.js";import"./Bell--e4uljyi.js";import"./Bookmark-DXFZnfLO.js";import"./ClockDashed-8bhbX2BH.js";import"./globalMenu-B8vVdqli.js";import"./PersonCircle-BedPTAn8.js";import"./Buildings2-LPZcIjTE.js";import"./InboxFill-8qZ2EuaI.js";import"./MenuGrid-BnpoElgk.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-BY-3YmHS.js";import"./Trash-DWkOlGVD.js";import"./useLayout-B2TpKIWb.js";import"./useLocale-CX_k4MBF.js";import"./useAccountMenu-DNv1VH71.js";import"./header-DBmXoirO.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-K_XE-14U.js";import"./CookieBanner-mcZo0drp.js";import"./Link-D2eIT9zV.js";import"./Banner-CnMYqtk3.js";import"./GlobalHeader-dbQ9aWQK.js";import"./GlobalAccountButton-rYKbRJ-F.js";import"./ChevronDown-CA3F-CAN.js";import"./Enter-BLoa4ehM.js";import"./GlobalMenuButton-CrF0dpnX.js";import"./MenuHamburger-JGC_mwz5.js";import"./ChevronUp-o2c5iYOu.js";import"./AccountSelector-C_iWFF6J.js";import"./Switch-Tw7A9AdD.js";import"./AccountMenu-B-JRC4BL.js";import"./GlobalMenu-DJU_f6BY.js";import"./Checkmark-CffPLTp9.js";import"./ArrowUndo-CVxqjMaC.js";import"./Globe-DyYompeK.js";import"./BreadcrumbsLink-foBwcV3t.js";import"./ArrowRight-DyaydeNs.js";import"./Footer-BLEwrhcX.js";const ut={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),gt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};export{p as ActivityLogModal,l as ActivityLogModalAdvanced,s as Controlled,a as Default,m as ProfileActivityLog,gt as __namedExportsOrder,ut as default};
