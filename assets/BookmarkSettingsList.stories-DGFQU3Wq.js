var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a5 as r}from"./iframe-CQ8LzMHp.js";import{B as a,u as d}from"./useBookmarks-BWrDedQQ.js";import{B as l}from"./BookmarkModal-CU0CNOcX.js";import{L as u}from"./Layout-BsF1xh-T.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-CDI-E8wX.js";import"./BookmarkSettingsItem-B8kGiYuY.js";import"./QueryLabel-D08MZNCf.js";import"./Plus-DLJWKiOB.js";import"./Heading-Bqh3Rpnn.js";import"./useHighlightedText-X_Pa7Sct.js";import"./SettingsItemBase-BVhzaaj2.js";import"./ItemMedia-BTxysFbk.js";import"./Avatar-cvm5lBsk.js";import"./AvatarGroup-DeE95cBJ.js";import"./ChevronUp-C1AG-Aka.js";import"./ChevronDown-BCthsF-h.js";import"./ChevronRight-ywpt7Pxk.js";import"./ItemBase-0kMSewyg.js";import"./ItemLink-DOceCTcu.js";import"./ItemControls--xlpWt8t.js";import"./Badge-DUcHOS9Y.js";import"./Tooltip-Eed-mcd2.js";import"./Typography-C0hb-rov.js";import"./MagnifyingGlass-cYMoIKgd.js";import"./ContextMenu-nxKWxJk3.js";import"./useDropdownMenuController-9HzeHRnC.js";import"./Dropdown-AuOHSehb.js";import"./SearchField-0g3sCasv.js";import"./MenuListItem-BuDRebVM.js";import"./MenuListHeading-CsWBJhah.js";import"./MenuItem-DNZJHOTT.js";import"./CheckboxUncheckedIcon-DodbdVRp.js";import"./RadioUncheckedIcon-QGnejBkB.js";import"./ItemLabel-CgsktDzP.js";import"./FieldBase-wKpsF2Qr.js";import"./Field-I35AXfO5.js";import"./Label-BS-vPhzZ.js";import"./Input-BKSTqttN.js";import"./MenuListDivider-n9hRAznf.js";import"./InformationSquare-BtVNFzkX.js";import"./MenuElipsisHorizontal-Dwc1VYHN.js";import"./Pencil-DrMW5QX3.js";import"./Trash-CygTswjF.js";import"./SettingsModal-BvYFfYAZ.js";import"./ModalBody-CI4rT6G0.js";import"./Section-NN2pd56z.js";import"./Flex-DjPJH1VJ.js";import"./ButtonGroup-CwiMzic7.js";import"./ButtonIcon-Dkl2vj3J.js";import"./ButtonLabel-BtfFre3A.js";import"./TextField-B9Mq4IFl.js";import"./SkipLink-BanEhnpy.js";import"./CookieBanner-4paMnb-c.js";import"./Link-CG_HcmyW.js";import"./Banner-Bvmc1q-k.js";import"./GlobalHeader-CZylxlLq.js";import"./useIsDesktop-CXHmTJZE.js";import"./GlobalAccountButton-BYezC4Lu.js";import"./Enter-sjC3k3KF.js";import"./GlobalMenuButton-DKC_YNdX.js";import"./MenuHamburger-BaFe5b5h.js";import"./AccountSelector-DwB-qXs_.js";import"./Switch-DZyG9cIk.js";import"./AccountMenu-CoLX5g5p.js";import"./GlobalMenu-D3o8JZD4.js";import"./Checkmark-CgKKHBb_.js";import"./ArrowUndo-CXl7zYNM.js";import"./Globe-Zq2WYf14.js";import"./BreadcrumbsLink-C93ln5Ut.js";import"./ArrowRight-CCTsBz-f.js";import"./Footer-B09SsJSW.js";const Oo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),qo=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,qo as __namedExportsOrder,Oo as default};
