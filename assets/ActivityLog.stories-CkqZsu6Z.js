var j=Object.defineProperty;var r=(t,e)=>j(t,"name",{value:e,configurable:!0});import{a9 as g,a6 as o,c as y}from"./iframe-CJbVApVd.js";import{u as c}from"./useActivityLogToolbar-DuCX-lYx.js";import{M as v,b as x,a as f}from"./ModalBody-CibPyY7R.js";import{A as d}from"./ActivityLogItem-BSipwBks.js";import{T as A}from"./Toolbar-Bragk--_.js";import{S as M}from"./Section-senxxBaK.js";import{u as L}from"./useProfile-CyKgIJTl.js";import{L as C}from"./Layout-D4_cnTw3.js";import{P as B}from"./PageBase-D6K7wqGL.js";import{H as k}from"./Heading-DPlNKJG2.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./Flex-DQBhfYN9.js";import"./TimelineSegment-C5XkIU-1.js";import"./TimelineBase-B2MDqOJ7.js";import"./TimelineIcon-KU-6T3DY.js";import"./CircleFill-Bxo5wc73.js";import"./Byline-DbUQdLmq.js";import"./Typography-YiefWcUe.js";import"./useHighlightedText-ClD__BkG.js";import"./Timeline-C2_VO8cb.js";import"./TimelineActivity-CMes2Bmi.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./SearchField-v7apZWbj.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./ItemLabel-BQOKZEUY.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./FieldBase-DPozPxXp.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";import"./Plus-C_JJ1fS4.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonGroupDivider-BEoSbrb-.js";import"./ChevronUpDown-CYzCA8Zj.js";import"./ToolbarMenu-BnWSZSo7.js";import"./ToolbarSearch-BOc9sO_2.js";import"./useProfileLayout-CjhJssMU.js";import"./HeartFill-BaKFRi7I.js";import"./Bell-UFatCXFf.js";import"./Bookmark-C9de6O7D.js";import"./ClockDashed-D1H_Un6v.js";import"./globalMenu-16sT0Jb1.js";import"./PersonCircle-CGUoPQfj.js";import"./Buildings2-CTG7RS-R.js";import"./InboxFill-C0zkOxXf.js";import"./MenuGrid-DCB-knrm.js";import"./accountMenu-Bkkwt1bO.js";import"./getAccount-B6DocGW1.js";import"./Archive-CfKujgt8.js";import"./Trash-TofRm-_Y.js";import"./useLayout-BP48tN3_.js";import"./useLocale-CCKwctp8.js";import"./useAccountMenu-C4PrfCi7.js";import"./header-Cqi5jk-A.js";import"./footer-w2jkxXbY.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-wPOw8Ojx.js";import"./CookieBanner-BhX6ha7Q.js";import"./Link-Bh7qdzfq.js";import"./Banner-DckGEEVl.js";import"./GlobalHeader-B2VMgRyO.js";import"./useIsDesktop-B-cEhfIa.js";import"./GlobalAccountButton-DLHTd1Ta.js";import"./ChevronDown-CUSqX3Qn.js";import"./Enter-CLpxMQoO.js";import"./GlobalMenuButton-DqPwGFaS.js";import"./MenuHamburger-Drn1nU86.js";import"./ChevronUp-Dnc1erKd.js";import"./AccountSelector-DnNjsOoN.js";import"./Switch-DgDB3yiy.js";import"./AccountMenu-CaMcu7Ms.js";import"./GlobalMenu-B28H1ehD.js";import"./Checkmark-B9iR0FRr.js";import"./ArrowUndo-s8spIZZt.js";import"./Globe-DZKqbOWc.js";import"./BreadcrumbsLink-XcBs2lYi.js";import"./ArrowRight-Bj8RpLKd.js";import"./Footer-DawQ2f6l.js";const dt={title:"Timeline/ActivityLog",parameters:{layout:"fullscreen"},args:{}},a=r(()=>{const{items:t}=c();return o.jsx(d,{items:t})},"Default"),s=r(()=>{const{toolbar:t,items:e}=c();return o.jsxs(M,{spacing:6,children:[o.jsx(A,{...t}),o.jsx(d,{items:e})]})},"Controlled"),m=r(()=>{const{layout:t}=L({pageId:"activity-log"});return o.jsx(C,{...t,children:o.jsxs(B,{children:[o.jsx(k,{size:"xl",children:"Aktivitetslogg"}),o.jsx(s,{})]})})},"ProfileActivityLog"),p=r(()=>{const{items:t}=c(),[e,n]=g.useState(!0),i=r(()=>{n(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>n(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:e,onClose:i,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:i}),o.jsx(f,{children:o.jsx(d,{items:t})})]})]})},"ActivityLogModal"),l=r(()=>{const{toolbar:t,items:e}=c(),[n,i]=g.useState(!0),u=r(()=>{i(!1)},"onClose");return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:r(()=>i(!0),"onClick"),children:"Open Modal"}),o.jsxs(v,{open:n,onClose:u,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:u,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(A,{...t})}),o.jsx(d,{items:e})]})]})]})},"ActivityLogModalAdvanced"),ut=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
