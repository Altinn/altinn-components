import{a7 as t}from"./iframe-ju2_P8cU.js";import{B as a,u as n}from"./useBookmarks-BGF_PdmR.js";import{B as d}from"./BookmarkModal-D0KrhIKA.js";import{L as c}from"./Layout-BgLQmeBd.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C_YjP6fk.js";import"./BookmarkSettingsItem-Dez9HcK-.js";import"./QueryLabel-BSdNDfg5.js";import"./Plus-Bezfg3ws.js";import"./Heading-BwdjGJ12.js";import"./useHighlightedText-Ds75xSSg.js";import"./SettingsItemBase-ByQ-5qi7.js";import"./ItemMedia-BZfNDLpv.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./ChevronRight-C-B7qVOy.js";import"./ItemBase-CkWChTpa.js";import"./ItemLink-nv4hDnw7.js";import"./ItemControls-DCzps0Gu.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./Typography-B5wbJTRa.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./ContextMenu-Btl7LJ1G.js";import"./useDropdownMenuController-QhPAjtom.js";import"./Dropdown-1f1KBVL6.js";import"./SearchField-DBcXR3Pi.js";import"./FieldBase-B0oEW9Tf.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./Input-DOMevMNG.js";import"./MenuListItem-DYFDVXHn.js";import"./MenuListDivider-CKbzfKKF.js";import"./MenuListHeading-CawXvXz1.js";import"./MenuItem-CTnwjskA.js";import"./Checkmark-DdndXx_3.js";import"./ItemLabel-DZZbZME8.js";import"./InformationSquare-DxoPvZKH.js";import"./MenuElipsisHorizontal-B8s7-qPg.js";import"./Pencil-B4Gi9skh.js";import"./Trash-CVIa8LCo.js";import"./SettingsModal-CRoAK6Cz.js";import"./ModalBody-DN8l4H7v.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./ButtonGroup-B2X4F04D.js";import"./ButtonIcon-B8rfoecA.js";import"./ButtonLabel-De0xiolO.js";import"./TextField-jtg2S-WL.js";import"./SkipLink-QM0bjGuE.js";import"./Banner-C0Hd_jRO.js";import"./GlobalHeader-Bl34Zeq_.js";import"./useIsDesktop-CM3JNpdH.js";import"./GlobalAccountButton-16F7-rtH.js";import"./Enter-CwR9nqj6.js";import"./GlobalMenuButton-B2zB_jOq.js";import"./MenuHamburger-Cqp41b9X.js";import"./AccountSelector-BwZs8_Os.js";import"./Switch-DbxkCHqQ.js";import"./AccountMenu-CAM2BVUh.js";import"./GlobalMenu-DuSUiJwD.js";import"./ArrowUndo-GzL63ye6.js";import"./Globe-CDPZ8tgx.js";import"./BreadcrumbsLink-BFannjV9.js";import"./ArrowRight-Dfde_Sa9.js";import"./Footer-rr-3Gc9e.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const yo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,s as GroupedBookmarksList,yo as __namedExportsOrder,ho as default};
