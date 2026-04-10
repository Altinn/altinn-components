import{j as t}from"./iframe-CEV_bE_y.js";import{B as a,u as n}from"./useBookmarks-C-RqbQWg.js";import{L as c}from"./Layout-DyonEkYo.js";import{B as d}from"./BookmarkModal-N_lyr3_q.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BZtJmJL5.js";import"./index-CGpVDQnA.js";import"./SettingsSection-DzmTxHmV.js";import"./Section-BaBnzd0n.js";import"./BookmarkSettingsItem-B9o8b5GM.js";import"./QueryLabel-DfLFOOHP.js";import"./Plus-D1UdPMNR.js";import"./useId-BHfJgDBc.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./Skeleton-cNOPtI7P.js";import"./SettingsItemBase-CkTiyDOR.js";import"./ChevronRight-Dck0Zh1j.js";import"./ItemLink-CMOTTmp_.js";import"./ItemMedia-DIGN_0r9.js";import"./XMark-ByuttVGc.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Icon-BwPDmLy2.js";import"./ItemControls-Dsxd0fj6.js";import"./Badge-BVMw9Rw0.js";import"./MagnifyingGlass-D6I6hP_d.js";import"./ContextMenu-Dufoe0MX.js";import"./useDropdownMenuController-COGXRvNW.js";import"./Dropdown--G_NTa0P.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Tooltip-CRnr2OHK.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CPhYoHNE.js";import"./SearchField-C9XAkfHX.js";import"./FieldBase-D397wWlI.js";import"./Typography-BMVOyH8m.js";import"./Label-Cb-tqHHM.js";import"./index-Cr9j_S5O.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./MenuListItem-DvZVWiZY.js";import"./MenuListHeading-BxT-phiC.js";import"./MenuItem-D6Egs8SC.js";import"./Checkmark-D-WBqViW.js";import"./useMenu-EIG5MfCS.js";import"./InformationSquare-C-romZo4.js";import"./List-C-GVcOeW.js";import"./ListItem-CqKn_y3x.js";import"./ChevronUp-BgDvj3-f.js";import"./ChevronDown--HTcc5lI.js";import"./Divider-DYQFWbxY.js";import"./Pencil-B4q-p7MF.js";import"./Trash-DL6cPj-R.js";import"./SkipLink-mCAE-oMC.js";import"./GlobalHeader-BDhkDXWd.js";import"./useIsDesktop-BlUQDDAY.js";import"./GlobalAccountButton-BQGEBgqJ.js";import"./Enter-C1WxztuE.js";import"./GlobalMenuButton-BMfwJ8hK.js";import"./MenuHamburger-DBcPb8fU.js";import"./AccountSelector-B4cd66jm.js";import"./heading-D3Tt8F81.js";import"./AccountMenu-adZ4jcQl.js";import"./Switch-Br9M89v1.js";import"./GlobalMenu-CovSPeT7.js";import"./ArrowUndo-DgeaLVju.js";import"./Globe-BPeGlch2.js";import"./LocaleSwitcher-FAej8yIP.js";import"./DigdirLogomark-cWibhzTJ.js";import"./SearchbarField-CsbZ30XY.js";import"./AutocompleteItem-TqvRZWpV.js";import"./DropdownBase-BnZ2mdI4.js";import"./useClickOutside-DXo94wLb.js";import"./GlobalMenuButton-BgcQWhdM.js";import"./PadlockLocked-CD3BiTlm.js";import"./ButtonLabel-DcT85n25.js";import"./ButtonIcon-BdogZ2zC.js";import"./BreadcrumbsLink-DMe1ilgw.js";import"./ArrowRight-C75lQa8Z.js";import"./Footer-CYJmNoIp.js";import"./SettingsModal-DtZkUiCe.js";import"./ModalBase-CwOzpdoZ.js";import"./ModalBody-Dd72ulEZ.js";import"./ButtonGroup-D8NAEtXB.js";import"./TextField-nDHukFGk.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Xo=["BookmarksList","GroupedBookmarksList"];export{e as BookmarksList,m as GroupedBookmarksList,Xo as __namedExportsOrder,Wo as default};
