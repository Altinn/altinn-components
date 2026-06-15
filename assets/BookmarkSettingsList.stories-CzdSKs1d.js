import{a7 as t}from"./iframe-B7zm1HIO.js";import{B as a,u as n}from"./useBookmarks-BWX4TGlR.js";import{B as d}from"./BookmarkModal-DrVb1rQ2.js";import{L as c}from"./Layout-Cassj10v.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BJG43rHp.js";import"./BookmarkSettingsItem-Cv9Inwps.js";import"./QueryLabel-Csf2n3As.js";import"./Plus-FoCTTomm.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./SettingsItemBase-BHxVPfuU.js";import"./ItemMedia-DpKMg9GF.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./ChevronRight-BItcH0VL.js";import"./ItemBase-ChXBoego.js";import"./ItemLink-nWgCSWqv.js";import"./ItemControls-Cwe9s8QR.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./Typography-DnprxIFo.js";import"./MagnifyingGlass-CVQmLynz.js";import"./ContextMenu-BrTPiQIt.js";import"./useDropdownMenuController-CJ7JaMXA.js";import"./Dropdown-C9l14m04.js";import"./SearchField-DukYslSD.js";import"./FieldBase-gSBe5vO6.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./Input-w1DANTSA.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./InformationSquare-ZkZeHusi.js";import"./MenuElipsisHorizontal-nksXxlhw.js";import"./Pencil--toDUn3l.js";import"./Trash-RuS005b0.js";import"./SettingsModal-D2UTX3Lg.js";import"./ModalBody-BUYK0n2i.js";import"./Section-DkuWWe6d.js";import"./Flex-N2sBTmCS.js";import"./ButtonGroup-DEQPq0-6.js";import"./ButtonIcon-HLjqR8Bo.js";import"./ButtonLabel-D1cCa6No.js";import"./TextField-CsiKyP5a.js";import"./SkipLink-YxQJS3g-.js";import"./Banner-Mk_p_JI_.js";import"./GlobalHeader-DjnN8QQb.js";import"./useIsDesktop-Ch8zfKuk.js";import"./GlobalAccountButton-B6M1sOUp.js";import"./Enter-BflKqtww.js";import"./GlobalMenuButton-DJahuh3B.js";import"./MenuHamburger-fk9ZJfiD.js";import"./AccountSelector-CEIjM3_I.js";import"./Switch-C9KZAM8P.js";import"./AccountMenu-Hj1w0XqH.js";import"./GlobalMenu-0v3nn1aY.js";import"./ArrowUndo-Cse4EeXq.js";import"./Globe-GXniMQLU.js";import"./BreadcrumbsLink-BappmQre.js";import"./ArrowRight-CFsWQzYW.js";import"./Footer-Wuq4V7BY.js";const ho={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),m=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},s=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),m=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...m,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
