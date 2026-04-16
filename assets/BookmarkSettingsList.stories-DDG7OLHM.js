import{j as t}from"./iframe-qDHSBZ_X.js";import{B as a,u as n}from"./useBookmarks-14lemxO5.js";import{L as c}from"./Layout-Bvd89xNp.js";import{B as d}from"./BookmarkModal-DftiChYG.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BTOiCOb2.js";import"./index-DTh2bawh.js";import"./SettingsSection-Bo8jDzAh.js";import"./Section-BGNwMxU-.js";import"./BookmarkSettingsItem-CUQofQVs.js";import"./QueryLabel-0k68MKss.js";import"./Plus-BXcVwr4C.js";import"./useId-DLE_nI5l.js";import"./Heading-D2BacHeJ.js";import"./useHighlightedText-D75SWcvd.js";import"./Skeleton-CJ3n2_6V.js";import"./SettingsItemBase-1siPsKad.js";import"./ChevronRight-Dusr5JiS.js";import"./ItemLink-BI9Xo5Q5.js";import"./ItemMedia-p3tZByS2.js";import"./XMark-D8iHP3Cp.js";import"./Avatar-BNcU10On.js";import"./AvatarGroup-CDcb8Qnp.js";import"./Icon-BDVkMuHy.js";import"./ItemControls-Bd_Ry2Op.js";import"./Badge-CmtcZ1do.js";import"./MagnifyingGlass-52kli1F6.js";import"./ContextMenu-DOLPZcNs.js";import"./useDropdownMenuController-CkPbLtTM.js";import"./Dropdown-zJkG990V.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";import"./Tooltip-gFU6qfTf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DaGYavuu.js";import"./SearchField-owOVnt34.js";import"./FieldBase-36tTBvzs.js";import"./Typography-DhQz7tKb.js";import"./Label-UpgatIiv.js";import"./index-C32uHHVZ.js";import"./Input-ChlNPyEa.js";import"./input-CNv7eEBO.js";import"./MenuListItem-BPMBfOBa.js";import"./MenuListHeading-CFSESgmr.js";import"./MenuItem-CYIZHSHo.js";import"./Checkmark-BOxDKZpX.js";import"./useMenu-5iviLK-9.js";import"./InformationSquare-ClYcp41K.js";import"./List-CWWxrTyE.js";import"./ListItem-CtT8THVd.js";import"./ChevronUp-BCgkquKN.js";import"./ChevronDown-By4Pb8IL.js";import"./Divider-Bq2ZhUaf.js";import"./Pencil-BqoKXpvM.js";import"./Trash-CJ5RcE6N.js";import"./SkipLink-CfMrNMAX.js";import"./GlobalHeader-BzPyv3xf.js";import"./useIsDesktop-BFZhxv40.js";import"./GlobalAccountButton-CuETNCS9.js";import"./Enter-C93e8y6K.js";import"./GlobalMenuButton-Cgvp1zfr.js";import"./MenuHamburger-DzXQ83g6.js";import"./AccountSelector-Dkj6TLtf.js";import"./heading-vUD5AL2p.js";import"./AccountMenu-BPVsDnJ8.js";import"./Switch-De1PckpN.js";import"./GlobalMenu-DoGzIxf5.js";import"./ArrowUndo-CMxvcs3T.js";import"./Globe--kIPlUca.js";import"./LocaleSwitcher-CQreO82V.js";import"./DigdirLogomark-BTHV4ner.js";import"./SearchbarField-LP6FBo7g.js";import"./AutocompleteItem-BQeM350o.js";import"./DropdownBase-BqSE5S-1.js";import"./useClickOutside-CAQh4xNR.js";import"./GlobalMenuButton-ClHsVzRN.js";import"./PadlockLocked-v0NVxIzQ.js";import"./ButtonLabel-By2Cfxp9.js";import"./ButtonIcon-RpuQ8rbs.js";import"./BreadcrumbsLink-B7m4L_ms.js";import"./ArrowRight-B5E8ZVvl.js";import"./Footer-CPDg0D6q.js";import"./SettingsModal-ClCYiVlq.js";import"./ModalBase-D5nrnpeg.js";import"./ModalBody-CPf3RSij.js";import"./ButtonGroup-D3OFsAa4.js";import"./TextField-CJ_tnBEX.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
