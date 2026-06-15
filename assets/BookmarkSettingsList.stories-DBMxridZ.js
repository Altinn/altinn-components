import{a7 as t}from"./iframe-D-JzFSbn.js";import{B as a,u as n}from"./useBookmarks-C3LxAstc.js";import{B as d}from"./BookmarkModal-D6LJgYC-.js";import{L as c}from"./Layout-BD82hjWW.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DF0RLrk1.js";import"./BookmarkSettingsItem-BD2KOcEp.js";import"./QueryLabel-DRuLqCf9.js";import"./Plus-D_QwnLRF.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./SettingsItemBase-CJ5K594X.js";import"./ItemMedia-CHlzWEIP.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./ChevronRight-CnTD3zzq.js";import"./ItemBase-M7V_iwXR.js";import"./ItemLink-B5PMO6Sl.js";import"./ItemControls-B8a9YN0L.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./Typography-B37rH5fJ.js";import"./MagnifyingGlass-C1TVcE_3.js";import"./ContextMenu-DTF5h8Vw.js";import"./useDropdownMenuController-dLXTUAgz.js";import"./Dropdown-CQOJCobW.js";import"./SearchField-Cu2rkG8b.js";import"./FieldBase-BAxlQmDt.js";import"./Field-DohC7fWs.js";import"./Label-CCpB5jSj.js";import"./Input--gXn6N4P.js";import"./MenuListItem-B4OcKy0A.js";import"./MenuListDivider-DzTLggx0.js";import"./MenuListHeading-B2S0HcdV.js";import"./MenuItem-wkNgjJsE.js";import"./Checkmark-DBXA_uc3.js";import"./ItemLabel-BqeVkIUZ.js";import"./index-DYYLOhVB.js";import"./InformationSquare-C8p8jAhr.js";import"./MenuElipsisHorizontal-CYuAhYGx.js";import"./Pencil-CbbPbQUG.js";import"./Trash-D3qdF3-Q.js";import"./SettingsModal-BCGiznCY.js";import"./ModalBody-C_e5HAx8.js";import"./Section-C7pnuU7Y.js";import"./Flex-LyiOw0eI.js";import"./ButtonGroup-DM3FeQWD.js";import"./ButtonIcon-BlmrgHJU.js";import"./ButtonLabel-D-OBonPW.js";import"./TextField-3RnNCSAg.js";import"./SkipLink-CxtnkcmF.js";import"./Banner-tDoXpoSp.js";import"./GlobalHeader-BAf-YgFM.js";import"./useIsDesktop-3xDb_c_C.js";import"./GlobalAccountButton-CkEkdv_9.js";import"./Enter-B0vJcQsB.js";import"./GlobalMenuButton-doTjfTGf.js";import"./MenuHamburger-DoyVxZov.js";import"./AccountSelector-C0CAlind.js";import"./Switch-7NaDBReq.js";import"./AccountMenu-D3wMQ8uQ.js";import"./GlobalMenu-DGd9JN5n.js";import"./ArrowUndo-d5C4LDWT.js";import"./Globe-C_Gmims4.js";import"./BreadcrumbsLink-fssIU64W.js";import"./ArrowRight-C7Q4eiPE.js";import"./Footer-83zURXVJ.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const Eo=["BookmarksList","GroupedBookmarksList"];export{i as BookmarksList,m as GroupedBookmarksList,Eo as __namedExportsOrder,yo as default};
