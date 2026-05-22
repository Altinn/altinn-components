import{j as t}from"./iframe-CbC-fLaY.js";import{B as a,u as n}from"./useBookmarks-Cnu8IgWh.js";import{L as c}from"./Layout-BdCm5cXO.js";import{B as d}from"./BookmarkModal-CTivfUc0.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BJvIxsRb.js";import"./QueryLabel-Cz6UbTUf.js";import"./Plus-BGo0JvDh.js";import"./useId-C2JQsT24.js";import"./Heading-Bl7p7Gle.js";import"./index-Ds9VDGIC.js";import"./useHighlightedText-BssbQrxH.js";import"./Skeleton-D8kEQByH.js";import"./SettingsItemBase-CPLBMCbD.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";import"./ItemLink-BLkR3G3D.js";import"./ItemMedia-CsSXB_1W.js";import"./XMark-DvUzU3_h.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./ItemControls-gQT1qCQ5.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./tooltip-BtbQ4KG6.js";import"./Typography-BWnrNFau.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./ContextMenu-CmXEuRA_.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Dropdown-5e6GLlMG.js";import"./Button-B0m1rUs2.js";import"./MenuElipsisHorizontal-DpFkC9Cn.js";import"./SearchField-yE8KzlZV.js";import"./FieldBase-D2jwyGQb.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuListHeading-C1HjQPPY.js";import"./MenuItem-BUq3aL73.js";import"./Checkmark-8GuDUS8U.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./Pencil-bm6Xpz6u.js";import"./Trash-oVpQevMD.js";import"./SkipLink-BVkfINao.js";import"./Banner-CFYJclR7.js";import"./GlobalHeader-C7O3_g0x.js";import"./useIsDesktop-Cd7k0tdp.js";import"./GlobalAccountButton-DzvhWJtE.js";import"./Enter-BnEF64HE.js";import"./GlobalMenuButton-C74EDIuz.js";import"./MenuHamburger-CSe5Jiwx.js";import"./AccountSelector-DS9IofOb.js";import"./AccountMenu-xmO_qzm_.js";import"./Switch-Bt1XFAG8.js";import"./GlobalMenu-DB4GaB4x.js";import"./ArrowUndo-CJcERi05.js";import"./Globe-E90sEq1m.js";import"./BreadcrumbsLink-Bs-avobN.js";import"./ArrowRight-CbPqeL4d.js";import"./Footer-DJQhp-mw.js";import"./SettingsModal-CMK7iPDJ.js";import"./ModalBody-Ce5L1hlw.js";import"./Section-DypEBfCX.js";import"./Flex-DahTG4Th.js";import"./ButtonGroup-BE0BnYMw.js";import"./ButtonIcon-DWUAaYBn.js";import"./ButtonLabel-D9GeETuC.js";import"./TextField-hBfv-7w0.js";const Go={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <>
      <BookmarkSettingsList items={items} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    expandedId,
    onClose,
    items
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  const groups = {
    '1': {
      title: 'Med tittel'
    },
    '2': {
      title: 'Uten tittel'
    }
  };
  return <>
      <BookmarkSettingsList items={items} groups={groups} />
      {expandedId && <BookmarkModal {...modalProps} title="Rediger søk" open={expandedId !== ''} onClose={onClose} buttons={[{
      label: 'Lagre',
      onClick: () => onClose()
    }, {
      label: 'Slett',
      variant: 'outline',
      onClick: () => onClose()
    }]} />}
    </>;
}`,...m.parameters?.docs?.source}}};const Uo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Uo as __namedExportsOrder,Go as default};
