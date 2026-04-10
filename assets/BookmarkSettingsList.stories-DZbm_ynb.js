import{j as t}from"./iframe-DpqvNfuX.js";import{B as a,u as n}from"./useBookmarks-BuGuHf4v.js";import{L as c}from"./Layout-12ovHulg.js";import{B as d}from"./BookmarkModal-DUTFwTra.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BVIzbH2w.js";import"./index-Ct2h27FF.js";import"./SettingsSection-SIdedggn.js";import"./Section-CtbhQhiL.js";import"./BookmarkSettingsItem-FutlD2l-.js";import"./QueryLabel-b0e8fvd2.js";import"./Plus-i3IwH-31.js";import"./useId-BXmkKvJa.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./Skeleton-CUXlhXSK.js";import"./SettingsItemBase-DaebGku-.js";import"./ListItem-CCCiwYYh.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./XMark-D5GqdRxj.js";import"./Icon-DaddCVMS.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Badge-DH_aKElc.js";import"./ChevronUp-Dxkuhvvs.js";import"./ChevronDown-wC2GJNFy.js";import"./ChevronRight-l4sUB0S3.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./ContextMenu-BR8rSsRr.js";import"./useDropdownMenuController-BsIinftt.js";import"./Dropdown-g5xLWPPm.js";import"./Tooltip-BWGqnLO5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DhZAoCcg.js";import"./SearchField-B4PsSxTf.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Checkmark-B0EPfKD4.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./List-CLF93S-1.js";import"./Divider-Cx6flCJn.js";import"./Pencil-DTNAW_BZ.js";import"./Trash-BiqPoHTU.js";import"./SkipLink-DVUZiheR.js";import"./GlobalHeader-qJa5kKWy.js";import"./useIsDesktop-T_vm3OPM.js";import"./GlobalAccountButton-BdBIVxQE.js";import"./Enter-eZQ7yeb1.js";import"./GlobalMenuButton-DwAPjlE6.js";import"./MenuHamburger-CdFk3dXA.js";import"./AccountSelector-OHtv2Yyz.js";import"./heading-CYk2U-w2.js";import"./AccountMenu-IMvwRl7-.js";import"./Switch-CXVa32Re.js";import"./GlobalMenu-92BQa62C.js";import"./ArrowUndo-Bd_HvD5c.js";import"./Globe-BeMaPubG.js";import"./LocaleSwitcher-CkkwYZvC.js";import"./DigdirLogomark-CTvxZZ-u.js";import"./SearchbarField-DGheZoWO.js";import"./AutocompleteItem-CUyj1Vu6.js";import"./DropdownBase-DYlaIXdq.js";import"./useClickOutside-BtQarK1K.js";import"./GlobalMenuButton-C4bGQf4E.js";import"./PadlockLocked-CPU9mg8k.js";import"./ButtonLabel-BqDMYKYo.js";import"./ButtonIcon-D3qd8UBN.js";import"./BreadcrumbsLink-C93E1VCQ.js";import"./ArrowRight-Cf-_tytp.js";import"./Footer-B6n0N9xS.js";import"./SettingsModal-DkP3mWit.js";import"./ModalBase-BKOXa_eC.js";import"./ModalBody-I1OMRX6C.js";import"./ButtonGroup-DLg5nJZL.js";import"./TextField-D5xdNgam.js";const To={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const i={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:i,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},e=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!1}),p=o&&i.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:i}=n({grouped:!0}),p=o&&i.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:i,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
