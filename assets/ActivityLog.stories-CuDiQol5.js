import{j as o,r as u}from"./iframe-aW2Ivac6.js";import{u as l}from"./useActivityLogToolbar-Bmee29wC.js";import{A as c}from"./ActivityLogItem-B-3CP5pX.js";import{S as A}from"./Section-BsfLh2yG.js";import{T as g}from"./Toolbar-Dh5S6ybd.js";import{u as j}from"./useProfile-CVesPQlk.js";import{L as M}from"./Layout-DrkwdCYs.js";import{P as L}from"./PageBase-DODSeyqi.js";import{H as B}from"./Heading-D9dg30ti.js";import{B as y}from"./Button-RX-ew4zS.js";import{M as v,a as x,b as f}from"./ModalBody-_o4wF_hP.js";import"./preload-helper-PPVm8Dsz.js";import"./TimelineSegment-BN8v3r5f.js";import"./TimelineBase-Dil-LmrL.js";import"./Flex-CJSQwJ4K.js";import"./index-DWa6FdCb.js";import"./TimelineIcon-Cw3c-DTM.js";import"./XMark-DUdkEKb2.js";import"./useId-DH4aqM3h.js";import"./Icon-CD7MnEv7.js";import"./Skeleton-it7stJ0Q.js";import"./Avatar-C-j1g9mt.js";import"./AvatarGroup-Btn-kZJL.js";import"./CircleFill-DKTbXyOV.js";import"./Byline-tX5_ZM73.js";import"./Typography-JHHWywcS.js";import"./useHighlightedText-ZQImmj57.js";import"./Timeline-h7At4slE.js";import"./TimelineActivity-B0YsHryw.js";import"./useDropdownMenuController-CJ9HEXOr.js";import"./Plus-Cg6CWYTT.js";import"./Dropdown-BOvlApQ8.js";import"./SearchField-uUwTRA3v.js";import"./MagnifyingGlass-CZzm3B-3.js";import"./FieldBase-CdSvcvFX.js";import"./Label-UVt4ZlNT.js";import"./index-BzK4-cKk.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";import"./Input-S7hdVfLT.js";import"./input-DBhNK3CK.js";import"./MenuListItem-Nc9dF1O6.js";import"./MenuListHeading-CkJcv2mm.js";import"./MenuItem-COYpbW6V.js";import"./ItemMedia-D2IPLDQS.js";import"./Checkmark-BjMWNebU.js";import"./ItemControls-BfAmDR5q.js";import"./ChevronRight-Bcq_DMzy.js";import"./Badge-WunB0MzM.js";import"./Tooltip-DYC812UO.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-ChK92nmD.js";import"./index-CSsgmh7M.js";import"./InformationSquare-BtbGMdWt.js";import"./ChevronUpDown-BuexUABI.js";import"./ButtonGroup-BjSwpoTC.js";import"./ButtonGroupDivider-E_lmL3bb.js";import"./ToolbarMenu-KjkIcEDa.js";import"./ToolbarSearch-CiWeS0rY.js";import"./useProfileLayout-BlC18q7o.js";import"./HeartFill-DuQrzvmx.js";import"./Bell-DmB39Dyn.js";import"./Bookmark-CFgUuPha.js";import"./ClockDashed-BPscwdUq.js";import"./globalMenu-Dz4DXw-z.js";import"./PersonCircle-DPRH_llS.js";import"./Buildings2-D1hlYQo9.js";import"./InboxFill-qs4ohqzK.js";import"./MenuGrid-rA8vibJs.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-aCPoIJqz.js";import"./Trash-C236s4up.js";import"./useLayout-Cg2n-zHu.js";import"./useLocale-C9HjZW-J.js";import"./useAccountMenu-B9zr0vSq.js";import"./header-BfCnMbnj.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./SkipLink-Bn_vSWU3.js";import"./Banner-8CVvg8HE.js";import"./GlobalHeader-Nq92m6iw.js";import"./useIsDesktop-BJdF2eFD.js";import"./GlobalAccountButton-umDbm3Xt.js";import"./ChevronDown-B1Tnrqm5.js";import"./Enter-BUtIy1kW.js";import"./GlobalMenuButton-CNxrmuou.js";import"./MenuHamburger-5ynA6oKg.js";import"./ChevronUp-Cb22o5aT.js";import"./AccountSelector-CaMR5UnS.js";import"./button-CCQIf2kf.js";import"./heading-CgRl8HZA.js";import"./AccountMenu-BtfjiIyK.js";import"./Switch-T1wAkZbR.js";import"./GlobalMenu-BlHoO1Ht.js";import"./ArrowUndo-BdzRHxUS.js";import"./Globe-B2KtByVs.js";import"./BreadcrumbsLink-V8iO21Ls.js";import"./ArrowRight-DG3uu7SN.js";import"./Footer-DX_UAj2b.js";const xt={title:"Timeline/ActivityLog",tags:["beta"],parameters:{layout:"fullscreen"},args:{}},n=()=>{const{items:t}=l();return o.jsx(c,{items:t})},i=()=>{const{toolbar:t,items:r}=l();return o.jsxs(A,{spacing:6,children:[o.jsx(g,{...t}),o.jsx(c,{items:r})]})},a=()=>{const{layout:t}=j({pageId:"activity-log"});return o.jsx(M,{...t,children:o.jsxs(L,{children:[o.jsx(B,{size:"xl",children:"Aktivitetslogg"}),o.jsx(i,{})]})})},m=()=>{const{items:t}=l(),[r,s]=u.useState(!0),e=()=>{s(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>s(!0),children:"Open Modal"}),o.jsxs(v,{open:r,onClose:e,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:e}),o.jsx(f,{children:o.jsx(c,{items:t})})]})]})},p=()=>{const{toolbar:t,items:r}=l(),[s,e]=u.useState(!0),d=()=>{e(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y,{onClick:()=>e(!0),children:"Open Modal"}),o.jsxs(v,{open:s,onClose:d,variant:"content",children:[o.jsx(x,{title:"Aktivitetslogg for dialog",onClose:d,sticky:!1}),o.jsxs(f,{children:[o.jsx("div",{style:{position:"sticky",top:"1.5em",zIndex:2},children:o.jsx(g,{...t})}),o.jsx(c,{items:r})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
