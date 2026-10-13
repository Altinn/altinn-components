import{a7 as t}from"./iframe-BbHZTISi.js";import{B as a,u as n}from"./useBookmarks-D9Ifi_i5.js";import{B as d}from"./BookmarkModal-BnQ86TzB.js";import{L as c}from"./Layout-DraIl44Y.js";import"./preload-helper-PPVm8Dsz.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Bq15wZBe.js";import"./BookmarkSettingsItem-BPwIQIx9.js";import"./QueryLabel-Cr7h1Z-C.js";import"./Plus-BcB75ChO.js";import"./Heading-Bg_B2C5V.js";import"./useHighlightedText-BqQK_DfD.js";import"./SettingsItemBase-CBrR65lC.js";import"./ItemMedia-C2Z0jrya.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";import"./ChevronRight-BedwSMvr.js";import"./ItemBase-FTqYLeiu.js";import"./ItemLink-CRNO81NM.js";import"./ItemControls-CSWL4roz.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./Typography-Ckv3AOJx.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./ContextMenu-BV5nv3Ct.js";import"./useDropdownMenuController-DIgZVBo5.js";import"./Dropdown-awoLZP1t.js";import"./SearchField-DJUCyIg2.js";import"./FieldBase-Di9G28SV.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./InformationSquare-5U7NjUWT.js";import"./MenuElipsisHorizontal-BhDkslsK.js";import"./Pencil-CqMnbq1C.js";import"./Trash-CsnE7fwZ.js";import"./SettingsModal-aoCm58w5.js";import"./ModalBody-Bf_4VZq1.js";import"./Section-DsI3lDGv.js";import"./Flex-RSxiLUVh.js";import"./ButtonGroup-CDktoaSg.js";import"./ButtonIcon-CmTTKJCC.js";import"./ButtonLabel-smgeyMYQ.js";import"./TextField-DSzrwVXU.js";import"./SkipLink-CkyvZCKj.js";import"./CookieBanner-D6viY95h.js";import"./Banner-C3oLFbOC.js";import"./GlobalHeader-CuvKkUaT.js";import"./useIsDesktop-Dk4WE87-.js";import"./GlobalAccountButton-CngMkIKM.js";import"./Enter-COL8hK3_.js";import"./GlobalMenuButton-DE_XSR5z.js";import"./MenuHamburger-kUbaqKWe.js";import"./AccountSelector-L6t1QPoi.js";import"./Switch-CnCXD43g.js";import"./AccountMenu-UeS_zP_s.js";import"./GlobalMenu-B3VOm4-n.js";import"./ArrowUndo-DNzLpryl.js";import"./Globe-DS1ljuLz.js";import"./BreadcrumbsLink-Svau84LP.js";import"./ArrowRight-D9IKmIv2.js";import"./Footer-DfufKz3H.js";const yo={component:a,title:"Bookmarks/BookmarkSettingsList",tags:["beta"],parameters:{layout:"fullscreen"},decorators:[(o,{args:r})=>{const e={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return t.jsx("div",{style:e,children:t.jsx(c,{children:t.jsx(o,{...r})})})}],args:{}},i=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!1}),s=o&&e.find(p=>p.id===o);return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})},m=()=>{const{expandedId:o,onClose:r,items:e}=n({grouped:!0}),s=o&&e.find(l=>l.id===o),p={1:{title:"Med tittel"},2:{title:"Uten tittel"}};return t.jsxs(t.Fragment,{children:[t.jsx(a,{items:e,groups:p}),o&&t.jsx(d,{...s,title:"Rediger søk",open:o!=="",onClose:r,buttons:[{label:"Lagre",onClick:()=>r()},{label:"Slett",variant:"outline",onClick:()=>r()}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
