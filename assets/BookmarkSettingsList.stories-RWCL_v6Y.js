var k=Object.defineProperty;var i=(o,t)=>k(o,"name",{value:t,configurable:!0});import{a6 as r}from"./iframe-CfESZwGq.js";import{B as a,u as d}from"./useBookmarks-KS1E3vVw.js";import{B as l}from"./BookmarkModal-Dj0srzye.js";import{L as u}from"./Layout-DUuE-Ou8.js";import"./preload-helper-Cc2_yIPf.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DCL6y2xK.js";import"./BookmarkSettingsItem-I2pLCL8T.js";import"./QueryLabel-DaQAnvTh.js";import"./Plus-C15azGMz.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./SettingsItemBase-CZ4omkJk.js";import"./ItemMedia-av47GhhR.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./ChevronUp-AGjLHyT-.js";import"./ChevronDown-BeusJatl.js";import"./ChevronRight-B74pzmXz.js";import"./ItemBase-nh7R-0mK.js";import"./ItemLink-HBd6VQB6.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./Typography-DtLS48Hu.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./ContextMenu-Bnd9vrc8.js";import"./useDropdownMenuController-COgknKdL.js";import"./Dropdown-BfcDJKeS.js";import"./SearchField-Dzjcb6Jc.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuListDivider-PhbjEgIJ.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemLabel-Bf911ckJ.js";import"./FieldBase-B5R0NBwO.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./InformationSquare-BWZxY-Ir.js";import"./Pencil-C5ZSsCbu.js";import"./Trash-B8iqDuUh.js";import"./SettingsModal-BsVJPuAI.js";import"./ModalBody-BLp5zyl4.js";import"./Section-CXHovEsj.js";import"./Flex-DCvAlmz5.js";import"./ButtonGroup-B_R5r7Ky.js";import"./ButtonIcon-CMvu13gC.js";import"./ButtonLabel-BX3qt1RO.js";import"./TextField-CKOvOvtn.js";import"./SkipLink-BfYwNiOX.js";import"./CookieBanner-BkOFQ3j0.js";import"./Link-DsvxrKVD.js";import"./Banner-CkxdVSu6.js";import"./GlobalHeader-KtK9X2tS.js";import"./useIsDesktop-DuR8D8_r.js";import"./GlobalAccountButton-D64CL6rx.js";import"./Enter-B6lOGCKU.js";import"./GlobalMenuButton-G92qHvB4.js";import"./MenuHamburger-Dm7Id1b9.js";import"./AccountSelector-CViGMN2t.js";import"./Switch-BH_KBOBo.js";import"./AccountMenu-BhZcjiKm.js";import"./GlobalMenu-CDjKAhOl.js";import"./Checkmark-B9ugWUTA.js";import"./ArrowUndo-Ds3qFIs3.js";import"./Globe-DQPwD49L.js";import"./BreadcrumbsLink-BfnwJCv0.js";import"./ArrowRight-C5VAtTTo.js";import"./Footer-Csa8fVfX.js";const Uo={component:a,title:"Bookmarks/BookmarkSettingsList",parameters:{layout:"fullscreen"},decorators:[(o,{args:t})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return r.jsx("div",{style:e,children:r.jsx(u,{children:r.jsx(o,{...t})})})}],args:{}},n=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!1}),s=o&&e.find(p=>p.id===o);return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"BookmarksList"),m=i(()=>{const{expandedId:o,onClose:t,items:e}=d({grouped:!0}),s=o&&e.find(c=>c.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return r.jsxs(r.Fragment,{children:[r.jsx(a,{items:e,groups:p}),o&&r.jsx(l,{...s,title:"Rediger søk",open:o!=="",onClose:t,buttons:[{label:"Lagre",onClick:i(()=>t(),"onClick")},{label:"Slett",variant:"outline",onClick:i(()=>t(),"onClick")}]})]})},"GroupedBookmarksList"),_o=["BookmarksList","GroupedBookmarksList"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};export{n as BookmarksList,m as GroupedBookmarksList,_o as __namedExportsOrder,Uo as default};
