import{j as t}from"./iframe-CK12xbO6.js";import{B as a,u as n}from"./useBookmarks-CUbZbVxq.js";import{L as c}from"./Layout-nLIVexDo.js";import{B as d}from"./BookmarkModal-Cwb6nDwg.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-DQqIzFyb.js";import"./index-DS2SSX1f.js";import"./SettingsSection-D1ui9S80.js";import"./Section-BZGNeHVH.js";import"./BookmarkSettingsItem-ymeHcLvL.js";import"./QueryLabel-VteGIvYB.js";import"./Plus-LAYoRaA7.js";import"./useId-CIOYGEMY.js";import"./Heading-Drr-of_9.js";import"./useHighlightedText-DdOMnBlO.js";import"./Skeleton-CLQkeaUO.js";import"./SettingsItemBase-66ZAoHms.js";import"./ChevronRight-DxL2oOG5.js";import"./ItemLink-DnABx_vH.js";import"./ItemMedia-XHYq4GSc.js";import"./XMark-MadrIoK8.js";import"./Avatar-CjYl4qzD.js";import"./AvatarGroup-DIAmYFyU.js";import"./Icon-BHUPQGzt.js";import"./ItemControls-B1M2j2tm.js";import"./Badge-BBKRgbs4.js";import"./Tooltip-BdqmcG89.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";import"./MagnifyingGlass-qxU1ofSJ.js";import"./ContextMenu-C7-0IVhC.js";import"./useDropdownMenuController--WYsFZ5d.js";import"./Dropdown-CtQW7C8x.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./MenuElipsisHorizontal-Bv4w19eK.js";import"./SearchField-CfLtnFna.js";import"./FieldBase-NrhOHdDA.js";import"./Typography-PIwVlbiP.js";import"./Label-CQOYgwqz.js";import"./index-BCgvi17I.js";import"./Input-CN33OjmR.js";import"./input-CdhXBgWK.js";import"./MenuListItem-B_ethkwV.js";import"./MenuListHeading-CCkIOc1e.js";import"./MenuItem-DjmA2GJO.js";import"./Checkmark-DQBecNO6.js";import"./useMenu-BM6Zh5Qq.js";import"./InformationSquare-C5QsI1Pb.js";import"./List-kHfgiCUp.js";import"./ListItem-vt36G1vI.js";import"./ChevronUp-D_0uwKbP.js";import"./ChevronDown-CccB8pUx.js";import"./Divider-mDpyUFas.js";import"./Pencil-Bz4mDJoQ.js";import"./Trash-DK6LQCTJ.js";import"./SkipLink-Db9GlLD5.js";import"./GlobalHeader-D8Tf9Vh1.js";import"./useIsDesktop-qZgXVmY_.js";import"./GlobalAccountButton-COOCFQt9.js";import"./Enter-JPXTLdVK.js";import"./GlobalMenuButton-Cvv8UVv8.js";import"./MenuHamburger-CeM_4KvR.js";import"./AccountSelector-ZHXmIRFE.js";import"./heading-Blw3pIef.js";import"./AccountMenu-DGBd5fhe.js";import"./Switch-CUp6PmYq.js";import"./GlobalMenu-DOiHa-TK.js";import"./ArrowUndo-DOBtYJAt.js";import"./Globe-oe0ciiSB.js";import"./LocaleSwitcher-oPRnhjsx.js";import"./DigdirLogomark-Cr-qodro.js";import"./SearchbarField-BoclOziJ.js";import"./AutocompleteItem-E3POKf0G.js";import"./DropdownBase-B20GPr-R.js";import"./useClickOutside-B_ap6-94.js";import"./GlobalMenuButton-BXZ9cU3d.js";import"./PadlockLocked-Bxl9Tu_e.js";import"./ButtonLabel-DzANo97U.js";import"./ButtonIcon-CM44tsrg.js";import"./BreadcrumbsLink-DfGqUs6r.js";import"./ArrowRight-CPCMb4Hg.js";import"./Footer-BOKij4tc.js";import"./SettingsModal-DbdDWFfX.js";import"./ModalBase-CWztHKgS.js";import"./ModalBody-dRl9W8-E.js";import"./ButtonGroup-BcyGdCwQ.js";import"./TextField-CKyr9W1y.js";const Wo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
