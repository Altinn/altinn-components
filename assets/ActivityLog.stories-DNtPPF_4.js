import{s as u,p as o}from"./iframe-HmDeAVAp.js";import{u as l}from"./useActivityLogToolbar-C_NxL_Fa.js";import{B as g}from"./Button-SB9AH0kY.js";import{M as y,b as v,a as x}from"./ModalBody-HgcUYgus.js";import{A as c}from"./ActivityLogItem-CTr9Td_g.js";import{T as f}from"./Toolbar-BKE4Y_qG.js";import{S as A}from"./Section-0rDkal-t.js";import{u as j}from"./useProfile-C8XHY9m_.js";import{L as M}from"./Layout-C7oBUU0V.js";import{P as L}from"./PageBase-DIs_1Ar7.js";import{H as B}from"./Heading-CYuK0FXt.js";import"./preload-helper-PPVm8Dsz.js";import"./tooltip-DaXe8rKK.js";import"./index-CDtevUxF.js";import"./XMark-DFSmJjac.js";import"./useId-BNhfXdUV.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Flex-CKAWkLAd.js";import"./TimelineSegment-DNk9HDPd.js";import"./TimelineBase-CWKIHsry.js";import"./TimelineIcon-CgDNJMsO.js";import"./CircleFill-BuHQ64JN.js";import"./Byline-CbAX77ox.js";import"./Typography-C3y2BBzr.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Timeline-jcin5w9I.js";import"./TimelineActivity-DKDX4KwS.js";import"./useDropdownMenuController-DyRpfBpv.js";import"./Dropdown-DitJK_eU.js";import"./SearchField-jJndU2uH.js";import"./MagnifyingGlass-BBPHMis4.js";import"./FieldBase-DgiW3HLY.js";import"./Field-D-jjHIb3.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";import"./useMenu-l9Wd3rxx.js";import"./MenuListItem-DjeDZ_MF.js";import"./MenuListHeading-Bby608mu.js";import"./MenuItem-C_rMT9NN.js";import"./ItemMedia-CLlob8fs.js";import"./Checkmark-_BupHaSE.js";import"./ItemLabel-DIku2iz8.js";import"./ItemControls-dRm3u7Mm.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronRight-Cqfpq8PE.js";import"./index-4vigTm9p.js";import"./InformationSquare-C8JPrkni.js";import"./Plus-DQEVi2NZ.js";import"./ButtonGroup-IIZdVlDD.js";import"./ButtonGroupDivider-CnzTkYJc.js";import"./ChevronUpDown-CWSZq7_s.js";import"./ToolbarMenu-CsI2k66_.js";import"./ToolbarSearch-6PZ1R0uh.js";import"./useProfileLayout-cAJX9Zr1.js";import"./HeartFill-F6kflSFE.js";import"./Bell-OUyuKCV8.js";import"./Bookmark-WP4RvwzF.js";import"./ClockDashed-DPb7YX4C.js";import"./globalMenu-DxGEj0TB.js";import"./PersonCircle-CNe7iw6a.js";import"./Buildings2-C4jzAZ1_.js";import"./InboxFill-DyosbqVC.js";import"./MenuGrid-CTrdV62x.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DP3tiXIo.js";import"./Trash-DTo3Lvzs.js";import"./useLayout-C-QeVy89.js";import"./useLocale-DCCg7QrN.js";import"./useAccountMenu-D7vno3IW.js";import"./header-CSj4CAVu.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-D23OaqaJ.js";import"./Banner-DXjLYb3h.js";import"./GlobalHeader-CufXuMSy.js";import"./useIsDesktop-DO6OG2LW.js";import"./GlobalAccountButton-DvDpR5SP.js";import"./ChevronDown-D8XmQ_JM.js";import"./Enter-CAZ7ckdy.js";import"./GlobalMenuButton-zo8Gaxdk.js";import"./MenuHamburger-DdsOhgur.js";import"./ChevronUp-DWlUIEYm.js";import"./AccountSelector-M8HWKIKD.js";import"./Switch-BqrMYGGB.js";import"./AccountMenu-CqB4ytQn.js";import"./GlobalMenu-CMqwihJF.js";import"./ArrowUndo-5PN4IUrs.js";import"./Globe-BEIMQJ4I.js";import"./BreadcrumbsLink-CKGTzOaK.js";import"./ArrowRight-IsDuRZS-.js";import"./Footer-pGg2oEmV.js";const ut={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(f,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(y,{open:r,onClose:e,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(x,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(g,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(y,{open:s,onClose:d,variant:"content",children:[o.jsx(v,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(x,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(f,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const gt=["Default","Controlled","ProfileActivityLog","ActivityLogModal","ActivityLogModalAdvanced"];export{m as ActivityLogModal,p as ActivityLogModalAdvanced,i as Controlled,n as Default,a as ProfileActivityLog,gt as __namedExportsOrder,ut as default};
