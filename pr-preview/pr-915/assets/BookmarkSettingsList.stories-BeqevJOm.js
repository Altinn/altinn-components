import{j as t}from"./iframe-CFpZEpOT.js";import{B as a,u as n}from"./useBookmarks-Dky_qBMI.js";import{L as c}from"./Layout-BzI4qoy5.js";import{B as d}from"./BookmarkModal-bz8-S3GQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-LzaqVov5.js";import"./index-CMCH-iYZ.js";import"./SettingsSection-ajhe3lC8.js";import"./Section-0tWdfaTG.js";import"./BookmarkSettingsItem-CVTQ2Dvy.js";import"./QueryLabel-DYFcubLK.js";import"./Plus-BvInV0-S.js";import"./useId-Bpa1--zZ.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Skeleton-BxeTCVQ2.js";import"./SettingsItemBase-BsxeBpgI.js";import"./ListItem-qVW9-kPs.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./XMark-DsxdrTa7.js";import"./Icon-CcpuJg5J.js";import"./Avatar-BgJ1eR8E.js";import"./AvatarGroup-CCJxayqM.js";import"./Badge-CiO-ESqG.js";import"./ChevronUp-B6qove2P.js";import"./ChevronDown-COoSRgYT.js";import"./ChevronRight-Ca_cSWgJ.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./ContextMenu-CwPKUzNp.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Dropdown-CxnqCSsD.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CV_qxNWd.js";import"./SearchField-7ltHAmFU.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Checkmark-DLdUb-vP.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./List-p1cS4I4-.js";import"./Divider-B_IjgFoE.js";import"./Pencil-B9RHEtUG.js";import"./Trash-B2QKAP19.js";import"./SkipLink-BLzC5zL0.js";import"./GlobalHeader-Dr0NKe8x.js";import"./useIsDesktop-DbbL3aCv.js";import"./GlobalAccountButton-gNvnsj16.js";import"./Enter-Dqoovvr7.js";import"./GlobalMenuButton-DfmN9jTZ.js";import"./MenuHamburger-DtdWoRM-.js";import"./AccountSelector-D1kVjilf.js";import"./heading-Dz2Brqs6.js";import"./AccountMenu-CV10p9pO.js";import"./Switch-iqmXxgDm.js";import"./GlobalMenu-CuzBEFx6.js";import"./ArrowUndo-C9-6H0l6.js";import"./Globe-DOomxry_.js";import"./LocaleSwitcher-cwbOnuSf.js";import"./DigdirLogomark-BZ-5j-nq.js";import"./SearchbarField-BQvBQvnx.js";import"./AutocompleteItem-DX0tkWsQ.js";import"./DropdownBase-BSB-jbNd.js";import"./useClickOutside-ChxnoCNJ.js";import"./GlobalMenuButton-D-3ozOIX.js";import"./PadlockLocked-m05TZyf8.js";import"./ButtonLabel-DHLBBQDW.js";import"./ButtonIcon-BpGEXsWC.js";import"./BreadcrumbsLink-Dz2cmI-H.js";import"./ArrowRight-hR9_L869.js";import"./Footer-B2772kKg.js";import"./SettingsModal-DDPQc-j7.js";import"./ModalBase-CZDPyOsV.js";import"./ModalBody-BZzL8uF4.js";import"./ButtonGroup-ix1R0MqJ.js";import"./TextField-CUluzzSh.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Vo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Vo as __namedExportsOrder,To as default};
