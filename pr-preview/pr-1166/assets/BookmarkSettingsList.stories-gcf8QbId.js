import{j as t}from"./iframe-Cppd0qv6.js";import{B as a,u as n}from"./useBookmarks-BTNt4jCB.js";import{L as c}from"./Layout-hzfrw4Dy.js";import{B as d}from"./BookmarkModal-DdT_SrES.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BPZu7a_-.js";import"./index-BRImx9w3.js";import"./SettingsSection-CAFxI0C7.js";import"./Section-B6Kfhq0f.js";import"./BookmarkSettingsItem-CRpZk1LP.js";import"./QueryLabel-DQXU8nUC.js";import"./Plus-Budqe_al.js";import"./useId-BBgZM5Xr.js";import"./Heading-CVWk1BMK.js";import"./useHighlightedText-CnlmbfHa.js";import"./Skeleton-DZL_2b5i.js";import"./SettingsItemBase-BPkLG8tg.js";import"./ChevronUp-BQWLGwxf.js";import"./ChevronDown-DyFLAVGh.js";import"./ChevronRight-CWvUN_3J.js";import"./ItemLink-C9wl5dRr.js";import"./ItemMedia-B28DyjI4.js";import"./XMark-xtLLERRk.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Icon-DYZqEJGr.js";import"./ItemControls-D1uxt3OD.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";import"./Typography-CFy91Abt.js";import"./MagnifyingGlass-D5_sNBXy.js";import"./ContextMenu-C6NdKlu4.js";import"./useDropdownMenuController-BL3HRjvJ.js";import"./Dropdown-CazJ30ul.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./MenuElipsisHorizontal-E1vulT3j.js";import"./SearchField-Cfz4mYX1.js";import"./FieldBase-AUbtsXZu.js";import"./Label-BZYzljw4.js";import"./index-DZ9ad6Vq.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./MenuListItem-BHtHmzZq.js";import"./MenuListHeading-DGbRdhBr.js";import"./MenuItem-DujpBTEw.js";import"./Checkmark-Ci2lQnJg.js";import"./useMenu-Dh0AdFxf.js";import"./InformationSquare-C6gp2qmA.js";import"./List-B3lNMupF.js";import"./ListItem-BWQ_dxae.js";import"./Divider-DkVfc8bj.js";import"./Pencil-BC3i_iD0.js";import"./Trash-ahBs7pt8.js";import"./SkipLink-CnL1kZs7.js";import"./Banner-9Rdydw2I.js";import"./GlobalHeader-CPQjZYY4.js";import"./useIsDesktop-AL_WT0Qz.js";import"./GlobalAccountButton-D9Ci5lhW.js";import"./Enter-C5TspCZF.js";import"./GlobalMenuButton-C162p8K3.js";import"./MenuHamburger-DXfg8QpW.js";import"./AccountSelector-c64KUYHe.js";import"./heading-DFc6Xo-9.js";import"./AccountMenu-KAFRT7sR.js";import"./Switch-BmVTV9XV.js";import"./GlobalMenu-DvQr7r97.js";import"./ArrowUndo--v4Yl1wb.js";import"./Globe-C9m8MPR0.js";import"./BreadcrumbsLink-DdaJurIs.js";import"./ArrowRight-CuMZ4iZb.js";import"./Footer-CWDdPTvZ.js";import"./SettingsModal-DDq2i2rR.js";import"./ModalBody-BEyoSkmL.js";import"./ButtonGroup-DWofFi2X.js";import"./ButtonIcon-DZ5ghlk2.js";import"./ButtonLabel-BABBlGuL.js";import"./TextField-CwO8NmCL.js";const Do={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),p=o&&e.find(s=>s.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),p=o&&e.find(l=>l.id===o),s={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:s}),o&&t.jsx(d,{...p,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Ho=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Ho as __namedExportsOrder,Do as default};
